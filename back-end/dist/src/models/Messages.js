"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messagesSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
});
exports.default = (0, mongoose_1.model)("messages", messagesSchema);
