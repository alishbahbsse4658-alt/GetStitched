const Booking = require('../models/Booking');

// @desc    Create a new booking
// @route   POST /api/bookings
const createBooking = async(req, res) => {
    try {
        const { customer, tailor, stitchingType, deliveryDate, notes } = req.body;

        if (!customer || !tailor || !stitchingType || !deliveryDate) {
            return res.status(400).json({ message: 'Missing required booking details' });
        }

        const booking = await Booking.create({
            customer,
            tailor,
            stitchingType,
            deliveryDate,
            notes
        });

        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all bookings (Populated with names)
// @route   GET /api/bookings
const getBookings = async(req, res) => {
    try {
        // Populate replaces the ID with the actual object data from User and Tailor collections
        const bookings = await Booking.find()
            .populate('customer', 'name email')
            .populate('tailor', 'name location');

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createBooking, getBookings };