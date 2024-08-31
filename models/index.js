// Import the User, Post, and Comment models
const User = require('./User');
const Post = require('./Post');
//const Comment = require('./Comment'); // Create Comment model after Post model is working

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// Export the User, Post, and Comment models
module.exports = { User, Post };
