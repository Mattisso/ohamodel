//  async = require('async')
"use strict";
const { find, map, assign, filter, forEach } = require('lodash');
const { isValid, odauditObj, getStringValue, odareduceArray } = require('../../SharedKernel/odaUtility').toinit();

const staticOstblarea= (function () {
  let  _arrOtableaupostes =[];
  const toOstblarea = function (o) {
    return (
      {
        "AreaShortName": o.AreaShortName,
        "AreaLongName": o.AreaLongName,
        "ocomptes": o.ocomptes

      });
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
