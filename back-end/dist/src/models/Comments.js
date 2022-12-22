"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentsSchema = new mongoose_1.Schema({
    username: String,
    movieId: String,
    comment: String,
});
exports.default = (0, mongoose_1.model)("comments", commentsSchema);
