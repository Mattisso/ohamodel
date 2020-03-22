"use strict";
const{assign}  = require('lodash');
const {getodaAggreateData} = require('../odaStats').toinit();
const {odaremoveDupnumcompte} = require('../odaUtility').toinit();
const { tocreateinstance,tocreatechildinstance,toupdatechildinstance,toupdateinstance,toapicreateinstance,} = require('./toOdaInstance').toinit();

const toOdaApiInstance = (function () {
  let comptebalance = null,
  nttcomptebalancedetails=[];

  function tocreateapiBuild(model,vmodel,body, fn,fnn) {
     comptebalance = tocreateinstance(model, body, fn);  
     body.nttcomptebalancedetails.forEach(function (entry) {
      comptebalance.addBalanceDetail(entry);
    }); 
    const _details=odaremoveDupnumcompte(body.nttcomptebalancedetails);
    const detailsdata= tocreatechildinstance(vmodel,_details,comptebalance.id,fnn); 
  // comptebalance.detailsdata=detailsdata;
   // console.log(detailsdata);
 return assign({},comptebalance,{nttcomptebalancedetails:detailsdata}); ////assign({},{comptebalance:comptebalance},{nttcomptebalancedetails:detailsdata});
    /*  return {
      comptebalance:comptebalance,
      nttcomptebalancedetails:detailsdata
    }  */
  }
  function toapiInitializeInstance(model,vmodel,body, fn,fnn) {
    const requestbodydata = tocreateapiBuild(model,vmodel,body, fn,fnn);
    return {"comptebalance":requestbodydata,
   "getData": requestbodydata.getData()
    } 
  }

  function toupdateapiBuild(body, fn) {
    comptebalance = toupdateinstance( body, fn);
    nttcomptebalancedetails=body.nttcomptebalancedetails;
     comptebalance.nttcomptebalancedetails=nttcomptebalancedetails;
    return comptebalance;
 }
 
 function tocreateapicomptebalanceBuild(model, body, fn) {
  comptebalance = tocreateinstance(model, body, fn);  
   body.nttcomptebalancedetails.forEach(function (entry) {
    comptebalance.addBalanceDetail(entry);
  });   
  return comptebalance;
}
  function toapiInitcomptebalanceInstance(model, requestBody, fn) {
    const requestbodydata = tocreateapicomptebalanceBuild(model,requestBody, fn);
    return {"comptebalance":requestbodydata,
   "getData": requestbodydata.getData()
    } 
  }

  function tocreateapicomptabalanceDetailsdbuild(model, requestBody, requestparamid, fn){
    let childData;
    const _details=odaremoveDupnumcompte(requestBody.nttcomptebalancedetails);
    childData= tocreatechildinstance(model,_details,requestparamid,fn);
    return childData;
  }
  function toapiInitcomptabalanceDetailsInstance(model, requestBody, requestparamid,fn) {
    //const requestparamid=comptebalance.id;
    const requestbodydata = tocreateapicomptabalanceDetailsdbuild(model,requestBody, requestparamid, fn);
    return requestbodydata;
  }

  /*function tocreateapicomptabalanceDetailsdbuild(model, requestBody, requestparamid, fn){
    const _details=odaremoveDupnumcompte(requestBody.nttcomptebalancedetails);
    const childData= tocreatechildinstance(model,_details,comptebalance.id,fn);
    return childData;
  }*/
  //model, o, requestparamid, fn
  
 const getData = function (body) {
   const arr =body.nttcomptebalancedetails;
   // const odasum =getodaAggreateData(body.nttcomptebalancedetails);
    return {
      'OexercComptaKey': body.OexercComptaKey,
      'OtableauposteKey': body.OtableauposteKey,
      'OreferenceKey': body.OreferenceKey,
      'totalSoldeDebit': body.totalSoldeDebit, //odasum.totalSoldeDebit,
      'totalSoldeCredit': body.totalSoldeCredit,// odasum.totalSoldeCredit,
      'DetailCount': arr.length?arr.length:0,
      'id': body.id,
      'nttcomptebalancedetails': body.nttcomptebalancedetails.slice()
    };
  }; 

  function toapiupdateInstance(requestBody, fn) {
    const requestbodydata = toupdateapiBuild(requestBody, fn);
  //  console.log(requestBody);
    return {"comptebalance":requestbodydata,
  "getData": getData(requestbodydata)
  } 
   /*  return assign({}, requestbodydata,
     {getData: getData(requestbodydata)});
  } */
  }
  
  function toupdateapicomptebalanceBuild(body, fn) {
    comptebalance = toupdateinstance( body, fn);
    nttcomptebalancedetails=body.nttcomptebalancedetails;
     comptebalance.nttcomptebalancedetails=nttcomptebalancedetails;
    return comptebalance;
  }
  function toapiupdatecomptebalanceInstance(requestBody, fn) {
    const requestbodydata = toupdateapicomptebalanceBuild(requestBody, fn);
    return requestbodydata;
  }

  function toupdateapicomptabalanceDetailsdbuild(requestBody, requestparamid, fn){
    const _details=odaremoveDupnumcompte(requestBody.nttcomptebalancedetails);
    const childData= toupdatechildinstance(_details,requestparamid,fn);
    return childData;
  }
 
  function toapiupdatecomptabalanceDetailsInstance(requestBody, requestparamid, fn) {
    const requestbodydata = toupdateapicomptabalanceDetailsdbuild(requestBody, requestparamid, fn);
    return requestbodydata;
  }

  function toinit() {
    return {
      toapiInitializeInstance:toapiInitializeInstance,
 //     toapiInitcomptabalanceInstance:toapiInitcomptabalanceInstance,
      toapiInitcomptabalanceDetailsInstance:toapiInitcomptabalanceDetailsInstance,
      toapiInitcomptebalanceInstance:toapiInitcomptebalanceInstance,
      toapiupdateInstance:toapiupdateInstance,
      toapiupdatecomptebalanceInstance:toapiupdatecomptebalanceInstance,
      toapiupdatecomptabalanceDetailsInstance:toapiupdatecomptabalanceDetailsInstance
    };
  }

return {
  toinit: toinit
};
}
)();
module.exports= {
toinit:toOdaApiInstance.toinit
};
