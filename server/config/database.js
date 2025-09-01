const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = async () => {
    try {
        await mongoose.connect(MONGODB_URL); // no deprecated options needed
        console.log("✅ DB Connection Success");
    } catch (err) {
        console.error("❌ DB Connection Failed");
        console.error(err);
        process.exit(1);
    }
};
