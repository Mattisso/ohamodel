'use strict';
const {find,map,assign} = require('lodash');
const {getStringValue, isValid,odauditObj} = require('../../SharedKernel/odaUtility').toinit();

const staticUser = (function () {

  function toUser(o) {
    return ({
      'username': o.username,
      'role': o.role,
      'password': o.password
    });
  }

  function toUpdateUser(result, requestparamid, requestBody) {
    let d = new Date();
    if (result) { {
        result.id = requestparamid,
        result.username = requestBody.username,
        result.role = requestBody.role,
        result.password = requestBody.password,
        result.ModifiedOn = d;
      }
    }
    return result;
  }
  const togetObjuser = function (arr, value) {
    if (isValid(value) === true) {
      const validate = find(arr, function (o) {
        return o.username === getStringValue(value)
         || o.userKey === getStringValue(value)
         || o.role === getStringValue(value)
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
  const togetuser = function (argOne) {
    let initObj,
    odauditobj;
    return map(argOne, function (obj) {
      initObj = {
        "id": obj.id,
        "username": obj.username,
        "role": obj.role
      };
      odauditobj = odauditObj(obj);
      return assign({}, initObj, odauditobj);

    });
  };
  function toinit() {
    return {
      toUser: toUser,
      toUpdateUser: toUpdateUser,
      togetuser: togetuser,
      togetObjuser: togetObjuser
    };
  }
  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: staticUser.toinit
};
