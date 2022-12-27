import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

interface MovieThumbnailProps {
  data: any;
}

class BuildMovieThumbnail extends React.Component<MovieThumbnailProps> {
  render() {
    const { data } = this.props;
    return (
      <div className="thumbnail">
        <img src={data.poster} width={180} alt="The King's Man" />
        <p className="movie-title">{data.title}</p>
        <p className="tags">{data.genre}</p>
        <Link to={`/movie/${data._id}`} className="info-btn">
          More Info
        </Link>
        <span className="rating">
          <FontAwesomeIcon icon={faStar} /> &nbsp;
          {data.rating}
        </span>
      </div>
    )
  }
}

export default BuildMovieThumbnail;