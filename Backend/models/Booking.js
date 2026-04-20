const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    tailor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Tailor',
    },
    stitchingType: { type: String, required: [true, 'Please specify stitching type'] },
    deliveryDate: { type: Date, required: [true, 'Please add a delivery date'] },
    notes: { type: String },
    status: { type: String, default: 'Pending' } // Optional: For future use
}, {
    timestamps: true,
});

module.exports = mongoose.model('Booking', bookingSchema);