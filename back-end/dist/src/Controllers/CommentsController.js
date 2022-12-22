"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comments_1 = __importDefault(require("../Models/Comments"));
class CommentsController {
    constructor() { }
    getAllComments(id) {
        Comments_1.default.find({ movieId: id }, (err, comments) => {
            if (err) {
                return { message: "Error", error: err };
            }
            else {
                return Object.assign({}, comments);
            }
        });
    }
    addComment(username, movieId, comment) {
        let newComment = new Comments_1.default({
            username: username,
            movieId: movieId,
            comment: comment,
        });
        newComment.save((err) => {
            if (err) {
                return { message: "Error", error: err };
            }
            else {
                return { success: true, data: newComment };
            }
        });
    }
}
exports.default = CommentsController;
