import logoBlack from "../../assets/logos/logo-black-long.png";
import logoGreen from "../../assets/logos/logo-green-long.png";
import contactIcon from "../../assets/icons/contact-icon-rmb.png";
import locationIcon from "../../assets/icons/location-icon-rmb.png";
import heartIcon from "../../assets/icons/heart-icon-rmb.png";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <nav className="footer">
      <img src={logoGreen} alt="Icebreak Logo" height="100px" />

      <div className="info">
        <div className="info-icon">
          <h6>Contact us</h6>
          <img src={contactIcon} alt="Contact icon" height="50px" />
        </div>
        <a>+62 999 9999 999</a>
        <p>info@icebreak.com</p>
      </div>

      <div className="info">
        <div className="info-icon">
          <h6>Visit us</h6>
          <img src={locationIcon} alt="Loction icon" height="50px" />
        </div>
        <a
          href="https://maps.app.goo.gl/XN9GBsEXTbyePuGi7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Main Road Bingin Uluwatu Bali
        </a>
        <p>daily 7:30am - 7:30pm</p>
      </div>

      <div className="info">
        <div className="info-icon">
          <h6>Follow us</h6>
          <img src={heartIcon} alt="Heart icon" height="50px" />
        </div>
        <a
          href="https://www.instagram.com/icebreakbali/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @icebreakbali
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          facebook/iceabreak-bali.com
        </a>
        <br/>
      </div>
    </nav>
  );
}

export default Footer;
