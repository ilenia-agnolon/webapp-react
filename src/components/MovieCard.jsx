// import di router-dom per link
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, image, genre } = movie;

  return (
    <Link to={`/movies/${id}`} className="movie-column">
      <div className="poster">
        <img src={image} alt={title} />
      </div>
      <div className="movie-info">
        <h4 className="movie-title">{title}</h4>
        <p className="movie-genre">{genre}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
