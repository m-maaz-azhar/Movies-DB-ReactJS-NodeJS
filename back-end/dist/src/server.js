"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const Logs_1 = __importDefault(require("./Logs"));
const Config_1 = require("./Config");
const MoviesController_1 = __importDefault(require("./Controllers/MoviesController"));
const UserController_1 = __importDefault(require("./Controllers/UserController"));
const CommentsController_1 = __importDefault(require("./Controllers/CommentsController"));
const MessagesController_1 = __importDefault(require("./Controllers/MessagesController"));
let app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(Logs_1.default);
(0, Config_1.ConnectDB)();
app.get("/movies", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const MoviesInstance = new MoviesController_1.default();
    const response = yield MoviesInstance.getAllMovies();
    res.json(response);
}));
app.get("/moviebyid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const MoviesInstance = new MoviesController_1.default();
    const response = yield MoviesInstance.getMoviebyid(id);
    res.json(response);
}));
app.get("/moviebygenre", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const genre = req.query.genre;
    const MoviesInstance = new MoviesController_1.default();
    const response = yield MoviesInstance.getMoviesbyGenre(genre);
    res.json(response);
}));
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const UserInstance = new UserController_1.default();
    const response = yield UserInstance.Login(req.body.username, req.body.password);
    res.json(response);
}));
app.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const UserInstance = new UserController_1.default();
    const response = yield UserInstance.Register(req.body.username, req.body.password, req.body.email, req.body.firstName, req.body.lastName);
    res.json(response);
}));
app.get("/comments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CommentsInstance = new CommentsController_1.default();
    const response = yield CommentsInstance.getAllComments(req.query.id);
    res.json(response);
}));
app.post("/comments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CommentsInstance = new CommentsController_1.default();
    const response = yield CommentsInstance.addComment(req.body.username, req.body.id, req.body.comment);
    res.json(response);
}));
app.post("/contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ContactInstance = new MessagesController_1.default();
    const response = yield ContactInstance.addMessage(req.body.name, req.body.email, req.body.phone, req.body.message);
    res.json(response);
}));
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
