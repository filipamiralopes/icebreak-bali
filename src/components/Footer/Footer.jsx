import logoBlack from "../../assets/logos/logo.png";
import contactIcon from "../../assets/icons/contact-icon.png";
import locationIcon from "../../assets/icons/location-icon.png";
import heartIcon from "../../assets/icons/heart-icon.png";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <nav className="footer">
      <img src={logoBlack} alt="Icebreak Logo" height="160px" />

      <div className="info">
        <div className="info-icon">
          <h6>Contact us</h6>
          <img
            src={contactIcon}
            alt="Contact icon"
            height="50"
          />
        </div>
        <a>+62 999 9999 999</a>
      </div>

      <div className="info">
        <div className="info-icon">
          <h6>Visit us</h6>
          <img
            src={locationIcon}
            alt="Loction icon"
            height="50"
          />
        </div>
        <a href="https://maps.app.goo.gl/XN9GBsEXTbyePuGi7">
          Main Road Bingin Uluatu Bali
        </a>
      </div>

      <div className="info">
      <div className="info-icon">
          <h6>Follow us</h6>
          <img
            src={heartIcon}
            alt="Heart icon"
            height="50"
          />
        </div>
        <a href="">@icebreakbali</a>
      </div>
    </nav>
  );
}

export default Footer;
