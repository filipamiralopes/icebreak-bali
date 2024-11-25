import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import yeahCoolImg from "../../assets/images/backgrounds/yeah-cool-green.png";
import iceVideoMp4 from "../../assets/videos/ice-white.mp4";
import iceVideoWebm from "../../assets/videos/ice-white.webm";
import landingImageMobile from "../../assets/images/backgrounds/ice-white-vertical.webp";
import landingImageDesktop from "../../assets/images/backgrounds/ice-white.webp";
import icebathImg6 from "../../assets/images/content/ice-bath-6.webp";
import redlightImg1 from "../../assets/images/content/redlight-1.webp";
import beverageImg from "../../assets/images/content/beverage.webp";
import merchImg from "../../assets/images/content/merch.webp";
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
              Boost your <span style={{ color: "#222221" }}>wellbeing</span> and
              recovery through a{" "}
              <span style={{ color: "#222221" }}>
                quick, intense and <br id="br-motto" />
                challenging experience
              </span>{" "}
              while connecting with like-minded people.
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
          <Link
            to="/icebath"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={icebathImg6}
              alt="Ice Bath"
              loading="lazy"
              className="service-image"
            />
          </Link>

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
          <Link
            to="/icebath"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <h3 className="h3-services h3-services-link">Ice bath</h3>
          </Link>
          <p className="p-services">
            Ice baths at 1o C/36 F for first timers and icemans alike. Boost
            your energy, recovery and mood!
          </p>
        </div>
      </section>

      <section className="benefit-section text-right benefit-section-landing">
        <div className="benefit-content fade-element">
          <Link
            to="/redlight"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <h3 className="h3-services h3-services-link">Red Light Therapy</h3>
          </Link>
          <p className="p-services">
            Private 1.8m red light panel with 5 wavelengths. Improve your skin,
            muscle recovery and inflammation!
          </p>
        </div>
        <div className="benefit-image image-transparency service-item clip-crop fade-element">
          <Link
            to="/redlight"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={redlightImg1}
              alt="Red Light Therapy "
              loading="lazy"
              className="service-image"
            />
          </Link>
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
            src={beverageImg}
            alt="Beverages"
            loading="lazy"
            className="service-image"
          />
          <div className="service-overlay">
            <p>Pretty hot today no?</p>
          </div>
        </div>
        <div className="benefit-content fade-element">
          <h3 className="h3-services">Beverages</h3>
          <p className="p-services">
            Coffee fix, electrolytes refill, protein dose and other drink twists
            - get your favorite healthy beverage.
          </p>
        </div>
      </section>

      <section className="benefit-section text-right benefit-section-landing">
        <div className="benefit-content fade-element">
          <h3 className="h3-services">Merch</h3>
          <p className="p-services">
            Cool tees, hats & more - add a new piece to your collection!
          </p>
        </div>
        <div className="benefit-image image-transparency service-item clip-crop fade-element">
          <img
            src={merchImg}
            alt="Merch"
            loading="lazy"
            className="service-image"
          />

          <div className="service-overlay">
            <p>What's cooler than being cool?</p>
          </div>
        </div>
      </section>

      <section className="no-booking-section">
        <h5 className="fade-element">
          No booking required, <br /> just drop in
        </h5>
      </section>

      <section id="ig-section">
        <h4 className="fade-element">
          Follow us on{" "}
          <a id="instagram-link" href="https://www.instagram.com/icebreakbali">
            Instagram{" "}
          </a>
          for more
        </h4>

        <div className="instagram-feed">
          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
          <iframe
            src="https://cdn.lightwidget.com/widgets/0559dd1446c4571d911fb4b96ccb4ca9.html"
            scrolling="no"
            allowTransparency="true"
            className="lightwidget-widget"
            style={{
              width: "100%",
              border: "0",
              overflow: "hidden",
            }}
          ></iframe>
        </div>
      </section>

      <section className="maps-section">
        <p className="fade-element">
          Find us in Bingin Uluwatu, Bali <br />
          Every day from 7:30 AM to 7:30PM
        </p>

        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63082.43932716874!2d115.0883535!3d-8.8186829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2450036daf1b7%3A0xd39e229d92e56c66!2sIce%20Break!5e0!3m2!1sen!2sph!4v1732261065439!5m2!1sen!2sph"
          width="100%"
          height="600"
          loading="lazy"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </section>
    </div>
  );
}

export default HomePage;
