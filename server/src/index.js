require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');

const resolvers = require('./resolvers');

const QuestionAPI = require('./datasources/question');
const UserAPI = require('./datasources/user');
const AnswerAPI = require('./datasources/answer');

const store = createStore();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  },
  dataSources: () => ({
    questionAPI: new QuestionAPI({ store })  ,
    userAPI: new UserAPI({ store }),
    answerAPI: new AnswerAPI({ store })
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});