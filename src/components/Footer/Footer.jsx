import logoBlack from "../../assets/logos/logo-black-long.png";
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
        <p>info@icebreak.com</p>
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
        <a href="https://maps.app.goo.gl/XN9GBsEXTbyePuGi7" target="_blank" rel="noopener noreferrer">
          Main Road Bingin Uluatu Bali
        </a>
        <p>daily 7:30am - 7:30pm</p>
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
        <a href="https://www.instagram.com/icebreakbali/">@icebreakbali</a>
        <a href="">facebook/iceabreak-bali.com</a>
      </div>
    </nav>
  );
}

export default Footer;
