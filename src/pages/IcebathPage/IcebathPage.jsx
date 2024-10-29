import React from "react";
import benefitImage1 from "../../assets/images/content/about-image3-sq.png";
import benefitImage2 from "../../assets/images/content/about-image3-sq.png";
import benefitImage3 from "../../assets/images/content/about-image3-sq.png";
import benefitImage4 from "../../assets/images/content/about-image3-sq.png";
import benefitImage5 from "../../assets/images/content/about-image3-sq.png";
import "./IceBathPage.css";

function IceBathPage() {
  return (
    <div className="ice-bath-page">
      {/* Call to Action Section */}
      <section className="cta-section">
        <h1>Experience the Power of Ice Baths</h1>
      </section>

      {/* What is it? */}
      <section className="info-section">
        <h2>What is an Ice Bath?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </section>

      {/* Benefit Sections */}
      <section className="benefit-section text-left">
        <div className="benefit-image">
          <img src={benefitImage1} alt="Benefit 1" />
        </div>
        <div className="benefit-content">
          <h3>Boosts Immunity</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </section>

      <section className="benefit-section text-right">
        <div className="benefit-content">
          <h3>Improves Circulation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="benefit-image">
          <img src={benefitImage2} alt="Benefit 2" />
        </div>
      </section>

      <section className="benefit-section text-left">
        <div className="benefit-image">
          <img src={benefitImage3} alt="Benefit 3" />
        </div>
        <div className="benefit-content">
          <h3>Enhances Recovery</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </section>

      <section className="benefit-section text-right">
        <div className="benefit-content">
          <h3>Reduces Inflammation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="benefit-image">
          <img src={benefitImage4} alt="Benefit 4" />
        </div>
      </section>

      <section className="benefit-section text-left">
        <div className="benefit-image">
          <img src={benefitImage5} alt="Benefit 5" />
        </div>
        <div className="benefit-content">
          <h3>Increases Focus</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="expect-section">
        <h2>What to Expect?</h2>
        <div className="expect-steps">
          <div className="step">Step 1: Prepare yourself</div>
          <div className="step">Step 2: Enter slowly...</div>
          {/* Additional steps */}
        </div>
      </section>

      {/* First Time Section */}
      <section className="first-time-section">
        <h2>First Time?</h2>
        <p>Here's what you need to know before your first plunge...</p>
      </section>

      {/* Learn More Section */}
      <section className="learn-more-section">
        <h2>The Science Behind It</h2>
        <div className="video-grid">
          <img src="/path/to/youtube-thumbnail1.jpg" alt="YouTube video 1" />
          <img src="/path/to/youtube-thumbnail2.jpg" alt="YouTube video 2" />
          {/* Additional video thumbnails */}
        </div>
      </section>
    </div>
  );
}

export default IceBathPage;
