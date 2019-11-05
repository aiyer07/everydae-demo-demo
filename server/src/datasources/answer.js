const { DataSource } = require('apollo-datasource');

class AnswerAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store.store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllQuestionAnswers(questionId) {
    const answer = await this.store.answer.findAll({
      attributes: ['id', 'answerText', 'percentCorrect', 'correct'],
      where: {
        questionId: questionId
      }
    });
    return answer;
  }

  answerReducer(answer) {
  }
}

module.exports = AnswerAPI;