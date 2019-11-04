const { DataSource } = require('apollo-datasource');

class QuestionsAPI extends DataSource {
  constructor() {
    super();
  }

  async getAllQuestions() {
    const email =
      this.context && this.context.user ? this.context.user.email : emailArg;
    if (!email || !isEmail.validate(email)) return null;
    const users = await this.store.users.findOrCreate({ where: { email } });
    console.log(users)
    return users && users[0] ? users[0] : null;
  }

  questionReducer(question) {
  }
}

module.exports = QuestionsAPI;