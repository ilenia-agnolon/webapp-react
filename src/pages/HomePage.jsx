// import axios
import axios from "axios";

// import state e effetc
import { useState, useEffect } from "react";

//import MovieCard
import MovieCard from "../components/MovieCard";

// import hook per contesto
import { useGlobal } from "../contexts/GlobalContext";

//componente HomePage
const HomePage = () => {
  //estrapolo da context var di stato
  const { setIsLoading } = useGlobal();

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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // esegue fetchMovies una sola volta al montaggio della pagina
  useEffect(fetchMovies, []);

  return (
    <div className="movies-container">
      {/* Mappa dell’elenco */}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default HomePage;
