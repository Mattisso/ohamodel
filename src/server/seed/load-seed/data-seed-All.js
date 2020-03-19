var ohadaseed = require('./ohada-seed.load');
// getting-started.js
//var mongoose = require('mongoose');
'use strict';
/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */
var async = require('async');
var _ = require('lodash');
var path = require('path');
var Models = require('../../omodels/index.js');
var oreferenceLoad = require('./oreference-seed');
var ocomptereferenceLoad = require('./ocomptereference-seed');
var compteLoad = require('./ocompte-seed');
var userLoad = require('./user-seed');
var ostbleareaLoad = require('./ostblarea-seed');
var oleveLoad = require('./olevel-seed');
var ostableauposteLoad = require('./ostableauposte-seed');
var otableauposteLoad = require('./otableauposte-seed');
var oexerccomptaLoad = require('./oexercompta-seed');
var oreportdetailLoad = require('./oreportdetail-seed');
var oreportheaderLoad = require('./oreportheader-seed');


require('../../config/ohadb').connectserver();

/* ohadaseed.popular(function(err, data){

  if (err) {
    console.log(err);
  }
  console.log(data);
});
 */
async.series({

  oleveLoad: function(callback){
    oleveLoad.popular(Models.olevel, function(err,data) {
      if (err) console.log(err);
      callback(null,data);
    });


  },


  userLoad: function(callback){
    userLoad.popular(Models.User, function(err,data) {
      if (err) console.log(err);
    callback(null,data);
    });

  },

  compteLoad : function(callback){
    compteLoad.popular(Models.oCompte, function(err,data) {
      if (err) console.log(err);
      callback(null,data);
    });


  },
  oreferenceLoad: function(callback){
     oreferenceLoad.popular(Models.oReference, function(err,data) {
      if (err) console.log(err);

      callback(null,data);
    });

  },

  ostbleareaLoad: function(callback){
   ostbleareaLoad.popular(Models.oStblArea, function(err,data) {
    if (err) console.log(err);
    callback(null,data);
  });

},


ostableauposteLoad: function(callback){
   ostableauposteLoad.popular(Models.oStableauPoste, function(err,data) {
    if (err) console.log(err);
    callback(null,data);
  });
},

otableauposteLoad: function(callback){
  otableauposteLoad.popular(Models.oTableauPoste, function(err,data) {
    if (err) console.log(err);
    callback(null,data);
  });
},

oexerccomptaLoad:  function(callback){
   oexerccomptaLoad.popular(Models.oExercCompta, Models.oExercice,function(err,data) {
    if (err) console.log(err);
    callback(null,data);
  });
},
ocomptereferenceLoad: function(callback){
  ocomptereferenceLoad.popular(Models.OcompteReference, function(err,data) {
    if (err) console.log(err);
    callback(null,data);
  });

},
oreportdetailLoad: function(callback){
  oreportdetailLoad.popular(Models.oReportDetail, function(err,data) {
    if (err) console.log(err);
    callback(null,data);
  });

},

oreportheaderLoad: function(callback){
  oreportheaderLoad.popular(Models.oReportHeader, function(err,data) {
    if (err) console.log(err);
    callback(null,data);
  });

}



}, function(err, results) {
  if (err) console.log(err);
  console.log(results);
});

