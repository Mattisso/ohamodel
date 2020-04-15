const graphql = require('graphql');
const {User} = require('../../modelsSchema/index').toinit();
const {UserType}=require('./userSchema').toinit()
const { GraphQLID, GraphQLList, GraphQLString} = graphql;
const {getapistreamdata$,getapiObserver, getapiCreateObserver,getapinotification,subapiCreateObserver}=require('../../../sharedkernel/odaSubscribe').toinit();


const {getall,index$} = require('../../../features/user/index').toinit();
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

    resolve(parent, args, context, info) {
return    User.find({});;
       // }
      //  console.log(data)
     //   return data

   //   (res,next)


      //  console.log(data);
      //  return data;


     // return  User.find({});
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
