

// getting-started.js
//var mongoose = require('mongoose');
'use strict';
/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */

/// require('../config/ohadb').connectserver();
var async = require('async');
var _ = require('lodash');
// var Models = require('../../omodels/index.js');
var ostbleareadata = require('../../helper/ostbleareadata');


module.exports = {
  popular: function  (omodel,callback) {

async.series({
  removedostblarea: function (callback) {

    omodel.deleteMany({}, function (err) {
      if (err) {
        callback(err);
      }

      setTimeout(function () {
        callback(null, 'ostblarea Removed!');
      }, 200);

    });

  },

 insertoStblArea: function (callback) {

    ostbleareadata.populate(function (err, ostblAreas) {
      var _ostblareas = [];
      var ostblareas = [];
      // var objostblarea={};

      if (err) {
        throw (err);
      }

      _.forEach(ostblAreas, function (ostblarea) {

        var objostblarea = new omodel({
          AreaShortName: ostblarea.AreaShortName,
          AreaLongName: ostblarea.AreaLongName,
          ocomptes: ostblarea.ocompteids

        });
        _ostblareas.push(objostblarea);
      });

      for (var i = 0; i < _ostblareas.length; i++) {
        var obj = _ostblareas[i];
        ostblareas.push(obj);
      }

      async.eachSeries(

        ostblareas,

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
            callback(null, `Finished ostblareas in seeding: ${ostblareas.length} records inserted`);
          }, 200);
        });
    });
  },},

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
