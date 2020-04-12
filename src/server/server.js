"use strict"
const dotenv= require('dotenv');
const express = require('express');
// const graphqlHTTP = require('express-graphql');
const {ApolloServer}= require('apollo-server-express');

const schema = require('../server/omodels/graphQl/schema').toinit();
const app = express();
dotenv.config({path: '.env'});
app.set('port', (process.env.PORT || 3000));
require('./config/ohadb').connectserver();
const server = new ApolloServer({schema});
server.applyMiddleware({app});
/* mongoose.connect('mongodb://localhost:27017/graphql')

mongoose.connection.once('open', () => {
    console.log('conneted to database');
}); */
//This route will be used as an endpoint to interact with Graphql,
//All queries will go through this route.
/* app.use('/graphql', graphqlHTTP({
    //directing express-graphql to use this schema to map out the graph
    schema,
    //directing express-graphql to use graphiql when goto '/graphql' address in the browser
    //which provides an interface to make GraphQl queries
    graphiql:true
}));*/

app.listen(app.get('port'), () => {
    console.log(`listening on port  ${app.get('port')}... ${server.graphqlPath}`);
  });
