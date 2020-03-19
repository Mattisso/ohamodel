// getting-started.js
//var mongoose = require('mongoose');
'use strict';
/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */

// require('../config/ohadb').connectserver();
var async = require('async');
var _ = require('lodash');
// var Models = require('../../omodels/index.js');
var ostableaupostedata = require('../../helper/ostableaupostedata');

module.exports = {
  popular: function  (omodel, callback) {
async.series({

  removeostableauposte: function (callback) {
    omodel.deleteMany({}, function (err) {
      if (err) {
        callback(err);
      }

      setTimeout(function () {
        callback(null, 'ostableauposte Removed!');
      }, 200);

    });

  },

  insertoStableauPoste: function (callback) {

    ostableaupostedata.populate(function (err, osTableauPostes) {
      var _ostableaupostes = [],
        ostableaupostes = [];
      //  var _ostableaupostedata=[];
      // var objostableauposte={};

      if (err) {
        throw (err);
      }

      _.forEach(osTableauPostes, function (ostableauposte) {

        var objostableauposte = new omodel({
          StableauName: ostableauposte.StableauName,
          StbleauLongName: ostableauposte.StbleauLongName,
          ostblareas: ostableauposte.ostblareaids

        });
        _ostableaupostes.push(objostableauposte);
      });

      for (var i = 0; i < _ostableaupostes.length; i++) {
        var obj = _ostableaupostes[i];
        ostableaupostes.push(obj);
      }

      async.eachSeries(

        ostableaupostes,

        function (obj, ocompteSavedCallBack) {

          obj.save(function (err) {

            if (err) {
              throw (err);
            }

            ocompteSavedCallBack();
          });

        },

        function (err) {

          if (err)
            throw (err);

          setTimeout(function () {
            callback(null, `Finished ostableaupostes in seeding: ${ostableaupostes.length} records inserted`);
          }, 200);

        });

    });

  },

},

function (err, results) {

  if (err) {
    console.log("Errors = ");
    throw (err);
  } else {
    console.log("Results = ");
    callback(results);
  }
  // process.exit(0);
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
