
const {svctoInitializeInstance$}=require('../sharedkernel/odainstance/toInitializeInstance').toinit()
const {objocomptedata,arrocomptedata}=require('../testing/data/ocomptedata').toinit();
const {oCompte}=require('../omodels/modelsSchema/index').toinit();
const {render}=require('../features/ocompte/ocompteView').toinit();
const { combineLatest, Observable, of, pipe, from ,concat} = require('rxjs');
const { filter, map, tap, pluck, take, find, distinct, shareReplay } = require('rxjs/operators');


const {Buildocompte}=require('../omodels/modelClass/ocompteClass').toinit();
// const {nttCompteBalance}=require('../omodels/modelsSchema/index').toinit();

// require('../config/ohadb').connectserver()

// const data =Buildocompte(oCompte,objocomptedata)
// JSON.stringify(toInitializeInstance(nttCompteBalance,createData)));
// console.log(data.getData);

 const data= svctoInitializeInstance$(oCompte,arrocomptedata);
//console.log(render(data));
 
const getoreportdetail$ =  data
const getObserverdata = pipe(
  map(n => n)
 ,tap(ev => console.log(ev))
  //,take(2)
);

 const getoreportdetailR$ = getObserverdata(getoreportdetail$);

  getoreportdetailR$.subscribe(function (x) {
  return render(x);
  //console.log(getodaAggreateData(x));


});