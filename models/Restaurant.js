const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    location: String,
    priceRange: String,
    menu: [
        {
            name: String,
            description: String,
            price: Number,
            image: String,
            reviewa: [
                {
                    user: String,
                    rating: Number,
                    comment: String,
                },
            ],
        },
    ],
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);