"use strict";
const { getStringValue,isValid,odauditObj, odareduceArray} = require('../../SharedKernel/odaUtility').toinit();
const { find, map, assign, filter, forEach } = require('lodash');

const staticOlevel = (function () {
  const modelObject = {
    olevelNum: {
      type: String
    },
    olevelDescption: {
      type: String
    }
  }
  class olevelClass {
    constructor(olevelNum, olevelDescption) {
      this._olevelNum = olevelNum;
      this._olevelDescption = olevelDescption;
    }
    get olevelnum() {
      return this._olevelNum;
    }
    get oleveldescption() {
      return this._olevelDescption;
    }
    set olevelnum(olevelNum) {
      this._olevelNum = olevelNum;
      return this;
    }
    set oleveldescption(olevelDescption) {
      this._olevelDescption = olevelDescption;
      return this;
    }
  }  
 const toOlevel =function (obj) {
  return ({
    "olevelNum": obj.olevelNum,
    "olevelDescption": obj.olevelDescption
  });
 };
 const togetolevel = function (argOne) {
  let initObj, odauditobj;
  return map(argOne, function (obj) {
    initObj = {
      "id": obj.id,
      "olevelNum": obj.olevelNum,
      "olevelDescption": obj.olevelDescption
    };
    odauditobj = odauditObj(obj);
    return assign({}, initObj, odauditobj);
  }

  );
};
const getobjolevel = function (arr, value) {
  if (isValid(value) === true) {
    const validate = find(arr, function (o) {
        return o.olevelNum === getStringValue(value)
        || o.olevelKey === getStringValue(value)
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
function toUpdateolevel(body) {
  let d = new Date(), result={};
  if (result) {
    {
        result.id = body.id,
        result.olevelNum = body.olevelNum,
        result.olevelDescption = body.olevelDescption,
        result.ModifiedOn = d;
    }
  }
  return result;
}
  function toinit() {
    return {
      olevelClass:olevelClass,
      modelObject:modelObject,
      toOlevel:toOlevel,
      togetolevel:togetolevel,
      getobjolevel:getobjolevel,
      toUpdateolevel:toUpdateolevel
    };
  }


return {
  toinit: toinit
};



}
)();
module.exports= {
toinit:staticOlevel.toinit
};


