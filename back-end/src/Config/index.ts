import mongoose from "mongoose";

function ConnectDB() {
  mongoose.connect("mongodb://0.0.0.0:27017/moviesdb", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to the database");
    }
  });
}

export { ConnectDB };
