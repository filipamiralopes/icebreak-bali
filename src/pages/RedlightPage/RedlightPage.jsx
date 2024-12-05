import React, { useEffect } from "react";
import redLightImg2 from "../../assets/images/content/redlight-2.webp";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll";
import "./RedlightPage.css";

function RedlightPage() {
  useFadeInOnScroll(".fade-element", 0.3, 0.3);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    // Select all elements with the class 'step'
    const steps = document.querySelectorAll(".step");
    steps.forEach((step) => observer.observe(step));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="treatment-page treatment-page-red">
      {/* Call to Action Section */}
      <section
        className="cta-section cta-section-red color-section"
        data-logo-color="logo-white"
      >
        <h2 className="fade-element">
          The only step missing in your daily routine
        </h2>
        <h1 className="fade-element">
          Come and try the{" "}
          <span style={{ color: "#e52d20" }}>first red light</span> in Uluwatu
        </h1>
      </section>

      {/* What is it? */}
      <section className="info-section info-section-bg-red">
        <h2 className="fade-element">What is it?</h2>
        <p className="fade-element">
          A LED panel that emits specific wavelengths of red and near-infrared
          light to your whole body
        </p>
        <p className="fade-element">
          Typically the sessions range from 10 to 20min
        </p>
      </section>

      {/* Benefit Sections */}

      <section
        className="fade-element benefits-of benefits-of-red color-section"
        data-logo-color="logo-white"
      >
        <header>
          <h2 className="fade-element">Benefits of red light therapy</h2>
        </header>
      </section>

      <section
        className="benefit-section text-right benefit-section-bg-red color-section"
        data-logo-color="logo-white"
      >
        <div className="benefit-content-red">
          <ul className="custom-icon-list fade-element">
            <li>Improves skin quality and appearance *</li>
            <li>Stimulates collagen production</li>
            <li>
              Increases blood circulation, stimulating healing for faster
              recovery
            </li>
            <li>Reduces inflammation in cells</li>
            <li>Aids in pain reduction</li>
            <li>Stimulates hair growth</li>
            <li>Heals age-related degeneration of the eyes</li>
          </ul>
        </div>
        <div className="service-item fade-element redlight-img-2">
          <img
            src={redLightImg2}
            alt="Benefit 2"
            loading="lazy"
            className="service-item redlight-img-2-img"
          />
          <div className="benefit-content-red service-overlay">
            <p>Could your skincare routine use a boost?</p>
          </div>
        </div>
      </section>
      <section
        className="scrolling-text-section color-section"
        data-logo-color="logo-white"
      >
        <div className="scrolling-text-container">
          <ul className="custom-icon-list-scrolling">
            <li>* Less wrinkles, fine lines and age spots</li>
            <li>* More firmness and elasticity</li>
            <li>* Helps in scar appearance</li>
            <li>* Reduces acne</li>
            <li>* Less redness</li>
            <li>* Improves sun-damaged skin</li>
          </ul>
          <ul className="custom-icon-list-scrolling">
            <li>* Less wrinkles, fine lines and age spots</li>
            <li>* More firmness and elasticity</li>
            <li>* Helps in scar appearance</li>
            <li>* Reduces acne</li>
            <li>* Less redness</li>
            <li>* Improves sun-damaged skin</li>
          </ul>
        </div>
      </section>

      {/* What to Expect Section */}
      <section
        className="expect-section expect-section-red-bg color-section"
        data-logo-color="logo-white"
      >
        <header>
          <h2>What to Expect?</h2>
        </header>
        <ul className="expect-steps">
          <li className="step" style={{ "--step-index": 0 }}>
            Check-in at the counter with our team and choose your program
          </li>
          <li className="step" style={{ "--step-index": 1 }}>
            The team will guide you to the private room
          </li>
          <li className="step" style={{ "--step-index": 2 }}>
            Get as naked as you are comfortable (the more exposed skin the
            better)
          </li>
          <li className="step" style={{ "--step-index": 3 }}>
            Tip: best if your skin is clean of any oils, lotions, make-up and
            sunscreen, feel free to use our shower or bathroom
          </li>
          <li className="step" style={{ "--step-index": 4 }}>
            Connect to our soundsystem and play your favorite tunes
          </li>
          <li className="step" style={{ "--step-index": 5 }}>
            Enjoy the light!
          </li>
          <li className="step" style={{ "--step-index": 6 }}>
            Make sure you turn to cover your whole body
          </li>
          <li className="step" style={{ "--step-index": 7 }}>
            When the program is done, the light will turn off automatically
          </li>
        </ul>
      </section>

      {/* First Time Section */}
      <section
        className="first-time-section first-time-section-red-bg color-section"
        data-logo-color="logo-white"
      >
        <header>
          <h2 className="fade-element">First Time?</h2>
        </header>
        <p className="fade-element">
          Don't worry! Our staff will let you know all the details and setup the
          session for you. If you have any questions during the session, give
          them a shout (you are right behind the counter)
        </p>
      </section>

      {/* Learn More Section */}
      <section className="learn-more-section color-section">
        <header>
          <h2 className="fade-element">The Science Behind</h2>
        </header>
        <div className="video-grid">
          <iframe
            src="https://www.youtube.com/embed/UF0nqolsNZc?si=sqJ8UuAUG8lzqqDX"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/aMLso7-yRUc?si=IoTDG4xoehjsSGeF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/jnbGuZIPljs?si=YXH8R7i-ih0A7cKg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/AkvpcziY7GY?si=JhHp5nWnJinxjzEO"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default RedlightPage;
