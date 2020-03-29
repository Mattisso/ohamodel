"use strict";
const {hasitem} = require('../odaUtility').toinit();
const {toapiUpdateChildInstance,toapiUpdateInstance}=require('../odainstance/toOdaInstance').toinit();
const { Observable } = require('rxjs');
const toUpdateInstance = (function () {
        
    function toupdateBuild(requestBody, fn) {
        let  arrArg = [];
        const _getdata = toapiUpdateInstance(requestBody, fn);
        if ((!hasitem(_getdata, arrArg))) {
          arrArg.push(_getdata);
                     return arrArg.slice()
           
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

    const toOdaUpdateChild$ = function (requestBody, requestparamid,  toupdobj, fn) {
      return Observable.create(function (observer) {
          // const _toupdatedata = fn(requestBody, objupd);
          try {
              const _toupdatedata = fn(requestBody, requestparamid,  toupdobj, fn);
              observer.next(_toupdatedata);
              setTimeout(() => {
                  observer.complete();
              }, 100);
          } catch (err) {
              observer.error(err);
          }
      });
  };
   
  function toupdateChildBuild(requestBody, requestparamid, fn){
    let arrArg = [];
    const _getdata = toapiUpdateChildInstance(requestBody, requestparamid, fn);
    if ((!hasitem(_getdata, arrArg))) {
      arrArg.push(_getdata);
       return arrArg.slice()           
    }   else {
      return new Error(
        ` missing some arguments`);
      }
  }

   const  toUpdateChildInstance  = function (requestBody, requestparamid, fn) {
    const data = toupdateChildBuild(requestBody, requestparamid, fn);
    return data;
  };      
  
    const svctoUpdateChildInstance$ = function (requestBody, requestparamid, toupdobj) {
      return toOdaUpdateChild$(requestBody, requestparamid, toupdobj, toUpdateChildInstance);
  };
    
    function toinit() {
        return {
      svctoUpdateInstance$: svctoUpdateInstance$,
        toUpdateInstance: toUpdateInstance,
        svctoUpdateChildInstance$:svctoUpdateChildInstance$,
        toUpdateChildInstance:toUpdateChildInstance

        };
      }
    
      return {
        toinit: toinit
      };
    
    })();
    module.exports = {
      toinit: toUpdateInstance.toinit
    };
    