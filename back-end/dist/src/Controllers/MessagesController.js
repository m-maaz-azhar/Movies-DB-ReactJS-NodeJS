"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Messages_1 = __importDefault(require("../Models/Messages"));
class MessagesController {
    addMessage(name, email, phone, message) {
        return new Promise((resolve, reject) => {
            let newMessage = new Messages_1.default({
                name,
                email,
                phone,
                message,
            });
            newMessage.save((err) => {
                if (err) {
                    reject({ message: "Error", error: err });
                }
                else {
                    resolve({ success: true, data: newMessage });
                }
            });
        });
    }
}
exports.default = MessagesController;
