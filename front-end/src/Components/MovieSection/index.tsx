import MovieThumbnail from "../MovieThumbnail";
import Searchbar from "../Searchbar";
import "./style.scss";

interface MovieSectionProps {
  data: any;
  title: string;
  banner: boolean;
}

export default function MovieSection({
  data,
  title,
  banner,
}: MovieSectionProps) {
  return (
    <section className="movieSection">
      <div className={banner ? "banner" : "section-header"}>
        <h1>{title}</h1>
      </div>
      {/* {banner && <Searchbar />} */}
      <div
        className="flex-container"
        data-aos="fade-right"
        data-aos-duration={2000}
      >
        {data.map((movie: any) => (
          <MovieThumbnail key={movie._id} data={movie} />
        ))}
      </div>
    </section>
  );
}
