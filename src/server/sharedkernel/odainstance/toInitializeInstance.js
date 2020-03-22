"use strict";
const{forEach}  = require('lodash');
const { isValid, getStringValue, replaceNullToZero , hasitem} = require('../odaUtility').toinit();
const {odacriterias} = require('../objQryParams').toinit();
const { tocreateinstance,toupdateinstance} = require('./toOdaInstance').toinit();

//var async = require('async')
const toInitializeInstance = (function () {
  function tocreateOthersBuild(model, requestBody, fn) {
    let DetailCount = 0,
    arrArg = [];
    const _getdata = tocreateinstance(model, requestBody, fn);
    if ((!hasitem(_getdata, arrArg)))
      arrArg.push(_getdata);
    return {
      DetailCount: DetailCount,
      arrArg: arrArg.slice()
    };
  }
  function tocreateBuild(model, requestBody, fn) {
    let DetailCount = 0,
    TotalSoldeDebit = 0,
    TotalSoldeCredit = 0,
    arrArg = [];
    const _getdata = tocreateinstance(model, requestBody, fn);
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

  const toInitializeOtherInstance = function (model, arr, f) {
    const data = tocreateOthersBuild(model, arr, f);
    return data;
  };

  const toseedBuild = function (model, arr, f) {
    let DetailCount = 0,
    TotalSoldeDebit = 0,
    TotalSoldeCredit = 0,
    arrArg = [];
    // const _getdata;
    forEach(arr, function (o) {
      const _getdata = tocreateinstance(model, o, f);
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
    });
    return {
      TotalSoldeDebit: TotalSoldeDebit,
      TotalSoldeCredit: TotalSoldeCredit,
      DetailCount: DetailCount,
      arrArg: arrArg.slice()
    };
  };

  const toseedOthersBuild = function (model, arr, f) {
    let DetailCount = 0,
    arrArg = [];
    // const _getdata;
    forEach(arr, function (o) {
      const _getdata = tocreateinstance(model, o, f);
      if ((!hasitem(_getdata, arrArg)))
        arrArg.push(_getdata);
      if (isValid(arrArg.length) === true) {
        DetailCount = arrArg.length;
      }
    });
    return {
      DetailCount: DetailCount,
      arrArg: arrArg.slice()
    };
  };
  const toseedInstance = function (model, arr, f) {
    const data = toseedBuild(model, arr, f);
    return odacriterias(data);
  };

  const toseedOthersInstance = function (model, arr, f) {
    const data = toseedOthersBuild(model, arr, f);
    return data;
  };
  function toupdateOtherBuild(requestBody, fn) {
    let DetailCount = 0,
    arrArg = [];
    const _getdata = toupdateinstance(requestBody, fn);
    // console.log(JSON.stringify(_getdata));
    if ((!hasitem(_getdata, arrArg)))
      arrArg.push(_getdata);
    if (isValid(arrArg.length) === true) {
      DetailCount = arrArg.length;
    }
    return {
      DetailCount: DetailCount,
      arrArg: arrArg.slice()
    };
  }
  function toupdateBuild(requestBody, fn) {
    let DetailCount = 0,
    TotalSoldeDebit = 0,
    TotalSoldeCredit = 0,
    arrArg = [];
    const _getdata = toupdateinstance(requestBody, fn);
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
  const toUpdateInstance = function (body, f) {
    const data = toupdateBuild(body, f);
    return odacriterias(data);
  };
  const toapiUpdateInstance = function (body, f) {
    const _getdata = toupdateinstance(body, f);
    return _getdata;
  };
  const toapiUpdateOtherInstance = function (body, f) {
    const _getdata = toupdateOtherBuild(body, f);
    return _getdata;
  };
  function todeleteBuild(requestBody) {
    let DetailCount = 0,
    arrArg = [];
    var _getdata = toupdateinstance(requestBody);
    // console.log(JSON.stringify(_getdata));
    if ((!hasitem(_getdata, arrArg)))
      arrArg.push(_getdata);

    if (isValid(arrArg.length) === true) {
      DetailCount = arrArg.length;
    }
    return {
      odasum: {
        DetailCount: DetailCount,
      },
      arrArg: arrArg.slice()
    };
  }
  const toDeleteInstance = function (body) {
    const data = todeleteBuild(body);
    return data;
  };

  function toinit() {
    return {
      toInitializeInstance: toInitializeInstance,
      toInitializeOtherInstance: toInitializeOtherInstance,
      toDeleteInstance: toDeleteInstance,
      toseedInstance: toseedInstance,
      toseedOthersInstance: toseedOthersInstance,
      toUpdateInstance: toUpdateInstance,
      toapiUpdateInstance: toapiUpdateInstance,
      toapiUpdateOtherInstance: toapiUpdateOtherInstance

    };
  }
  return {
    toinit: toinit
  };

})();
module.exports = {
  toinit: toInitializeInstance.toinit
};
