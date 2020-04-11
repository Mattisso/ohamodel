const{userQuery, userMutation } =require('./userSchema').toinit()
const graphql = require('graphql');

const {  GraphQLSchema } = graphql;
  
const schema=(function(){
    const myresolver= new GraphQLSchema({
        query:userQuery,
        mutation:userMutation} )
function toinit(){
    return myresolver
}
return {
    toinit:toinit
}
})()
module.exports={
    toinit:schema.toinit
}