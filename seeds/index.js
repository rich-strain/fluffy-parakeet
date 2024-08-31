// // Sequalize Connection
// const Sequelize = require('../config/connection');

// // Import Seed Data and Function For User Model
// const seedUsers = require('./userData');

// // Import Seed Data and Function For Post Model
// //const seedPosts = require('./postData');

// // Seed Entire Database - Users, Posts, Comments
// const seedDatabase = async () => {
//   await Sequelize.sync({ force: true });

//   await seedUsers();
//   //await seedPosts();

//   process.exit(0);
// };

// seedDatabase();
const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const destination = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
