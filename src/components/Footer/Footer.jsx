import logo from "../../assets/logos/logo-stone-tagline.png";
import contactIcon from "../../assets/icons/contact-icon-rmb.png";
import locationIcon from "../../assets/icons/location-icon-rmb.png";
import heartIcon from "../../assets/icons/heart-icon-rmb.png";
import "./Footer.css";

function Footer() {
  return (
    <nav className="footer">
      <img src={logo} alt="Icebreak Logo" height="100px" />

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
        <a
          href="https://www.facebook.com/profile.php?id=61564166350908"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook
        </a>
        <br />
      </div>

      <div className="info">
        <div className="info-icon">
          <h6>Contact us</h6>
          <img src={contactIcon} alt="Contact icon" height="50px" />
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=6282147830023&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp: +62 821 4783 0023
        </a>
        <a href="mailto:example@example.com">general@icebreakbali.com</a>
      </div>

      <div className="info">
        <div className="info-icon">
          <h6>Visit us</h6>
          <img src={locationIcon} alt="Loction icon" height="50px" />
        </div>
        <a
          href="https://maps.app.goo.gl/yYx9DUW2zkg2R8KB7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Main Road Bingin, Uluwatu, Bali
        </a>
        <p>daily 7:30am - 6pm</p>
      </div>
    </nav>
  );
}

export default Footer;
