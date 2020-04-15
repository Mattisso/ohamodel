const {nstBalanceInputType}=require('./nstbalanceinputSchema').toinit()

const nstbalanceinputSubscription=(function(){
  const toNewnstBalanceInput= {
    type: nstBalanceInputType
   /*  args: {
      username: {
        type: GraphQLID
      }
    } */
  }

function toinit(){
  return {
    toNewnstBalanceInput:toNewnstBalanceInput
  }
}
return {
  toinit:toinit
}
})()
module.exports={
  toinit:nstbalanceinputSubscription.toinit
}
