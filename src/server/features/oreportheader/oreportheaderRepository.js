
"use strict";

var _ = require('lodash');
const { oReportHeader } = require('../../omodels').toinit();
const { togetoreportheader,getObjoreportheader,toUpdateoreportheader,toOreportheader} = require('./staticOreportheader').toinit();
const { odaByarg,getodafilter} = require('../../SharedKernel/index').toinit().filtered;

const {getodaindex$, odaindex,getodaByid$,toOdaUpdate$,toOdaCreate$}=require('../../SharedKernel/dataservices').toinit();
const {svctoInitializeInstance,svctoapiUpdateInstance,svctoUpdateInstance,svcodasave$,svcapiupdate$, svcodaApiDel$,svcodaSearchBy}=require('../../SharedKernel/odaservice').toinit();
const { combineLatest, Observable, of, pipe, from } = require('rxjs');
const { filter, map, tap, pluck, find } = require('rxjs/operators');

var oreportheaderRepository = (function () {

  const index = function (callback) {
    return odaindex(oReportHeader,togetoreportheader,callback);
  };

  const getreportheaders$ = function () {
    return getodaindex$(oReportHeader, togetoreportheader);
  };
  const getByid$ = function (requestparamid) {
    return getodaByid$(oReportHeader, togetoreportheader, requestparamid, getObjoreportheader);

  };
  const toCreateoreportheaderdata$ = function (requestBody,requestparamid) {

    return toOdaCreate$(oReportHeader, requestBody,requestparamid, toOreportheader, svctoInitializeInstance);
  };
  const Insertoreportheader$ = function (arr) {
    return svcodasave$(arr);
  };
  const toUpdateoreportheaderdata$ = function (requestBody) {
    return toOdaUpdate$(requestBody, toUpdateoreportheader, svctoapiUpdateInstance);
  };

  const editoreportheader$ = function (body, requestparamid) {
    return svcapiupdate$(oReportHeader, body, requestparamid);
  };
  const odasearchBy = function (body) {
    return svcodaSearchBy(oReportHeader, body);
  };
  const Deleteoreportheader$ = function (requestparamid) {
    return svcodaApiDel$(oReportHeader, requestparamid);
  };


  function toinit() {
    return {
      getreportheaders$: getreportheaders$(),
      index: index,
      getByid$:getByid$,
      toCreateoreportheaderdata$:toCreateoreportheaderdata$,
      Insertoreportheader$:Insertoreportheader$,
      editoreportheader$:editoreportheader$,
      odasearchBy:odasearchBy,
      Deleteoreportheader$:Deleteoreportheader$,
      toUpdateoreportheaderdata$:toUpdateoreportheaderdata$

    };
  }

  return {
    toinit: toinit
  };



}
)();
module.exports = {
  toinit: oreportheaderRepository.toinit
};

