// getting-started.js
//var mongoose = require('mongoose');
'use strict';
/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */

// require('../../config/ohadb').connectserver();
var async = require('async');
var _ = require('lodash');

module.exports = {
  popular: function (omodel,vmodel, callback) {
    async.series({
      removeoExercice: function (callback) {
        vmodel.deleteMany({}, function (err) {
          if (err) {
            callback(err);
          }
          setTimeout(function () {
            callback(null, 'oExercCompta Removed!');
          }, 200);

        });
      },
      insertoExercice: function (callback) {
        omodel.find({}, {},
          function (err, oexerccomptas) {
            if (err)
              throw err;

           var qyrparm = _.max(_.map(_.map(oexerccomptas, 'oExercComptaId'), _.ary(parseInt, 1)));
            omodel.find({
              oExercComptaId: qyrparm
            }, {},
              function (err, oexerccompta) {
                if (err)
                  throw err;
                  var arr = [];

                 var  oexercice = new vmodel({
                      oExerciceEncour: _.map(_.map(oexerccompta, 'oExercComptaId'), _.ary(parseInt, 1)) - 0,
                      ExercicePrev: _.map(_.map(oexerccompta, 'oExercComptaId'), _.ary(parseInt, 1)) - 1,
                      OexercComptaKey: _.map(_.map(oexerccompta, 'id'))
                    });
                    arr.push(oexercice);

                  async.eachSeries(

                    arr,

                    function (oexercice, oexerciceSavedCallBack) {
                      oexercice.save(function (err) {

                        if (err) {
                          // Send JSON response to console for errors
                          throw (err);
                        }

                        oexerciceSavedCallBack();

                      });
                    },

                    function (err) {

                      if (err)
                        throw (err);

                      setTimeout(function () {
                        callback(null, `Finished  oExercice in seeding ${arr.length} records inserted`);
                      }, 200);
                    });

              });
          });
      }
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

