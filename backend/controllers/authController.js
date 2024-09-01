const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Approved = require("../models/approvedModel");

const SECRET_KEY = "super-secret-key";

exports.login = async (req, res) => {
    try {
        let token = '';
        const { phoneNumber, password } = req.body;
        const users = await Approved.findOne({ phoneNumber });
        const user = await User.findOne({ phoneNumber });

        if (users && users.blocked) {
            return res.status(403).json({ message: "User is blocked" });
        }
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        if(user.role === "Admin"){
            token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: "24hr" });
        }else{
            token = jwt.sign({ userId: user._id, nid: users.nid }, SECRET_KEY, { expiresIn: "24hr" });
        }
        res.json({ message: "Login successful", role: user.role, token: token });
    } catch (error) {
        res.status(500).json({ error: "Error logging in" });
    }
};
