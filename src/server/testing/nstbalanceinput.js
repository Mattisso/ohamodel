const {toInitializeInstance}=require('../sharedkernel/odainstance/toInitializeInstance').toinit()
const {createData, arrcreateData, editData}=require('../testing/data/nstbalanceinputdata').toinit();
const {nstBalanceInput}=require('../omodels/modelsSchema/nstbalanceinput').toinit();
//const {render}=require('../features/ocompte/ocompteView').toinit();
const { combineLatest, Observable, of, pipe, from ,concat} = require('rxjs');
const { filter, map, tap, pluck, take, find, distinct, shareReplay } = require('rxjs/operators');
const {toInitCustomInstance, toapicreateinstance,svctoInitCustomInstance$}=require('../sharedkernel/odainstance/toInitializeInstance').toinit()
const {getTotalCount, getTotalSoldedebit, getTotalSoldecredit}=require('../SharedKernel/odaStats').toinit();
const {odaremoveDupnumcompte} = require('../Sharedkernel/odaUtility').toinit();

// console.log(toInitializeInstance(nstBalanceInput,arrcreateData))
let balanceinputs = null

function BuildnttCompteBalance(model,body, fn) {
  let toacreateinstance=fn;
  balanceinputs =toacreateinstance(model,body); 
 
    console.log(balanceinputs);
        return balanceinputs;

      } 
            
      function BuildupdateCompteBalance(body) {
        // let nttarrbalanceinputsdetails=[];
       // arrbalanceinputs = body;
        return balanceinputs;
      }  
      function toInitComptebalanceInstance(model,body,fn) {
        const balance = BuildnttCompteBalance(model,body,fn);
       
  return {
    getData : function() {
return ({
  'totalSoldeDebit' : getTotalSoldedebit(balance), 
   'totalSoldeCredit': getTotalSoldecredit(balance),
   'DetailCount': getTotalCount(odaremoveDupnumcompte(balance)), 
   'arrbalanceinputs': odaremoveDupnumcompte(balance.slice())
})
    }
  } 
   }
       
      

     
/* 
      const toInitializeFinalInstance = function (model, body) {
        const data = toInitCustomInstance(model, body, toInitComptebalanceInstance);
        return data;
      };
      const data =toInitializeFinalInstance(nstBalanceInput,arrcreateData) */
      const data =toInitComptebalanceInstance(nstBalanceInput,createData,toapicreateinstance)
      // JSON.stringify(toInitializeInstance(nttCompteBalance,createData)));
   //   console.log(data.getData());