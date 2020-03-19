"use strict";
const mongoose = require('mongoose'),
ObjectId = mongoose.SchemaTypes.ObjectId;
const { find, map, assign } = require('lodash');
const {getodaAggreateData} = require('../../SharedKernel/odaStats').toinit();
const { isValid, odauditObj, getStringValue, replaceNullToZero,odareduceArray} = require('../../SharedKernel/odaUtility').toinit();
 const {getobjOreference,getobjOexercCompta,getobjOtableauposte}=require('../../SharedKernel/staticObjects').toinit();
const { getodafilter,odaByarg } = require('../../SharedKernel/odaFiltered').toinit();
const {queryselector, getSoldeDebit,getSoldeCredit}=require('./objQryParams').toinit();
const {getodaAggreateData} = require('../../SharedKernel/odaStats').toinit();
const {queryselector, getSoldeDebit,getSoldeCredit}=require('./objQryParams').toinit();


const staticNttcomptebalance = (function () {
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

	const _togetcomptebalance = function (obj) {
		let initObj,
		odauditobj;
		initObj = {
			"id": obj.id,
			"OreferenceKey": getStringValue(obj.OreferenceKey),
			"OtableauposteKey": getStringValue(obj.OtableauposteKey),
			"OexercComptaKey": getStringValue(obj.OexercComptaKey),
			"totalSoldeDebit": (obj.totalSoldeDebit),
			"totalSoldeCredit": (obj.totalSoldeCredit),
			//  "AmortProvAmnt": obj.AmortProvAmnt,
			//   "provamnt": obj.provamnt,
			//   "amntNet": (obj.amntNet),
		};
		odauditobj = odauditObj(obj);
		return assign({}, initObj, odauditobj);
	};

	const togetcomptebalances = function (argOne) {
		let initObj,
		odauditobj;
		return map(argOne, function (obj) {
			initObj = {
				"id": obj.id,
				"OreferenceKey": getStringValue(obj.OreferenceKey),
				"OtableauposteKey": getStringValue(obj.OtableauposteKey),
				"OexercComptaKey": getStringValue(obj.OexercComptaKey),
				"totalSoldeDebit": (obj.totalSoldeDebit),
				"totalSoldeCredit": (obj.totalSoldeCredit),
				//  "AmortProvAmnt": obj.AmortProvAmnt,
				//   "provamnt": obj.provamnt,
				//   "amntNet": (obj.amntNet),
			};
			odauditobj = odauditObj(obj);
			return assign({}, initObj, odauditobj);
		});
	};
	const getloadnttcomptebalanceDetaildata = function (balance, comptebalances) {
		let neobj;
		neobj = map(balance, function (obj) {
				const values = assign({}, odaByarg('OexercComptaKey', obj.OexercComptaKey), odaByarg('OreferenceKey', obj.OreferenceKey), odaByarg('OtableauposteKey', obj.OtableauposteKey));
				const filetereddata = getodafilter(comptebalances, values);
				const fileteredObj = getObjcomptebalance(filetereddata, values).odaObject();
				if (isValid(fileteredObj) === true) {
					return {
						"nttcomptebalanceKey": fileteredObj.id,
						"NumCompte": obj.NumCompte,
						"IntitulCompte": obj.IntitulCompte,
						"SoldeCredit": obj.SoldeCredit,
						"SoldeDebit": obj.SoldeDebit
					};
				}
			});
		return odareduceArray(neobj);
	};

	const togetloadnttbalance = function (argOne) {
		let neobj;
		neobj = map(argOne, function (obj) {
				return {
					"OreferenceKey": obj.OreferenceKey,
					"OtableauposteKey": obj.OtableauposteKey,
					"OexercComptaKey": obj.OexercComptaKey,
					"SoldeCredit": getSoldeCredit(obj),
					"SoldeDebit": getSoldeDebit(obj)
				};

			});
		return odareduceArray(neobj);
	};

	const getcombinednIndex = function (comptebalances, oreferences, otableaupostes, oexerccompta) {
		let neobj;
		neobj = map(comptebalances, function (obj) {
				const objoreference = getobjOreference(oreferences, obj.OreferenceKey).filteredObject();
				const objotableauposte = getobjOtableauposte(otableaupostes, obj.OtableauposteKey).filteredObject();
				const objoexercompta = getobjOexercCompta(oexerccompta, obj.OexercComptaKey).filteredObject();
				if (isValid(objoreference) === true && isValid(obj)) {
					return assign({}, obj, objoreference, objotableauposte, objoexercompta);
				}
			});
		return neobj;
	};

	const togetcomptebalancesWithDetails = function (comptebalances, comptebalancedetails, oreferences, otableaupostes, oexerccompta) {
		let nttcomptebalancedetails = [],
		finalObj;
		finalObj = map(comptebalances, function (obj) {
				const filteredinputs = getodafilter(comptebalancedetails, odaByarg('nttcomptebalanceKey', obj.id));
				const filteredids = map(filteredinputs, 'id');
				nttcomptebalancedetails = odaByarg('nttcomptebalanceDetailKey', filteredids);
				obj.nttcomptebalancedetails = nttcomptebalancedetails;
				const objoreference = getobjOreference(oreferences, obj.OreferenceKey).filteredObject();
				const objotableauposte = getobjOtableauposte(otableaupostes, obj.OtableauposteKey).filteredObject();
				const objoexercompta = getobjOexercCompta(oexerccompta, obj.OexercComptaKey).filteredObject();
				return assign({}, obj, objoreference, objotableauposte, objoexercompta);
				// return  obj;
			});
		return odareduceArray(finalObj);
	};

	const tonttcomptebalance = function (obj) {
		let odaisvalid = queryselector(obj);
		if (odaisvalid === true && replaceNullToZero(obj.SoldeCredit) !== 0 ||
			odaisvalid === true && replaceNullToZero(obj.SoldeDebit) !== 0) {
			return ({
				"OreferenceKey": obj.OreferenceKey,
				"OtableauposteKey": obj.OtableauposteKey,
				"OexercComptaKey": obj.OexercComptaKey,
				"totalSoldeDebit": obj.SoldeDebit,
				"totalSoldeCredit": obj.SoldeCredit
				// "AmortProvAmnt": getAmortProvAmnt(obj.AmortProvAmnt),
				//   "provamnt": replaceNullToZero(obj.provamnt),
				//  "amntNet": getAmountNet(obj)
			});
		}
	};
	const toapinttcomptebalance = function (obj) {
		if (isValid(obj.OreferenceKey) === true && isValid(obj.OtableauposteKey) === true && isValid(obj.OexercComptaKey) === true) {
			const odasum = getodaAggreateData(obj.nttcomptebalancedetails);
			return ({
				"OreferenceKey": obj.OreferenceKey,
				"OtableauposteKey": obj.OtableauposteKey,
				"OexercComptaKey": obj.OexercComptaKey,
				'totalSoldeDebit': odasum.totalSoldeDebit ? odasum.totalSoldeDebit : 0,
				'totalSoldeCredit': odasum.totalSoldeCredit ? odasum.totalSoldeCredit : 0
				//  "nttcomptebalancedetails":[]
				// "AmortProvAmnt": getAmortProvAmnt(obj.AmortProvAmnt),
				//   "provamnt": replaceNullToZero(obj.provamnt),
				//  "amntNet": getAmountNet(obj)
			});
		} else {
			return new Error(
` please enter missing information.`);
		}
	};
	const getObjcomptebalance = function (arr, value) {
		if (isValid(value) === true) {
			let validate = find(arr, function (o) {
					if (queryselector(value) === true) {
						return o.OexercComptaKey === value.OexercComptaKey
						 && o.OreferenceKey === value.OreferenceKey
						 && o.OtableauposteKey === value.OtableauposteKey;
					} else {
						return o.OreferenceKey === getStringValue(value.OreferenceKey)
						 || o.OtableauposteKey === getStringValue(value.OtableauposteKey)
						 || o.OexercComptaKey === getStringValue(value.OexercComptaKey)
						 || o.id === getStringValue(value.id);
					}
				});
			return {
				odaObject: function () {
					return validate;
				}
			};
		} else {
			return new Error(
`Invalid  ${value}`);
		}
	};
	function toUpdatecomptebalancedata(requestBody) {
		let d = new Date(),
		result = {};
		if (result) {
			const odasum = getodaAggreateData(requestBody.nttcomptebalancedetails);{
				result.id = requestBody.id,
				result.OreferenceKey = requestBody.OreferenceKey,
				result.OtableauposteKey = requestBody.OtableauposteKey,
				result.OexercComptaKey = requestBody.OexercComptaKey,
				result.totalSoldeDebit = odasum.totalSoldeDebit ? odasum.totalSoldeDebit : 0,
				result.totalSoldeCredit = odasum.totalSoldeCredit ? odasum.totalSoldeCredit : 0,
				result.ModifiedOn = d;
			}
		}
		return result;
	}
	function toinit() {
		return {
			modelObject: modelObject,
			nttcomptebalanceClass: nttcomptebalanceClass,
			togetcomptebalances: togetcomptebalances,
			tonttcomptebalance: tonttcomptebalance,
			getObjcomptebalance: getObjcomptebalance,
			toUpdatecomptebalancedata: toUpdatecomptebalancedata,
			toapinttcomptebalance: toapinttcomptebalance,
			togetloadnttbalance: togetloadnttbalance,
			togetcomptebalancesWithDetails: togetcomptebalancesWithDetails,
			getloadnttcomptebalanceDetaildata: getloadnttcomptebalanceDetaildata,
			getcombinednIndex: getcombinednIndex
		};
	}
	return {
		toinit: toinit
	};

})();
module.exports = {
	toinit: staticNttcomptebalance.toinit
};