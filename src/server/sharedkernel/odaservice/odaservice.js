"use strict";
const {odaupdate$, odasave$, odaseedUsersave$,odaDel$,odaLoadupdate$,odaSearchBy}=require('../odarepository/odarepository').toinit();

const {odasave}=require('../odarepository/odarepos').toinit();
const {odaApiBulkDel$, odaApisave$,odapiDel$}=require('../odarepository/odaApirepository').toinit();

const {isValid } = require('../odaUtility').toinit();

const  odaservice = (function () {

  const svcodasave$=function(option) {
    return odasave$(option);
  };


  const svcodasave=function(option) {
    return odasave(option);
  };

  const svcodaSearchBy=function(model,obj) {
    if(isValid(obj)===true){
      return odaSearchBy(model,obj);
    }
  };
  const svcodaseedUsersave$=function(model, option) {
    return odaseedUsersave$(model,option);
  };
  const svcodaDel$=function(model, item) {
    return odaDel$(model,item);
  };
  const svcodaApisave$=function(argone) {
    return odaApisave$(argone);
  };

  const svcodaApiBulkDel$=function(model, item) {
    return odaApiBulkDel$(model,item);
  };
  const svcodaApiDel$=function(model, requestparamid) {
    return odapiDel$(model,requestparamid);
  };


  function toinit() {
    return {
      svcodasave$:svcodasave$,
      svcodaseedUsersave$:svcodaseedUsersave$,
      svcodaDel$:svcodaDel$,
      svcodaApisave$:svcodaApisave$,
      svcodaApiBulkDel$:svcodaApiBulkDel$,
      svcodaApiDel$:svcodaApiDel$,
      svcodaSearchBy:svcodaSearchBy,
      svcodasave:svcodasave

    };
  }
return {
  toinit: toinit
};

}
)();
module.exports= {
toinit:odaservice.toinit
};


