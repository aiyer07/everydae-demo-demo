const SQL = require('sequelize');

module.exports.createStore = () => {
  const Op = SQL.Op;
  const operatorsAliases = {
    $in: Op.in,
  };
  const db = new SQL('test', 'username', 'password', {
    dialect: 'postgres',
    operatorsAliases,
    host: 'localhost',
    port: '5555',
    logging: false,
  });
  // db.sync({ logging: console.log })
  db.authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch(e => {
    console.log('Unable to connect to the database:', e);
  })
  const users = db.define('user', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: SQL.STRING
  }, {freezeTableName: true});

  const question = db.define('question', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: SQL.STRING
  }, {freezeTableName: true});

  const answer = db.define('answer', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    answerText: SQL.STRING,
    percentCorrect: SQL.NUMERIC,
    correct: SQL.BOOLEAN,
  }, {freezeTableName: true});

  return { users, question, answer };
};
