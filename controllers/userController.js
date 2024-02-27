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


// update an user
async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { username, password, email } = req.body;
    const updatedUser = { username, password, email };
    const user = await User.update(updatedUser, { where: { id } });
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
}

// delete an user 
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const user = await User.destroy({ where: { id } });
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
}


module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser
};
