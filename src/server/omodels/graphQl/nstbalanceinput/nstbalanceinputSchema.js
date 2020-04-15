const graphql = require('graphql');
// const {User} = require('../../modelsSchema/index').toinit();
const { GraphQLObjectType,  GraphQLString,  GraphQLID, GraphQLNonNull,
  GraphQLInt} = graphql;

const nstbalanceinputSchema=(function(){
  const nstBalanceInputType = new GraphQLObjectType({
    name: 'nstBalanceInput',
    fields: () => ({
      id: {
        type: GraphQLID,
        resolve: (root, args, context, info) => {
          return root.id
        }
      },
      SoldeDebit: {
        type: GraphQLInt,
        resolve: (root, args, context, info) => {
          return root.SoldeDebit
        }
      },
      CompteNumber: {
        type: GraphQLString,
        resolve: (root, args, context, info) => {
          return root.CompteNumber
        }
      },
      SoldeCredit: {
        type: GraphQLInt,
        resolve: (root, args, context, info) => {
          return root.SoldeCredit
        }
      },
      IntitulCompte: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: (root, args, context, info) => {
          return root.IntitulCompte
        }
      },
      NumCompte: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: (root, args, context, info) => {
          return root.NumCompte
        }
      },
    })
  });
  function toinit(){
    return {
      nstBalanceInputType:nstBalanceInputType

    }
  }
  return {
    toinit:toinit
  }
})()
module.exports={
  toinit:nstbalanceinputSchema.toinit
}


