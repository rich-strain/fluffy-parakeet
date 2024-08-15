// Sequalize Connection
const Sequelize = require('../config/connection');

// Import the models
const { User } = require('../models');

// Seed Data for the User model
const userData = require('./userData.json');

// Seed the User model
const seedDatabase = async () => {
  await Sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
