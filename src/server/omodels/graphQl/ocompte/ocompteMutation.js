const {OcompteType}=require('./ocompteSchema').toinit()
const graphql = require('graphql');
const { GraphQLObjectType,  GraphQLString,   GraphQLNonNull} = graphql;
const {Ocompte} = require('../../modelsSchema/index').toinit();

const ocompteMutation=(function(){
  const createOcompteMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {

        addOcompte: {
            type: OcompteType,
            args: {
                //GraphQLNonNull make these field required
                CompteNumber: { type: new GraphQLNonNull(GraphQLString) },
             //   oreferenceID: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                let ocompte = new Ocompte({
                    CompteNumber: args.CompteNumber,
                  //  oreferenceID: args.oreferenceID
                });
                return ocompte.save();
            }
        }

    }
});

  function toinit(){
    return {
      createOcompteMutation:createOcompteMutation
    }
  }
  return {
toinit:toinit
  }
})()
module.exports = {
  toinit: ocompteMutation.toinit
}
