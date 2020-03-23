"use strict";
const {odaupdate$, odasave$, odaseedUsersave$,odaDel$,odaLoadupdate$,odaSearchBy}=require('../odarepository/odarepository').toinit();
const {odaApiBulkDel$, odaApisave$,odaApiupdate$, odapiDel$}=require('../odarepository/odaApirepository').toinit();
//const {toInitializeInstance}=require('./toInitializeInstance').toinit();
const {toUpdateInstance,toInitializeInstance, toapiInitializeInstance}=require('../odainstance/index').toinit();
//const {toseedInstance}=require('./toSeedInstance').toinit();
const {isValid } = require('../odaUtility').toinit();

const  odaservice = (function () {
  const svcapiupdate$=function(model, obj,reqparmid) {
    return odaApiupdate$(model,obj,reqparmid);
  };
  const svcodasave$=function(option) {
    return odasave$(option);
  };
  const svcodaupdate$=function(model,option) {
    if( isValid(option.arrArg)===true && isValid(option.odaObjupd)===true){
      return odaLoadupdate$(model,option);
    }
    if( isValid(option.arrArg)===true && isValid(option.odaObjupd)===false){
      return odaupdate$(model,option);
    }
  };
  const svcodaSearchBy=function(model,obj) {
    if(isValid(obj)===true){
      return odaSearchBy(model,obj);
    }
  };
  const svcodaseedUsersave$=function(model, option) {
    return odaseedUsersave$(model,option);
  };
  const svcodaDel$=function(model, item) {
    return odaDel$(model,item);
  };
  const svcodaApisave$=function(argone) {
    return odaApisave$(argone);
  };
  const svcodaApiupdate$=function(model, ArgOne,reqparmid) {
    return odaApiupdate$(model, ArgOne,reqparmid);
  };
  const svcodaApiBulkDel$=function(model, item) {
    return odaApiBulkDel$(model,item);
  };
  const svcodaApiDel$=function(model, requestparamid) {
    return odapiDel$(model,requestparamid);
  };
 
  const svctoInitializeInstance=function(model, body,fn) {
    return toInitializeInstance(model,body,fn);
  };
  const svctoUpdateInstance=function(body,fn) {
    return toUpdateInstance(body,fn);
  };

 
//model,vmodel,body, fn,fnn
  const svctoapiInitializeinstance=function(model, vmodel,requestBody, toinitP,toinitC) {
    return toapiInitializeInstance(model,vmodel, requestBody, toinitP,toinitC);
  };
 
  function toinit() {
    return {
      svcapiupdate$:svcapiupdate$,
      svcodasave$:svcodasave$,
      svcodaupdate$:svcodaupdate$,
      svcodaseedUsersave$:svcodaseedUsersave$,
      svcodaDel$:svcodaDel$,
      svcodaApisave$:svcodaApisave$,
      svcodaApiupdate$:svcodaApiupdate$,
      svcodaApiBulkDel$:svcodaApiBulkDel$,
      svctoInitializeInstance:svctoInitializeInstance,
      svctoUpdateInstance:svctoUpdateInstance,
      svcodaApiDel$:svcodaApiDel$,
      svcodaSearchBy:svcodaSearchBy,
      svctoapiInitializeinstance:svctoapiInitializeinstance,

    };
  }
return {
  toinit: toinit
};

}
)();
module.exports= {
toinit:odaservice.toinit
};


