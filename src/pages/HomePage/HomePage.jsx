import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import yeahCoolImg from "../../assets/images/content/yeah-cool-green.png";
import iceVideo from "../../assets/videos/ice-white-1.mp4";
import landingImageMobile from "../../assets/images/backgrounds/ice-white-2-vertical.png"; // Add mobile background image
import benefitImage1 from "../../assets/images/content/about-image1-sq.png";
import benefitImage2 from "../../assets/images/content/about-image2-sq.png";
import benefitImage3 from "../../assets/images/content/about-image3-sq.png";
import landingImg1 from "../../assets/images/content/landing-img-1.png";
import { ElfsightWidget } from "react-elfsight-widget";
import "./HomePage.css";

function HomePage() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home-page">
      {/* Main section */}
      <section className="landing-section">
        {isDesktop ? (
          <video playsInline autoPlay muted loop id="background-video">
            <source src={iceVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="landing-background-mobile"
            style={{ backgroundImage: `url(${landingImageMobile})` }}
          ></div>
        )}
        <div className="landing-section-content">
          <img src={yeahCoolImg} alt="Yeah cool img" />
          <h5>Ice Break, Uluwatu, Bali</h5>
        </div>
      </section>

      {/* Motto*/}
      <section id="motto">
        <div>
          <header>
            <h2>
              Boost your wellbeing and recovery through a quick, intense and
              challenging experience while connecting with like-minded people.
            </h2>
          </header>
        </div>
      </section>

      {/* Services*/}

      <section id="our-services">
        <header>
          <h1>Our services</h1>
        </header>
      </section>

      <section className="benefit-section text-left benefit-section-landing">
        <div className="benefit-image">
          <img src={landingImg1} alt="Benefit 1" />
        </div>
        <div className="benefit-content">
          <h3>
            <Link
              to="/icebath"
              onClick={() => {
                toggleSidebar();
                window.scrollTo(0, 0);
              }}
            >
              Ice bath
            </Link>
          </h3>
          <p className="p-services">
            Ice baths at 1o C/36 F for first timers and icemans alike. Boost
            your energy, recovery and mood!
          </p>
        </div>
      </section>

      <section className="benefit-section text-right benefit-section-landing">
        <div className="benefit-content">
          <h3>
            <Link
              to="/redlight"
              onClick={() => {
                toggleSidebar();
                window.scrollTo(0, 0);
              }}
            >
              Red Light Therapy
            </Link>
          </h3>
          <p className="p-services">
            Private 1.8m red light panel with 5 wavelengths. Improve your skin,
            muscle recovery and inflammation!
          </p>
        </div>
        <div className="benefit-image">
          <img src={landingImg1} alt="Benefit 2" />
        </div>
      </section>

      <section className="benefit-section text-left benefit-section-landing">
        <div className="benefit-image">
          <img src={landingImg1} alt="Benefit 3" style={{width: "500px"}}/>
        </div>
        <div className="benefit-content">
          <h3>Beverages and merch</h3>
          <p className="p-services">
            Coffee fix, electrolytes refill, protein dose and other drink twists
            - get your favorite healthy beverage. <br />
            Cool tees, hats & more - add a new piece to your collection!
          </p>
        </div>
      </section>

      <section className="no-booking-section">
        <h5>No booking required, <br/> just drop in</h5>
      </section>

      <section id="ig-section">
        <h4>
          Follow us on{" "}
          <a id="instagram-link" href="https://www.instagram.com/icebreakbali">
            Instagram{" "}
          </a>
          for more
        </h4>

        <div className="instagram-feed">
          {/* <iframe
            src="https://lightwidget.com/widgets/your-widget-id.html"
            scrolling="no"
            allowtransparency="true"
            className="instagram-embed"
            style={{
              border: "none",
              overflow: "hidden",
              width: "100%",
              height: "500px",
            }}
            title="Instagram Feed"
          ></iframe> */}

          {/* Note for Filipa: when free Elfsight widget reaches 200 website views and gets disable, switch to lightwidget (10$ one time fee per widget) and ask M&V to create account, connect IG and add me as dev*/}

          <ElfsightWidget
            widgetId={"db065442-8db8-4e6f-8cc2-fd090a285493"}
            lazy
          />
        </div>
      </section>

      <section className="maps-section">
        <h4>Find us in Bingin Uluwatu, Bali <br/>Every day from 7:30 AM to PM</h4>

        <iframe
          class="map"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-8.827685131398502,%20115.12399631624847+(Icebreak)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </section>
    </div>
  );
}

export default HomePage;
