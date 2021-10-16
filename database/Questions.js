const Sequelize = require("sequelize");
const connection = require("./database");


// Passando os parametros de criação da table 'questions' pelo método define do sequelize.
const Question = connection.define('questions', {
  // passando os campos da tabela em formato JSON;
  username:{
    type: Sequelize.STRING
  },
  title:{
    type: Sequelize.STRING,
    allowNull: false
  },
  description:{
    type: Sequelize.TEXT,
    allowNull: false
  },
  description:{
    type: Sequelize.TEXT,
    allowNull: false
  }
});

// Sincronizando a tabela com o banco, e criando caso não exista, o "force" significa que não forçará uma nova criação se a tabela já existir
Question.sync({force: false}).then(() => {});

module.exports = Question;