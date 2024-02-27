const express = require('express');
const router = express.Router();
const seatController = require('../controllers/seatController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/train/:id', seatController.getSeats);
router.post('/new', seatController.createSeat);
router.put('/update', seatController.updateSeat);
router.delete('/delete', seatController.deleteSeat);


module.exports = router;