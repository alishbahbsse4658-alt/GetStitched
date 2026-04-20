// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

// TEST ROUTE: If you go to /api/users, this should work
router.route('/').get(getUsers).post(createUser);

// TEST ROUTE: If you go to /api/users/:id, this should work
router.route('/:id').put(updateUser).delete(deleteUser);

module.exports = router;