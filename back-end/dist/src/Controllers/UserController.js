"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../Models/User"));
class UserController {
    constructor() { }
    Login(username, password) {
        User_1.default.find({ username: username, password: password }, (err, user) => {
            if (err || user.length === 0) {
                return {
                    message: "email or password doesn't match!",
                    error: err,
                    success: false,
                };
            }
            else {
                return { success: true };
            }
        });
    }
    Register(username, password, email, firstName, lastName) {
        User_1.default.find({ username: username }, (err, user) => {
            if (err || user.length === 0) {
                let newUser = new User_1.default({
                    username: username,
                    password: password,
                    email: email,
                    profile: "",
                    firstName: firstName,
                    lastName: lastName,
                });
                newUser.save((err) => {
                    if (err) {
                        return { message: "Error", error: err };
                    }
                    else {
                        return { success: true };
                    }
                });
            }
            else {
                return { message: "Username already exists!", success: false };
            }
        });
    }
}
exports.default = UserController;
