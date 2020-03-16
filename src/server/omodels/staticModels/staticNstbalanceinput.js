'use strict'
const { find, map, assign, filter, forEach } = require('lodash');
const { odauditObj, getStringValue, replaceNullToZero,getodaAggreateData} = require('../../sharedkernel/odaStats').toinit();
const {isValid}=require('../../sharedkernel/odaUtility').toinit();

const staticNstbalanceinput = (function () {

  class nstbalanceinputClass {
    constructor(NumCompte, IntitulCompte, SoldeCredit, SoldeDebit) {
      this._NumCompte = NumCompte;
      this._IntitulCompte = IntitulCompte;
      this._SoldeCredit = SoldeCredit;
      this._SoldeDebit = SoldeDebit;   
    }
    get numcompte() {
      this._NumCompte;
    }
    set numcompte(NumCompte) {
      this._NumCompte = NumCompte;
      return this;
    }
    get intitulcompte() {
      this._IntitulCompte;
    }
    set intitulcompte(IntitulCompte) {
      this._IntitulCompte = IntitulCompte;
      return this;
    }
    get soldecredit() {
      this._SoldeCredit;
    }
    set soldecredit(SoldeCredit) {
      this._SoldeCredit = SoldeCredit;
      return this;
    }
    get comptenumber() {
      this._CompteNumber;
    }
    set comptenumber(CompteNumber) {
      this._CompteNumber = CompteNumber;
      return this;
    }
    get soldedebit() {
      this._SoldeDebit;
    }
    set soldedebit(SoldeDebit) {
      this._SoldeDebit = SoldeDebit;
      return this;
    }  
    
  }
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
  const toBuildBalanceinput =function (o) {
    let _arrbalanceinputs =[];
  let isvalid=odaqueryselector(o);
  if (isvalid===true) {
    _arrbalanceinputs.push(
    {
      "NumCompte": o.NumCompte,
      "IntitulCompte": o.IntitulCompte,
        "SoldeCredit":  replaceNullToZero(o.SoldeCredit)? replaceNullToZero(o.SoldeCredit) :0,
      "SoldeDebit": replaceNullToZero(o.SoldeDebit)? replaceNullToZero(o.SoldeDebit): 0
    });
}
return {
  "getodaAggreateData":  getodaAggreateData(_arrbalanceinputs),
  "_arrbalanceinputs":_arrbalanceinputs.slice()
  
  };
}

const toUpdateBalanceinput= function (body) {
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
      nstbalanceinputClass: nstbalanceinputClass,
      toBuildBalanceinput: toBuildBalanceinput,
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

const obj ={
  "NumCompte": "431200",
  "IntitulCompte": "Dotation CENTRAFRIQUE",
  "SoldeCredit": 41326938
}
// console.log(staticNstbalanceinput.toinit().toBuildBalanceinput(obj));