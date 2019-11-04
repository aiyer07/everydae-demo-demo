const { gql } = require('apollo-server');

const typeDefs = gql`

  type Query {
    launches: [Launch]
    launch(id: ID!): Launch
    # Queries for the current user
    me: User
  }

  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String # login token
  }

  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }
  
  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }
  
  type Mission {
    name: String
    missionPatch(mission: String, size: PatchSize): String
  }
  
  enum PatchSize {
    SMALL
    LARGE
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`;

module.exports = typeDefs;