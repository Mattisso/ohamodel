const graphql = require('graphql');
const { GraphQLObjectType,  GraphQLString,  GraphQLID, GraphQLInt} = graphql;
const nttbalanceSchema = (function () {
	const nttBalanceType = new GraphQLObjectType({
			name: 'nttBalance',
			fields: () => ({
				id: {
					type: GraphQLID
				},
				SoldeCredit: {
					type: GraphQLInt
				},
				SoldeDebit: {
					type: GraphQLInt
				},
				NumCompte: {
					type: GraphQLString
				},
				IntitulCompte: {
					type: GraphQLString
				},
				OcompteKey: {
					type: GraphQLString
				},
				OreferenceKey: {
					type: GraphQLString
				},
				OtableauposteKey: {
					type: GraphQLString
				},
				OexercComptaKey: {
					type: GraphQLString
				},
			})
		});

	function toinit() {
		return {
			nttBalanceType: nttBalanceType,
		};
	}
	return {
		toinit: toinit
	};
})();
module.exports = {
	toinit: nttbalanceSchema.toinit
};
