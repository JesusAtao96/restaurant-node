const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/CommentsController');

const { checkToken } = require('../middlewares/authenticacion');

router.route('/')
    .get(checkToken, commentsController.index)
    .post(checkToken, commentsController.create)

router.route('/:id')
    .get(checkToken, commentsController.only)
    .put(checkToken, commentsController.update)
    .delete(checkToken, commentsController.destroy);

module.exports = router;