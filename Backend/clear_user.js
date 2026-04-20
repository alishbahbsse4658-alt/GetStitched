// backend/clear_users.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const clearUsers = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("🔌 Connected to Database...");

        // Delete all users so you can register fresh
        await mongoose.connection.db.collection('users').deleteMany({});

        console.log("✅ SUCCESS! All Customer data has been cleared.");
    } catch (error) {
        console.log("❌ Error:", error.message);
    }
    process.exit();
};

clearUsers();