// import di router-dom per link
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, image, genre } = movie;

  return (
    <div className="movie-column">
      <div className="poster">
        <img src={image} alt={title} />
      </div>
      <div className="movie-info">
        <h4 className="movie-title">{title}</h4>
        <p className="movie-genre">{genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
