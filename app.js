const express = require('express');
const blogRoutes = require('./routes/blogRoutes');
const sequelize = require('./database/connection');

const app = express();

app.use(express.json());
app.use('/api/blogs', blogRoutes);

sequelize.sync({ force: false }) // Change to `true` if you want to reset tables on every run
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Database connection failed:', err));

module.exports = app;
