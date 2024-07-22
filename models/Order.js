const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    restaurantId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    items: [
        {
            name: String,
            quantity: Number,
            price: Number,
        },
    ],
    totalAmount: Number,
    status: String, // e.g., "Pending", "Confirmed", "Out for delivery", "Delivered"
    deliveryAddress: String,
});

module.exports = mongoose.model('Order', OrderSchema);
