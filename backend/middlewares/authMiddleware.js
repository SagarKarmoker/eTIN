const jwt = require("jsonwebtoken");
const SECRET_KEY = "super-secret-key";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if the Authorization header exists
    if (!authHeader) {
        return res.status(403).json({ message: "Authorization header missing" });
    }

    // Check if the Authorization header is in the correct format
    if (!authHeader.startsWith("Bearer ")) {
        return res.status(403).json({ message: "Invalid authorization format" });
    }

    // Extract the token from the header
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(403).json({ message: "Authorization token missing" });
    }

    try {
        // Verify the token
        const decodedToken = jwt.verify(token, SECRET_KEY);
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;
