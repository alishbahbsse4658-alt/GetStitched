const express = require('express');
const router = express.Router();
const { createBooking, getBookings } = require('../controllers/bookingController');

router.route('/').get(getBookings).post(createBooking);

module.exports = router;