"use strict";
const{forEach}  = require('lodash');
const { isValid, getStringValue, replaceNullToZero , hasitem, tocreateinstance} = require('./odaUtility').toinit();
const {odacriterias} = require('./objQryParams').toinit();

//var async = require('async')
const toInitializeInstance = (function () {

  /* function tocreateObject(model, o, fn) {
    if (isValid(o) === true) {
      return new model(fn(o));
    }
  } */

    function tocreateBuild(model, requestBody, fn) {
      let DetailCount = 0,
      TotalSoldeDebit = 0,
      TotalSoldeCredit = 0,
      arrArg = [];
    const _getdata = tocreateinstance(model, requestBody, fn);
    // console.log(JSON.stringify(_getdata));
    if ((!hasitem(_getdata, arrArg)))
      arrArg.push(_getdata);

    if (isValid(_getdata.SoldeCredit) === true) {
      TotalSoldeCredit += replaceNullToZero(_getdata.SoldeCredit);
    }
    if (isValid(_getdata.totalSoldeCredit) === true) {
      TotalSoldeCredit += replaceNullToZero(_getdata.totalSoldeCredit);
    }
    if (isValid(_getdata.SoldeDebit) === true) {
      TotalSoldeDebit += replaceNullToZero(_getdata.SoldeDebit);
    }
    if (isValid(_getdata.totalSoldeDebit) === true) {
      TotalSoldeDebit += replaceNullToZero(_getdata.totalSoldeDebit);
    }
    if (isValid(arrArg.length) === true) {
      DetailCount = arrArg.length;
    }
    return {
      TotalSoldeDebit: TotalSoldeDebit,
      TotalSoldeCredit: TotalSoldeCredit,
      DetailCount: DetailCount,
      arrArg: arrArg.slice()
    };
  }
  const toInitializeInstance = function (model, body, f) {
    const data = tocreateBuild(model, body, f);
    return odacriterias(data);
  };

  function toinit() {
    return {
      toInitializeInstance: toInitializeInstance
    //  tocreateObject: tocreateObject
    };
  }
  return {
    toinit: toinit
  };

})();
module.exports = {
  toinit: toInitializeInstance.toinit
};
