const {nttBalanceType}=require('./nttbalanceSchema').toinit();
const graphql = require('graphql');
const { GraphQLObjectType,  GraphQLString,   GraphQLNonNull} = graphql;
const {nttBalance} = require('../../modelsSchema/index').toinit();
const NttbalanceMutation = (function () {
	const toCreateNttbalance = {
		type: nttBalanceType,
		args: {},
		resolve(parent, args, context, info) {
			let nttbalance = new nttBalance({});
			return nttbalance.save();
		}
	};
	const toUpdateNttbalance = {
		type: nttBalanceType,
		args: {},
		resolve(parent, args, context, info) {
			let nttbalance = new nttBalance({});
			return nttbalance.save();
		}
	};
	const toDeleteNttbalance = {
		type: nttBalanceType,
		args: {},
		resolve(parent, args, context, info) {
			let nttbalance = new nttBalance({});
			return nttbalance.save();
		}
	};

	function toinit() {
		return {
			toCreateNttbalance: toCreateNttbalance,
			toUpdateNttbalance: toUpdateNttbalance,
			toDeleteNttbalance: toDeleteNttbalance
		};
	}
	return {
		toinit: toinit
	};
})();
module.exports = {
	toinit: NttbalanceMutation.toinit
};
