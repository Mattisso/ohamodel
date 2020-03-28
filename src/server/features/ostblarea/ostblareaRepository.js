
"use strict";

const _ = require('lodash');
const  {oStblArea} = require('../../omodels/modelsSchema/index').toinit();
const {getobjOcompte} =require('../../SharedKernel/index').toinit().staticObjects;
const { combineLatest, Observable, of, pipe, from } = require('rxjs');
const { filter, map, tap, pluck, find } = require('rxjs/operators');
const { getocomptes$ } = require('../../features/ocompte/ocompteRepository').toinit();
const { odareduceArray } = require('../../SharedKernel/odaUtility').toinit();
const {toOstblarea,togetostblarea,toUpdateostblarea,getobjOstblarea}=require('./staticOstblarea').toinit();
const { ostblareadata } = require('../../seed/data-seed/index').toinit();
const {getodaindex$, odaindex,getodaByid$,toOdaUpdate$,toOdaCreate$}=require('../../SharedKernel/odaservice/dataservices').toinit();
const {svctoInitializeInstance,svctoapiUpdateInstance,svctoUpdateInstance,svcodasave$,svcapiupdate$, svcodaApiDel$,svcodaSearchBy}=require('../../SharedKernel/odaservice/odaservice').toinit();
const { svctoInitializeInstance$,svctoUpdateInstance$}=require('../../sharedkernel/odainstance/index').toinit(); 

const ostblareaRepository = (function () {
  const index = function (callback) {
    return odaindex(oStblArea, togetostblarea, callback);
  };

  const getostblareas$ = function () {
    return getodaindex$(oStblArea, togetostblarea);
  };
  const getByid$ = function (requestparamid) {
    return getodaByid$(oStblArea, togetostblarea, requestparamid, getobjOstblarea);
  };
  const toCreateostblareadata$ = function (requestBody) {
    return svctoInitializeInstance$(oStblArea, requestBody, toOstblarea);
  };
  const insertostblarea$ = function (arr) {
    return svcodasave$(arr);
  };
  const toUpdateostblareadata$ = function (requestBody) {
    return svctoUpdateInstance$(requestBody, toUpdateostblarea);
  };

  const editostblarea$ = function (body, requestparamid) {
    return svcapiupdate$(oStblArea, body, requestparamid);
  };
  const odasearchBy = function (body) {
    return svcodaSearchBy(oStblArea, body);
  };
  const Deleteostblarea$ = function (requestparamid) {
    return svcodaApiDel$(oStblArea, requestparamid);
  };

  function toinit() {
    return {
      getostblareas$: getostblareas$(),
      index: index,
      getByid$:getByid$,
      Insertostblarea$:insertostblarea$,
      toCreateostblareadata$:toCreateostblareadata$,
      toUpdateostblareadata$:toUpdateostblareadata$,
      odasearchBy:odasearchBy,
      editostblarea$:editostblarea$,
      Deleteostblarea$:Deleteostblarea$

    };
  }

  return {
    toinit: toinit
  };



}
)();
module.exports = {
  toinit: ostblareaRepository.toinit
};

