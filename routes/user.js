const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/all', userController.getUsers);
router.post('/new', userController.createUser);
// router.put('/user/update/', staffController.updateStaff);
// router.delete('/user/delete/', staffController.deleteStaff);


module.exports = router;