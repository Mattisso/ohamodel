"use strict";
const _ = require('lodash');
//const {toDeleteInstance}=require('./toDeleteInstance').toinit();
const {toInitializeInstance, svctoInitializeInstance$} = require('./toInitializeInstance').toinit();
const {svctoUpdateInstance$, toUpdateInstance} = require('./toUpdateInstance').toinit();
//const {toUpdateInstance,toapiUpdateInstance,toapiUpdateOtherInstance}=require('./toUpdateInstance').toinit();
const index = (function () {
  function toinit() {
    return {
      svctoInitializeInstance$:svctoInitializeInstance$,
      svctoUpdateInstance$:svctoUpdateInstance$,
      toInitializeInstance:toInitializeInstance,
      toUpdateInstance:toUpdateInstance
    };
  }
  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: index.toinit
};
