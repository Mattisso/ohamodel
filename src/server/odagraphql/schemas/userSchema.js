
const userSchemas=(function(){

  const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        username: {
            type: GraphQLString
        },
        role: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        loginAttempts: {
            type: GraphQLInt
        }
    })
  }); 
  
  function toinit(){
return {
  UserType:UserType
}
  };
return {
  toinit:toinit
}
})()
module.exports={
  toinit:userSchemas.toinit
}