const {arroexerccomptadata,objoexerccomptadata}=require('../testing/data/index').toinit().oexerccomptadata;

const {oExercCompta}=require('../omodels/modelsSchema/index').toinit();
const {toInitOexerccomptaInstance,toOexercompta}=require('../features/oexerccompta/staticOxerccompta').toinit();
const {odaremoveDupnumcompte} = require('../sharedkernel/odaUtility').toinit();
const {toInitializeInstance}=require('../sharedkernel/odainstance/toInitializeInstance').toinit()
const {getstreamdata$, odagetObserver,getapistreamdata$,getapiObserver}=require('../sharedkernel/odaSubscribe').toinit();


const {toseedoexercompta} = require('../features/oexerccompta/oexercomptaSeed').toinit();

//const getoreportdetail$ =  toseedarray

console.log((toseedoexercompta));
