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
  popular: function  ( omodel, callback) {
    async.series({
      removeoCompte: function (callback) {
        omodel.deleteMany({}, function (err) {
          if (err) {
            callback(err);
          }
          setTimeout(function () {
            callback(null, 'ocomptes Removed!');
          }, 200);

        });

      },
      insertoCompte: function (callback) {

        var ocomptes = [];

        for (var i = 0; i < seeddata.ocomptedata.length; i++) {

          var ocompte = new omodel({

            CompteNumber: seeddata.ocomptedata[i].CompteNumber
       //     Exception: seeddata.ocomptedata[i].Exception,
//Taux: seeddata.ocomptedata[i].Taux
          });
          // Add newly create User model to 'users' array
          ocomptes.push(ocompte);
        }


        async.eachSeries(

          ocomptes,

          function (ocompte, ocompteSavedCallBack) {

            ocompte.save(function (err) {

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
              callback(null, `Finished ocomptes in seeding ${ocomptes.length} records inserted`);
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
