const Train = require('../models/Train');

// create a new train
async function createTrain(req, res) {
    try {
        const { train_name, departure_time, arrival_time } = req.body;
        const newTrain = { train_name, departure_time, arrival_time };
        const createdTrain = await Train.create(newTrain);
        res.status(201).json({ createdTrain });
    } catch (error) {
        console.error('Error creating train:', error);
        res.status(500).json({ error: 'Failed to create train' });
    }
}

// Get all trains
async function getTrains(req, res) {
    try {
        const trains = await Train.findAll();
        res.status(200).json({ trains });
    } catch (error) {
        console.error('Error getting trains:', error);
        res.status(500).json({ error: 'Failed to get trains' });
    }
}


module.exports = {
    createTrain, 
    getTrains
}