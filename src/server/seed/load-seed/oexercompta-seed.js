// getting-started.js
//var mongoose = require('mongoose');
'use strict';
/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */

// require('../../config/ohadb').connectserver();
var async = require('async');
var _ = require('lodash');
var path = require('path');
// var Models = require('../../omodels/index.js');
var oexercicemodel = require('./oexercice-seed');
var seeddata = require('../data-seed').toinit();

module.exports = {
  popular: function  (omodel,vmodel, callback) {
async.series({
  removeoExercCompta: function (callback) {
    omodel.deleteMany({}, function (err) {
      if (err) {
        callback(err);
      }
      setTimeout(function () {
        callback(null, 'oExercCompta Removed!');
      }, 200);
    });
  },

  insertoExercCompta: function (callback) {

    var oexercomptas = [];

    for (var i = 0; i < seeddata.oexercomptadata.length; i++) {
      var oexercompta = new omodel({
        oExercComptaId: seeddata.oexercomptadata[i].oExercComptaId
      });

      oexercomptas.push(oexercompta);
    }

    console.log(`Populating database with %s oexercomptas`, oexercomptas.length);

    async.eachSeries(
      oexercomptas,
      function (oexercompta, oexercomptaSavedCallBack) {
        oexercompta.save(function (err) {
          if (err) {
            throw (err);
          }
          oexercomptaSavedCallBack();
        });
      },

      function (err) {
        if (err)
          throw (err);

        setTimeout(function () {
          callback(null, `Finished oexercomptas in seeding ${oexercomptas.length}  records inserted`);
        }, 200);
      });
  },
  insertoExercice: function (callback) {
    oexercicemodel.popular(omodel, vmodel, function (err, data) {

      if (err) {
      return  callback(err);
      } else {
        callback(data);
      }
    });
  }
},

function (err, results) {

  if (err) {
    console.log("Errors = ");
callback(err);
  } else {
    console.log("Results = ");
    callback(results);
  }
});
}

/*   oberverreference: Rx.Observable.create(function (observer) {
    try {
      observer.next(popular(function (err, result) {
        if (err) {
          throw err;
        }
        else {
          console.log(result);
        }
      }));
    }
    catch (err) {
      observer.error(err);
    }
    observer.complete();
  }),
 */
};
