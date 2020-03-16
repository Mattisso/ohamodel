'use strict'
const mongoose = require('mongoose'),
 ObjectId = mongoose.SchemaTypes.ObjectId;
const {find,  map,  assign,  filter,  forEach} = require('lodash');
const {  odauditObj,  getStringValue,  replaceNullToZero,  getodaAggreateData} = require('../../sharedkernel/odaStats').toinit();
const {
  isValid
} = require('../../sharedkernel/odaUtility').toinit();

const staticNstbalance = (function () {
  class nstbalanceClass {
    constructor(OexercComptaKey, OtableauposteKey, OreferenceKey, OcompteKey, NumCompte, IntitulCompte, SoldeCredit, SoldeDebit) {
      this._OexercComptaKey = OexercComptaKey;
      this._OtableauposteKey = OtableauposteKey;
      this._OreferenceKey = OreferenceKey;
      this._OcompteKey = OcompteKey;
      this._IntitulCompte = IntitulCompte;
      this._NumCompte = NumCompte;
      this._SoldeDebit = SoldeDebit;
      this._SoldeCredit = SoldeCredit;
    }

    get oexerccomptakey() {
      return this._OexercComptaKey;
    }
    get otableaupostekey() {
      return this._OtableauposteKey;
    }
    get oreferencekey() {
      return this._OreferenceKey;
    }
    get ocomptekey() {
      return this._OcompteKey;
    }
    get intitulcompte() {
      return this._IntitulCompte;
    }
    get numcompte() {
      return this._NumCompte;
    }
    get soldedebit() {
      return this._SoldeDebit;
    }
    get soldecredit() {
      return this._SoldeCredit;
    }

    set oexerccomptakey(OexercComptaKey) {
      this._OexercComptaKey = OexercComptaKey;
      return this;
    }
    set otableaupostekey(OtableauposteKey) {
      this._OtableauposteKey = OtableauposteKey;
      return this;
    }
    set oreferencekey(OreferenceKey) {
      this._OreferenceKey = OreferenceKey;
      return this;
    }
    set ocomptekey(OcompteKey) {
      this._OcompteKey = OcompteKey;
      return this;
    }
    set intitulcompte(IntitulCompte) {
      this._IntitulCompte = IntitulCompte;
      return this;
    }
    set numcompte(NumCompte) {
      this._NumCompte = NumCompte;
      return this;
    }
    set soldedebit(SoldeDebit) {
      this._SoldeDebit = SoldeDebit;
      return this;
    }
    set soldecredit(SoldeCredit) {
      this._SoldeCredit = SoldeCredit;
      return this;
    }
  }
  const togetnstbalance = function (argOne) {
    let initObj,
    odauditobj;
    return map(argOne, function (obj) {
      initObj = {
        "id": obj.id,
        "OreferenceKey": getStringValue(obj.OreferenceKey),
        "OtableauposteKey": getStringValue(obj.OtableauposteKey),
        "OexercComptaKey": getStringValue(obj.OexercComptaKey),
      //  "OcompteKey": getStringValue(obj.OcompteKey),
        "NumCompte": obj.NumCompte,
        "IntitulCompte": obj.IntitulCompte,
        "SoldeCredit": obj.SoldeCredit,
        "SoldeDebit": obj.SoldeDebit
      };
      odauditobj = odauditObj(obj);
      return assign({}, initObj, odauditobj);
    });
  };
  const tonstbalance = function (o) {
    let _arrnstbalances =[];
    let isvalid=queryselector(o);
    if (isvalid===true) {
      _arrnstbalances.push({
        "OreferenceKey": o.OreferenceKey,
        "OtableauposteKey": o.OtableauposteKey,
        "OexercComptaKey": o.OexercComptaKey,
   //     "OcompteKey": o.OcompteKey,
        "NumCompte": o.NumCompte,
        "IntitulCompte": o.IntitulCompte,
        "SoldeCredit":  replaceNullToZero(o.SoldeCredit)? replaceNullToZero(o.SoldeCredit) :0,
        "SoldeDebit": replaceNullToZero(o.SoldeDebit)? replaceNullToZero(o.SoldeDebit): 0,
        // "id":obj.id
      });
    }
    return {
      "getodaAggreateData":  getodaAggreateData(_arrnstbalances),
      "_arrnstbalances":_arrnstbalances.slice()
      
      };
  };

  function queryselector(obj) {
    let selector;
    if (isValid(obj.OreferenceKey) === true
    && (isValid(obj.OtableauposteKey) === true)
    && isValid(obj.OexercComptaKey) === true) {
      selector = true;
    } else {
      selector = false;
    }
    return selector;
  }
  const toupdObjCH= function(result, obj) {
    if(isValid(result)===true) {
      {
        result.OreferenceKey= obj.OreferenceKey,
        result.IntitulCompte= obj.Description,
        result.OcompteKey= obj.OcompteKey,
        result.NumCompte= obj.CompteNumber;
      }
    }
return result;
  };
  function toUpdatenstbalancedata (requestBody) {
    let d = new Date(), result={};
    if (result) {
    {
          result.id= requestBody.id,
          result.OreferenceKey= requestBody.OreferenceKey,
          result.OtableauposteKey= requestBody.OtableauposteKey,
          result.OexercComptaKey= requestBody.OexercComptaKey,
        //  result.OcompteKey= requestBody.OcompteKey,
          result.NumCompte= requestBody.NumCompte,
          result.IntitulCompte= requestBody.IntitulCompte,
          result.SoldeCredit= requestBody.SoldeCredit,
          result.SoldeDebit= requestBody.SoldeDebit,
      result.ModifiedOn = d;

    }
  }
  return result;
  }
  const getobjnstBalance = function (arr, value) {
    if (isValid(value) === true) {
      const validate = find(arr, function (o) {
        return o.NumCompte === getStringValue(value)
          || o.IntitulCompte === getStringValue(value)
          || o.OreferenceKey === getStringValue(value)
          || o.OtableauposteKey === getStringValue(value)
          || o.OexercComptaKey === getStringValue(value)
          || o.id === getStringValue(value);
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

  const nstbalanceObject = {
    OexercComptaKey: {
      type: ObjectId,
      ref: 'oExercCompta'
    },
    OtableauposteKey: {
      type: ObjectId,
      ref: 'oTableauPoste'
    },
    OreferenceKey: {
      type: ObjectId,
      ref: 'oReference'
    },
    OcompteKey: {
      type: ObjectId,
      ref: 'oCompte'
    }
  }
  
  
  function toinit() {
    return {
      nstbalanceClass:nstbalanceClass,
      togetnstbalance: togetnstbalance,
      tonstbalance: tonstbalance,
      toupdObjCH:toupdObjCH,
      queryselector:queryselector,
      getobjnstBalance:getobjnstBalance,
      toUpdatenstbalancedata:toUpdatenstbalancedata,
      nstbalanceObject:nstbalanceObject
    };
  }
  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: staticNstbalance.toinit
};
