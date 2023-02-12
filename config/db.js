const mongoose = require('mongoose');
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to db: ${conn.connection.host}`);
    } catch (err){
        console.warn(`Mongoose connection error to db : ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
