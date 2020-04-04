const {toInitializeInstance}=require('../sharedkernel/odainstance/toInitializeInstance').toinit()
const {createData, arrcreateData, editData}=require('../testing/data/nstbalanceinputdata').toinit();
const {nstBalanceInput}=require('../omodels/modelsSchema/nstbalanceinput').toinit();
//const {render}=require('../features/ocompte/ocompteView').toinit();
const { combineLatest, Observable, of, pipe, from ,concat} = require('rxjs');
const { filter, map, tap, pluck, take, find, distinct, shareReplay } = require('rxjs/operators');
const {toInitializeFinalInstance}=require('../features/nstbalanceinput/nstbalanceinputRepository').toinit();
const {toInitCustomInstance, toapicreateinstance,svctoInitCustomInstance$}=require('../sharedkernel/odainstance/toInitializeInstance').toinit()
const {getTotalCount, getTotalSoldedebit, getTotalSoldecredit}=require('../SharedKernel/odaStats').toinit();
const {odaremoveDupnumcompte,addItem} = require('../Sharedkernel/odaUtility').toinit();
const {getstreamdata$, odagetObserver,getapistreamdata$,getapiObserver}=require('../SharedKernel/odaSubscribe').toinit();

// console.log(toInitializeInstance(nstBalanceInput,arrcreateData))

      

const { toCreateBalanceinputdata$} = require('../features/nstbalanceinput/nstbalanceinputRepository').toinit();
const { toBalanceinput} = require('../features/nstbalanceinput/staticNstbalanceinput').toinit();


// const getoreportdetail$= sharedrepository.getocomptreferences$;
 //const getcallbackdata = ostblareaRepository.index;
//  const getoreportdetail$ = olevelRepository.getolevelsBy$(3);
// console.log(comptebalancedata.createData);
 const getoreportdetail$ = toCreateBalanceinputdata$; // 

getstreamdata$(getoreportdetail$(arrcreateData)).subscribe(odagetObserver());


 //     const data = toInitializeFinalInstance(nstBalanceInput, createData, toBalanceinput)
 //    console.log(data);