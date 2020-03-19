// getting-started.js
//var mongoose = require('mongoose');
'use strict';
/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */

// require('../../config/ohadb').connectserver();
var async = require('async');
var _ = require('lodash');
var Rx = require('rxjs');
var path = require('path');
var Models = require('../../omodels/index.js');
var oreferenceLoad = require('./oreference-seed');
var compteLoad = require('./ocompte-seed');
var userLoad = require('./user-seed');
var ostbleareaLoad = require('./ostblarea-seed');
var ostableauposteLoad = require('./ostableauposte-seed');
var otableauposteLoad = require('./otableauposte-seed');
var oexerccomptaLoad = require('./oexercompta-seed');
var oexercciceLoad = require('./oexercice-seed');
var olevelLoad = require('./olevel-seed');
var ocomptereferenceload = require('./ocomptereference-seed');
var oreportdetailload = require('./oreportdetail-seed');
var oreportheaderload = require('./oreportheader-seed');



module.exports = {
  popular: function (callback) {
    async.series({
      SeedUser: function (callback) {
        userLoad.popular(Models.User, function (err, data) {
          if (err) console.log(err);
          callback(data);
        });
      },
      seedolevel: function (callback) {
        olevelLoad.popular(Models.olevel, function (err, data) {
          if (err) console.log(err);
          callback(null,data);
        });
      },

      seedoCompte: function (callback) {
        compteLoad.popular(Models.oCompte, function (err, data) {
          if (err) console.log(err);

          callback(null,data);
        });
      },
      seedoReference: function (callback) {
        oreferenceLoad.popular(Models.oReference, function (err, data) {
          if (err) console.log(err);
          callback(data);
        });
      },

      seedoStblArea: function (callback) {
        ostbleareaLoad.popular(Models.oStblArea, function (err, data) {
          if (err) console.log(err);
         callback(data);
        });
      },
      seedoStableauPoste: function (callback) {
        ostableauposteLoad.popular(Models.oStableauPoste, function (err, data) {
          if (err) console.log(err);
          callback(null,data);
        });
      },

      seedotableauPoste: function (callback) {
        otableauposteLoad.popular(Models.oTableauPoste, function (err, data) {
          if (err) console.log(err);
          callback(null,data);
        });
      },
      seedoExercCompta: function (callback) {
        oexerccomptaLoad.popular(Models.oExercCompta, Models.oExercice,function (err, data) {
          if (err) console.log(err);
          callback(null,data);
        });
      },
      seedocomptereference: function (callback) {
        ocomptereferenceload.popular(Models.OcompteReference, function (err, data) {
          if (err) console.log(err);

          callback(null,data);
        });
      },
      seedoreportdetail: function (callback) {
        oreportdetailload.popular(Models.oReportDetail, function (err, data) {
          if (err) console.log(err);

          callback(null,data);
        });
      },
      seedoreportheader: function (callback) {
        oreportheaderload.popular(Models.oReportHeader, function (err, data) {
          if (err) console.log(err);

          callback(null,data);
        });
      }

    }, function (err, results) {
      if (err) {
           console.dir(err);
      } else {
        console.log("Results = ");
        callback(null,results);
      }
    });
  }
};
