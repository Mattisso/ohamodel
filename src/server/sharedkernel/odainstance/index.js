"use strict";
const _ = require('lodash');
//const {toDeleteInstance}=require('./toDeleteInstance').toinit();
const {
  toInitializeInstance,
  toInitializeOtherInstance,
  toUpdateInstance,
  toapiUpdateInstance,
  toapiUpdateOtherInstance,
  toseedInstance,
  toseedOthersInstance,
  toDeleteInstance
} = require('./toInitializeInstance').toinit();
const {toapiInitializeInstance,toapiInitcomptebalanceInstance,toapiInitcomptabalanceDetailsInstance,toapiupdatecomptabalanceDetailsInstance,toapiupdatecomptebalanceInstance}=require('./toOdaApiInstance').toinit();
//const {toUpdateInstance,toapiUpdateInstance,toapiUpdateOtherInstance}=require('./toUpdateInstance').toinit();
const index = (function () {
  function toinit() {
    return {
      toDeleteInstance: toDeleteInstance,
      toapiInitializeInstance:toapiInitializeInstance,
      toInitializeInstance: toInitializeInstance,
      toseedInstance: toseedInstance,
      toUpdateInstance: toUpdateInstance,
      toapiUpdateInstance: toapiUpdateInstance,
      toInitializeOtherInstance: toInitializeOtherInstance,
      toseedOthersInstance: toseedOthersInstance,
      toapiUpdateOtherInstance: toapiUpdateOtherInstance,
      toapiInitcomptebalanceInstance:toapiInitcomptebalanceInstance,
      toapiInitcomptabalanceDetailsInstance:toapiInitcomptabalanceDetailsInstance,
      toapiupdatecomptabalanceDetailsInstance:toapiupdatecomptabalanceDetailsInstance,
      toapiupdatecomptebalanceInstance:toapiupdatecomptebalanceInstance
    };
  }
  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: index.toinit
};
