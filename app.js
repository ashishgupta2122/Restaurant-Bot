const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const restaurantRoutes = require('./routes/restaurants');

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to Database
mongoose.connect('mongodb://localhost:27017/restaurantBot', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

app.use(bodyParser.json());

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reservations', reservationsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
