
"use strict";
const {forEach} = require('lodash');
const {isValid, hasitem,inArray}=require('../odaUtility').toinit();

const toOdaInstance = (function () {
  const tocreateObject = function (model, o, fn) {
    if (isValid(o) === true && isValid(fn)==true) {
      return new model(fn(o));
    }
    else if (isValid(o) === true && isValid(fn)==false){
        return new model(o);
    }
    else {
        return new Error(
          ` missing some arguments`);
        }
  };
  const tocreateChildObject = function (model, o, requestparamid, fn) {
    if (isValid(o) === true && isValid(requestparamid)===true && isValid(fn)==true) {
      return new model(fn(requestparamid, o));
    }
    else if (isValid(o) === true && isValid(requestparamid)===true && isValid(fn)==false){
      return new model(requestparamid, o);
  }
  else {
      return new Error(
        ` missing some arguments`);
      }
  };
  const tocreateChildObjFromArray = function (model, arr, requestparamid, f) {
    const newArray = [];    forEach(arr, function (o) {
      const obj = tocreateChildObject(model, o, requestparamid, f);
      if ((!hasitem(obj, newArray)===true))
        newArray.push(obj);
    });
    return newArray;
  };
  function toupdateObject(o, fn) {
    if (isValid(o) === true && isValid(fn) === true) {
      return fn(o);
    }
    if (isValid(o) === true && isValid(fn) === false) {
      return (o);
    }
  }
  const toupdateObjFromArray = function (arr, f) {
    let newArray = [];
    forEach(arr, function (o) {
      const obj = toupdateObject(o, f);
      if ((!hasitem(obj, newArray)))
        newArray.push(obj);
    });
    return newArray;
  };
  const toupdateinstance = function (argone, f) {
    if (inArray(argone) === false) {
      return toupdateObject(argone, f);
    }
    if (inArray(argone) === true) {
      return toupdateObjFromArray(argone, f);
    }
  };
  function toupdateChildObject(o, requestparamid, fn) {
    if (isValid(o) === true && isValid(fn) === true) {
      return fn(requestparamid, o);
    }
    if (isValid(o) === true && isValid(fn) === false) {
      return (requestparamid, o);
    }
  }
  const toupdateChildObjFromArray = function (arr, requestparamid, f) {
    let newArray = [];
    forEach(arr, function (o) {
      const obj = toupdateChildObject(o, requestparamid, f);
      if ((!hasitem(obj, newArray)))
        newArray.push(obj);
    });
    return newArray;
  };
  const toupdatechildinstance = function (argone, requestparamid, f) {
    if (inArray(argone) === false) {
      return toupdateChildObject(argone, requestparamid, f);
    }
    if (inArray(argone) === true) {
      return toupdateChildObjFromArray(argone, requestparamid, f);
    }
  };
  const tocreateObjFromArray = function (model, arr, f) {
    let newArray = [];
    forEach(arr, function (o) {
      const obj = tocreateObject(model, o, f);
      if ((!hasitem(obj, newArray)))
        newArray.push(obj);
    });
    return newArray;
  };
  const tocreateinstance = function (model, argone, f) {
    if (inArray(argone) === false) {
      return tocreateObject(model, argone, f);
    }
    if (inArray(argone) === true) {
      return tocreateObjFromArray(model, argone, f);
    }
  };
  const tocreatechildinstance = function (model, argone, requestparamid, fn) {
    if (inArray(argone) === false) {
      return tocreateChildObject(model, argone, requestparamid, fn);
    }
    if (inArray(argone) === true) {
      return tocreateChildObjFromArray(model, argone, requestparamid, fn);
    }
  };
  const toapicreateinstance= function(model, argone, fn) {
    if(isValid(argone)===true){
      return tocreateinstance(model,argone,fn);
     }
  
  /*else if (isValid(requestparamid)===true){
      return tocreatechildinstance(model, argone, requestparamid, fn);
    } */
    else {
      return new Error(
        ` missing some arguments`);
      }
  }
  
  const toapiUpdateInstance= function(argone,  fn) {
    if(isValid(argone)===true){
      return toupdateinstance(argone,fn);
    }/* else if (isValid(requestparamid)===true){
      return toupdatechildinstance(argone, requestparamid, fn);
    } */
    else {
      return new Error(
        ` missing some arguments`);
      }
  }
  function toinit() {
    return {
     // toupdateinstance: toupdateinstance,
     //  tocreateinstance: tocreateinstance,
     // tocreatechildinstance: tocreatechildinstance,
  //    toupdatechildinstance: toupdatechildinstance,
      toapicreateinstance:toapicreateinstance,
      toapiUpdateInstance:toapiUpdateInstance
    };
  }
  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: toOdaInstance.toinit
};
