/* const {arroreferencedata,objoreferencedata,updObject}=require('../testing/data/index').toinit().oreferencedata;

const {oReference}=require('../omodels/modelsSchema/index').toinit();
const {toInitOexerccomptaInstance,toOexercompta}=require('../features/oreference/StaticOreference').toinit();
const {odaremoveDupnumcompte} = require('../sharedkernel/odaUtility').toinit();
const {toInitializeInstance}=require('../sharedkernel/odainstance/toInitializeInstance').toinit() */
const {getstreamdata$, odagetObserver,getapistreamdata$,getapiObserver}=require('../sharedkernel/odaSubscribe').toinit();
const {getloadnstbalancedatas$ } = require('../features/nstbalance/nstbalanceRepository').toinit();

require('../config/ohadb').connectserver();
// const {toseedoexercompta} = require('../features/oexerccompta/oexercomptaSeed').toinit();

const getoreportdetail$ = getloadnstbalancedatas$
//getstreamdata$(getoreportdetail$())
getoreportdetail$.subscribe(odagetObserver());

// console.log((toseedoexercompta));
