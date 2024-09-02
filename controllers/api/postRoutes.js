const router = require('express').Router();

const e = require('express');
const { User, Post } = require('../../models');

// Import the custom middleware
const verifyAuth = require('../../utils/auth');

// Create New Post
router.post('/', async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.postTitle,
      post_content: req.body.postContent,
      user_id: req.session.user_id,
    });

    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update Post By Id
router.put('/:id', async (req, res) => {
  try {
    const dbPostData = await Post.update(
      {
        title: req.body.postTitle,
        post_content: req.body.postContent,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete Post By Id
router.delete('/:id', async (req, res) => {
  try {
    const dbPostData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
