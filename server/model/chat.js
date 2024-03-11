import Chat from "../schemas/chat.js";

export class chatModel {
    static async createMessage(owner, message) {
        const newMessage = new Chat({
            owner,
            message
        });
        return await newMessage.save();
    }

    static async getMessage(owner, message) {
        const getMessage = await Chat.find()
        return getMessage;
    }
}