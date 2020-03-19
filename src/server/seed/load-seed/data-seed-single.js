require('../../config/ohadb').connectserver();

var async = require('async');
var _ = require('lodash');
var path = require('path');
var Rx = require('rxjs');
var Models = require('../../omodels/index.js').toinit();
var oreferenceLoad = require('./oreference-seed');
//var ocomptereferenceLoad = require('./ocomptereference-seed');
var compteLoad = require('./ocompte-seed');
var userLoad = require('./user-seed');
var ostbleareaLoad = require('./ostblarea-seed');
var oleveLoad = require('./olevel-seed');
var ostableauposteLoad = require('./ostableauposte-seed');
var otableauposteLoad = require('./otableauposte-seed');
var oexerccomptaLoad = require('./oexercompta-seed');
var oexercciceLoad = require('./oexercice-seed');
var oreportdetailLoad = require('./oreportdetail-seed');
var oreportheaderLoad = require('./oreportheader-seed');


oexerccomptaLoad.popular(Models.oExercCompta, Models.oExercice, function(err,data) {
  if (err) console.log(err);
  console.log(data);
});

/* var seedUser = Rx.Observable.create(function subscribe(observer) {
  try {
  observer.next(userLoad.popular(Models.User, function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(JSON.stringify(result));
    }
  }));
  observer.complete();
}
catch (err) {
  observer.error(err);
}
});

var SubseedUser = seedUser.subscribe(function(x){
  console.log('first: ' + x);

  return;
});
SubseedUser.unsubscribe(); */

/* oexerccomptaLoad.popular(Models.oExercCompta, Models.oExercice, function(err,data) {
  if (err) console.log(err);
  console.log(data);
}); */
/*

ocomptereferenceLoad.popular(Models.OcompteReference, function(err,data) {
  if (err) console.log(err);
  console.log(data);
});
*/
/*
oreportheaderLoad.popular(Models.oReportHeader, function(err,data) {
  if (err) console.log(err);
  console.log(data);
});*/
/*
oexercciceLoad.popular(Models.oExercCompta, Models.oExercice, function(err,data) {
  if (err) console.log(err);
  console.log(data);
});
/*
oleveLoad.popular(Models.olevel, function(err,data) {
  if (err) console.log(err);
  console.log(data);
});
otableauposteLoad.popular(Models.OcompteReference, function(err,data) {
  if (err) console.log(err);
  console.log(data);
});

o if (err) console.log(err);
  creportdetailLoad.popular(Models.oReportDetail, function(err,data) {
 onsole.log(data);
});

oexercciceLoad.popular(Models.oExercCompta, Models.oExercice, function(err,data) {
  if (err) console.log(err);
  console.log(data);


   userLoad.popular(Models.User, function(err,data) {
  if (err) console.log(err);
  console.log(data);
});
 compteLoad.popular(Models.oCompte, function(err,data) {
  if (err) console.log(err);
  console.log(data);
});

oreferenceLoad: oreferenceLoad.popular(Models.oReference, function(err,data) {
  if (err) console.log(err);
  console.log(data);
}),


ostbleareaLoad: ostbleareaLoad.popular(Models.oStblArea, function(err,data) {
  if (err) console.log(err);
  console.log(data);
}),

ostableauposteLoad:  ostableauposteLoad.popular(Models.oStableauPoste, function(err,data) {
  if (err) console.log(err);
  console.log(data);
}),

otableauposteLoad: otableauposteLoad.popular(Models.oTableauPoste, function(err,data) {
  if (err) console.log(err);
  console.log(data);
}),

oexerccomptaLoad:  oexerccomptaLoad.popular(Models.oExercCompta, function(err,data) {
  if (err) console.log(err);
  console.log(data);
}),
oexercciceLoad:  oexercciceLoad.popular(Models.oExercCompta, Models.oExercice, function(err,data) {
  if (err) console.log(err);
  console.log(data);
}),*/
