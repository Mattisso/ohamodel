"use strict"
const mongoose = require('mongoose'),
ObjectId = mongoose.SchemaTypes.ObjectId;
const {toapicreateinstance}=require('../../sharedkernel/odainstance/toOdaInstance').toinit()
//const {nttCompteBalance}=require('../modelsSchema/nttcomptebalance').toinit().nttCompteBalance;
const nttcomptebalanceClass=(function(){
    const modelObject = {
		OexercComptaKey: {
			type: ObjectId,
			ref: 'oExercCompta',
		},
		OtableauposteKey: {
			type: ObjectId,
			ref: 'oTableauPoste',
		},
		OreferenceKey: {
			type: ObjectId,
			ref: 'oReference'
		},
		totalSoldeDebit: {
			type: Number,
		default:
			0
		},

		totalSoldeCredit: {
			type: Number,
		default:
			0
		},

		amntNet: {
			type: Number,
		default:
			0
		}

	}

	class nttcomptebalanceClass {
		constructor(OexercComptaKey, OtableauposteKey, OreferenceKey, totalSoldeDebit = 0, totalSoldeCredit = 0, amntNet = 0) {

			this._OexercComptaKey = OexercComptaKey;
			this._OtableauposteKey = OtableauposteKey;
			this._OreferenceKey = OreferenceKey;
			this._totalSoldeDebit = totalSoldeDebit;
			this._totalSoldeCredit = totalSoldeCredit;
			this._amntNet = amntNet;
		}

		get amntnet() {
			return this._amntNet;
		}
		set amntnet(amntNet) {
			this._amntNet = amntNet;
			return this;
		}

		get oreferencekey() {
			return this._OreferenceKey;
		}
		set oreferencekey(OreferenceKey) {
			this._OreferenceKey = OreferenceKey;
			return this;
		}

		get otableaupostekey() {
			return this._OtableauposteKey;
		}
		set otableaupostekey(OtableauposteKey) {
			this._OtableauposteKey = OtableauposteKey;
			return this;
		}

		get totalsoldedebit() {
			return this._totalSoldeDebit;
		}
		set totalsoldedebit(totalSoldeDebit) {
			this._totalSoldeDebit = totalSoldeDebit;
			return this;
		}

		get totalsoldecredit() {
			return this._totalSoldeCredit;
		}
		set totalsoldecredit(totalSoldeCredit) {
			this._totalSoldeCredit = totalSoldeCredit;
			return this;
		}

		get oexerccomptakey() {
			return this._OexercComptaKey;
		}
		set oexerccomptakey(OexercComptaKey) {
			this._OexercComptaKey = OexercComptaKey;
			return this;
		}

    }
    
    
let comptebalance = null,
nttcomptebalancedetails=[];;
function BuildnttCompteBalance(model,body) {
    comptebalance =toapicreateinstance(model,body);    
    body.nttcomptebalancedetails.forEach(function (entry) {
      comptebalance.addBalanceDetail(entry);    
    });
    comptebalance.getTotalSoldedebit;
    comptebalance.getTotalSoldecredit;    
        return comptebalance;
      }    
      function BuildupdateCompteBalance(body) {
        // let nttcomptebalancedetails=[];
        comptebalance = body;
        return comptebalance;
      }  
    
      function toInitializeInstance(model,body) {
        const balance = BuildnttCompteBalance(model,body);
        return {
      //    balance: balance,
          getData: balance.getData()
        };
    
      }

    function toinit(){
        return {
            modelObject: modelObject,
            nttcomptebalanceClass: nttcomptebalanceClass,
            toInitializeInstance:toInitializeInstance
        }
    }
    return {
        toinit:toinit
    }
})();
module.exports={
    toinit:nttcomptebalanceClass.toinit
}