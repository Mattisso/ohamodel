
// getting-started.js
//var mongoose = require('mongoose');
'use strict';
/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */
//require('../../config/ohadb').connectserver();
var async = require('async');
var Rx = require('rxjs');
var _ = require('lodash');
// var omodel = require('../../omodels/oreference.js');
var oreportheaderdata = require('../../helper/oreportheaderdata');
 var myobject =  require('../../helper/myObjects');


module.exports = {
  popular: function  (omodel, callback) {
    async.series({
      removeoreference: function (callback) {
        omodel.deleteMany({}, function (err) {
          if (err) {
            callback(err);
          }

          setTimeout(function () {
            callback(null, 'oreference Removed!');
          }, 200);

        });

      },
      insertoReference: function (callback) {
        var obj;

        oreportheaderdata.popular(function (err, oReferences) {
          var _oreferences = [];
          var oreferences_ = [];
          var _arr = [];
          // var objoreference={};

          if (err) {
            throw (err);
          }

          _.forEach(oReferences, function (oreference) {

            var objoreference = new omodel(myobject.toinit().createoreportheader(oreference)
            );
            _arr.push(objoreference);
            _oreferences=_.uniq(_arr);

          });

          for (var i = 0; i < _oreferences.length; i++) {
             obj = _oreferences[i];
             oreferences_.push(obj);
          }

          async.eachSeries(

            oreferences_,

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
                callback(null, `Finished oreference in seeding ${oreferences_.length} records inserted`);
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
 //    process.exit(0);
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
