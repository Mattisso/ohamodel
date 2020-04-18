const graphql = require('graphql');
const { GraphQLObjectType,  GraphQLString,  GraphQLID} = graphql;
const {oReference} = require('../../modelsSchema/index').toinit();
// const {OreferenceType}= require('../oreference/oreferenceSchema').toinit();
const nstbalanceSchema = (function () {

	const nstBalanceType = new GraphQLObjectType({
			name: 'nstBalance',
			fields: () => ({
				id: {
					type: GraphQLID
				},
				SoldeCredit: {
					type: GraphQLString
				},
				SoldeDebit: {
					type: GraphQLString
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
			nstBalanceType: nstBalanceType,
		}
	}
	return {
		toinit: toinit
	}
})();
module.exports = {
	toinit: nstbalanceSchema.toinit
}
