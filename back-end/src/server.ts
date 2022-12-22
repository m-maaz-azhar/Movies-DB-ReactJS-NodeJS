import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

import { ConnectDB } from "./Config";
import MoviesController from "./Controllers/MoviesController";
import UserController from "./Controllers/UserController";
import CommentsController from "./Controllers/CommentsController";
import MessagesController from "./Controllers/MessagesController";

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
ConnectDB();

app.get("/movies", async (req: any, res) => {
  const MoviesInstance = new MoviesController();
  const response = await MoviesInstance.getAllMovies();
  res.json(response);
});

app.get("/moviebyid", (req: any, res) => {
  const MoviesInstance = new MoviesController();
  const id: string = req.query.id;
  const response = MoviesInstance.getMoviebyid(id);
  res.json(response);
});

app.get("/moviebygenre", (req: any, res) => {
  const MoviesInstance = new MoviesController();
  const genre: string = req.query.genre;
  const response = MoviesInstance.getMoviesbyGenre(genre);
  res.json(response);
});

app.post("/login", (req: any, res) => {
  const UserInstance = new UserController();
  const response = UserInstance.Login(req.body.username, req.body.password);
  res.json(response);
});

app.post("/register", (req: any, res) => {
  const UserInstance = new UserController();
  const response = UserInstance.Register(
    req.body.username,
    req.body.password,
    req.body.email,
    req.body.firstName,
    req.body.lastName
  );
  res.json(response);
});

app.get("/comments", (req: any, res) => {
  const CommentsInstance = new CommentsController();
  const response = CommentsInstance.getAllComments(req.query.id);
  res.json(response);
});

app.post("/comments", (req, res) => {
  const CommentsInstance = new CommentsController();
  const response = CommentsInstance.addComment(
    req.body.username,
    req.body.id,
    req.body.comment
  );
  res.json(response);
});

app.post("/contact", (req, res) => {
  const ContactInstance = new MessagesController();
  const response = ContactInstance.addMessage(
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.message
  );
  res.json(response);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
