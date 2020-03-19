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


var seedUserOcompte = Rx.Observable.create(function subscribe(observer) {
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
    observer.next(oexerccomptaLoad.popular(Models.oExercCompta, Models.oExercice,function (err, result) {
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
var SubseedUserOcompte = seedUserOcompte.subscribe(function(x){
  console.log('first: ' + x);

  return;
});
SubseedUserOcompte.unsubscribe();

var seedOstbareaOreference= Rx.Observable.create(function subscribe(observer) {
  try {

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
observer.complete();
}
catch (err) {
  observer.error(err);
}
});

var subseedOstbareaOreference = seedOstbareaOreference.subscribe(function(x){
  console.log('second: ' + x);
}
);
// SubseedUserOcompte.add(subseedOstbareaOreference);

setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subseedOstbareaOreference.unsubscribe();
}, 1000);

var subject = new Rx.Subject();

subject.subscribe({
  next: (v) => console.log('seedUserOcompte: ' + v)
});
subject.subscribe({
  next: (v) => console.log('seedOstbareaOreference: ' + v)
});

subject.next(1);
subject.next(2);

/* seedUserOcompte.subscribe(function(){
  return;
}
).unsubscribe */

    /*  oberverreference.subscribe(function (x) {
      console.log(x);
    }); */
  //  seedUserOcompte.subscribe(function(){
  //    return;
   //   console.log(x)
  //    return;
   //   console.log(x)
     // err => console.error('Observer got an error: ' + err),
   //   () => console.log('Observer got a complete notification')

  //   }

     //   process.exit(0)
    //).unsubscribe


 /*     oberverreference.subscribe(function(x){
      console.log('Observer got a next value: ' + x),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')

     }

    ).unsubscribe
 */
   // sub.unsubscribe()


    /*  var oberverreference = function() {
       compteLoad.popular(function (err, result) {
    if(err) console.log(err);

        console.log(JSON.stringify(result));

    });
    };
    oberverreference(); */



   /*  var o = require('./ohada-seed.load.js');


    function sub() {
    return o.sub();


    }

    console.log(sub());

    var foo = Rx.Observable.create(function (observer) {
      console.log('Hello');
      observer.next(42);
    });

    foo.subscribe(function (x) {
      console.log(x);
    }); */
