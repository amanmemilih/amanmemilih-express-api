const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("amanmemilih", "root", "", {
  host: "db",
  dialect: "mysql",
});

module.exports = sequelize;
