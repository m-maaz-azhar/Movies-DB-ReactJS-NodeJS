import { useEffect, useState } from "react";

import Footer from "../Components/Footer";
import ImageSlider from "../Components/ImageSlider";
import MovieSection from "../Components/MovieSection";
import Navbar from "../Components/Navbar";

export default function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [releasedMovies, setReleasedMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((data) => {
        let upcoming = data.filter((movie: any) => movie.upcoming === "true");

        let released = data.filter((movie: any) => movie.upcoming === "false");

        setUpcomingMovies(upcoming);
        setReleasedMovies(released);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <ImageSlider />
      <MovieSection data={upcomingMovies} title="UPCOMING" banner={false} />
      <MovieSection data={releasedMovies} title="NEW RELEASES" banner={false} />
      <Footer />
    </div>
  );
}
