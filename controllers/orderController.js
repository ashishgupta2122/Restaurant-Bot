const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
    try {
        const { restaurantId, userId, items, totalAmount, deliveryAddress } = req.body;
        const order = new Order({ restaurantId, userId, items, totalAmount, status: 'Pending', deliveryAddress });
        await order.save();
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.trackOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
