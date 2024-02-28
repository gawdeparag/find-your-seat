const Reservation = require('../models/Reservation');
const Seat = require('../models/Seat');

// create a reservation
async function createReservation(req, res) {
    try {
        const { user_id, train_id, seat_id, reservation_date } = req.body;
        const newReservation = { user_id, train_id, seat_id, reservation_date };
        const createdReservation = await Reservation.create(newReservation);
        await Seat.update({ status: 'Reserved' }, { where: { seat_id } });
        res.status(201).json({ createdReservation });
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ error: 'Failed to create reservation' });
    }
}

// get all reservations
async function getReservations(req, res) {
    try {
        const reservations = await Reservation.findAll();
        res.status(200).json({ reservations });
    } catch (error) {
        console.error('Error getting reservations:', error);
        res.status(500).json({ error: 'Failed to get reservations' });
    }
}

// update a reservation
async function updateReservation(req, res) {
    try {
        const { reservation_id, user_id, train_id, seat_id, reservation_date } = req.body;
        const updatedReservation = await Reservation.update(
            { user_id, train_id, seat_id, reservation_date },
            { where: { reservation_id } }
        );
        res.status(200).json({ updatedReservation });
    } catch (error) {
        console.error('Error updating reservation:', error);
        res.status(500).json({ error: 'Failed to update reservation' });
    }
}

// delete a reservation
async function deleteReservation(req, res) {
    try {
        const { reservation_id } = req.body;
        const deletedReservation = await Reservation.destroy({ where: { reservation_id } });
        res.status(200).json({ deletedReservation });
    } catch (error) {
        console.error('Error deleting reservation:', error);
        res.status(500).json({ error: 'Failed to delete reservation' });
    }
}

module.exports = {
    createReservation,
    getReservations, 
    updateReservation,
    deleteReservation
}