const mongoose = require('mongoose');

const tailorSchema = mongoose.Schema({
    name: { type: String, required: [true, 'Please add a name'] },
    skills: { type: [String], required: [true, 'Please add at least one skill'] },
    experience: { type: Number, default: 0 },
    price: { type: Number, required: [true, 'Please add a starting price'] },
    location: { type: String, required: [true, 'Please add a location'] },
    description: { type: String },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Tailor', tailorSchema);