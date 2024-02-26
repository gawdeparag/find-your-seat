const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();

const userRoutes = require('./routes/user');
const User = require('./models/User');

const trainRoutes = require('./routes/train');
const Train = require('./models/Train');

const app = express();

app.use(bodyParser.json());
app.use('/user', userRoutes);
app.use('/train', trainRoutes);

User.sync();
Train.sync();

app.listen(8000, () => {
    console.log('Listening on port 8000');
});