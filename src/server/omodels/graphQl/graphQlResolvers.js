const {UserRootQuery}=require('./user/userQuery').toinit();
const {createUserMutation}=require('./user/userMutation').toinit();
const {ocompteRootQuery}=require('./ocompte/ocompteQuery').toinit();
const {createOcompteMutation}=require('./ocompte/ocompteMutation').toinit();

const graphQlResolvers=(function(){
  
const getquery={
 userQuery:UserRootQuery,
 ocompteQuery:ocompteRootQuery
}

const getmutation={
 createUserMutation:createUserMutation,
  createOcompteMutation:createOcompteMutation
}
function toinit(){
  const getall={
    createUserMutation:createUserMutation,
     createOcompteMutation:createOcompteMutation,
     userQuery:UserRootQuery,
     ocompteQuery:ocompteRootQuery
   }
   return getall;
  /* return {
    getquery:getquery,
    getmutation:getmutation

  } */
}
return {
  toinit:toinit
}
})()
module.exports={
  toinit:graphQlResolvers.toinit
}
