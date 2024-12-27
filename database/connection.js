const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('amanmemilih', 'yazidal', 'yazidal', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
