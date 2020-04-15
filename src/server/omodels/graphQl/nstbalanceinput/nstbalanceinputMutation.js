const graphql = require('graphql');
const {oReference} = require('../../modelsSchema/index').toinit();
const {GraphQLString,GraphQLNonNull, GraphQLInt} = graphql;

const  nstbalanceinputMutation =(function(){
  toCreateNstbalanceinput ={
    type:NstbalanceinputType,
    args:{
      NumCompte: { type: new GraphQLNonNull(GraphQLString)},
      IntitulCompte: { type: new GraphQLNonNull(GraphQLString)},
      SoldeDebit: { type:  GraphQLInt},
      SoldeCredit: { type:  GraphQLInt}

        //NumCompte, IntitulCompte, SoldeCredit, SoldeDebit
    },
    resolve(parent,args){
        let oreference = new oReference({
            RefCode:args.RefCode,
            Description:args.Description
        })
        return oreference.save()
    }
}
  function toinit(){
    return {

    }
  }
  return {
toinit:toinit
  }
})()
module.exports={
toinit:nstbalanceinputMutation.toinit
}
