const {nttBalanceType}=require('./nttbalanceSchema').toinit();
const graphql = require('graphql');
const { GraphQLObjectType,  GraphQLString,   GraphQLNonNull} = graphql;
const {nttBalance} = require('../../modelsSchema/index').toinit();
const {tonttbalance}=require('../../../features/nttbalance/staticNttbalance').toinit();

const nttbalanceMutation = (function () {
	const toCreateNttbalance = {
    type: nttBalanceType,
    args: {
      OtableauposteKey: {
        type: GraphQLString
      },
      OexercComptaKey: {
        type: GraphQLString
      },
      OcompteKey: {
        type: GraphQLString
      },
      OreferenceKey: {
        type: GraphQLString
      },
      NumCompte: {
        type: GraphQLString
      },
      IntitulCompte: {
        type: GraphQLString
      },
      SoldeDebit: {
        type: GraphQLString
      },
      SoldeCredit: {
        type: GraphQLString
      },
    },
    resolve(parent, args, context, info) {
      let nttbalance = new nttBalance(tonttbalance(args));
      return nttbalance.save();
    }
  }
  ;
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
	toinit: nttbalanceMutation.toinit
};
