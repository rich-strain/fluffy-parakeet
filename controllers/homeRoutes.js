const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Import the custom middleware
const useAuth = require('../utils/auth');

// GET all blog posts for homepage
router.get('/', async (req, res) => {
  console.log('Authenticated: ', req.session.isAuthorized);
  try {
    // Grab all blog posts and JOIN with user data
    const postData = await Post.findAll({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
    // Serialize data so the handlebars template can read it
    const posts = postData.map((posts) => posts.get({ plain: true }));
    console.log('Posts Data: ', posts);
    // Pass serialized data and session value to the template
    res.render('homepage', { posts, authenticated: req.session.isAuthorized });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', useAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      where: { post_id: req.params.id },
      include: [{ model: User, attributes: { exclude: ['password'] } }, { model: Post }],
    });
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });

    const post = postData.get({ plain: true });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    console.log('Post Data: ', post);
    console.log('Comment Data: ', commentData);

    res.render('singlePost', { post, comments, authenticated: req.session.isAuthorized });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  console.log('Authenticated: ', req.session.isAuthorized);
  if (req.session.isAuthorized) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
