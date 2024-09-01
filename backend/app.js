const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");


const authRoutes = require("./routes/authRoutes");
const formRoutes = require("./routes/formRoutes");
const kycRoutes = require("./routes/kycRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Database connection
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/form", formRoutes);
app.use("/api/kyc", kycRoutes);
app.use("/api/user", userRoutes)

module.exports = app;
