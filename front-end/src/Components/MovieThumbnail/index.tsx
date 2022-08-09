import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style.scss";

interface MovieThumbnailProps {
  data: any;
}

export default function MovieThumbnail({ data }: MovieThumbnailProps) {
  return (
    <div className="thumbnail">
      <img src={data.poster} width={180} alt="The King's Man" />
      <p className="movie-title">{data.title}</p>
      <p className="tags">{data.genre}</p>
      <Link to={`/movie/${data._id}`} className="info-btn">
        More Info
      </Link>
      <span className="rating">
        <FontAwesomeIcon icon={faStar} />
        {data.rating}
      </span>
    </div>
  );
}
