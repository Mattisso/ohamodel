const {nstBalanceInputType}=require('./nstbalanceinputSchema').toinit();
const graphql = require('graphql');
const { GraphQLObjectType,  GraphQLString,   GraphQLNonNull} = graphql;
const {nstBalanceInput} = require('../../modelsSchema/index').toinit();


const nstbalanceinputMutation = (function () {
	const toCreateNstBalanceInput = {
		type: nstBalanceInputType,
		args: {},
		resolve(parent, args, context, info) {
			let nstbalanceinput = new nstBalanceInput({});
			return nstbalanceinput.save();
		}
	};
	const toUpdateNstBalanceInput = {
		type: nstBalanceInputType,
		args: {},
		resolve(parent, args, context, info) {
			let nstbalanceinput = new nstBalanceInput({});
			return nstbalanceinput.save();
		}
	};
	const toDeleteNstBalanceInput = {
		type: nstBalanceInputType,
		args: {},
		resolve(parent, args, context, info) {
			let nstbalanceinput = new nstBalanceInput({});
			return nstbalanceinput.save();
		}
	};
	function toinit() {
		return {
			toCreateNstBalanceInput: toCreateNstBalanceInput,
			toUpdateNstBalanceInput: toUpdateNstBalanceInput,
			toDeleteNstBalanceInput: toDeleteNstBalanceInput,
		};
	}
	return {
		toinit: toinit
	};
})();
module.exports = {
	toinit: nstbalanceinputMutation.toinit
};
