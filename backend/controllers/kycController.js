const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Person = require("../models/nidModel");

const SECRET_KEY = "super-secret-key";

exports.getPeopleData = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, SECRET_KEY);
        const userId = decodedToken.userId;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const person = await Person.findOne({ fullNameEnglish: user.fullName });
        if (!person) {
            return res.status(404).json({ message: "Person not found in the people collection" });
        }

        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving data", error });
    }
};
