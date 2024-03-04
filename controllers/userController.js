// controllers/userController.js
const User = require('../models/User');
const { isEmail } = require('validator');
const jwt = require('jsonwebtoken');

// "Create a new user / Signup"
async function createUser(req, res) {
  try {
    if(!isEmail(req.body.email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }
    if(req.body.username.length < 4){
      return res.status(400).json({ error: 'Username must be at least 4 characters long' });
    }
    if(req.body.password.length < 6){
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }
    const { username, password, email } = req.body;
    if (User.findOne({ where: { username, email } })) {
      return res.status(400).json({ error: 'This User already exists' });
    }
    const newUser = { username, password, email };
    const user = await User.create(newUser);
    res.status(201).json({ user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
}

// Login for existing users 
async function loginUser(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username, password } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    // console.log(user.id);
    const token = createToken(user.id, user.email);
    console.log(token);
    res.cookie('jwt', token, { httpOnly: true, secure: true, sameSite: 'none', maxAge: maxAge*1000 });
    res.status(200).json({ user_id: user.id, message: "User Logged In successfully!" });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Failed to log in' });
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

const maxAge = 1 * 24 * 60 * 60;
const createToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: maxAge })
}

module.exports = {
  createUser,
  getUsers,
  loginUser,
  updateUser,
  deleteUser
};
