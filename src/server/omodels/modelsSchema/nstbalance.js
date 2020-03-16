const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const {getauditentity, gettoObject ,extendSchema, auditEntityPlugin, getbaseBalancesheet} = require('../helpers/odabaseSchema').toinit();
const {getFullNameById}= require('../helpers/utils').toinit();
const {nstbalanceClass,nstbalanceObject}=require('../staticModels/staticNstbalance').toinit(); 
const {oReference}=require('./oreference').toinit();
const nstbalance= (function(){

  const balanceSheetBaseSchema = new Schema(Object.assign({},getbaseBalancesheet,getauditentity),gettoObject);
  const nstBalanceSchema = extendSchema(balanceSheetBaseSchema, nstbalanceObject);

  nstBalanceSchema.loadClass(nstbalanceClass);
  nstBalanceSchema.plugin(auditEntityPlugin);
  nstBalanceSchema.index(
    {
      OexercComptaKey: 1,
      OtableauposteKey: 1,
      OreferenceKey: 1,
      NumCompte: 1  
    }
  );
  
  nstBalanceSchema.methods.getoreference = function (model, cb) {
    getFullNameById(model, this.OreferenceKey, function (err, data) {
      if (err) return cb(err);
      cb(null, data);
    });
  };
  
  nstBalanceSchema.methods.getoexercice = function (model, cb) {
    getFullNameById(model, this.OexercComptaKey, function (err, data) {
      if (err) return cb(err);
      cb(null, data);
    });
  };
  
  nstBalanceSchema.methods.getotableauposte = function (model, cb) {
    getFullNameById(model, this.OtableauposteKey, function (err, data) {
      if (err) return cb(err);
      cb(null, data);
    });
  };
  const nstBalance = mongoose.model('nstBalance', nstBalanceSchema);
  function toinit() {
    return {
        nstBalance: nstBalance    
    };
    }
   return {
    toinit: toinit
    };   
})();
  module.exports = {
    toinit: nstbalance.toinit
    };

    require('../../config/ohadb').connectserver();
const obj ={
  "OexercComptaKey": "5aee0f0023b8a2227003e7b0",
  "OtableauposteKey": "5aee0eff23b8a2227003e7ab",
  "OreferenceKey": '5e6ec287d1f2dd27e8b54eff',
  "NumCompte": "431200",
  "IntitulCompte": "Dotation CENTRAFRIQUE",
  "SoldeCredit": 41326938
}
/*   nstbalance.toinit().nstBalance.create(obj); */ 
// const obj={ CompteNumber: '86'}
/*let small = new  nstbalance.toinit().nstBalance(obj);
small.save(function (err) {
if (err) return handleError(err);
// saved!
});
small.getoreference(oReference,function(err,data){
  if(err) console.log(err)
  console.log(data);
}) */
 nstbalance.toinit().nstBalance.find({}, function (err, data) {
  if (err)
    throw err;
  console.log(data);
});
   