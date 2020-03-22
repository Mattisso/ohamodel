const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const {getauditentity, gettoObject ,extendSchema, auditEntityPlugin, getbaseBalancesheet} = require('../helpers/odabaseSchema').toinit();
const {getFullNameById}= require('../helpers/utils').toinit();
const {nttbalanceClass,nttbalanceObject}=require('../staticModels/staticNttBalance').toinit(); 
const {oReference}=require('./oreference').toinit();
const nttbalance= (function(){

  const balanceSheetBaseSchema = new Schema(Object.assign({},getbaseBalancesheet,getauditentity),gettoObject);
  const nttBalanceSchema = extendSchema(balanceSheetBaseSchema, nttbalanceObject);

  nttBalanceSchema.loadClass(nttbalanceClass);
  nttBalanceSchema.plugin(auditEntityPlugin);
  nttBalanceSchema.index(
    {
      OexercComptaKey: 1,
      OtableauposteKey: 1,
      OreferenceKey: 1,
      NumCompte: 1  
    }
  );
  
  nttBalanceSchema.methods.getoreference = function (model, cb) {
    getFullNameById(model, this.OreferenceKey, function (err, data) {
      if (err) return cb(err);
      cb(null, data);
    });
  };
  
  nttBalanceSchema.methods.getoexercice = function (model, cb) {
    getFullNameById(model, this.OexercComptaKey, function (err, data) {
      if (err) return cb(err);
      cb(null, data);
    });
  };
  
  nttBalanceSchema.methods.getotableauposte = function (model, cb) {
    getFullNameById(model, this.OtableauposteKey, function (err, data) {
      if (err) return cb(err);
      cb(null, data);
    });
  };
  const nttBalance = mongoose.model('nttBalance', nttBalanceSchema);
  function toinit() {
    return {
        nttBalance: nttBalance    
    };
    }
   return {
    toinit: toinit
    };   
})();
  module.exports = {
    toinit: nttbalance.toinit
    };

   // require('../../config/ohadb').connectserver();
const obj ={
  "OexercComptaKey": "5aee0f0023b8a2227003e7b0",
  "OtableauposteKey": "5aee0eff23b8a2227003e7ab",
  "OreferenceKey": '5e6ec287d1f2dd27e8b54eff',
  "NumCompte": "431200",
  "IntitulCompte": "Dotation CENTRAFRIQUE",
  "SoldeCredit": 41326938
}
/*   nttbalance.toinit().nttBalance.create(obj); */ 
// const obj={ CompteNumber: '86'}
/*let small = new  nttbalance.toinit().nttBalance(obj);
small.save(function (err) {
if (err) return handleError(err);
// saved!
});
small.getoreference(oReference,function(err,data){
  if(err) console.log(err)
  console.log(data);
}) */
 /*nttbalance.toinit().nttBalance.find({}, function (err, data) {
  if (err)
    throw err;
  console.log(data);
});*/
   