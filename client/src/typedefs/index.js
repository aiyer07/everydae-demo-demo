import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    question: [Question]
  }
  # extend type Mutation {
  #   addOrRemoveFromCart(id: ID!): [Launch]
  # }
`;
