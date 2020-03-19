// getting-started.js
//var mongoose = require('mongoose');
'use strict';
/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */

require('../../config/ohadb').connectserver();
var Rx = require('rxjs');
var async = require('async');
var _ = require('lodash');
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
var oberverreference = Rx.Observable.create;
 oberverreference(function (observer) {
  try {
    observer.next(userLoad.popular(Models.User, function (err, result) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(JSON.stringify(result));
      }
    }));
    observer.next(compteLoad.popular(Models.oCompte, function (err, result) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(JSON.stringify(result));
      }
    }));
    observer.next(oreferenceLoad.popular(Models.oReference, function (err, result) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(result);
      }
    }));

    observer.next(ostbleareaLoad.popular(Models.oStblArea, function (err, result) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(result);
      }
    }));

    observer.next(ostableauposteLoad.popular(Models.oStableauPoste, function (err, result) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(result);
      }
    }));
    observer.next(otableauposteLoad.popular(Models.oTableauPoste, function (err, result) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(result);
      }
    }));
    observer.next(oexerccomptaLoad.popular(Models.oExercCompta, function (err, result) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(result);
      }
    }));
    observer.next(oexercciceLoad.popular(Models.oExercice, Models.oExercCompta, function (err, result) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(result);
      }
    }));
    observer.complete();
  }
  catch (err) {
    observer.error(err);
  }
});


module.exports = {


    /*  oberverreference.subscribe(function (x) {
      console.log(x);
    }); */

     sub : oberverreference.subscribe(
      /*  x => console.log('Observer got a next value: ' + x),
        err => console.error('Observer got an error: ' + err),
        () => console.log('Observer got a complete notification') */
        process.exit(0)
    ).unsubscribe

   // sub.unsubscribe()


    /*  var oberverreference = function() {
       compteLoad.popular(function (err, result) {
    if(err) console.log(err);

        console.log(JSON.stringify(result));

    });
    };
    oberverreference(); */

  };

