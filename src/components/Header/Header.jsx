import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo-green.png"; // Assuming you have a logo image in your assets folder
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Logo placed at the top right corner */}
      <Link
        to="/"
        onClick={() => {
          toggleSidebar();
          window.scrollTo(0, 0);
        }}
        className="logo-link"
      >
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </header>
  );
}

export default Header;
