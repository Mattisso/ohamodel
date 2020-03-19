
"use strict";
const mongoose = require('mongoose'),
ObjectId = mongoose.SchemaTypes.ObjectId;
const { find, map, assign } = require('lodash');
const { isValid, getStringValue, odauditObj } = require('../../SharedKernel/odaUtility').toinit();
const {find,  map,  assign,  filter,  forEach} = require('lodash');
const {  odauditObj,  getStringValue,  replaceNullToZero,  getodaAggreateData} = require('../../sharedkernel/odaStats').toinit();

const staticOcomptereference = (function () {
  const modelObject = {

    OcompteKey: {
      type: ObjectId,
      ref: 'oCompte'
    },
    OstblareaKey: {
      type: ObjectId,
      ref: 'oStblArea'
  
    },
    OreferenceKey: {
      type: ObjectId,
      ref: 'oReference'
    },
    OtableauposteKey: {
      type: ObjectId,
      ref: 'oTableauPoste'
    },
    OstableauposteKey: {
      type: ObjectId,
      ref: 'oStableauPoste'
    },
    Exception: {
      type: Number,
    default:
      0
    },
    Taux: {
      type: Number,
    default:
      1
    }
  
  }
  
  class ocompteReferenceClass {
    constructor(OcompteKey, OstblareaKey, OreferenceKey, OtableauposteKey, OstableauposteKey, Exception, Taux) {
      this._OcompteKey = OcompteKey;
      this._OstblareaKey = OstblareaKey;
      this._OreferenceKey = OreferenceKey;
      this._OstableauposteKey = OstableauposteKey;
      this._OtableauposteKey = OtableauposteKey;
      this._Exception = Exception;
      this._Taux = Taux;
    }
  
    get ostableaupostekey() {
      return this._OstableauposteKey;
    }
    set ostableaupostekey(OstableauposteKey) {
      this._OstableauposteKey = OstableauposteKey;
      return this;
    }
  
    get ocomptekey() {
      return this._OcompteKey;
    }
    set ocomptekey(OcompteKey) {
      this._OcompteKey = OcompteKey;
      return this;
    }
  
    get ostblareakey() {
      return this._OstblareaKey;
    }
    set ostblareakey(OstblareaKey) {
      this._OstblareaKey = OstblareaKey;
      return this;
    }
  
    get otableaupostekey() {
      return this._OtableauposteKey;
    }
    set otableaupostekey(OtableauposteKey) {
      this._OtableauposteKey = OtableauposteKey;
      return this;
    }
  
    get exception() {
      return this._Exception;
    }
    set exception(Exception) {
      this._Exception = Exception;
      return this;
    }
  
    get taux() {
      return this._Taux;
    }
    set taux(Taux) {
      this._Taux = Taux;
      return this;
    }
  
  }
  const toOcomptereference = function (o) {
    return (
      {
        "OcompteKey": o.OcompteKey,
        "OstblareaKey": o.OstblareaKey,
        "OreferenceKey": o.OreferenceKey,
        "OtableauposteKey": o.OtableauposteKey,
        "OstableauposteKey": o.OstableauposteKey,
        "Exception": o.Exception,
        "Taux": o.Taux
      });
  };

  const toUpdateocomptereference=function(requestBody) {
    let d = new Date(), result={};
    if (result) {
      {
        result.OcompteKey= requestBody.OcompteKey,
        result.OstblareaKey = requestBody.OstblareaKey,
        result.OreferenceKey = requestBody.OreferenceKey,
        result.OtableauposteKey = requestBody.OtableauposteKey,
        result.OstableauposteKey = requestBody.OstableauposteKey,
        result.Exception = requestBody.Exception,
        result.Taux = requestBody.Taux,
        result.ModifiedOn = d;
      }
    }
    return result;
  };
  const getObjOcomptereference = function (arr, value) {
    if (isValid(value) === true) {
      const validate = find(arr, function (o) {
          return  o.CompteNumber === getStringValue(value)
          || o.OcompteKey === getStringValue(value)
          || o.OreferenceKey === getStringValue(value)
          || o.OtableauposteKey === getStringValue(value)
          || o.OstableauposteKey === getStringValue(value)
          || o.OstblareaKey === getStringValue(value)
          || o.id === getStringValue(value);
        });
      return {

        odaObject: function () {
          return validate;
        },
        filteredObject: function () {
          return {
            compteKey: validate.OcompteKey,
            OstblareaKey: validate.OstblareaKey,
            OreferenceKey: validate.OreferenceKey,
            OstableauposteKey: validate.OstableauposteKey,
            OtableauposteKey: validate.OtableauposteKey
          };
        }

      };
    } else {
      return new Error(
`Invalid  ${value}`);
    }
  };
  const getObjOcomptereferenceCombined = function (arr, value) {
    if (isValid(value) === true) {
      const validate = find(arr, function (o) {
          return (o.OcompteKey === value.OcompteKey && o.OreferenceKey === value.OreferenceKey
             && o.OtableauposteKey === value.OtableauposteKey)
          ||( o.OreferenceKey === value.OreferenceKey && o.OtableauposteKey === value.OtableauposteKey);
        });
      return {
              odaObject: function () {
          return validate;
        },
        filteredObject: function () {
          return {
            compteKey: validate.OcompteKey,
            OstblareaKey: validate.OstblareaKey,
            OreferenceKey: validate.OreferenceKey,
            OstableauposteKey: validate.OstableauposteKey,
            OtableauposteKey: validate.OtableauposteKey
          };
        }

      };
    } else {
      return new Error(
`Invalid  ${value}`);
    }
  };
  const togetocomptereference = function (argOne) {
    let initObj, odauditobj;
    return map(argOne, function (obj) {
      initObj = {
        "id": obj.id,
        "OcompteKey": getStringValue(obj.OcompteKey),
        "OstblareaKey": getStringValue(obj.OstblareaKey),
        "OreferenceKey": getStringValue(obj.OreferenceKey),
        "OtableauposteKey": getStringValue(obj.OtableauposteKey),
        "OstableauposteKey": getStringValue(obj.OstableauposteKey),
        "Exception": obj.Exception,
        "Taux": obj.Taux
      };
      odauditobj = odauditObj(obj);
      return assign({}, initObj, odauditobj);

    }

    );
  };
  function toinit() {
    return {
      modelObject:modelObject,
      ocompteReferenceClass:ocompteReferenceClass,
      toOcomptereference: toOcomptereference,
      getObjOcomptereference:getObjOcomptereference,
      getObjOcomptereferenceCombined:getObjOcomptereferenceCombined,
      togetocomptereference:togetocomptereference,
      toUpdateocomptereference:toUpdateocomptereference
    };
  }
  return {
    toinit: toinit
  };
}
)();
module.exports = {
  toinit: staticOcomptereference.toinit
};





 