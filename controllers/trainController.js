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

// Update a train
async function updateTrain(req, res) {
    try {
        const { train_id, train_name, departure_time, arrival_time } = req.body;
        const updatedTrain = await Train.update(
            { train_name, departure_time, arrival_time },
            { where: { train_id } }
        );
        res.status(200).json({ updatedTrain });
    } catch (error) {
        console.error('Error updating train:', error);
        res.status(500).json({ error: 'Failed to update train' });
    }
}

// Delete a train 
async function deleteTrain(req, res) {
    try {
        const { train_id } = req.body;
        const deletedTrain = await Train.destroy({ where: { train_id } });
        res.status(200).json({ deletedTrain });
    } catch (error) {
        console.error('Error deleting train:', error);
        res.status(500).json({ error: 'Failed to delete train' });
    }
}


module.exports = {
    createTrain, 
    getTrains, 
    updateTrain, 
    deleteTrain
}