"use strict";

const {createData,editData}=require('../testing/data/comptebalancedata').toinit();
const {nttCompteBalance,nttCompteBalanceDetail}=require('../omodels/modelsSchema/index').toinit();
const {togetcomptebalances,toUpdatecomptebalancedata, toapinttcomptebalance,togetloadnttbalance,getloadnttcomptebalanceDetaildata, getcombinednIndex,togetcomptebalancesWithDetails}=require('../omodels/staticModels/staticNttcomptebalance').toinit();
const {odaremoveDupnumcompte} = require('../sharedkernel/odaUtility').toinit();
const {toapicreateinstance}=require('../sharedkernel/odainstance/toOdaInstance').toinit()
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
const {toInitializeInstance}=require('../omodels/modelClass/nttcomptebalanceClass').toinit();
// const {nttCompteBalance}=require('../omodels/modelsSchema/index').toinit();

require('../config/ohadb').connectserver()

const data =toInitializeInstance(nttCompteBalance,createData)
// JSON.stringify(toInitializeInstance(nttCompteBalance,createData)));
console.log(data.getData);
/* const comptedata=data.getData;
const detailsdata=comptedata.nttcomptebalancedetails
 const details= toapicreateinstance(nttCompteBalanceDetail,detailsdata);
console.log(details) */