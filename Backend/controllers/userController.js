const User = require('../models/User');

// @desc    Register a new customer
// @route   POST /api/users
const createUser = async(req, res) => {
    try {
        const { name, email, phone, location } = req.body;

        // Basic Validation
        if (!name || !email || !location) {
            return res.status(400).json({ message: 'Please add all required fields' });
        }

        // Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create User
        const user = await User.create({ name, email, phone, location });
        res.status(201).json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all users
// @route   GET /api/users
const getUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update user
// @route   PUT /api/users/:id
const updateUser = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete user
// @route   DELETE /api/users/:id
const deleteUser = async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// IMPORTANT: Export all functions!
module.exports = { createUser, getUsers, updateUser, deleteUser };