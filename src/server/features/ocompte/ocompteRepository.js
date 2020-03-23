
"use strict";

const _ = require('lodash');
const  {oCompte} = require('../../omodels').toinit();
const {togetocompte,toUpdateocompte,getobjOcompte,toOCompte}=require('./StaticOcompte').toinit();
const { combineLatest, Observable, of, pipe, from } = require('rxjs');
const { filter, map, tap, pluck, find } = require('rxjs/operators');
const {getodaindex$, odaindex,getodaByid$,toOdaUpdate$,toOdaCreate$}=require('../../SharedKernel/dataservices').toinit();
const {svctoInitializeInstance,svctoapiUpdateInstance,svctoUpdateInstance,svcodasave$,svcapiupdate$, svcodaApiDel$,svcodaSearchBy}=require('../../SharedKernel/odaservice').toinit();

const ocompteRepository = (function () {

    const  removeOcompte$= function(model,item) {
        return   svcodaDel$(model,item);
          };
    
      const insertoCompte$ = function(arr){
        return   svcodasave$(arr);
      };
    const seedresult$= concat(removeOcompte$(oCompte,'oCompte'),insertoCompte$(toseedarray));
    
  const index = function (callback) {
    return odaindex(oCompte, togetocompte, callback);
  };
  const getocomptes$ = function () {
    return getodaindex$(oCompte, togetocompte);
  };
  const getByid$ = function (requestparamid) {
    return getodaByid$(oCompte, togetocompte, requestparamid, getobjOcompte);
  };
  const toCreateOComptedata$ = function (requestBody,requestparamid) {
    return toOdaCreate$(oCompte, requestBody,requestparamid, toOCompte, svctoInitializeInstance);
  };
  const insertOCompte$ = function (arr) {
    return svcodasave$(arr);
  };
  const toUpdateOComptedata$ = function (requestBody,requestparamid) {
    return toOdaUpdate$(requestBody,requestparamid, toUpdateocompte, svctoapiUpdateInstance);
  };
  const editOCompte$ = function (body, requestparamid) {
    return svcapiupdate$(oCompte, body, requestparamid);
  };
  const odasearchBy = function (body) {
    return svcodaSearchBy(oCompte, body);
  };
  const deleteOCompte$ = function (requestparamid) {
    return svcodaApiDel$(oCompte, requestparamid);
  };
  function toinit() {
    return {
      getocomptes$: getocomptes$(),
      getAllocomptes: index,
      getByid$: getByid$,
      toCreateOComptedata$: toCreateOComptedata$,
      insertOCompte$: insertOCompte$,
      toUpdateOComptedata$: toUpdateOComptedata$,
      editOCompte$: editOCompte$,
      odasearchBy: odasearchBy,
      deleteOCompte$: deleteOCompte$

    };
  }

  return {
    toinit: toinit
  };

})();
module.exports = {
  toinit: ocompteRepository.toinit
};
