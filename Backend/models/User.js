const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Unique is OK here!
    phone: { type: String },
    location: { type: String, required: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);