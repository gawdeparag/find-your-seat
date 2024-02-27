const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/all', reservationController.getReservations);
router.post('/new', reservationController.createReservation);
router.put('/update', reservationController.updateReservation);
router.delete('/delete', reservationController.deleteReservation);


module.exports = router;