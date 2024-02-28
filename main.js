const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();

const app = express();

const userRoutes = require('./routes/user');
const User = require('./models/User');

const trainRoutes = require('./routes/train');
const Train = require('./models/Train');

const seatRoutes = require('./routes/seat');
const Seat = require('./models/Seat');

const reservationRoutes = require('./routes/reservation');
const Reservation = require('./models/Reservation');

app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/train', trainRoutes);
app.use('/seat', seatRoutes);
app.use('/reservation', reservationRoutes);

User.sync();
Train.sync();
Seat.sync();
Reservation.sync();

app.listen(8000, () => {
    console.log('Listening on port 8000');
});