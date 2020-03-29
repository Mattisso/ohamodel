'use strict';
/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */
const _ = require('lodash');
// var omodel = require('../../omodels/nttCompteBalance.js');
//const { ocompterefencedata } = require('../../seed/data-seed/index').toinit();
const {nttCompteBalance} = require('../../omodels/index').toinit();

const { base, staticObjects, filtered, filteredBy, odaObjects } = require('../../SharedKernel/index').toinit();
const {tonttcomptebalance}=require('./staticNttcomptebalance').toinit();

const { combineLatest, Observable, of, pipe, from, concat } = require('rxjs');
const { filter, map, tap, pluck, find, shareReplay, concatMap } = require('rxjs/operators');
const {svctoseedInstance, svcodaDel$, svcodasave$, svcodaupdate$} = require('../../SharedKernel/odaservice').toinit();
const { odaremove} = require('../../SharedKernel/odaUtility').toinit();
const { reducegroupby} = require('../../SharedKernel/odaFiltered').toinit();

const {getloadnttcomptebalanceData$} = require('./nttcomptebalanceRepository').toinit();

const loadnttcomptebalance = (function () {

  const _removeData$ = function (model) {
    return svcodaDel$(model,'nttCompteBalance');
  };
  const getObserverdata = pipe(
      map(function (n) {
        const filtereddatas= reducegroupby(n);
        return svctoseedInstance(nttCompteBalance, filtereddatas, tonttcomptebalance);
      }) // ,
      // ,tap(ev => console.log(ev))
    );
  const toloadnttcomptebalancedata$ = getObserverdata(getloadnttcomptebalanceData$);

  const removenttcomptebalance$ = _removeData$(nttCompteBalance);

  const _insertnttcomptebalance = function (arr) {
    return svcodasave$(arr);
  };
  const insertnttcomptebalance$ = toloadnttcomptebalancedata$.pipe(concatMap(function (x) {
    const finalObj =odaremove(x);
        return _insertnttcomptebalance(finalObj);
      }));
      const loadnttcomptebalance$ = concat(removenttcomptebalance$, insertnttcomptebalance$);

  function toinit() {
    return {
      result$: loadnttcomptebalance$
      ,toloadnttcomptebalancedata$:toloadnttcomptebalancedata$
    };
  }

  return {
    toinit: toinit
  };

})();
module.exports = {
  toinit: loadnttcomptebalance.toinit
};
