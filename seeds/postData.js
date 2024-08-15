// Import the models
const { Post } = require('../models');

// Seed Data for the Post model
const postData = [
  {
    title: 'Title 1',
    post_content: 'This is the first post!',
    user_id: 1,
  },
  {
    title: 'Title 2',
    post_content: 'This is the second post!',
    user_id: 2,
  },
  {
    title: 'Title 3',
    post_content: 'This is the third post!',
    user_id: 3,
  },
];

// Seed the Post model
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
