// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: ['https://get-stitched-one.vercel.app', 'http://localhost:5173'],
    credentials: true
}));
app.use(express.json());

// 👇 DEBUGGING LOGS (Check your terminal for these!)
console.log("1. Loading Tailor Routes...");
app.use('/api/tailors', require('./routes/tailorRoutes'));

console.log("2. Loading User Routes...");
// 👇 IF THIS FAILS, CHECK FILE NAME: backend/routes/userRoutes.js
try {
    app.use('/api/users', require('./routes/userRoutes'));
    console.log("✅ User Routes Loaded Successfully!");
} catch (error) {
    console.log("❌ FAILED to load User Routes. Check filename/path!", error.message);
}

console.log("3. Loading Booking Routes...");
app.use('/api/bookings', require('./routes/bookingRoutes'));

app.get('/', (req, res) => res.send('GetStitched API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));