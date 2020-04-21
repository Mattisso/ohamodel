const {toNewUser}=require('./user/userSubscription').toinit();

const subscriptions=(function(){

const getRootSubscriptions=  {
  toNewUser:toNewUser


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
