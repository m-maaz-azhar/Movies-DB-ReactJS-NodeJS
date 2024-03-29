"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movies_1 = __importDefault(require("../Models/Movies"));
class MoviesController {
    getAllMovies() {
        return new Promise((resolve, reject) => {
            Movies_1.default.find({}, (err, movies) => {
                if (err) {
                    reject({ message: "Error", error: err });
                }
                else {
                    resolve(movies);
                }
            });
        });
    }
    getMoviebyid(id) {
        return new Promise((resolve, reject) => {
            Movies_1.default.find({ _id: id }, (err, movie) => {
                if (err) {
                    reject({ message: "Error", error: err });
                }
                else {
                    resolve(movie);
                }
            });
        });
    }
    getMoviesbyGenre(genre) {
        return new Promise((resolve, reject) => {
            Movies_1.default.find({ genre: genre }, (err, movie) => {
                if (err) {
                    reject({ message: "Error", error: err });
                }
                else {
                    resolve(movie);
                }
            });
        });
    }
}
exports.default = MoviesController;
