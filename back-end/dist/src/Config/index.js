"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function ConnectDB() {
    mongoose_1.default.connect("mongodb://0.0.0.0:27017/moviesdb", (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected to the database");
        }
    });
}
exports.ConnectDB = ConnectDB;
