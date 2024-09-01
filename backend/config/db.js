const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const dbURI = "mongodb+srv://adnan:3zKiSiUqlRZuPgKV@cluster2.k0i66ig.mongodb.net/UserDB?retryWrites=true&w=majority";
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error", error);
        process.exit(1);
    }
};

module.exports = connectDB;
