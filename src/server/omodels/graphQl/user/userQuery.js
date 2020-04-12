const graphql = require('graphql');
const {User} = require('../../modelsSchema/index').toinit();
const {UserType}=require('./userSchema').toinit()
const { GraphQLObjectType,    GraphQLID,   GraphQLList} = graphql;
const {getapistreamdata$,getapiObserver, getapiCreateObserver,getapinotification}=require('../../../sharedkernel/odaSubscribe').toinit();

const userQuery = (function () {

  const getuser= {
    type: UserType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve(parent, args) {
      return User.findById(args.id);
    }
  }
  const getusers= {
    type: new GraphQLList(UserType),
    
    resolve(parent, args) {
      return  User.find({});
    }
  }

  function toinit(){
    return {
      getuser:getuser,
      getusers:getusers
    }
  }
  return {
toinit:toinit
  }
})()
module.exports={
toinit:userQuery.toinit
}
