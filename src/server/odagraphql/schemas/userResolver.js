
const userResolver=(function(){

  const UserMutation = new GraphQLObjectType({
    name: 'UserMutation',
    fields: {
      addUser: {
        type: UserType,
        args: {
          //GraphQLNonNull make these field required
          username: {
            type: new GraphQLNonNull(GraphQLString)
          },
          role: {
            type: new GraphQLNonNull(GraphQLString)
          },
          password: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(parent, args) {
          let user = new User({
            username: args.username,
            role: args.role,
            password: args.password
          });
          return user.save();
        }
      }

    }
  });
function toinit(){
  return {
    UserMutation:UserMutation
  }
}
return {
  toinit:toinit
}
})()
module.exports={
  toinit:userResolver.toinit
}
