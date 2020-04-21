
"use strict";
const { forEach, assign, isUndefined, isNull, map, merge, find, isArray} = require('lodash');
const async = require('async');
const { Observable} = require('rxjs');
const { inArray,  isValid} = require('../odaUtility').toinit();
const { odaByarg} = require('../odaFiltered').toinit();

const odarepos=(function(){
  const odasaveObject = function (ArgOne) {
    try {
      ArgOne.save(function (err) {
        if (err) {
          return new Error(err);
        }
      });
      setTimeout(() => {
        return ((`Finished  in Inserting ${ArgOne}`));
      }, 100);

    } catch (err) {
      return new Error(err);
    }
  };
  const odasaveObjectArray = function (ArgOne) {
    let _arr = [];
    try {
      forEach(ArgOne, function (o) {
        o.save(function (err) {
          if (err) {
            return new Error(err);
          }
        });
        _arr.push(o);
      });
      setTimeout(() => {
        return ((`Finished  in Inserting ${_arr.length} out of ${JSON.stringify(ArgOne.length)} records`));
      }, 100);

    } catch (err) {
      return new Error(err);
    }
  };
  const odasave = function (arr) {
    if (inArray(arr) === false) {
    return odasaveObject(arr);
    } else if (inArray(arr) === true) {
    return odasaveObjectArray(arr);
    } else {
    return;
    }
  };
  function toinit(){
    return {
      odasave:odasave
    };
  }
  return {
    toinit:toinit
  };
})();
module.exports={
toinit:odarepos.toinit
};
