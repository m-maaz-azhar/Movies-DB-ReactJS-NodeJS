let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let cors = require("cors");

let mongoose = require("mongoose");
let Movies = require("./models/Movies");
let User = require("./models/User");
let Comments = require("./models/Comments");
let Messages = require("./models/Messages");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/moviesdb", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

app.get("/movies", (req, res) => {
  Movies.find({}, (err, movies) => {
    if (err) {
      res.json({ message: "Error", error: err });
    } else {
      res.json(movies);
    }
  });
});

app.get("/moviebyid", (req, res) => {
  let id = req.query.id;
  Movies.find({ _id: id }, (err, movie) => {
    if (err) {
      res.json({ message: "Error", error: err });
    } else {
      res.json(movie);
    }
  });
});

app.get("/moviebygenre", (req, res) => {
  let genre = req.query.genre;
  Movies.find({ genre: genre }, (err, movie) => {
    if (err) {
      res.json({ message: "Error", error: err });
    } else {
      res.json(movie);
    }
  });
});

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  User.find({ username: username, password: password }, (err, user) => {
    if (err || user.length === 0) {
      res.json({
        message: "email or password doesn't match!",
        error: err,
        success: false,
      });
    } else {
      res.json({ success: true });
    }
  });
});

app.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;

  User.find({ username: username }, (err, user) => {
    if (err || user.length === 0) {
      let newUser = new User({
        username: username,
        password: password,
        email: email,
        profile: "",
        firstName: firstName,
        lastName: lastName,
      });
      newUser.save((err) => {
        if (err) {
          res.json({ message: "Error", error: err });
        } else {
          res.json({ success: true });
        }
      });
    } else {
      res.json({ message: "Username already exists!", success: false });
    }
  });
});

app.get("/comments", (req, res) => {
  let id = req.query.id;
  Comments.find({ movieId: id }, (err, comments) => {
    if (err) {
      res.json({ message: "Error", error: err });
    } else {
      res.json(comments);
    }
  });
});

app.post("/comments", (req, res) => {
  let username = req.body.username;
  let movieId = req.body.id;
  let comment = req.body.comment;

  let newComment = new Comments({
    username: username,
    movieId: movieId,
    comment: comment,
  });
  newComment.save((err) => {
    if (err) {
      res.json({ message: "Error", error: err });
    } else {
      res.json({ success: true, data: newComment });
    }
  });
});

app.post("/contact", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let message = req.body.message;

  let newMessage = new Messages({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
  newMessage.save((err) => {
    if (err) {
      res.json({ message: "Error", error: err });
    } else {
      res.json({ success: true, data: newMessage });
    }
  });
});

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 3000");
  }
});
