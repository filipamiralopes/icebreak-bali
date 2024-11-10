import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import yeahCoolImg from "../../assets/images/backgrounds/yeah-cool-green.png";
import iceVideoMp4 from "../../assets/videos/ice-white.mp4";
import iceVideoWebm from "../../assets/videos/ice-white.webm";
import landingImageMobile from "../../assets/images/backgrounds/ice-white-vertical.webp";
import landingImageDesktop from "../../assets/images/backgrounds/ice-white.webp";
import benefitImage1 from "../../assets/images/content/about-image1-sq.jpg";
import benefitImage2 from "../../assets/images/content/about-image2-sq.jpg";
import benefitImage3 from "../../assets/images/content/about-image3-sq.jpg";
import { ElfsightWidget } from "react-elfsight-widget";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll";
import "./HomePage.css";

function HomePage() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useFadeInOnScroll(".fade-element", 0.3, 0.3);

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
          <div className="video-wrapper">
            <picture>
              <img
                src={landingImageDesktop}
                alt="Fallback image background"
                className="fallback-image"
              />
            </picture>
            <video playsInline autoPlay muted loop id="background-video">
              <source src={iceVideoMp4} type="video/mp4" />
              <source src={iceVideoWebm} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div
            className="landing-background-mobile"
            style={{ backgroundImage: `url(${landingImageMobile})` }}
          ></div>
        )}
        <div className="landing-section-content">
          <img className="fade-element" src={yeahCoolImg} alt="Yeah cool img" />
          <h5 className="fade-element">Ice Break, Uluwatu, Bali</h5>
        </div>
      </section>

      {/* Motto*/}
      <section id="motto">
        <div className="fade-element">
          <header>
            <h6>
              Boost your wellbeing and recovery through a quick, intense and <br id="br-motto"/>
              challenging experience while connecting with like-minded people.
            </h6>
          </header>
        </div>
      </section>

      {/* Services*/}

      <section id="our-services" className="fade-element">
        <header>
          <h1>Our services</h1>
        </header>
      </section>

      <section className="benefit-section text-left benefit-section-landing">
        <div className="benefit-image image-transparency service-item clip-crop fade-element">
          <img
            src={benefitImage1}
            alt="Benefit 1"
            loading="lazy"
            className="service-image"
          />

          <Link
            to="/icebath"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="service-overlay">
              <p>How cold? Freezing cold</p>
            </div>
          </Link>
        </div>

        <div className="benefit-content fade-element">
          <h3 className="h3-services">Ice bath</h3>
          <p className="p-services">
            Ice baths at 1o C/36 F for first timers and icemans alike. Boost
            your energy, recovery and mood!
          </p>
        </div>
      </section>

      <section className="benefit-section text-right benefit-section-landing">
        <div className="benefit-content fade-element">
          <h3 className="h3-services">Red Light Therapy</h3>
          <p className="p-services">
            Private 1.8m red light panel with 5 wavelengths. Improve your skin,
            muscle recovery and inflammation!
          </p>
        </div>
        <div className="benefit-image image-transparency service-item clip-crop fade-element">
          <img
            src={benefitImage2}
            alt="Benefit 1"
            loading="lazy"
            className="service-image"
          />
          <Link
            to="/redlight"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="service-overlay">
              <p>
                Stubborn stretch marks?
                <br /> Tell them who's in charge
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="benefit-section text-left benefit-section-landing">
        <div className="benefit-image image-transparency service-item clip-crop fade-element fade-element">
          <img
            src={benefitImage3}
            alt="Benefit 1"
            loading="lazy"
            className="service-image"
          />
          <div className="service-overlay">
            <p>Pretty hot today no?</p>
          </div>
        </div>
        <div className="benefit-content fade-element">
          <h3 className="h3-services">Beverages and merch</h3>
          <p className="p-services">
            Coffee fix, electrolytes refill, protein dose and other drink twists
            - get your favorite healthy beverage. <br />
            Cool tees, hats & more - add a new piece to your collection!
          </p>
        </div>
      </section>

      <section className="no-booking-section">
        <h5 className="fade-element">
          No booking required, <br /> just drop in
        </h5>
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
        <p>
          Find us in Bingin Uluwatu, Bali <br />
          Every day from 7:30 AM to 7:30PM
        </p>

        <iframe
          className="map"
          width="100%"
          height="600"z
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-8.827685131398502,%20115.12399631624847+(Icebreak)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </section>
    </div>
  );
}

export default HomePage;
