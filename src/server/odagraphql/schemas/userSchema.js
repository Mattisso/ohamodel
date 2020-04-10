const graphql = require('graphql');
const {User} = require('../../omodels/modelsSchema/index').toinit();
const {GraphQLObjectType,GraphQLString,GraphQLID
  ,GraphQLSchema,GraphQLList, GraphQLNonNull,GraphQLInt} = graphql;

const userSchema=(function(){
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

  
const UserRootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
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
              return User.find({});
          }
      }
     
  }
});
  const UserMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                //GraphQLNonNull make these field required
                username: { type: new GraphQLNonNull(GraphQLString) },
                role: { type: new GraphQLNonNull(GraphQLString)},
                password:{ type: new GraphQLNonNull(GraphQLString) }
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
const userresolver= new GraphQLSchema({
  query: UserRootQuery,
  mutation:UserMutation
})
return userresolver
  };
return {
  toinit:toinit
}
})()
module.exports = {
  toinit:userSchema.toinit
}