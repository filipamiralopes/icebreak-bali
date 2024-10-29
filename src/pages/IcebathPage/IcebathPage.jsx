import React from "react";
import benefitImage1 from "../../assets/images/content/about-image1-sq.png";
import benefitImage2 from "../../assets/images/content/about-image2-sq.png";
import benefitImage3 from "../../assets/images/content/about-image3-sq.png";
import benefitImage4 from "../../assets/images/content/about-image1-sq.png";
import benefitImage5 from "../../assets/images/content/about-image2-sq.png";
import "./IceBathPage.css";

function IceBathPage() {
  return (
    <div className="ice-bath-page">
      {/* Call to Action Section */}
      <section className="cta-section">
        <h4>Try something new or keep up with your healthy routine</h4>
        <h1>Come for the coldest ice bath in town</h1>
      </section>

      {/* What is it? */}
      <section className="info-section">
        <h1>What is it?</h1>
        <h6>Literally an ice bath with temperatures ranging 0-4o C/ 32-40 F</h6>
        <h6>Typically you stay for 1-5min</h6>
        <h6>All it takes is 11 minutes per week</h6>
      </section>

      {/* Benefit Sections */}
      <section className="benefit-section text-left">
        <div className="benefit-image">
          <img src={benefitImage1} alt="Benefit 1" />
        </div>
        <div className="benefit-content">
          <h3>Increases energy and focus</h3>
          <p>
            Cold exposure triggers the release of adrenaline and norepinephrine,
            boosting energy, focus, and alertness for up to six hours. You'll
            definitely feel these effects well beyond the ice bath session.
          </p>
        </div>
      </section>

      <section className="benefit-section text-right">
        <div className="benefit-content">
          <h3>Accelerates recovery and reduces inflammation</h3>
          <p>
            Ice baths aid recovery from intense physical activity by activating
            cold shock proteins, improving blood flow to core organs, and
            reducing inflammation. They can also help with symptoms like 'Bali
            Belly' or hangovers.
          </p>
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
          <h3>Enhances your mood</h3>
          <p>
            Cold immersion prompts a lasting release of dopamine, which enhances
            mood, energy, and motivation. Even brief full body dips can increase
            dopamine levels by 200-300%, and you will definitely feel it in your
            mood.
          </p>
        </div>
      </section>

      <section className="benefit-section text-right">
        <div className="benefit-content">
          <h3>Builds resilience & grit</h3>
          <p>
            Cold exposure builds mental resilience by activating brain centers
            that help manage stress. This self-directed challenge strengthens
            your ability to stay calm and focused in difficult situations, both
            in and out of the ice bath.
          </p>
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
          <h3>Increases metabolism</h3>
          <p>
            Cold exposure boosts short-term metabolism as the body burns
            calories to generate heat. It can also transform white fat into
            brown fat, which is more metabolically active, leading to longer-
            lasting metabolic benefits.
          </p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="expect-section">
        <h2>What to Expect?</h2>
        <div className="expect-steps">
          <div className="step" style={{ "--step-index": 0 }}>
            Bring your swimwear (you can change in our cabins)
          </div>
          <div className="step" style={{ "--step-index": 1 }}>Check-in at the counter with our team</div>
          <div className="step" style={{ "--step-index": 2 }}>Get your towel</div>
          <div className="step" style={{ "--step-index": 3 }}>Take a quick rinse in our shower</div>
          <div className="step" style={{ "--step-index": 4 }}>
            Get into the ice! Our team can help you control your time or pep
            talk you
          </div>
          <div className="step" style={{ "--step-index": 5 }}>
            Feel free to rinse again in our shower once you are out
          </div>
          <div className="step" style={{ "--step-index": 6 }}>Go out there and warm up in the sun</div>
          <div className="step" style={{ "--step-index": 7 }}>Enjoy the boost!</div>
        </div>
      </section>

      {/* First Time Section */}
      <section className="first-time-section">
        <h2>First Time?</h2>
        <p>
          Don't worry, we are (almost) certain you will love it! You can get our
          Discovery session and our team will be right there with you the whole
          way, guiding you with breathing exercises and positive energy!
        </p>
      </section>

      {/* Learn More Section */}
      <section className="learn-more-section">
        <h2>The Science Behind</h2>
        <div className="video-grid">
          <img src="/path/to/youtube-thumbnail1.jpg" alt="YouTube video 1" />
          <img src="/path/to/youtube-thumbnail2.jpg" alt="YouTube video 2" />
          <img src="/path/to/youtube-thumbnail1.jpg" alt="YouTube video 1" />
          <img src="/path/to/youtube-thumbnail2.jpg" alt="YouTube video 2" />
          <img src="/path/to/youtube-thumbnail1.jpg" alt="YouTube video 1" />
          <img src="/path/to/youtube-thumbnail2.jpg" alt="YouTube video 2" />
          {/* Additional video thumbnails */}
        </div>
      </section>
    </div>
  );
}

export default IceBathPage;
