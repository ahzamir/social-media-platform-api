import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// connect to the database before handling requests
connectDB();

app.get("/", (req, res) => {
    res.send("Welcome to the Social Media Platform API");
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;