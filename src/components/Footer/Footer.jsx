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
        <p>general@icebreakbali.com</p>
      </div>

      <div className="info">
        <div className="info-icon">
          <h6>Visit us</h6>
          <img src={locationIcon} alt="Loction icon" height="50px" />
        </div>
        <a
          href="https://www.google.com/maps?q=-8.8137709,115.1107466&entry=gps&lucs=,94203325,47075489,94216425,94216401,94249916,94242568,94224825,94227247,94227248,47071704,47069508,94218641,94233079,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTQxLjAuOTE2NjAYACDXggMqmQEsOTQyMDMzMjUsNDcwNzU0ODksOTQyMTY0MjUsOTQyMTY0MDEsOTQyNDk5MTYsOTQyNDI1NjgsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyMzMwNzksOTQyMDMwMTksNDcwODQzMDQsOTQyMDg0NTgsOTQyMDg0NDdCAk5M&g_st=com.google.maps.preview.copy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Main Road Bingin Uluwatu Bali
        </a>
        <p>daily 7:30am - 7:30pm</p>
      </div>
    </nav>
  );
}

export default Footer;
