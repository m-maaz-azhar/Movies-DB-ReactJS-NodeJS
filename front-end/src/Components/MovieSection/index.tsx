import BuildMovieThumbnail from "../BuildMovieThumbnail";
import "./style.scss";

interface MovieSectionProps {
  data: any;
  title: string;
  banner: boolean;
  type?: string;
}

export default function MovieSection({
  data,
  title,
  banner,
  type = "Grid",
}: MovieSectionProps) {
  return (
    <section className="movieSection">
      <div className={banner ? "banner" : "section-header"}>
        <h1>{title}</h1>
      </div>
      <div
        className={`flex-container ${type}`}
        data-aos="fade-right"
        data-aos-duration={2000}
      >
        {data.map((movie: any) => (
          <BuildMovieThumbnail key={movie._id} data={movie} />
        ))}
      </div>
    </section>
  );
}
