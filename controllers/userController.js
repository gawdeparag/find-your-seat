// controllers/userController.js
const User = require('../models/User');

// Create a new user
async function createUser(req, res) {
  try {
    const { username, password, email } = req.body;
    const newUser = { username, password, email };
    const user = await User.create(newUser);
    res.status(201).json({ user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
}

// Get all users
async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Failed to get users' });
  }
}

module.exports = {
  createUser,
  getUsers,
};
