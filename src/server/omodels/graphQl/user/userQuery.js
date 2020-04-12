const graphql = require('graphql');
const {User} = require('../../modelsSchema/index').toinit();
const {UserType}=require('./userSchema').toinit()
const { GraphQLObjectType,    GraphQLID,   GraphQLList} = graphql;
const userQuery = (function () {

  const UserRootQuery = new GraphQLObjectType({
    name: 'UserRootQueryType',
    fields: {
      getuser: {
        type: UserType,
        //argument passed by the user while making the query
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve(parent, args) {
          //Here we define how to get data from database source

          //this will return the book with id passed in argument by the user
          return User.findById(args.id);
        }
      },
      getusers: {
        type: new GraphQLList(UserType),
        //argument passed by the user while making the query
        resolve(parent, args) {
          //Here we define how to get data from database source

          //this will return the book with id passed in argument by the user
          return  User.find({});
        }
      }

    }
  });
  function toinit(){
    return {
      UserRootQuery:UserRootQuery
    }
  }
  return {
toinit:toinit
  }
})()
module.exports={
toinit:userQuery.toinit
}
