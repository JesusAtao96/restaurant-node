const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsersController');

router.route('/')
    .get(usersController.index)
    .post(usersController.create);

router.route('/:id')
    .put(usersController.find, usersController.update)
    .delete(usersController.destroy);

module.exports = router;