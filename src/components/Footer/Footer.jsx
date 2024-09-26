import logoBlack from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <nav className="footer">
      <img src={logoBlack} alt="Icebreak Logo" width="200"/>
      <h5>Contact us</h5>
      <h5>Visit us</h5>
      <h5>Find us</h5>
    </nav>
  );
}

export default Footer;
