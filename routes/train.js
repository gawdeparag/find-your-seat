const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/train/all', trainController.getTrains);
router.post('/new', trainController.createTrain);
// router.put('/user/update/', staffController.updateStaff);
// router.delete('/user/delete/', staffController.deleteStaff);


module.exports = router;