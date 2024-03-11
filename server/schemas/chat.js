import mongoose from "../db.js";

const chatSchema = new mongoose.Schema(
    {
        owner: String,
        message: String
    },
    {
        timestamps: true,
    }
);


export default mongoose.model("Chat", chatSchema);
