const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/all', userController.getUsers);

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);

router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);


module.exports = router;