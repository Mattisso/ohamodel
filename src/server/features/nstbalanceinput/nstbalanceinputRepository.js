"use strict";
var _ = require('lodash');
const async = require('async');
const  {nstBalanceInput} = require('../../omodels/modelsSchema/index').toinit();
const {togetnstbalanceinput, toBalanceinput,toUpdateBalanceinput, getobjBalanceinput,toInitNstBalanceinputInstance}=require('./staticNstbalanceinput').toinit();
const {odaByarg,getodafilter} =require('../../SharedKernel/odaFiltered').toinit();
const { svcodasave, svcodasave$, svcodaApiDel$,svcodaSearchBy,svcodaDelete, svcodaUpdate}=require('../../SharedKernel/odaservice/odaservice').toinit();
const { Observable } = require('rxjs');
const {getAllocomptes } = require('../ocompte/index').toinit();
const {getodaindex$, odaindex,getodaByid$}=require('../../SharedKernel/odaservice/dataservices').toinit();
const {svctoUpdateInstance$, toInitCustomInstance,svctoInitCustomInstance$,svcapiupdate$, svctoInitCustomInstance, toUpdateCustomInstance,svctoUpdateCustomInstance}=require('../../sharedkernel/odainstance/index').toinit();

const nstbalanceinputRepository = (function () {

  const toInitializeFinalInstance = function (model, body) {
    const data = toInitCustomInstance(model, body, toInitNstBalanceinputInstance);
    return data;
  };
  const toUpdateFinalInstance = function (body) {
    const data = toUpdateCustomInstance(body, toUpdateBalanceinput);
    return data;
  };
  const index = function (callback) {
    return odaindex(nstBalanceInput, togetnstbalanceinput, callback);
  };
  const getnstbalanceinputes$ = function () {
    return getodaindex$(nstBalanceInput, togetnstbalanceinput);
  };
  const getByid$ = function (requestparamid) {
    return getodaByid$(nstBalanceInput, togetnstbalanceinput, requestparamid, getobjBalanceinput);
  };
  const toCreateBalanceinputdata$ = function (requestBody) {
    return svctoInitCustomInstance$(nstBalanceInput, requestBody, toInitializeFinalInstance);
  };

  const toCreateBalanceinputdata = function (requestBody) {
    return svctoInitCustomInstance(nstBalanceInput, requestBody, toInitializeFinalInstance);
  };
  const insertBalanceInput = function (arr) {
    return svcodasave$(arr);
  };
  const savebalanceInput = function (arr) {
    return svcodasave(arr);
  };

  const toUpdateBalanceinputdata$ = function (requestBody) {
    return svctoUpdateInstance$(requestBody, toUpdateBalanceinput);
  };

  const toUpdateBalanceinputdata= function (requestBody) {
    return svctoUpdateCustomInstance(requestBody, toUpdateBalanceinput,toUpdateFinalInstance);
  };


  const editBalanceInput$ = function (body, requestparamid) {
    return svcapiupdate$(nstBalanceInput, body, requestparamid);
  };


  const editBalanceInput = function (body) {
    return svcodaUpdate(nstBalanceInput, body);
  };
  const odasearchby = function (body) {
    return svcodaSearchBy(nstBalanceInput, body);
  };
  const deleteBalanceInput$ = function (requestparamid) {
    return svcodaApiDel$(nstBalanceInput, requestparamid);
  };

  const deleteBalanceInput = function (requestparamid) {
    return svcodaDelete(nstBalanceInput, requestparamid);
  };
  const getloadnstbalanceinputs = function (callback) {
    let _arr = [];
    return odaindex(nstBalanceInput, togetnstbalanceinput, function (err, nstbalanceinputs) {
      if (err) {
        throw (err);
      } else {
        async.eachSeries(nstbalanceinputs, function (nstbalanceinput, firstcallback) {
          async.eachSeries(nstbalanceinput.CompteNumber, function (comptenumber, secondcallback) {
            var _sobj = odaByarg('odacomptenumber', comptenumber);
            var obj = _.assign({}, nstbalanceinput, _sobj);
            _arr.push(obj);
            secondcallback();
          }, function (err) {
            if (err) {
              throw err;
            } else {
              firstcallback();
            }
          });
        }, function (err) {
          if (err) {
            throw err;
          } else {
            callback(null, _arr);
          }
        });
      }

    });
  };
  const getloadnstbalanceinputs$ = Observable.create(function (observer) {
      try {
        return getloadnstbalanceinputs(function (err, nstbalanceinputs) {
          if (err) {
            observer.next(err);
          } else {
            return getAllocomptes(function (err, datas) {
              if (err)
              observer.next(err);
              const _comptenumber = _.map(datas, 'CompteNumber');
              const filteredinputs = getodafilter(nstbalanceinputs, odaByarg('odacomptenumber', _comptenumber));
              observer.next((filteredinputs));
              setTimeout(function () {
                observer.complete();
              }, 100);
            });

          }
        });
      } catch (err) {
        observer.error(err);
      }

    });

  function toinit() {
    return {
      getnstbalanceinputes$: getnstbalanceinputes$(),
      index: index,
      getloadnstbalanceinputs$: getloadnstbalanceinputs$,
      getloadnstbalanceinputs: getloadnstbalanceinputs,
      getByid$: getByid$,
      insertBalanceInput: insertBalanceInput,
      toCreateBalanceinputdata$: toCreateBalanceinputdata$,
      toUpdateBalanceinputdata$: toUpdateBalanceinputdata$,
      toUpdateBalanceinputdata: toUpdateBalanceinputdata,
      editBalanceInput$: editBalanceInput$,
      deleteBalanceInput$: deleteBalanceInput$ ,
      deleteBalanceInput:deleteBalanceInput,
      //    toDeleteBalanceinputdata$: toDeleteBalanceinputdata$,
      odasearchby: odasearchby,
      toCreateBalanceinputdata:toCreateBalanceinputdata,
      savebalanceInput:savebalanceInput,
      toUpdateFinalInstance:toUpdateFinalInstance,
      editBalanceInput:editBalanceInput


    };
  }
  return {
    toinit: toinit
  };

})();
module.exports = {
  toinit: nstbalanceinputRepository.toinit
};
