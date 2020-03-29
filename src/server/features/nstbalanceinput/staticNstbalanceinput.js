//  async = require('async')
"use strict";
const { find, map, assign, filter, forEach } = require('lodash');

const { isValid, odauditObj, getStringValue, replaceNullToZero } = require('../../SharedKernel/odaUtility').toinit();
const { getTotalSoldecredit,getTotalSoldedebit,getTotalCount } = require('../../SharedKernel/odaStats').toinit();

const staticNstbalanceinput = (function () {
  let  _arrbalanceinputs = [];

    const odaqueryselector = function (obj) {
      let selector;
      if (isValid(obj.NumCompte) === true && isValid(obj.IntitulCompte) === true
         && isValid(obj.SoldeDebit) === true && obj.SoldeDebit > 0) {
        selector = true;
      } else if (isValid(obj.NumCompte) === true && isValid(obj.IntitulCompte) == true
         && isValid(obj.SoldeCredit) === true && obj.SoldeCredit > 0) {
        selector = true;
      } else {
        selector = false;
      }
      return selector;
    };

    const togetnstbalanceinput = function (argOne) {
      let initObj, odauditobj;
      return map(argOne, function (obj) {
        initObj = {
          "id": obj.id,
          "NumCompte": obj.NumCompte,
          "IntitulCompte": obj.IntitulCompte,
          "SoldeCredit": obj.SoldeCredit ? obj.SoldeCredit : 0,
          "SoldeDebit": obj.SoldeDebit ? obj.SoldeDebit : 0,
          "CompteNumber": obj.CompteNumber
        };
        odauditobj = odauditObj(obj);
        return assign({}, initObj, odauditobj);

      }

      );
    };
    const getobjBalanceinput = function (arr, value) {
      if (isValid(value) === true) {
        const validate = find(arr, function (o) {
          return o.NumCompte === getStringValue(value)
            || o.IntitulCompte === getStringValue(value)
            || o.id === getStringValue(value);
        });
        return {
          odaObject: function () {
            return validate;
          }
        };
      }else {
        return new Error(
          `Invalid  ${value}`);
      }

    };
  function toBalanceinput(o) {
    let isvalid=odaqueryselector(o);
    if (isvalid===true) {
    return (
      {
        "NumCompte": o.NumCompte,
        "IntitulCompte": o.IntitulCompte,
        "SoldeDebit": o.SoldeDebit,
        "SoldeCredit": o.SoldeCredit
      });
  }
}

  function toUpdateBalanceinput(body) {
    let d = new Date(), result={};
    if (result) {
      {
          result.id = body.id,
          result.NumCompte = body.NumCompte,
          result.IntitulCompte = body.IntitulCompte,
          result.SoldeDebit = body.SoldeDebit,
          result.SoldeCredit = body.SoldeCredit,
          result.ModifiedOn = d;
      }
    }
    return result;
  }


  function toinit() {
    return {
      toBalanceinput: toBalanceinput,
      toUpdateBalanceinput: toUpdateBalanceinput,
      togetnstbalanceinput:togetnstbalanceinput,
      getobjBalanceinput:getobjBalanceinput,
      odaqueryselector:odaqueryselector
    };
  }

  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: staticNstbalanceinput.toinit
};
