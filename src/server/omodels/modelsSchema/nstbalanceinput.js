const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const {getauditentity, gettoObject ,extendSchema, auditEntityPlugin, getbaseBalancesheet} = require('../helpers/odabaseSchema').toinit();
const {replaceString}= require('../helpers/utils').toinit();
const {nstbalanceinputClass}=require('../staticModels/staticNstbalanceinput').toinit();

const nstbalanceinput= (function(){
  const balanceSheetBaseSchema = new Schema(Object.assign({},getbaseBalancesheet,getauditentity),gettoObject);
  const nstBalanceInputSchema = extendSchema(balanceSheetBaseSchema, {});

  nstBalanceInputSchema.loadClass(nstbalanceinputClass);
  nstBalanceInputSchema.plugin(auditEntityPlugin);

  nstBalanceInputSchema.index({
    NumCompte: 1
  });
  nstBalanceInputSchema.virtual('CompteNumber')
.get(function () {
	return  replaceString(this.NumCompte);
}
).set(function (v) {

  this._comptenumber =replaceString(v);
}
	);
  const nstBalanceInput = mongoose.model('nstBalanceInput', nstBalanceInputSchema);
  function toinit() {
    return {
        nstBalanceInput: nstBalanceInput    
    };
    }
   return {
    toinit: toinit
    };   
})();
  module.exports = {
    toinit: nstbalanceinput.toinit
    };

    require('../../config/ohadb').connectserver();
const obj ={
  "NumCompte": "431287",
  "IntitulCompte": "mensah tesing",
  "SoldeCredit": 41326938
}
 /// nstbalanceinput.toinit().nstBalanceInput.create(obj); 
// const obj={ CompteNumber: '86'}
  var small = new  nstbalanceinput.toinit().nstBalanceInput(obj);
 //  small.toBuildBalanceinput(obj);
small.save(function (err) {
if (err) return handleError(err);
// saved!
});  
/*  nstbalanceinput.toinit().nstBalanceInput.find({}, function (err, data) {
  if (err)
    throw err;
  console.log(data);
});
   */