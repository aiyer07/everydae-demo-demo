const { DataSource } = require('apollo-datasource');

class QuestionsAPI extends DataSource {
  constructor(store) {
    super();
    this.store = store.store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllQuestions() {
    const question = await this.store.question.findAll();
    return question;
  }

  questionReducer(question) {
  }
}

module.exports = QuestionsAPI;