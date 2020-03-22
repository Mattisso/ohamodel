"use strict";
const _ = require('lodash');
const {odaupdate$, odasave$, odaseedUsersave$,odaDel$,odaLoadupdate$,odaSearchBy}=require('./odarepository').toinit();
const {odaApiBulkDel$, odaApisave$,odaApiupdate$, odapiDel$}=require('./odaApirepository').toinit();
//const {toInitializeInstance}=require('./toInitializeInstance').toinit();
const {toUpdateInstance,toseedInstance, toInitializeInstance,toapiUpdateInstance, toapiUpdateOtherInstance,toInitializeOtherInstance,toseedOthersInstance,toapiInitializeInstance,toapiInitcomptebalanceInstance,toapiInitcomptabalanceDetailsInstance,toapiupdatecomptebalanceInstance,toapiupdatecomptabalanceDetailsInstance}=require('./odainstance/index').toinit();
//const {toseedInstance}=require('./toSeedInstance').toinit();
const {isValid } = require('./odaUtility').toinit();

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
  const svctoseedInstance=function(model, option,fn) {
    return toseedInstance(model,option,fn);
  };
  const svctoInitializeInstance=function(model, body,fn) {
    return toInitializeInstance(model,body,fn);
  };
  const svctoUpdateInstance=function(body,fn) {
    return toUpdateInstance(body,fn);
  };
  const svctoapiUpdateInstance=function(body,fn) {
    return toapiUpdateInstance(body,fn);
  };
  const svctoInitializeOtherInstance=function(model, body,fn) {
    return toInitializeOtherInstance(model,body,fn);
  };
  const svctoseedOthersInstance=function(model, option,fn) {
    return toseedOthersInstance(model,option,fn);
  };
//model,vmodel,body, fn,fnn
  const svctoapiInitializeinstance=function(model, vmodel,requestBody, toinitP,toinitC) {
    return toapiInitializeInstance(model,vmodel, requestBody, toinitP,toinitC);
  };

  const svctoapiInitcomptebalanceInstance=function(model, requestBody, toinitP) {
    return toapiInitcomptebalanceInstance(model, requestBody, toinitP);
  };
  const svctoapiInitcomptabalanceDetailsInstance=function(model, requestBody, requestparamid,fn) {
    return toapiInitcomptabalanceDetailsInstance(model, requestBody, requestparamid,fn);
  };
  const svctoapiupdatecomptebalanceInstance=function(requestBody,fn) {
    return toapiupdatecomptebalanceInstance(requestBody,fn);
  };
  const svctoapiupdatecomptabalanceDetailsInstance=function(requestBody, requestparamid,fn) {
    return toapiupdatecomptabalanceDetailsInstance(requestBody, requestparamid,fn);
  };
  //toapiInitcomptebalanceInstance
  const svctoapiUpdateOtherInstance=function(body,fn) {
    return toapiUpdateOtherInstance(body,fn);
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
      svctoseedInstance:svctoseedInstance,
      svctoInitializeInstance:svctoInitializeInstance,
      svctoUpdateInstance:svctoUpdateInstance,
      svcodaApiDel$:svcodaApiDel$,
      svcodaSearchBy:svcodaSearchBy,
      svctoapiUpdateInstance:svctoapiUpdateInstance,
      svctoInitializeOtherInstance:svctoInitializeOtherInstance,
      svctoseedOthersInstance:svctoseedOthersInstance,
      svctoapiUpdateOtherInstance:svctoapiUpdateOtherInstance,
      svctoapiInitializeinstance:svctoapiInitializeinstance,
      svctoapiInitcomptebalanceInstance:svctoapiInitcomptebalanceInstance,
      svctoapiInitcomptabalanceDetailsInstance:svctoapiInitcomptabalanceDetailsInstance,
      svctoapiupdatecomptebalanceInstance:svctoapiupdatecomptebalanceInstance,
      svctoapiupdatecomptabalanceDetailsInstance:svctoapiupdatecomptabalanceDetailsInstance
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


