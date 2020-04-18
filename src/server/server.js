"use strict"
const dotenv= require('dotenv');
const express = require('express');
// const graphqlHTTP = require('express-graphql');
const {ApolloServer}= require('apollo-server-express');
const path= require('path');
const _path= '/graphql';

const schema = require('../server/omodels/graphQl/schema').toinit();
const app = express();
dotenv.config({path: '.env'});
app.set('port', (process.env.PORT || 3000));
require('./config/ohadb').connectserver();
const server = new ApolloServer({schema, cors:true, introspection:true});
server.applyMiddleware({app, _path});
app.listen(app.get('port'), () => {
    console.log(`server ready at http://localhost:${app.get('port')}/${server.graphqlPath}`);
  });
