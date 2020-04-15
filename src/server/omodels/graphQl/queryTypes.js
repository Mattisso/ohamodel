const {getuser, getusers}=require('./user/userQuery').toinit();
const {getoreference,getoreferences}=require('./oreference/oreferenceQuery').toinit();
const {getocompte,getocomptes}=require('./ocompte/ocompteQuery').toinit();
const {getnstbalanceinput,getnstbalanceinputs}=require('./nstbalanceinput/nstbalanceinputQuery').toinit();

// const {createOcompteMutation}=require('./ocompte/ocompteMutation').toinit();
// const { GraphQLObjectType} =require('graphql');

const queryTypes=(function(){

const getrootqueries=  {
  getuser:getuser,
  getusers:getusers,
  getocompte:getocompte,
  getocomptes:getocomptes,
  getoreference:getoreference,
  getoreferences:getoreferences,
  getnstbalanceinput:getnstbalanceinput,
  getnstbalanceinputs:getnstbalanceinputs

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
  toinit:queryTypes.toinit
}
