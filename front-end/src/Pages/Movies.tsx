import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import MovieSection from "../Components/MovieSection";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "./style.scss";

export default function Movies() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <div className="main-movies-section">
          <Sidebar setFilter={setMovies} />
          <div className="movies-thumbnails">
            <MovieSection data={Movies} title="MOVIES" banner={true} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
