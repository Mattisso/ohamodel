'use strict'

const {toapicreateinstance}=require('../../sharedkernel/odainstance/toOdaInstance').toinit()

const ocompteClass = (function () {
  class OcompteClass {
    constructor(CompteNumber) {
      this._comptenumber = CompteNumber;
    }
    get comptenumber() {
      return this._comptenumber;
    }

    set comptenumber(CompteNumber) {
      this._comptenumber = CompteNumber;
      return this;
    }
  }
  const ocompteObj = {
    CompteNumber: String
  }

  let ocompte = null;
function Buildocompte(model,body) {
    ocompte =toapicreateinstance(model,body);    
        return ocompte;
      }    
     /*  function BuildupdateCompteBalance(body) {
        // let ocomptedetails=[];
        comptebalance = body;
        return comptebalance;
      }  
    
      function toInitializeInstance(model,body) {
        const ocompte = Buildocompte(model,body);
        return {
      //    balance: balance,
          getData: ocompte.getData()
        };
    
      } */
  function toinit() {
    return {
      OcompteClass: OcompteClass,
      ocompteObj:ocompteObj,
      Buildocompte:Buildocompte
    };
  }
  return {
    toinit: toinit
  };
})();
module.exports = {
  toinit: ocompteClass.toinit
};
