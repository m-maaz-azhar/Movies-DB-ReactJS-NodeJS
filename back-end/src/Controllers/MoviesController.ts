import Movies from "../Models/Movies";
import IMovies from "../Interfaces/IMovies";

class MoviesController {
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
    return new Promise((resolve, reject) => {
      Movies.find({ _id: id }, (err: any, movie: IMovies) => {
        if (err) {
          reject({ message: "Error", error: err });
        } else {
          resolve(movie);
        }
      });
    });
  }

  getMoviesbyGenre(genre: string) {
    return new Promise((resolve, reject) => {
      Movies.find({ genre: genre }, (err: any, movie: IMovies) => {
        if (err) {
          reject({ message: "Error", error: err });
        } else {
          resolve(movie);
        }
      });
    }
    )
  }
}

export default MoviesController;
