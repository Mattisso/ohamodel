//  async = require('async')
"use strict";
const mongoose = require('mongoose'),
 ObjectId = mongoose.SchemaTypes.ObjectId;
const { find, map, assign, filter, forEach } = require('lodash');
const { isValid, odauditObj, getStringValue, odareduceArray } = require('../../SharedKernel/odaUtility').toinit();
const { odauditObj, getStringValue,getTotalCount} = require('../../sharedkernel/odaStats').toinit();
const staticOstblarea= (function () {
  const modelObject = {
    AreaShortName: {
      type: String,
      required: true,
      unique: true
    },
    AreaLongName: {
      type: String
    },
    ocomptes: [{
        _ocompte: {
          type: ObjectId,
          ref: 'oCompte',
          alias: ''
        }
      }
  
    ]
  }
  class ostblareaClass {
    constructor(AreaShortName, AreaLongName ='undefined', ocomptes = []) {
  
      this._AreaShortName = AreaShortName;
      this._AreaLongName = AreaLongName;
      this._ocomptes = ocomptes;
    }
    get areashortname() {
      return this._AreaShortName;
    }
    get arealongname() {
      return this._AreaLongName;
    }
    get ocomptes() {
      return this._ocomptes;
    }
  
    set areashortname(AreaShortName) {
      this._AreaShortName = AreaShortName;
      return this;
    }
    set arealongname(AreaLongName) {
      this._AreaLongName = AreaLongName;
      return this;
    }
    set ocomptes(ocomptes) {
      this._ocomptes = ocomptes;
      return this;
    }
  }
  let  _arrOstblareas =[];
  const toOstblarea = function (o) {
    if (isValid(o) === true) {
    _arrOstblareas.push({      
        "AreaShortName": o.AreaShortName,
        "AreaLongName": o.AreaLongName,
        "ocomptes": o.ocomptes
      });
      return {
        "getodaAggreateData":  getTotalCount(_arrOstblareas),
        "_arrOstblareas":_arrOstblareas.slice()
        
       }  
       };
  };

function toUpdateostblarea (result, requestparamid, requestBody) {
  var d = new Date();

if (result) {
  {
    result.id = requestparamid,
    result.AreaShortName = requestBody.AreaShortName,
    result.AreaLongName = requestBody.AreaLongName,
    result.ModifiedOn = d;

  }
}
return result;
}

const togetostblarea = function (argOne) {
  let initObj, odauditobj;
  const arr = map(argOne, function (obj) {
    initObj = {
      "id": obj.id,
      "AreaShortName": obj.AreaShortName,
      "AreaLongName": obj.AreaLongName
    };
return  map(obj.ocomptes, function (ocompte) {
      var _tobj = {"OcompteKey": ocompte.id };
      odauditobj = odauditObj(obj);
      return assign({}, initObj, _tobj, odauditobj);
    }
    );
    //return _.assign({}, initObj, odauditobj);
  });
  return odareduceArray(arr);
};
const getobjOstblarea = function (arr, value) {
  if (isValid(value) === true) {
    const validate = find(arr, function (o) {
        return o.AreaShortName === getStringValue(value)
        || o.OstblareaKey === getStringValue(value)
         || o.id === getStringValue(value)
         || o.OcompteKey === getStringValue(value);
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
    ostblareaClass:ostblareaClass,
    toOstblarea:toOstblarea,
    toUpdateostblarea:toUpdateostblarea,
    getobjOstblarea:getobjOstblarea,
    togetostblarea:togetostblarea
  };

}

return {
  toinit: toinit
};




})();
module.exports= {
toinit:staticOstblarea.toinit
};
