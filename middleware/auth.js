import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        console.log("No Token Provided");
        return res.status(401).json({ message: "No Token Provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        console.log("User authenticated:", req.user); // Log the decoded token
        next();
    } catch (error) {
        console.log("invalid token", error);
        res.status(400).json({ message: error.message });
    }
};

export default auth;