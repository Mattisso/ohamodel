"use strict";
const _ = require('lodash');
const {isValid,getStringValue, replaceNullToZero,hasitem} = require('./odaUtility').toinit();
const {toapiUpdateInstance}=require('../odainstance/toOdaInstance').toinit();
const toUpdateInstance = (function () {
        
    function toupdateBuild(requestBody, fn) {
        let DetailCount = 0,
        arrArg = [];
        const _getdata = toapiUpdateInstance(requestBody, fn);
        // console.log(JSON.stringify(_getdata));
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
       const toUpdateInstance = function (body, f) {
        const data = toupdateBuild(body, f);
        return data;
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
    const svctoUpdateInstance$ = function (requestBody, toupdobj) {
        return toOdaUpdate$(requestBody, requestparamid, toupdobj, toUpdateInstance);
    };
    
    function toinit() {
        return {
            svctoUpdateInstance$: svctoUpdateInstance$
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
    