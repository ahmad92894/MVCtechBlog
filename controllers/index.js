const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./api/postRoutes');
const userRoutes = require('./api/userRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;
