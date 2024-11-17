import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
            expiresIn: "4h",
        });
        res.json({
            token,
            message: "Login Successfully",
            user: { username: user.username, userId: user._id },
        });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};