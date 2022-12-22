"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Messages_1 = __importDefault(require("../Models/Messages"));
class MessagesController {
    constructor() { }
    addMessage(name, email, phone, message) {
        let newMessage = new Messages_1.default({
            name,
            email,
            phone,
            message,
        });
        newMessage.save((err) => {
            if (err) {
                return { message: "Error", error: err };
            }
            else {
                return { success: true, data: newMessage };
            }
        });
    }
}
exports.default = MessagesController;
