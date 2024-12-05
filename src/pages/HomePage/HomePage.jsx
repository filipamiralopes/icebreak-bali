import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
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
import Loading from "../../components/Loading/Loading";
import "./HomePage.css";

function HomePage() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [loading, setLoading] = useState(true);
  const [mediaLoadedCount, setMediaLoadedCount] = useState(0);
  const totalMediaCount = isDesktop ? 1 : 2; // Adjust for desktop/mobile

  useFadeInOnScroll(".fade-element", 0.3, 0.3);

  // Track window resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Increment the media loaded count
  const handleMediaLoaded = () => {
    setMediaLoadedCount((prev) => prev + 1);
  };

  // Check if the video is unsupported
  const handleVideoError = () => {
    console.warn(
      "Video is unsupported or failed to load. Falling back to image."
    );
    handleMediaLoaded(); // Treat the video as "loaded" to rely on the fallback image
  };

  // Remove loader when all media are loaded
  useEffect(() => {
    if (mediaLoadedCount >= totalMediaCount) {
      setLoading(false);
    }
  }, [mediaLoadedCount]);

  // Fallback timeout to prevent indefinite loading
  useEffect(() => {
    const fallbackTimeout = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds
    return () => clearTimeout(fallbackTimeout);
  }, []);

  return (
    <>
      {/* SEO Enhancements */}
      <Helmet>
        <title>
          Ice bath Uluwatu - Ice Bath and Red Light Therapy | Icebreak Bali
        </title>
        <meta
          name="description"
          content="Boost your recovery and wellbeing at Ice Break. Cold plunge, red light therapy, iced coffee and more. Visit us today in Bingin, Uluwatu, Bali."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Ice Break Bali",
            image:
              "https://icebreakbali.com/assets/images/backgrounds/yeah-cool-green.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bingin, Uluwatu",
              addressLocality: "Bali",
              addressRegion: "ID",
              postalCode: "80361",
              addressCountry: "Indonesia",
            },
            openingHours: "Mo-Su 08:00-18:00",
            priceRange: "$$",
            telephone: "+62 821-4783-0023",
            sameAs: ["https://www.instagram.com/icebreakbali"],
          })}
        </script>
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Ice Break Bali - Ice Bath and Red Light Therapy in Uluwatu"
        />
        <meta
          property="og:description"
          content="Boost your recovery with ice bath, red light therapy, and more in Uluwatu, Bali. Drop in today!"
        />
        <meta
          property="og:image"
          content="https://icebreakbali.com/assets/images/content/ice-bath-6.webp"
        />
        <meta property="og:url" content="https://icebreakbali.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ice Break Bali - Ice Bath and Red Light Therapy in Uluwatu"
        />
        <meta
          name="twitter:description"
          content="Boost your recovery with ice bath, red light therapy, and more in Uluwatu, Bali. Drop in today!"
        />
        <meta
          name="twitter:image"
          content="https://icebreakbali.com/assets/images/content/ice-bath-6.webp"
        />
      </Helmet>
      {loading && <Loading />} {/* Show the spinner while loading */}
      <main className={`home-page ${loading ? "hidden" : ""}`}>
        {/* Landing */}
        <section className="landing-section color-section">
          <header className="landing-section-content">
            <img
              className="fade-element"
              src={yeahCoolImg}
              alt="Yeah Cool Img"
            />
            <h1 className="fade-element">Ice Break, Uluwatu, Bali</h1>
          </header>

          {isDesktop ? (
            <div className="video-wrapper">
              <picture>
                <img
                  src={landingImageDesktop}
                  alt="Fallback image background"
                  className="fallback-image"
                  onLoad={!isDesktop ? handleMediaLoaded : undefined} // Mobile-only fallback
                />
              </picture>
              <video
                playsInline
                autoPlay
                muted
                loop
                preload="auto"
                id="background-video"
                onLoadedData={handleMediaLoaded} // Trigger when video loads
                onError={handleVideoError} // Trigger fallback on video error
              >
                <source src={iceVideoMp4} type="video/mp4" />
                <source src={iceVideoWebm} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <img
              className="landing-background-mobile"
              src={landingImageMobile}
              alt="Mobile Background"
              onLoad={handleMediaLoaded} // Trigger when mobile background image loads
            />
          )}
        </section>

        {/* Motto */}
        <section id="motto" className="color-section">
          <div className="fade-element">
            <header>
              <h2>
                Boost your <span style={{ color: "#222221" }}>wellbeing</span>{" "}
                and recovery through a{" "}
                <span style={{ color: "#222221" }}>
                  quick, intense and <br id="br-motto" />
                  challenging experience
                </span>{" "}
                while connecting with like-minded people.
              </h2>
            </header>
          </div>
        </section>

        {/* Services*/}
        <section id="our-services" className="fade-element color-section">
          <header>
            <h2>Our services</h2>
          </header>
        </section>

        <section className="benefit-section text-left benefit-section-landing color-section">
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

        <section className="benefit-section text-right benefit-section-landing color-section">
          <div className="benefit-content fade-element">
            <Link
              to="/redlight"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <h3 className="h3-services h3-services-link">
                Red Light Therapy
              </h3>
            </Link>
            <p className="p-services">
              Private 1.8m red light panel with 5 wavelengths. Improve your
              skin, muscle recovery and inflammation!
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

        <section className="benefit-section text-left benefit-section-landing color-section">
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
              Coffee fix, electrolytes refill, protein dose and other drink
              twists - get your favorite healthy beverage.
            </p>
          </div>
        </section>

        <section className="benefit-section text-right benefit-section-landing color-section">
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

        <section className="no-booking-section color-section">
          <h2 className="fade-element">
            No booking required, <br /> just drop in
          </h2>
        </section>

        <section
          id="ig-section"
          className="color-section"
          data-logo-color="logo-white"
        >
          <h2 className="fade-element">
            Stay updated - follow us on{" "}
            <a
              id="instagram-link"
              href="https://www.instagram.com/icebreakbali"
              aria-label="Follow Ice Break Bali on Instagram"
            >
              Instagram{" "}
            </a>
          </h2>

          <div
            className="instagram-feed color-section"
            data-logo-color="logo-white"
          >
            <script
              src="https://cdn.lightwidget.com/widgets/lightwidget.js"
              className="color-section"
              data-logo-color="logo-white"
            ></script>
            <iframe
              src="https://cdn.lightwidget.com/widgets/0559dd1446c4571d911fb4b96ccb4ca9.html"
              scrolling="no"
              allowtransparency="true"
              className="lightwidget-widget color-section"
              data-logo-color="logo-white"
              style={{
                width: "100%",
                border: "0",
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        </section>

        <section className="maps-section color-section">
          <h2
            className="fade-element color-section"
            data-logo-color="logo-white"
          >
            Find us in Bingin Uluwatu, Bali <br />
            Every day from 8 AM to 6PM
          </h2>

          <iframe
            className="map color-section"
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
      </main>
    </>
  );
}

export default HomePage;
