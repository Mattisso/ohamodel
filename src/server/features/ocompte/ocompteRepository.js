
"use strict";
const  {oCompte} = require('../../omodels/modelsSchema/index').toinit();
const {togetocompte,toUpdateocompte,getobjOcompte,toOCompte}=require('./StaticOcompte').toinit();
const {ocomptedata} = require('../../seed/data-seed/index').toinit();
const { concat } = require('rxjs');
const {getodaindex$, odaindex,getodaByid$}=require('../../sharedkernel/odaservice/dataservices').toinit();
const {svcodasave$, svcapiupdate$,svcodaApiDel$,svcodaSearchBy,svcodaDel$}=require('../../sharedkernel/odaservice/odaservice').toinit();
const {toInitializeInstance, svctoInitializeInstance$,svctoUpdateInstance$}=require('../../sharedkernel/odainstance/index').toinit(); 
const ocompteRepository = (function () {

  const toseedarray=toInitializeInstance(oCompte,ocomptedata);
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
  const toCreateOComptedata$ = function (requestBody,) {
    return svctoInitializeInstance$(oCompte, requestBody);
  };
  const insertOCompte$ = function (arr) {
    return svcodasave$(arr);
  };
  const toUpdateOComptedata$ = function (requestBody) {
    return svctoUpdateInstance$(requestBody, toUpdateocompte);
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
      deleteOCompte$: deleteOCompte$,
      seedresult$:seedresult$,
      toseedarray:toseedarray

    };
  }

  return {
    toinit: toinit
  };

})();
module.exports = {
  toinit: ocompteRepository.toinit
};
