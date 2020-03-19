"use strict";

//var async = require('async')
var toInitializeInstance = (function () {
  function toNsbalanceinput(model, body) {

    return new model(
      {
        NumCompte: body.NumCompte,
        IntitulCompte: body.IntitulCompte,
        SoldeDebit: body.SoldeDebit,
        SoldeCredit: body.SoldeCredit

      });
  }

  function toOcomptes(model, obj) {
   return new model(
    {
     CompteNumber: obj.CompteNumber

    });
}

function toOexercice (vmodel, obj) {
 return  new vmodel({
  oExerciceEncour: _.map(_.map(obj, 'oExercComptaId'), _.ary(parseInt, 1)) - 0,
  ExercicePrev: _.map(_.map(obj, 'oExercComptaId'), _.ary(parseInt, 1)) - 1,
  OexercComptaKey: _.map(_.map(obj, 'id'))
});
}
function toOexercompta(omodel, obj) {
 return   new omodel({
  oExercComptaId: obj.oExercComptaId
});
}

function toOlevel(omodel, obj) {
return  new omodel({
  olevelNum: obj.olevelNum,
  olevelDescption: obj.olevelDescption
});
}
function toOreference(omodel, obj) {
 return  new omodel({
  RefCode: oreference.RefCode,
  Description: oreference.Description,
  ocomptes: oreference.ocompteids
});
}
  function toCompteBalanceDetail(model, requestparamid, requestBody) {

    return new model(
      {
        nttcomptebalanceKey: requestparamid,
        NumCompte: requestBody.NumCompte,
        IntitulCompte: requestBody.IntitulCompte,
        SoldeDebit: requestBody.SoldeDebit ? requestBody.SoldeDebit : 0,
        SoldeCredit: requestBody.SoldeCredit ? requestBody.SoldeCredit : 0,

      });
  }



  function toinit() {
    return {
      //  toCreateComptebalancedetail:toCreateComptebalancedetail,
      toCompteBalanceDetail: toCompteBalanceDetail,
      toNsbalanceinput: toNsbalanceinput,
      toUpdateCompteBalanceDetail: toUpdateCompteBalanceDetail,
      toUpdateCompteBalance: toUpdateCompteBalance,
      selector: selector,
      queryselector:queryselector
    };
  }
  return {
    toinit: toinit
  };

})();
module.exports = {
  toinit: toInitializeInstance.toinit
};
