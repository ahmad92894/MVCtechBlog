const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
   
    const userData = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    const postData = await Post.bulkCreate(postData);

    const commentData = await Comment.bulkCreate(commentData);
  
   
  
    process.exit(0);
  };
  
 
  seedDatabase();