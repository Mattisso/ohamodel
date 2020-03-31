"use strict";

const {createData,editData}=require('../testing/data/comptebalancedata').toinit();
const {nttCompteBalance,nttCompteBalanceDetail}=require('../omodels/modelsSchema/index').toinit();
const {toInitComptebalanceInstance}=require('../features/nttcomptebalance/staticNttcomptebalance').toinit();
const {odaremoveDupnumcompte} = require('../sharedkernel/odaUtility').toinit();
const {toInitCustomInstance, toapicreateinstance,svctoInitCustomInstance$}=require('../sharedkernel/odainstance/toInitializeInstance').toinit()
const {getstreamdata$, odagetObserver,getapistreamdata$,getapiObserver}=require('../sharedkernel/odaSubscribe').toinit();
/* const {toCompteBalanceDetail}=require('../omodels/staticModels/staticNttcomptebalanceDetail').toinit();
const { combineLatest, pipe, concat} = require('rxjs');
const { map, shareReplay } = require('rxjs/operators');
// const {getnttbalances$} = require('../nttbalance/nttbalanceRepository').toinit();
const {getObjcomptebalance}=require('../SharedKernel/staticObjects').toinit();
const {getObserverWithShareReplaydata$}=require('../SharedKernel/odaSubscribe').toinit();
const {getodaindex$, odaindex,getodaByid$,toOdaUpdate$,toOdaCreate$,getodasharedByid$,toapiOdaCreate$}=require('../sharedkernel/odaservice/dataservices').toinit();
const {svcodaApisave$,svcodaApiupdate$, svcodaApiDel$,svcodaSearchBy, svctoapiInitializeinstance ,svctoapiInitcomptebalanceInstance,svctoapiupdatecomptebalanceInstance}=require('../sharedkernel/odaservice/odaservice').toinit();
const {tocreateinstance} = require('../sharedkernel/odainstance/toOdaInstance').toinit();
const {getsrdexeccomptas$,getsrdotableaupostes$,getsrdoreferences$,getsrdcomptebalances$,getsrdcomptebalanceDetails$}=require('../sharedkernel/odarepository/sharedRepository').toinit(); */
// const {toInitCompteBalanceInstance}=require('../omodels/modelClass/nttcomptebalanceClass').toinit();
//const {nttCompteBalance}=require('../omodels/modelsSchema/index').toinit();
//let toacreateinstance=toapicreateinstance;

require('../config/ohadb').connectserver()
/* const toInitCustomInstance = function(model, requestbody){
return toInitCustomInstance(model, requestbody,toInitComptebalanceInstance)

} */
/* const toCreateBalancedata$ = function (requestBody) {
  //   console.log(requestBody);requestBody
     return svctoInitCustomInstance$(nttCompteBalance, requestBody, toInitCustomInstance);
   }; */
//const finaltest=
const toInitializeFinalInstance = function (model, body) {
  const data = toInitCustomInstance(model, body, toInitComptebalanceInstance);
  return data;
};
const data =toInitializeFinalInstance(nttCompteBalance,createData)
//const data =toInitComptebalanceInstance(nttCompteBalance,createData,toapicreateinstance)
// JSON.stringify(toInitializeInstance(nttCompteBalance,createData)));
console.log(data.getData);
/* const comptedata=data.getData;
const detailsdata=comptedata.nttcomptebalancedetails
 const details= toapicreateinstance(nttCompteBalanceDetail,detailsdata);
console.log(details) */
/* const toCreateBalancedata$ = function (requestBody) {
  //   console.log(requestBody);
     return svctoInitCustomInstance$(nttCompteBalance, requestBody,  toInitCustomInstance);
   }; */
   // const getLoaddData$ = toCreateOComptedata$;

/* update$(objupdate,'5e6c1d38f83ac10fd8de514d'); */
//toUpdateOComptedata$(objupdate)
/* update$(objupdate,'5e6c1d38f83ac10fd8de514d'); */
//index$;

//update$(objupdate,//'5e6c1d38f83ac10fd8de514d')
//index$

/* update$(objupdate,'5e6c1d38f83ac10fd8de514d') */

//index$ //insert$(obj);

// getstreamdata$(getLoaddData$(obj)).subscribe(odagetObserver());