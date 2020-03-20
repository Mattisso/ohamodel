'use strict';
const {find,map,assign} = require('lodash');
const {getStringValue, isValid, odauditObj}=require('../../SharedKernel/odaUtility').toinit();

const staticUser = (function () {
    const modelObject = {
      username: {
        type: String,
        required: true,
        index: {
          unique: true
        },
        lowercase: true,
        trim: true
      },
      role: {
        type: String,
      default:
        'user'
      },
      password: {
        type: String,
        required: true
      },
      loginAttempts: {
        type: Number,
        required: true,
      default:
        0
      },
      lockUntil: {
        type: Number,
      default:
        0
      }
  
    }
  
    class userClass {
      constructor( username, role, password, loginAttempts = 0, lockUntil = 0) {  
       this._username = username;
        this._role = role;
        this._password = password;
        this._loginAttempts = loginAttempts;
        this._lockUntil = lockUntil; 
      }
  
     get lockuntil() {
        return this._lockUntil;
      }
      set lockuntil(lockUntil) {
        this._lockUntil = lockUntil;
        return this;
      }
       get username() {
        return this._username;
      }
      set username(username) {
        this._username = username;
        return this;
      } 
      get role() {
        return this._role;
      }
      set role(role) {
        this._role = role;
        return this;
      }
      get password() {
        return this._password;
      }
      set password(password) {
        this._password = password;
        return this;
      }
      get loginattempts() {
        return this._loginAttempts;
      }
      set loginattempts(loginAttempts) {
        this._loginAttempts = loginAttempts;
        return this;
      }
    }
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
  const getobjuser = function (arr, value) {
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
      modelObject:modelObject,
      userClass:userClass,
      toUser: toUser,
      toUpdateUser: toUpdateUser,
      togetuser: togetuser,
      getobjuser: getobjuser
    };
  }
  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: staticUser.toinit
};
