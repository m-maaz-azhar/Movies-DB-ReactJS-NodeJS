import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Log from "./Logs";
import { ConnectDB } from "./Config";
import MoviesController from "./Controllers/MoviesController";
import UserController from "./Controllers/UserController";
import CommentsController from "./Controllers/CommentsController";
import MessagesController from "./Controllers/MessagesController";

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(Log);
ConnectDB();

app.get("/movies", async (req: any, res) => {
  const MoviesInstance = new MoviesController();
  const response = await MoviesInstance.getAllMovies();
  res.json(response);
});

app.get("/moviebyid", async (req: any, res) => {
  const id: string = req.query.id;
  const MoviesInstance = new MoviesController();
  const response = await MoviesInstance.getMoviebyid(id);
  res.json(response);
});

app.get("/moviebygenre", async (req: any, res) => {
  const genre: string = req.query.genre;
  const MoviesInstance = new MoviesController();
  const response = await MoviesInstance.getMoviesbyGenre(genre);
  res.json(response);
});

app.post("/login", async (req: any, res) => {
  const UserInstance = new UserController();
  const response = await UserInstance.Login(req.body.username, req.body.password);
  res.json(response);
});

app.post("/register", async (req: any, res) => {
  const UserInstance = new UserController();
  const response = await UserInstance.Register(
    req.body.username,
    req.body.password,
    req.body.email,
    req.body.firstName,
    req.body.lastName
  );
  res.json(response);
});

app.get("/comments", async (req: any, res) => {
  const CommentsInstance = new CommentsController();
  const response = await CommentsInstance.getAllComments(req.query.id);
  res.json(response);
});

app.post("/comments", async (req, res) => {
  const CommentsInstance = new CommentsController();
  const response = await CommentsInstance.addComment(
    req.body.username,
    req.body.id,
    req.body.comment
  );
  res.json(response);
});

app.post("/contact", async (req, res) => {
  const ContactInstance = new MessagesController();
  const response = await ContactInstance.addMessage(
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
