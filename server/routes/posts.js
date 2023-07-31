const express = require('express');
const postController = require('../controllers/posts');
const router = express.Router();

router.get('/', postController.getPosts);
router.post('/', postController.createPosts);

module.exports = router;
