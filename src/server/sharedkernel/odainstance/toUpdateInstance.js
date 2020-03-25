"use strict";
const _ = require('lodash');
const {isValid,getStringValue, replaceNullToZero,hasitem} = require('../odaUtility').toinit();
const {toapiUpdateInstance}=require('../odainstance/toOdaInstance').toinit();
const { Observable,pipe } = require('rxjs');
const toUpdateInstance = (function () {
        
    function toupdateBuild(requestBody, fn) {
        let //DetailCount = 0,
        arrArg = [];
        const _getdata = toapiUpdateInstance(requestBody, fn);
        // console.log(JSON.stringify(_getdata));
        if ((!hasitem(_getdata, arrArg))) {
          arrArg.push(_getdata);
          /*    if (isValid(arrArg.length) === true) {
               DetailCount = arrArg.length;
             } */
             return arrArg.slice()
             
            /*  {
               DetailCount: DetailCount,
               arrArg: arrArg.slice()
             }; */
        }   else {
          return new Error(
            ` missing some arguments`);
          }
   
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
        return toOdaUpdate$(requestBody,  toupdobj, toUpdateInstance);
    };
    
    function toinit() {
        return {
      svctoUpdateInstance$: svctoUpdateInstance$,
        toUpdateInstance: toUpdateInstance
        };
      }
    
      return {
        toinit: toinit
      };
    
    })();
    module.exports = {
      toinit: toUpdateInstance.toinit
    };
    