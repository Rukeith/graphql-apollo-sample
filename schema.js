const {
  makeExecutableSchema,
  addMockFunctionsToSchema
} = require('graphql-tools');
const resolvers = require('./resolvers.js');
const typeDefs = `
  type Author {
    id: String
    age: Int
    name: String
    books: [String]
  }
  type Query {
    authors(age: Int): [Author]
    author(id: String): Author
  }
  type Mutation {
    addAuthor(name: String!, age: Int!, books: [String]!): Author
    deleteAuthor(id: String!): Author
    updateAuthor(id: String!, name: String!): Author
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;