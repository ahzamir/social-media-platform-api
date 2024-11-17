import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        content: { type: String, required: true },
        isPublic: { type: Boolean, default: true },
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    },
    { timestamps: true }
);

export default mongoose.model("Post", postSchema);