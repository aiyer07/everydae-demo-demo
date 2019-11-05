const { gql } = require('apollo-server');

const typeDefs = gql`

  type Query {
    question: [Question]
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
    answer: [Answer]
  }
  
  type Answer {
    id: ID
    answerText: String!
    percentCorrect: Float
    correct: Boolean
  }
  
  type UserAnswer {
    id: ID!
  }
`;

module.exports = typeDefs;