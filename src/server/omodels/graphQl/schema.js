const {userQuery,createUserMutation,ocompteQuery,createOcompteMutation}=require('./graphQlResolvers').toinit();

const {GraphQLSchema, GraphQLObjectType} = require('graphql');

const schema=(function(){

  const RootQuery = {
    userQuery:userQuery,
      ocompteQuery:ocompteQuery
  }

  //new GraphQLObjectType({
//    name: 'RootQueryType',
  //  fields: {
     // userQuery:userQuery,
    //  ocompteQuery:ocompteQuery
 //   }
//  })

const Mutation ={
  createUserMutation:createUserMutation,
      createOcompteMutation:createOcompteMutation
}

/* return {
  RootQuery:RootQuery,
  Mutation:Mutation
} */
 /*  const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUserMutation:createUserMutation,
      createOcompteMutation:createOcompteMutation
    }
  }) */

    const myresolver= new GraphQLSchema({
        query:RootQuery.userQuery,
        mutation:Mutation.createUserMutation} )

function toinit(){
    return myresolver
}
return {
    toinit:toinit
}
})()
module.exports={
    toinit:schema.toinit
}
