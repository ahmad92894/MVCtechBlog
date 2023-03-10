const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const postData = require('./postData');
const commentData = require('./commentData');
const userData = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
   
   await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  await Post.bulkCreate(postData,{
  individualHooks: true,
  returning: true,
});
  await Comment.bulkCreate(commentData,{
    individualHooks: true,
    returning: true,
  });

    process.exit(0);
  };
  
  
  
 
  seedDatabase();