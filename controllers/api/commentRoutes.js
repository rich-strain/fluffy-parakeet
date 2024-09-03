const router = require('express').Router();
const { Comment } = require('../../models');
const verifyAuth = require('../../utils/auth');

router.post('/', verifyAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      post_id: req.body.postId,
      user_id: req.session.user_id,
      content: req.body.commentContent,
    });

    res.status(200).json(newComment);
    console.log(req.body);
    res.status(200);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
