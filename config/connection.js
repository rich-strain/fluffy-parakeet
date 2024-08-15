const Sequelize = require('sequelize'); // Import Sequelize Library
require('dotenv').config(); // Import dotenv library

// Create a new Sequelize instance
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
    });

// Export the sequelize instance
module.exports = sequelize;
