const _=require('lodash');
const {arroexerccomptadata,objoexerccomptadata,oexcomptadata}=require('../testing/data/index').toinit().oexerccomptadata;

const {oExercCompta, oExercice}=require('../omodels/modelsSchema/index').toinit();
const {toInitOexerccomptaInstance,toOexercompta}=require('../features/oexerccompta/staticOxerccompta').toinit();
// const {tocreateOexerciceObject}=require('../features/oexercice/StaticOexercice').toinit();

const {odaremoveDupnumcompte} = require('../sharedkernel/odaUtility').toinit();
const {toInitializeInstance}=require('../sharedkernel/odainstance/toInitializeInstance').toinit()
const {getstreamdata$, odagetObserver,getapistreamdata$,getapiObserver}=require('../sharedkernel/odaSubscribe').toinit();
const { toCreateExerccomptadata$} = require('../features/oexerccompta/oexerccomptaRepository').toinit();
const { _tocreateoexerciceobject} = require('../features/oexercice/oexerciceRepository').toinit();
const {getobjOexercCompta} =require('../SharedKernel/staticObjects').toinit();


const {toseedoexercompta} = require('../features/oexerccompta/oexercomptaSeed').toinit();
// require('../config/ohadb').connectserver()
/* 

const getoreportdetail$ =  toCreateExerccomptadata$
getstreamdata$(getoreportdetail$(objoexerccomptadata())).subscribe(odagetObserver()); */

// console.log((toseedoexercompta));
 const tocreateOexerciceObject= function() {
  const  _getcurrentYear= _.maxBy(_.map(_.map(oexcomptadata,'oExercComptaId'), _.ary(parseInt, 1)));
  const _getPreviousYear= (_.maxBy(_.map(_.map(oexcomptadata,'oExercComptaId'), _.ary(parseInt, 1))))-1;
  let getcurrentObject = getobjOexercCompta(oexcomptadata, _.toString(_getcurrentYear)).odaObject();
  let  getPreviousYearObject = getobjOexercCompta(oexcomptadata, _.toString(_getPreviousYear)).odaObject()
  console.log(getPreviousYearObject)
  return {
    getcurrentObject:getcurrentObject,
    getPreviousYearObject:getPreviousYearObject
  } 
};
 

console.log(tocreateOexerciceObject());