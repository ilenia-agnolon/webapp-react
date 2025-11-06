// import axios
import axios from "axios";

// import di router-dom per link
import { Link, useParams, useNavigate } from "react-router-dom";

// import state e effetc
import { useState, useEffect } from "react";

// import comp singola review
import ReviewCard from "../components/ReviewCard";
// import comp form review
import ReviewForm from "../components/ReviewForm";

// import hook per contesto
import { useGlobal } from "../contexts/GlobalContext";

const MoviePage = () => {
  //estrapolo da context var di stato
  const { setIsLoading } = useGlobal();

  // creo istanza di Navigate
  const redirect = useNavigate();

  // prepariamo var di stato libro
  const [movie, setMovie] = useState();

  // recuperiamo il parametro dinamico
  const { id } = useParams();

  // preparo funzione per la chiamata axios
  const fetchMovie = () => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.status === 404) redirect("/404");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // faccio partire la chiamata a primo montaggio comp
  useEffect(fetchMovie, []);

  // funzione di generazione istanze reviews
  const renderReviews = () => {
    return movie?.reviews.map((review) => {
      return <ReviewCard reviewProp={review} key={review.id} />;
    });
  };

  return (
    <div className="main-container">
      {/* MOVIE INFO _________________________________________________________ */}
      <div className="movie-info-mp">
        <img className="box-img" src={movie?.image} alt={movie?.title} />
        <div className="box-txt">
          <h3>{movie?.title}</h3>
          <p className="dir-year-genre">
            {movie?.director} • {movie?.release_year} • {movie?.genre}
          </p>
          <p className="abstract">{movie?.abstract}</p>
        </div>
      </div>

      {/* REVIEWS _____________________________________________________________ */}
      <section className="reviews-container">
        <h5>Reviews</h5>
        {movie?.reviews?.length ? (
          renderReviews()
        ) : (
          <p className="muted">Nessuna recensione disponibile.</p>
        )}
      </section>

      {/* FORM per aggiungere nuova recensione_________________________________ */}
      <ReviewForm idProp={id} reloadReviews={fetchMovie} />
    </div>
  );
};

export default MoviePage;
