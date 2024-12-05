import { Helmet } from "react-helmet";
import logo from "../../assets/logos/logo-stone-tagline.png";
import contactIcon from "../../assets/icons/contact-icon-rmb.png";
import locationIcon from "../../assets/icons/location-icon-rmb.png";
import heartIcon from "../../assets/icons/heart-icon-rmb.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      {/* SEO Enhancements */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Ice Break Bali",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Main Road Bingin",
              addressLocality: "Uluwatu",
              addressRegion: "Bali",
              postalCode: "80361",
              addressCountry: "Indonesia",
            },
            telephone: "+62 821 4783 0023",
            email: "general@icebreakbali.com",
            openingHours: "Mo-Su 08:00-18:00",
            sameAs: [
              "https://www.instagram.com/icebreakbali",
              "https://www.facebook.com/profile.php?id=61564166350908",
            ],
          })}
        </script>
      </Helmet>

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
            title="Follow us on Instagram"
          >
            @icebreakbali
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61564166350908"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on Facebook"
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
            title="Conctact us on WhatsApp"
          >
            WhatsApp: +62 821 4783 0023
          </a>
          <a href="mailto:example@example.com" title="Send us an email">general@icebreakbali.com </a>
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
            title="View Ice Break Bali location on Google Maps"
          >
            Main Road Bingin, Uluwatu, Bali
          </a>
          <p>daily 8am - 6pm</p>
        </div>
      </nav>
    </>
  );
}

export default Footer;
