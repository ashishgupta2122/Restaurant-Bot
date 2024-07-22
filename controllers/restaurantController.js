const Restaurant = require('../models/Restaurant');
const Reservation = require('../models/Reservation');

exports.getRestaurants = async (req, res) => {
    try {
        const { cuisine, location, priceRange, keyword } = req.query;
        let query = {};

        if (cuisine) {
            query.cuisine = cuisine;
        }
        if (location) {
            query.location = location;
        }
        if (priceRange) {
            query.priceRange = priceRange;
        }
        if (keyword) {
            query.name = { $regex: keyword, $options: 'i' };
        }

        const restaurants = await Restaurant.find(query);
        res.json(restaurants);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getRestaurantMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findById(id).select('menu');
        res.json(restaurant.menu);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.makeReservation = async (req, res) => {
    try {
        const { restaurantId, userId, date, time, specialRequests } = req.body;
        const reservation = new Reservation({ restaurantId, userId, date, time, specialRequests });
        await reservation.save();
        res.json(reservation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

