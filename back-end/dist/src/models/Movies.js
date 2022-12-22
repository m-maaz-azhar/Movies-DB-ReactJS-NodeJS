"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const moviesSchema = new mongoose_1.Schema({
    title: String,
    initial_release: String,
    director: String,
    producer: String,
    genre: String,
    trailer: String,
    storyline: String,
    upcoming: String,
    cast: String,
    rating: Number,
    poster: String,
});
exports.default = (0, mongoose_1.model)("movies", moviesSchema);
