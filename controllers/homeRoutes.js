const router = require('express').Router();
const { User, Post } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all blog posts for homepage
router.get('/', async (req, res) => {
  try {
    // Grab all blog posts and JOIN with user data
    const postData = await Post.findAll({
      include: [{ model: User }],
    });

    // Serialize data so the handlebars template can read it
    const posts = postData.map((posts) => posts.get({ plain: true }));

    // Pass serialized data and session value to the template
    res.render('posts', { posts });
    //res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/registration', async (req, res) => {
  try {
    res.render('registration');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
