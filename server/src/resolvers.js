module.exports = {
  Query: {
    question: (_, __, { dataSources }) =>
    dataSources.questionAPI.getAllQuestions()
    // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  },
  Question: {
    answer: (parent, __, { dataSources }) => dataSources.answerAPI.getAllQuestionAnswers(parent.id)
  }
};