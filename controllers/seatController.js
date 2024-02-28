const Seat = require('../models/Seat');
const Reservation = require('../models/Reservation');

// create a seat in a train
async function createSeat(req, res) {
    try {
        const { train_id, seat_number, status } = req.body;
        const newSeat = { train_id, seat_number, status };
        const createdSeat = await Seat.create(newSeat);
        res.status(201).json({ createdSeat });
    } catch (error) {
        console.error('Error creating seat:', error);
        res.status(500).json({ error: 'Failed to create seat' });
    }
}

// get all seats in a train
async function getSeats(req, res) {
    try {
        const seats = await Seat.findAll({ where: { train_id: req.params.id } });
        console.log(seats.length);
        var seatsInTrain = {
            train_id: req.params.id,
            total_seats: seats.length
        }
        res.status(200).json(seatsInTrain);
    } catch (error) {
        console.error('Error getting seats:', error);
        res.status(500).json({ error: 'Failed to get seats' });
    }
}

// get all available seats in a train
async function getAvailableSeats(req, res) {
    try {
        const seats = await Seat.findAll({ where: { train_id: req.params.id, status: 'Available' } });
        console.log(seats.length);
        var seatsInTrain = {
            train_id: req.params.id,
            total_seats: seats.length
        }
        res.status(200).json(seatsInTrain);
    } catch (error) {
        console.error('Error getting seats:', error);
        res.status(500).json({ error: 'Failed to get seats' });
    }
}

// update a seat data
async function updateSeat(req, res) {
    try {
        const { seat_id, train_id, seat_number, status } = req.body;
        const updatedSeat = await Seat.update(
            { train_id, seat_number, status },
            { where: { seat_id } }
        );
        res.status(200).json({ updatedSeat });
    } catch (error) {
        console.error('Error updating seat:', error);
        res.status(500).json({ error: 'Failed to update seat' });
    }
}

// delete a seat 
async function deleteSeat(req, res) {
    try {
        const { seat_id } = req.body;
        const deletedSeat = await Seat.destroy({ where: { seat_id } });
        res.status(200).json({ deletedSeat });
    } catch (error) {
        console.error('Error deleting seat:', error);
        res.status(500).json({ error: 'Failed to delete seat' });
    }
}

// get reserved seats for a user 
async function getReservedSeats(req, res) {
    try {
        const reservedSeats = await Reservation.findAll({ where: { user_id: req.params.id } });
        res.status(200).json({ reservedSeats: reservedSeats.length });
    } catch (error) {
        console.error('Error getting reserved seats:', error);
        res.status(500).json({ error: 'Failed to get reserved seats' });
    }
}

module.exports = {
    createSeat,
    getSeats, 
    updateSeat, 
    deleteSeat, 
    getAvailableSeats,
    getReservedSeats
}