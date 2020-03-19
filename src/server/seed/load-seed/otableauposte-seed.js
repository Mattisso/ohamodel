// getting-started.js
//var mongoose = require('mongoose');
'use strict';
/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */

// require('../config/ohadb').connectserver();
var async = require('async');
var _ = require('lodash');
// var Models = require('../../omodels/index.js');
var otableaupostedata = require('../../helper/otableaupostedata');
module.exports = {
  popular: function (omodel, callback) {

    async.series({
      removeotableauposte: function (callback) {
        omodel.deleteMany({}, function (err) {
          if (err) {
            callback(err);
          }
          setTimeout(function () {
            callback(null, 'otableauposte Removed!');
          }, 200);

        });
      },
      insertoTableauPoste: function (callback) {

        otableaupostedata.populate(function (err, docs) {
          var _otableaupostes = [],
           otableaupostes = [];
          //  var _otableaupostedata=[];
          // var objotableauposte={};

          if (err) {
            throw (err);
          }

          _.forEach(docs, function (otableauposte) {

            var objotableauposte = new omodel({

              // tblRefCode: otableauposte.tblRefCode,
              //  Description: otableauposte.Description,
              TableauName: otableauposte.TableauName,
              tableauLongName: otableauposte.tableauLongName,
              ostableaupostes: otableauposte.ostableauposteids

            });
            _otableaupostes.push(objotableauposte);
          });

          for (var i = 0; i < _otableaupostes.length; i++) {
            var obj = _otableaupostes[i];
            otableaupostes.push(obj);
          }


          async.eachSeries(

            otableaupostes,

            function (obj, otableauposteSavedCallBack) {

              obj.save(function (err) {

                if (err) {
                  throw (err);
                }

                otableauposteSavedCallBack();
              });

            },

            function (err) {

              if (err)
                throw (err);

              setTimeout(function () {
                callback(null, `Finished ostableaupostes in seeding: ${_otableaupostes.length} records inserted`);
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
