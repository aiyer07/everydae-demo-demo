const { gql } = require('apollo-server');

const typeDefs = gql`

  type Query {
    questions: [Question]
    me: User
  }

  type Mutation {
    createUser(name: String!): String!
  }

  type User {
    id: ID!
    name: String
  }

  type Question {
    id: ID!
    name: String
    type: String
  }
  
  type Answer {
    id: ID!
  }
  
  type UserAnswer {
    id: ID!
  }
`;

module.exports = typeDefs;