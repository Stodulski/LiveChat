import { chatModel } from "../model/chat.js";
import { authController } from "../controllers/auth.js";

export class chatController {
    static async saveMessage(owner, message) {
        if (owner.trim().length > 0 && message.trim().length > 0) {
            const savedMessage = await chatModel.createMessage(owner, message);
        }
    }
    static async renderMessage(req, res) {
        const messages = await chatModel.getMessage();
        const decode = await authController.getUserData(req, res);
        const myUser = decode.username;
        res.render("chat", {
            messages,
            myUser,
        });
    }
}
