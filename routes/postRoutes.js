import express from "express";
import {
    createPost,
    getPosts,
    toggleLike,
    addComment,
} from "../controllers/postController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/", auth, createPost);
router.get("/", auth, getPosts);
router.put("/:id/like", auth, toggleLike);
router.post("/:id/comment", auth, addComment);

export default router;