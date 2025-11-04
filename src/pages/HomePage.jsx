// import axios
import axios from "axios";

// import state e effetc
import { useState, useEffect } from "react";

//componente HomePage
const HomePage = () => {
  // stato: lista dei film
  const [movies, setMovies] = useState([]);

  // funzione che esegue la chiamata AJAX
  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((response) => {
        // response.data = array di film restituito dal backend
        setMovies(response.data);
      })
      .catch((error) => {
        console.log("Errore nel caricamento film:", error);
      });
  };

  // esegue fetchMovies una sola volta al montaggio della pagina
  useEffect(fetchMovies, []);

  //verifica
  console.log("Movies:", movies);

  return (
    <div className="movies-container">
      {/* MOVIE CARD _____________________ */}
      <div className="movie-card">
        <div className="movie-info"></div>
      </div>
      {/* ________________________________ */}
      <div className="movie-card">
        <div className="movie-info"></div>
      </div>
      <div className="movie-card">
        <div className="movie-info"></div>
      </div>
    </div>
  );
};

export default HomePage;
