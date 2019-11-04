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
  });

  const questions = db.define('question', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: SQL.STRING
  });

  const answers = db.define('answer', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }
  });

  return { users, questions, answers };
};
