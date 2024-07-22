const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/search', restaurantController.searchRestaurants);

module.exports = router;

router.get('/:id/menu', restaurantController.getRestaurantMenu);