const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/all', trainController.getTrains);
router.post('/new', trainController.createTrain);
router.put('/update/:id', trainController.updateTrain);
router.delete('/delete/:id', trainController.deleteTrain);


module.exports = router;