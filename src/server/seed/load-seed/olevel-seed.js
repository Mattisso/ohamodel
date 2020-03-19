// getting-started.js
//var mongoose = require('mongoose');
'use strict';
/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */

//require('../../config/ohadb').connectserver();
var async = require('async');
var Rx = require('rxjs');
var _ = require('lodash');
var path = require('path');
// var Models = require('../../omodels/index.js');
var seeddata = require('../data-seed');

module.exports = {
  popular: function (omodel, callback) {
    async.series({
      removeolevel: function (callback) {
        omodel.deleteMany({}, function (err) {
          if (err) {
            callback(err);
          }
          setTimeout(function () {
            callback(null, 'olevels Removed!');
          }, 200);
        });
      },
      insertolevel: function (callback) {

        var olevels = [];

        for (var i = 0; i < seeddata.oleveldata.length; i++) {

          var olevel = new omodel({

            olevelNum: seeddata.oleveldata[i].olevelNum,
            olevelDescption: seeddata.oleveldata[i].olevelDescption
          });
          // Add newly create User model to 'users' array
          olevels.push(olevel);
        }
        async.eachSeries(
          olevels,
          function (olevel, olevelSavedCallBack) {

            olevel.save(function (err) {

              if (err) {
                throw (err);
              }

              olevelSavedCallBack();
            });

          },

          function (err) {

            if (err)
              throw (err);

            setTimeout(function () {
              callback(null, `Finished olevels in seeding ${olevels.length} records inserted`);
            }, 200);

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
        //  process.exit(0);
      });

  }
  /*   observercompte: Rx.Observable.create(function (observer) {
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
    }) */

};
