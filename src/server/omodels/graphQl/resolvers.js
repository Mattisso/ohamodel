const {getrootqueries}=require('./queryTypes').toinit();
const {togetRootMutation}=require('./mutations').toinit();

const {GraphQLObjectType}=require('graphql');

const graphQlResolvers=(function(){

  const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: function(){
return getrootqueries;
      }

    })

    const RootMutation = new GraphQLObjectType({
      name: 'Mutation',
      fields: () => {
        return togetRootMutation;
      }
    })

function toinit(){
  return {
    RootQuery:RootQuery,
    RootMutation:RootMutation

  }
}
return {
  toinit:toinit
}
})()
module.exports={
  toinit:graphQlResolvers.toinit
}
