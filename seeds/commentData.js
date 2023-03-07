const { Comment } = require('../models');
const commentData = [
    {
      comment_text: 'Great post!',
      user_id: 1,
      post_id: 1
    },
    {
      comment_text: 'I agree!',
      user_id: 2,
      post_id: 1
    }
  ];
  const seedComment = () => Comment.bulkCreate(commentData);
  module.exports = seedComment;