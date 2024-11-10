import React, { useEffect } from "react";
import benefitImage1 from "../../assets/images/content/redlight-image-sq.jpg";
import "./RedlightPage.css";

function RedlightPage() {
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
    <div className="treatment-page">
      {/* Call to Action Section */}
      <section className="cta-section-red">
        <h4>The only step missing in your daily routine</h4>
        <h1>Come and try the first red light in town</h1>
      </section>

      {/* What is it? */}
      <section className="info-section info-section-bg-red">
        <h1>What is it?</h1>
        <h6>
          A LED panel that emits specific wavelengths of red and near-infrared
          light to your whole body
        </h6>
        <h6>Typically the sessions range from 10-20min</h6>
      </section>

      {/* Benefit Sections */}
      <section className="benefit-section text-left benefit-section-bg-red">
        <div className="benefit-image">
          <img src={benefitImage1} alt="Benefit 1" loading="lazy" class="clip-crop"/>
        </div>
        <div className="benefit-content-red">
          <h3>Improves skin quality and appearance</h3>
          <ul className="custom-icon-list">
            <li>Reduction of wrinkles, fine lines, and age spots</li>
            <li>More firmness and elasticity</li>
            <li>Improvement of scar appearance</li>
            <li>Improvement of acne</li>
            <li>Less redness</li>
            <li>Improvement of sun-damaged skin</li>
          </ul>
        </div>
      </section>

      <section className="benefit-section text-right benefit-section-bg-red">
        <div className="benefit-content-red">
          <h3> Unlock your body's natural potential</h3>
          <ul className="custom-icon-list">
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
        <div className="benefit-image">
          <img src={benefitImage1} alt="Benefit 2" loading="lazy" class="clip-crop"/>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="expect-section expect-section-red-bg">
        <h2>What to Expect?</h2>
        <div className="expect-steps">
          <div className="step" style={{ "--step-index": 0 }}>
            Check-in at the counter with our team and choose your program
          </div>
          <div className="step" style={{ "--step-index": 1 }}>
            The team will guide you to the private room
          </div>
          <div className="step" style={{ "--step-index": 2 }}>
            Get as naked as you are comfortable (the more exposed skin the
            better)
          </div>
          <div className="step" style={{ "--step-index": 3 }}>
            Tip: best if your skin is clean of any oils, lotions, make-up and
            sunscreen, feel free to use our shower or bathroom
          </div>
          <div className="step" style={{ "--step-index": 4 }}>
            Connect to our soundsystem and play your favorite tunes
          </div>
          <div className="step" style={{ "--step-index": 5 }}>
            Enjoy the light!
          </div>
          <div className="step" style={{ "--step-index": 6 }}>
            Make sure you turn to cover your whole body
          </div>
          <div className="step" style={{ "--step-index": 7 }}>
            When the program is done, the light will turn off automatically
          </div>
        </div>
      </section>

      {/* First Time Section */}
      <section className="first-time-section first-time-section-red-bg">
        <h2>First Time?</h2>
        <p>
          Don't worry! Our staff will let you know all the details and setup the
          session for you. If you have any questions during the session, give
          them a shout (you are right behind the counter)
        </p>
      </section>

      {/* Learn More Section */}
      <section className="learn-more-section">
        <h2>The Science Behind</h2>
        <div className="video-grid">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UF0nqolsNZc?si=sqJ8UuAUG8lzqqDX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aMLso7-yRUc?si=IoTDG4xoehjsSGeF"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jnbGuZIPljs?si=YXH8R7i-ih0A7cKg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AkvpcziY7GY?si=JhHp5nWnJinxjzEO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default RedlightPage;
