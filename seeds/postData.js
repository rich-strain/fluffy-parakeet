// Import the models
const { Post } = require('../models');

// Seed Data for the Post model
const postData = [
  {
    title: 'Apple Outperforms Google and Microsoft',
    post_content:
      'Over the last several weeks, we’ve had Google I/O, which highlighted the rollout of Google’s Gemini AI engine for smartphones; Microsoft Build, which focused on its Copilot+ rollout for PCs; and Apple’s WWDC24 video, which showcased the rollout of AI on both PCs and smartphones. Google’s launch was well executed, focused on attractive and interesting features, and was well received. Microsoft’s event was a bit of a mess; its most advanced capabilities didn’t work on any existing hardware, didn’t encompass most of the PC market, and ran up a ton of negative press on the Recall feature, which got buried under false concerns surrounding privacy.',
    user_id: 1,
  },
  {
    title: 'CSS Functions',
    post_content:
      'Most days, I’m writing vanilla CSS. Thanks to CSS variables and nesting, I have fewer reasons to reach for Sass or any other preprocessor. The times I reach for Sass tend to be when I need a @mixin to loop through a list of items or help keep common styles DRY. That could change for me in the not-so-distant future since a new CSS Functions and Mixins Module draft was published in late June after the CSSWG resolved to adopt the proposal back in February.',
    user_id: 2,
  },
];

// Seed the Post model
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
