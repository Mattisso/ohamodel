
const {GraphQLObjectType, GraphQLString, GraphQLID,  GraphQLInt, GraphQLNonNull} = require('graphql');
const {nstBalanceInputType}=require('./nstbalanceinputSchema').toinit();

const nstbalanceinputSubscription=(function(){
  const toNewNstbalanceInput = {
    type:  nstBalanceInputType,
    args: {
      NumCompte: {
        type: GraphQLString
      },
      IntitulCompte: {
        type: GraphQLString
      },
      SoldeDebit: {
        type: GraphQLInt
      },
      SoldeCredit: {
        type: GraphQLInt
      },
    }

  };
  function toinit(){
    return {
      toNewNstbalanceInput:toNewNstbalanceInput

    };
  }
  return {
    toinit:toinit
  };
})();
module.exports={
  toinit:nstbalanceinputSubscription.toinit
};


