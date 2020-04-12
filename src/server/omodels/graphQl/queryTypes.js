const {getuser, getusers}=require('./user/userQuery').toinit();
const {getoreference,getoreferences}=require('./oreference/oreferenceQuery').toinit();
const {getocompte,getocomptes}=require('./ocompte/ocompteQuery').toinit();
// const {createOcompteMutation}=require('./ocompte/ocompteMutation').toinit();
// const { GraphQLObjectType} =require('graphql');

const graphQueryType=(function(){

const getrootqueries=  {
  getuser:getuser,
  getusers:getusers,
  getocompte:getocompte,
  getocomptes:getocomptes,
  getoreference:getoreference,
  getoreferences:getoreferences

}


function toinit(){
  return {
    getrootqueries:getrootqueries
   // getmutation:getmutation

  }
}
return {
  toinit:toinit
}
})()
module.exports={
  toinit:graphQueryType.toinit
}
