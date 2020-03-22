    
"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {toCompteBalanceDetail} = require('../staticModels/staticNttcomptebalanceDetail').toinit();
const {getauditentity, gettoObject ,extendSchema, auditEntityPlugin} = require('../helpers/odabaseSchema').toinit();
const {nttcomptebalanceClass, modelObject}=require('../staticModels/staticNttcomptebalance').toinit();
const {getTotalCount, getTotalSoldedebit, getTotalSoldecredit}=require('../../SharedKernel/odaStats').toinit();
const nttcomptebalance = (function () {
  const auditBaseSchema = new Schema(getauditentity, gettoObject);
	const nttCompteBalanceSchema = extendSchema(auditBaseSchema, modelObject);
	nttCompteBalanceSchema.loadClass(nttcomptebalanceClass);
	nttCompteBalanceSchema.plugin(auditEntityPlugin);
nttCompteBalanceSchema.index(
	{
	OexercComptaKey: 1,
	OtableauposteKey:1,
	OreferenceKey: 1
	}
);

let  nttcomptebalancedetails=[];

nttCompteBalanceSchema.method('addBalanceDetail', function (obj) {
const requestparamid= this.id;
nttcomptebalancedetails.push(toCompteBalanceDetail(requestparamid,obj)
  );

});

nttCompteBalanceSchema.method('hasitem', function (obj) {
  return this.nttcomptebalancedetails.indexOf(obj) !== -1;
});

nttCompteBalanceSchema.method('removeItem', function (obj) {
  var itemIndex = nttcomptebalancedetails.indexOf(obj);
  if (itemIndex !== -1) {
      nttcomptebalancedetails.splice(itemIndex, 1);
  }
});

nttCompteBalanceSchema.method('addcomptebalancedetail', function () {
  nttcomptebalancedetails.push({
    "nttcomptebalanceKey" : this.id,
    "NumCompte":  "",
    "IntitulCompte": "",
    "SoldeDebit": "",
    "SoldeCredit":""
  });
  // this.nttcomptebalancedetails.slice();
});

nttCompteBalanceSchema.virtual('comptebalancedetails')
  .set(function (comptebalancedetails) {
      this._comptebalancedetails = comptebalancedetails;
  })
  .get(function () {
      return this._comptebalancedetails;
  });

  nttCompteBalanceSchema.method('getData', function () {
    //const odasum =getodaAggreateData(nttcomptebalancedetails);
    return {
      'id': this.id,
      'OexercCompta': this.OexercComptaKey,
      'Otableauposte': this.OtableauposteKey,
      'Oreference': this.OreferenceKey,
      'totalSoldeDebit': getTotalSoldedebit(this.nttcomptebalancedetails), //this.totalSoldeDebit, //odasum.totalSoldeDebit?odasum.totalSoldeDebit:0,
      'totalSoldeCredit': getTotalSoldecredit( this.nttcomptebalancedetails),//this.totalSoldeCredit, //odasum.totalSoldeCredit?odasum.totalSoldeCredit:0,
      'DetailCount': getTotalCount(this.nttcomptebalancedetails), // nttcomptebalancedetails.length?nttcomptebalancedetails.length:0,      
      'nttcomptebalancedetails': nttcomptebalancedetails.slice()
    };
  });

  nttCompteBalanceSchema.virtual('nttcomptebalancedetails', {
    ref: 'nttCompteBalanceDetail', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'nttcomptebalanceKey', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false
  });

nttCompteBalanceSchema.virtual('comptebalancedetail')
  .set(function (comptebalancedetail) {
    this._comptebalancedetail = comptebalancedetail;
  })
  .get(function () {
    return this._comptebalancedetail;
  });
 

let nttCompteBalance = mongoose.model('nttCompteBalance', nttCompteBalanceSchema);

  function toinit() {
    return {
      nttCompteBalance:nttCompteBalance
    };
  }

return {
  toinit: toinit
};

}
)();
module.exports= {
toinit:nttcomptebalance.toinit
};


