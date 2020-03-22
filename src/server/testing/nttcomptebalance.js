const {createData,editData}=require('../testing/data/comptebalancedata').toinit();
const {nttCompteBalance,nttCompteBalanceDetail}=require('../omodels/modelsSchema/index').toinit();
const {togetcomptebalances,toUpdatecomptebalancedata, toapinttcomptebalance,togetloadnttbalance,getloadnttcomptebalanceDetaildata, getcombinednIndex,togetcomptebalancesWithDetails}=require('../omodels/staticModels/staticNttcomptebalance').toinit();

"use strict";
const {toCompteBalanceDetail}=require('../omodels/staticModels/staticNttcomptebalanceDetail').toinit();
const { combineLatest, pipe, concat} = require('rxjs');
const { map, shareReplay } = require('rxjs/operators');
// const {getnttbalances$} = require('../nttbalance/nttbalanceRepository').toinit();
const {getObjcomptebalance}=require('../SharedKernel/staticObjects').toinit();
const {getObserverWithShareReplaydata$}=require('../SharedKernel/odaSubscribe').toinit();
const {getodaindex$, odaindex,getodaByid$,toOdaUpdate$,toOdaCreate$,getodasharedByid$,toapiOdaCreate$}=require('../SharedKernel/dataservices').toinit();
const {svcodaApisave$,svcodaApiupdate$, svcodaApiDel$,svcodaSearchBy, svctoapiInitializeinstance ,svctoapiInitcomptebalanceInstance,svctoapiupdatecomptebalanceInstance}=require('../SharedKernel/odaservice').toinit();
const {tocreateinstance} = require('../sharedkernel/odainstance/toOdaInstance').toinit();
const {getsrdexeccomptas$,getsrdotableaupostes$,getsrdoreferences$,getsrdcomptebalances$,getsrdcomptebalanceDetails$}=require('../sharedkernel/sharedRepository').toinit();



let comptebalance = null;
function BuildnttCompteBalance(body) {
    comptebalance =tocreateinstance(nttCompteBalance,body);
    
    body.nttcomptebalancedetails.forEach(function (entry) {
      comptebalance.addBalanceDetail(entry);
    
    });
    comptebalance.getTotalSoldedebit;
    comptebalance.getTotalSoldecredit;
    
         // console.log(viewModel)
    
    
        // let nttcomptebalancedetails=[];
    
        return comptebalance;
      }
    
    
      function BuildupdateCompteBalance(body) {
        // let nttcomptebalancedetails=[];
        comptebalance = body;
        return comptebalance;
      }
    
    
    
      function toInitializeInstance(body) {
        var balance = BuildnttCompteBalance(body);
        return {
        //  balance: balance,
          getData: balance.getData()
        };
    
      }
      console.log(JSON.stringify(toInitializeInstance(createData)));