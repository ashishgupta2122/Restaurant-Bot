const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    restaurantId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    date: Date,
    time: String,
    specialRequests: String,
});

module.exports = mongoose.model('Reservation', ReservationSchema);