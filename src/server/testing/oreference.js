const {arroreferencedata,objoreferencedata,updObject}=require('../testing/data/index').toinit().oreferencedata;

const {oReference}=require('../omodels/modelsSchema/index').toinit();
const {toInitOexerccomptaInstance,toOexercompta}=require('../features/oreference/StaticOreference').toinit();
const {odaremoveDupnumcompte} = require('../sharedkernel/odaUtility').toinit();
const {toInitializeInstance}=require('../sharedkernel/odainstance/toInitializeInstance').toinit();
const {getstreamdata$, odagetObserver,getapistreamdata$,getapiObserver}=require('../sharedkernel/odaSubscribe').toinit();
const { toCreateoreferencedata$} = require('../features/oreference/oreferenceRepository').toinit();


// const {toseedoexercompta} = require('../features/oexerccompta/oexercomptaSeed').toinit();

const getoreportdetail$ =  toCreateoreferencedata$;
getstreamdata$(getoreportdetail$(objoreferencedata)).subscribe(odagetObserver());

// console.log((toseedoexercompta));
