// Sequalize Connection
const Sequelize = require('../config/connection');

// Import Seed Data and Function For User Model
const seedUsers = require('./userData');

// Import Seed Data and Function For Post Model
//const seedPosts = require('./postData');

// Seed Entire Database - Users, Posts, Comments
const seedDatabase = async () => {
  await Sequelize.sync({ force: true });

  await seedUsers();
  //await seedPosts();

  process.exit(0);
};

seedDatabase();
