import Movies from "../Models/Movies";
import IMovies from "../Interfaces/IMovies";

class MoviesController {
  constructor() {}

  getAllMovies() {
    return new Promise((resolve, reject) => {
      Movies.find({}, (err: any, movies: IMovies) => {
        if (err) {
          reject({ message: "Error", error: err });
        } else {
          resolve(movies);
        }
      });
    });
  }

  getMoviebyid(id: string) {
    Movies.find({ _id: id }, (err: any, movie: IMovies) => {
      if (err) {
        return { message: "Error", error: err };
      } else {
        return { ...movie };
      }
    });
  }

  getMoviesbyGenre(genre: string) {
    Movies.find({ genre: genre }, (err: any, movie: IMovies) => {
      if (err) {
        return { message: "Error", error: err };
      } else {
        return { ...movie };
      }
    });
  }
}

export default MoviesController;
