"use strict";
const mongoose = require('mongoose'),
 ObjectId = mongoose.SchemaTypes.ObjectId;
const { find, map, assign, filter, forEach } = require('lodash');
const { isValid, odauditObj, getStringValue, odareduceArray } = require('../../SharedKernel/odaUtility').toinit();
const {getTotalCount} = require('../../sharedkernel/odaStats').toinit();
const staticOstableauposte = (function () {
  const modelObject = {
    StableauName: {
      type: String,
      unique: true
    },
    StbleauLongName: {
      type: String
  
    },
    OtableauposteKey: {
      type: ObjectId,
      ref: 'oTableauPoste'
    },
    ostblareas: [{
        OstblareaKey: {
          type: ObjectId,
          ref: 'oStblArea'
        }
      }]
  }
class ostableauposteClass {
  constructor(StableauName,StbleauLongName){
    this._StableauName = StableauName;
    this._StbleauLongName = StbleauLongName;
  }
  
  get stableauname() {
    return this._StableauName;
  }
  set stableauname(StableauName) {
    this._StableauName = StableauName;
    return this;
  }
  get stbleaulongname() {
    return this._StbleauLongName;
  }
  set stbleaulongname(StbleauLongName) {
    this._StbleauLongName = StbleauLongName;
    return this;
  }
}
  const toOstableauposte = function (o) {
    let  _arrOstableaupostes =[];
    if (isValid(o) === true) {
      _arrOstableaupostes.push({       
        "StableauName": o.StableauName,
        "StbleauLongName": o.StbleauLongName,
        "ostblareas": o.ostblareaids

      });
      return {
        "getodaAggreateData":  getTotalCount(_arrOstableaupostes),
        "_arrOstableaupostes":_arrOstableaupostes.slice()        
       } 
    }
  };
  const togetostableauposte = function (argOne) {
    let initObj, odauditobj;
    const arr = map(argOne, function (obj) {
      initObj = {
        "id": obj.id,
        "StableauName": obj.StableauName,
        "StbleauLongName": obj.StbleauLongName
      };
      return map(obj.ostblareas, function (ostblarea) {
        var _tobj = { "OstblareaKey": ostblarea.id };
        odauditobj = odauditObj(obj);
        return assign({}, initObj, _tobj, odauditobj);
      });
    });
    return odareduceArray(arr);
  };

  const getobjOstableauposte = function (arr, value) {
    if (isValid(value) === true) {
      const validate = find(arr, function (o) {
        return o.StableauName === getStringValue(value)
          || o.OstableauposteKey === getStringValue(value)
          || o.id === getStringValue(value)
          || o.OstblareaKey === getStringValue(value);
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
  function toUpdateOstableauposte(body) {
    let d = new Date(), result={};
    if (result) {
      {
          result.id = body.id,
          result.StableauName = body.StableauName,
          result.StbleauLongName = body.StbleauLongName,
          result.ostblareas = body.ostblareaids,
          result.ModifiedOn = d;
      }
    }
    return result;
  }
  function toinit() {

    return {
      modelObject:modelObject,
      ostableauposteClass:ostableauposteClass,
      toUpdateOstableauposte: toUpdateOstableauposte,
      toOstableauposte: toOstableauposte,
      getobjOstableauposte: getobjOstableauposte,
      togetostableauposte: togetostableauposte
    };

  }

  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: staticOstableauposte.toinit
};

