"use strict";
const _ = require('lodash');
const {isValid,getStringValue, replaceNullToZero,hasitem} = require('./odaUtility').toinit();
const {toapiUpdateInstance}=require('../odainstance/toOdaInstance').toinit();
const toUpdateInstance = (function () {
    
    
    
    
    
    const svctoUpdateInstance = function (body, fn) {
        return toapiUpdateInstance(body, fn);
    };
    
    const toOdaUpdate$ = function (requestBody, toupdobj, fn) {
        return Observable.create(function (observer) {
            // const _toupdatedata = fn(requestBody, objupd);
            try {
                const _toupdatedata = fn(requestBody, toupdobj);
                observer.next(_toupdatedata);
                setTimeout(() => {
                    observer.complete();
                }, 100);
            } catch (err) {
                observer.error(err);
            }
        });
    };
    const toUpdateOComptedata$ = function (requestBody, requestparamid) {
        return toOdaUpdate$(requestBody, requestparamid, toUpdateocompte, svctoUpdateInstance);
    };
    
    function toinit() {
        return {
          toUpdateInstance: toUpdateInstance
       //   toupdateObject: toupdateObject
        };
      }
    
      return {
        toinit: toinit
      };
    
    })();
    module.exports = {
      toinit: toUpdateInstance.toinit
    };
    