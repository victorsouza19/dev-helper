const Sequelize = require('sequelize');

const connection = new Sequelize(
  'devhelper',
  'root',
  'admin', 
  {
  host: 'localhost',
  dialect: 'mysql'
  });

module.exports = connection;