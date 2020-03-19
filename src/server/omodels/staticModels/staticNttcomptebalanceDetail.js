"use strict";
const { find, map, assign, filter, forEach } = require('lodash');
const { odauditObj, getStringValue, replaceNullToZero,getodaAggreateData} = require('../../sharedkernel/odaStats').toinit();
const {isValid}=require('../../sharedkernel/odaUtility').toinit();

const staticNttcomptebalance = (function () {

  const modelObject = {

    nttcomptebalanceKey:
      {
        type: ObjectId,
        ref: 'nttCompteBalance'
      }
  }
  
  class nttcomptebalanceDetailClass {
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
  const togetnttcomptebalancedetail = function (argOne) {
    let initObj,
    odauditobj;
    return map(argOne, function (obj) {
      initObj = {
        "id": obj.id,
        "nttcomptebalanceKey": getStringValue(obj.nttcomptebalanceKey),
        "NumCompte": obj.NumCompte,
        "IntitulCompte": obj.IntitulCompte,
        "SoldeCredit": obj.SoldeCredit,
        "SoldeDebit": obj.SoldeDebit,
      };
      odauditobj = odauditObj(obj);
      return assign({}, initObj, odauditobj);
    });

  };
  function queryselector(obj) {
    let selector ;
    if (isValid(obj.NumCompte) === true && isValid(obj.IntitulCompte) === true
        || isValid(obj.NumCompte) === true
       && (isValid(obj.IntitulCompte) == true) ) {
      selector = true;
    } else {
      selector = false;
    }
    return selector;
  }

  const toCompteBalanceDetail = function (requestparamid, obj) {
    let isvalid = queryselector(obj),
     _arrbalanceDetails =[];
    if (isvalid === true  && replaceNullToZero(obj.SoldeDebit)!==0
    || isvalid === true  && replaceNullToZero(obj.SoldeCredit)!==0 ) {
      _arrbalanceDetails.push({
        "nttcomptebalanceKey": requestparamid,
        "NumCompte": obj.NumCompte,
        "IntitulCompte": obj.IntitulCompte,
        "SoldeCredit": replaceNullToZero(obj.SoldeCredit),
        "SoldeDebit": replaceNullToZero(obj.SoldeDebit)
      });
    }
    return {
      "getodaAggreateData":  getodaAggreateData(_arrbalanceDetails),
      "_arrbalanceDetails":_arrbalanceDetails.slice()
      
      };
  };
  const toLoadCompteBalanceDetail = function (obj) {
    let isvalid = queryselector(obj);
    if (isvalid === true  && (replaceNullToZero(obj.SoldeDebit))!==0
    || isvalid === true  && (replaceNullToZero(obj.SoldeCredit))!==0 ) {
      return ({
        "nttcomptebalanceKey": obj.nttcomptebalanceKey,
        "NumCompte": obj.NumCompte,
        "IntitulCompte": obj.IntitulCompte,
        "SoldeCredit": replaceNullToZero(obj.SoldeCredit),
        "SoldeDebit": replaceNullToZero(obj.SoldeDebit)
      });
    }
  };
  function toUpdateCompteBalanceDetail(body) {
    let d = new Date(), result={};
    if (result) {
      {
          result.id = body.id,
          result.nttcomptebalanceKey = body.nttcomptebalanceKey,
          result.NumCompte = body.NumCompte,
          result.IntitulCompte = body.IntitulCompte,
          result.SoldeDebit = body.SoldeDebit,
          result.SoldeCredit = body.SoldeCredit,
          result.ModifiedOn = d;
      }
    }
    return result;
  }
  const getobjnttcomptebalanceDetail = function (arr, value) {
    if (isValid(value) === true) {
      const validate = find(arr, function (o) {
          return o.NumCompte === getStringValue(value)
           || o.nttcomptebalanceDetailKey === getStringValue(value)
           || o.id === getStringValue(value)
           || o.nttcomptebalanceKey === getStringValue(value);
        });
      return {
        odaObject: function () {
          return validate;
        }

      };
    } else {
      return new Error(
`Invalid  ${value}`);
    }
  };
  function toinit() {
    return {
      modelObject:modelObject,
      nttcomptebalanceDetailClass:nttcomptebalanceDetailClass,
      toCompteBalanceDetail: toCompteBalanceDetail,
      togetnttcomptebalancedetail: togetnttcomptebalancedetail,
      toLoadCompteBalanceDetail:toLoadCompteBalanceDetail,
      toUpdateCompteBalanceDetail:toUpdateCompteBalanceDetail,
      getobjnttcomptebalanceDetail:getobjnttcomptebalanceDetail
    };
  }
  return {
    toinit: toinit
  };

})();
module.exports = {
  toinit: staticNttcomptebalance.toinit
};
