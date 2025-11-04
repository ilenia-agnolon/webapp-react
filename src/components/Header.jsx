// import di router-dom per link
import { Link } from "react-router-dom";

// creazione componente Header
const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <ul>
          <li>MOVIES EXPRESS</li>
          <li>{/* <Link to="/">Dettaglio Film</Link> */}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
