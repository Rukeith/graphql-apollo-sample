const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const schema = require('./schema.js');
const server = express();

mongoose.connect('mongodb://localhost:27017/graphqlTutorial', { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => console.log('connection to database was successful!'));

server.use('/graphiql', graphiqlExpress({
  endpointURL: "/graphql"
}));
server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

server.listen(4000, () => console.log('listening on port 4000'));