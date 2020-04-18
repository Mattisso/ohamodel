const {nstBalanceType}=require('./nstbalanceSchema').toinit();
const graphql = require('graphql');
const { GraphQLObjectType,  GraphQLString,   GraphQLNonNull} = graphql;
const {nstBalance} = require('../../modelsSchema/index').toinit();
const NstbalanceMutation = (function () {
	const toCreateNstbalance = {
		type: nstBalanceType,
		args: {},
		resolve(parent, args, context, info) {
			let nstbalance = new nstBalance({});
			return nstbalance.save();
		}
	}
	const toUpdateNstbalance = {
		type: nstBalanceType,
		args: {},
		resolve(parent, args, context, info) {
			let nstbalance = new nstBalance({});
			return nstbalance.save();
		}
	}
	const toCreateNstbalance = {
		type: nstBalanceType,
		args: {},
		resolve(parent, args, context, info) {
			let nstbalance = new nstBalance({});
			return nstbalance.save();
		}
	}

	function toinit() {
		return {
			toCreateNstbalance: toCreateNstbalance,
			toUpdateNstbalance: toUpdateNstbalance,
			toDeleteNstbalance: toDeleteNstbalance,
		}
	}
	return {
		toinit: toinit
	}
})()
module.exports = {
	toinit: NstbalanceMutation.toinit
}