"use strict";
const { isValid, hasitem, inArray} = require('../odaUtility').toinit();
const { toapicreateinstance,toapiUpdateInstance} = require('./toOdaInstance').toinit();
const { Observable,pipe } = require('rxjs');
//var async = require('async')
const toInitializeInstance = (function () {
  function tocreateBuild(model, requestBody, requestparamid,fn) {
    let DetailCount = 0,
    arrArg = [];
    if (inArray(requestBody) === true) {
      const _getdata = toapicreateinstance(model, requestBody, requestparamid,fn);
      return {
        DetailCount: _getdata.length,
        arrArg: _getdata.slice()
      };
    }
    else  if (inArray(requestBody) === false) {
      const _getdata = toapicreateinstance(model, requestBody, requestparamid,fn);
      if ((!hasitem(_getdata, arrArg)))
        arrArg.push(_getdata);
        if (isValid(arrArg.length) === true) {
          DetailCount = arrArg.length;
        }
      return {
        DetailCount: DetailCount,
        arrArg: arrArg.slice()
      };
    }
    
  }
 
  const toInitializeInstance = function (model, body,requestparamid, f) {
    const data = tocreateBuild(model, body,requestparamid, f);
    return data;
  };
  const toapiOdaCreate$ = function (model,requestBody, fn) {
    return Observable.create(function (observer) {
      try {
        const _toCreatedata = fn(model,requestBody);
        observer.next(_toCreatedata);
        setTimeout(() => {
          observer.complete();
        }, 100);
      } catch (err) {
        observer.error(err);
      }
    });
  
  };
  const svctoInitializeInstance$ = function (model,requestBody,requestparamid) {
    return toapiOdaCreate$(model, requestBody, toInitializeInstance);
};


  function toinit() {
    return {
      svctoInitializeInstance$: svctoInitializeInstance$,
      toInitializeInstance:toInitializeInstance
  

    };
  }
  return {
    toinit: toinit
  };

})();
module.exports = {
  toinit: toInitializeInstance.toinit
};
