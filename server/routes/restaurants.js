const express = require('express');
const router = express.Router();

const restaurantsController = require('../controllers/RestaurantsController');

const { checkToken } = require('../middlewares/authenticacion');

router.route('/')
    .get(checkToken, restaurantsController.index)
    .post(checkToken, restaurantsController.create)

router.route('/:id')
    .get(checkToken, restaurantsController.only)
    .put(checkToken, restaurantsController.update)
    .delete(checkToken, restaurantsController.destroy);

module.exports = router;