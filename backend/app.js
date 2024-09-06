const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const multer = require('multer');


const authRoutes = require("./routes/authRoutes");
const formRoutes = require("./routes/formRoutes");
const kycRoutes = require("./routes/kycRoutes");
const userRoutes = require("./routes/userRoutes");
const walletRoutes = require("./routes/walletRoutes");
const assetsRoutes = require("./routes/assetsRoutes");
const eReturnRoutes = require("./routes/eReturnRoutes");

const app = express();

// Database connection
connectDB();

// Setup multer middleware
const upload = multer();

// Middleware to parse JSON
app.use(express.json());
app.use(require('morgan')('dev'));  // Logger middleware
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/form", formRoutes);
app.use("/api/kyc", kycRoutes);
app.use("/api/user", userRoutes)


// Wallet Routers
app.use('/api/wallet', walletRoutes);

// DB Routers (assets details)
app.use('/api/personal', assetsRoutes);
app.use('/api/e-return', eReturnRoutes)


module.exports = app;
