const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const BlogAdmin = sequelize.define('BlogAdmin', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'blog_admins',
  timestamps: true,
});

module.exports = BlogAdmin;
