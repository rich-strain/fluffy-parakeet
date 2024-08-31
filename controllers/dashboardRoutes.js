const router = require('express').Router();
const { User, Post } = require('../models');
const verifyAuth = require('../utils/auth');

// Render All Posts Belonging to User
router.get('/', verifyAuth, async (req, res) => {
  console.log('AUTHENTICATED IS : ', req.session.isAuthorized);
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User }],
    });

    // Serialize data so the handlebars template can read it
    const posts = postData.map((posts) => posts.get({ plain: true }));

    console.log('Posts Data: ', posts);

    // Pass serialized data and session value to the template
    res.render('dashboard', { posts, authenticated: req.session.isAuthorized });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Render New Post Page
router.get('/new', verifyAuth, async (req, res) => {
  try {
    res.render('newPost', { authenticated: req.session.isAuthorized });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/edit_post/:id', verifyAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    const post = postData.get({ plain: true });
    console.log('Post Data: ', post);
    res.render('editPost', { post, authenticated: req.session.isAuthorized });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
