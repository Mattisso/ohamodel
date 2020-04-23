const {toNewUser}=require('./user/userSubscription').toinit();
const {toNewNstbalanceInput}=require('./nstbalanceinput/nstbalanceinputSubscription').toinit();


const subscriptions=(function(){

const getRootSubscriptions=  {
  toNewUser:toNewUser,
  toNewNstbalanceInput:toNewNstbalanceInput



};


function toinit(){
  return {
    getRootSubscriptions:getRootSubscriptions
   // getmutation:getmutation

  };
}
return {
  toinit:toinit
};
})();
module.exports={
  toinit:subscriptions.toinit
};
