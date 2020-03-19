
// getting-started.js
//var mongoose = require('mongoose');
'use strict';
/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */
//require('../../config/ohadb').connectserver();
var async = require('async');
var Rx = require('rxjs');
var _ = require('lodash');
// var omodel = require('../../omodels/ocomptereference.js');
const {ocompterefencedata}=require('../data-seed/index').toinit();
const {base, staticObjects, filtered, filteredBy, odaObjects} =require('../../SharedKernel/index').toinit();
const { combineLatest, Observable, of, pipe, from } = require('rxjs');
const { filter, map, tap, pluck, find , shareReplay,concat} = require('rxjs/operators');
const {oarray}= require('../../helper/oda').toinit();
const {getloadocomptereferenceOne$} = require('../../DataService/loadRepository').toinit();

//var ocomptereferencedata = require('../../helper/ocomptereferencedata');
 var myobject =  require('../../helper/myObjects');

var ocomptereferenceSeed = (function () {
  const  seededatas= oarray(ocompterefencedata);
  var seeddatas$ = function() {
  return   from(oarray(ocompterefencedata));
  };
var removeData$= function (model) {
  return Observable.create(function (observer) {
  try {
    base.odaDel(model,
      function (err, datas) {
        if (err)  observer.next(err);
        observer.next(datas);
        setTimeout(() => {
          observer.complete();
        }, 100);
      });

  }
  catch (err) {
    observer.error(err);
  }
});
};
const combindata$= pipe(
 //   tap(ev => console.log(ev)),
  map(function([getloadocomptereferenceOne,seeddatas]){
return _.map(seeddatas,function(obj){
  const filteredOreference= base.getodafilter(getloadocomptereferenceOne,{'CompteNumber': obj.CompteNumber,'TableauName': obj.TableauName,  'StableauName': obj.StableauName, 'AreaShortName': obj.AreaShortName,'RefCode': obj.RefCode});
  var validate = staticObjects.getOcomptereference(filteredOreference, obj);
 // const filtered=oo;
  return  _.assign({},validate,({
    'Exception': obj.Exception,
    'Taux': obj.Taux,
  }));
});
  })
);
const gettest = function(arr){
  return _.map(arr, function (obj) {
 

             });

};

const getObserverdata = pipe(
  map(n => n)// ,
// ,tap(ev => console.log(ev))
);
const getdata$ = getObserverdata(getloadocomptereferenceOne$);

const odagetObserver= {
  next: function(x) {
return gettest(x);
   },
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification')
};

const insertoReference = function () {
return  getdata$.subscribe(odagetObserver);
  };

  function toinit() {
    return {
      seeddatas$:seeddatas$,
      insertoReference:insertoReference
    };
  }

return {
  toinit: toinit
};

}
)();
module.exports= {
toinit:ocomptereferenceSeed.toinit
};

