const express = require('express');
const router = express.Router();
const seatController = require('../controllers/seatController');
const authMiddleware = require('../middleware/authMiddleware');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/train/:id', seatController.getSeats);
router.get('/train/:id/available', seatController.getAvailableSeats);
router.get('/reservation', authMiddleware, seatController.getReservedSeats);

router.post('/new', seatController.createSeat);

router.put('/update', seatController.updateSeat);

router.delete('/delete', seatController.deleteSeat);


module.exports = router;