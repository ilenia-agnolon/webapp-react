// import di router-dom per link
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieCard from "./MovieCard";

// creazione componente Header
const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <Link to="/">
          <h4>MOVIES EXPRESS</h4>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
