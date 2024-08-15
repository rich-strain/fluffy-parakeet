// Import the models
const { User } = require('../models');

// Seed Data for the User model
const userData = require('./userData.json');

// Seed the User model
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
