"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comments_1 = __importDefault(require("../Models/Comments"));
class CommentsController {
    getAllComments(id) {
        return new Promise((resolve, reject) => {
            Comments_1.default.find({ movieId: id }, (err, comments) => {
                if (err) {
                    reject({ message: "Error", error: err });
                }
                else {
                    resolve(comments);
                }
            });
        });
    }
    addComment(username, movieId, comment) {
        return new Promise((resolve, reject) => {
            let newComment = new Comments_1.default({
                username: username,
                movieId: movieId,
                comment: comment,
            });
            newComment.save((err) => {
                if (err) {
                    reject({ message: "Error", error: err });
                }
                else {
                    resolve({ success: true, data: newComment });
                }
            });
        });
    }
}
exports.default = CommentsController;
