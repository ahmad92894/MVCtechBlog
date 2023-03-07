const { Post } = require('../models');
const postData = [
    {
      title: 'My First Post',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'My Second Post',
      body: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    }
  ];
  const seedPostData = () => Post.bulkCreate(postData);
  module.exports = seedPostData;