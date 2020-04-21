const {nstBalanceInputType}=require('./nstbalanceinputSchema').toinit();
const {nstBalanceInput} = require('../../modelsSchema/index').toinit();
const {toBalanceinput, toUpdateBalanceinput}=require('../../../features/nstbalanceinput/staticNstbalanceinput').toinit();
const graphql = require('graphql');
const { GraphQLObjectType,  GraphQLString,   GraphQLNonNull, GraphQLInt,GraphQLID} = graphql;
const {insert}=require('../../../features/nstbalanceinput/index').toinit();


const nstbalanceinputMutation = (function () {
	const toCreateNstBalanceInput = {
		type: nstBalanceInputType,
		args: { 		NumCompte: {
			type: new GraphQLNonNull(GraphQLString)
		},
		IntitulCompte: {
			type:  new GraphQLNonNull(GraphQLString)
		},
		SoldeCredit: {
			type: GraphQLInt
		}	,

			SoldeDebit: {
			type: GraphQLInt
		}

	},
		resolve(parent, args, context, info) {
		//	let nstbalanceinput = new nstBalanceInput(toBalanceinput(args));
			return insert(toBalanceinput(args));
		}
	};
	const toUpdateNstBalanceInput = {
		type: nstBalanceInputType,
		args: {id: {
			type: GraphQLID
		},
		NumCompte: {
			type: new GraphQLNonNull(GraphQLString)
		},
		IntitulCompte: {
			type:  new GraphQLNonNull(GraphQLString)
		},
		SoldeCredit: {
			type: GraphQLInt
		}	,
  SoldeDebit: {
			type: GraphQLInt
		}
	},
		resolve(parent, args, context, info) {
			let nstbalanceinput = new nstBalanceInput(toUpdateBalanceinput(args));
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
