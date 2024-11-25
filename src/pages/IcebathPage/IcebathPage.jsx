import React, { useEffect } from "react";
import icebathImg1 from "../../assets/images/content/ice-bath-1.webp";
import icebathImg2 from "../../assets/images/content/ice-bath-2.webp";
import icebathImg3 from "../../assets/images/content/ice-bath-3.webp";
import icebathImg4 from "../../assets/images/content/ice-bath-4.webp";
import icebathImg5 from "../../assets/images/content/ice-bath-5.webp";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll";
import "./IcebathPage.css";

function IcebathPage() {
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
    <div className="treatment-page">
      {/* Call to Action Section */}
      <section className="cta-section cta-section-ice">
        <h4 className="fade-element">
          Try something new or keep up with your healthy routine
        </h4>
        <h1 className="fade-element">
          Come for the{" "}
          <span style={{ color: "#6fbabc" }}>coldest ice bath</span> in town
        </h1>
      </section>

      {/* What is it? */}
      <section className="info-section">
        <h1 className="fade-element">What is it?</h1>
        <h6 className="fade-element">
          Literally an ice bath with temperatures ranging from 0 to 4℃ / 32-40 F
        </h6>
        <h6 className="fade-element">Typically you stay for 1-5min</h6>
        <h6 className="fade-element">All it takes is 11 minutes per week</h6>
      </section>

      {/* Benefit Sections */}

      <section className="fade-element benefits-of">
        <header>
          <h1 className="fade-element">Benefits of ice baths</h1>
        </header>
      </section>

      <section className="benefit-section text-left fade-element">
        <div className="benefit-image">
          <img
            src={icebathImg4}
            alt="Benefit 1"
            loading="lazy"
            class="clip-crop"
          />
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

      <section className="benefit-section text-right fade-element">
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
          <img
            src={icebathImg2}
            alt="Benefit 2"
            loading="lazy"
            class="clip-crop"
          />
        </div>
      </section>

      <section className="benefit-section text-left fade-element">
        <div className="benefit-image">
          <img
            src={icebathImg3}
            alt="Benefit 3"
            loading="lazy"
            class="clip-crop"
          />
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

      <section className="benefit-section text-right fade-element">
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
          <img
            src={icebathImg5}
            alt="Benefit 4"
            loading="lazy"
            class="clip-crop"
          />
        </div>
      </section>

      <section className="benefit-section text-left fade-element">
        <div className="benefit-image">
          <img
            src={icebathImg1}
            alt="Benefit 5"
            loading="lazy"
            class="clip-crop"
          />
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
          <div className="step" style={{ "--step-index": 1 }}>
            Check-in at the counter with our team
          </div>
          <div className="step" style={{ "--step-index": 2 }}>
            Get your towel
          </div>
          <div className="step" style={{ "--step-index": 3 }}>
            Take a quick rinse in our shower
          </div>
          <div className="step" style={{ "--step-index": 4 }}>
            Get into the ice! Our team can help you control your time or pep
            talk you
          </div>
          <div className="step" style={{ "--step-index": 5 }}>
            Feel free to rinse again in our shower once you are out
          </div>
          <div className="step" style={{ "--step-index": 6 }}>
            Go out there and warm up in the sun
          </div>
          <div className="step" style={{ "--step-index": 7 }}>
            Enjoy the boost!
          </div>
        </div>
      </section>

      {/* First Time Section */}
      <section className="first-time-section first-time-section-ice-bg">
        <h2 className="fade-element">First Time?</h2>
        <p className="fade-element">
          Don't worry, we are (almost) certain you will love it! You can get our
          discovery session and our team will be right there with you the whole
          way, guiding you with breathing exercises and positive energy!
        </p>
      </section>

      {/* Learn More Section */}
      <section className="learn-more-section">
        <h2 className="fade-element">The Science Behind</h2>
        <div className="video-grid">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pq6WHJzOkno?si=YkJysmryG_6OOcyJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/x3MgDtZovks?si=Llz3T_IHhrY_H5xB"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2XecbuI-9QE?si=hoTcqcJh00OVrlxq"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XaLd5w6zF7A?si=ggqhtgKrRXXwGzbF"
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

export default IcebathPage;
