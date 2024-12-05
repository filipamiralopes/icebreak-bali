import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
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
    <>
      {/* SEO Enhancements */}
      <Helmet>
        <title>
          Ice Bath in Uluwatu, Bali - Benefits of Cold Plunge Therapy | Ice
          Break Bali
        </title>
        <meta
          name="description"
          content="Discover the benefits of ice baths at Ice Break Bali. Boost energy, reduce inflammation, and accelerate recovery with the coldest ice bath in Uluwatu."
        />
        <meta
          name="keywords"
          content="Ice bath Uluwatu, cold plunge therapy benefits, recovery ice bath, Bali wellness"
        />

        <meta
          property="og:title"
          content="Ice Bath in Uluwatu, Bali - Benefits of Cold Plunge Therapy | Ice Break Bali"
        />
        <meta
          property="og:description"
          content="Boost energy, improve recovery, and enhance mood with ice baths at Ice Break Bali. Learn more about our cold plunge therapy services."
        />
        <meta
          property="og:image"
          content="https://icebreakbali.com/assets/images/content/ice-bath-5.webp"
        />
        <meta property="og:url" content="https://icebreakbali.com/icebath" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ice Bath in Uluwatu, Bali - Benefits of Cold Plunge Therapy | Ice Break Bali"
        />
        <meta
          name="twitter:description"
          content="Boost energy, improve recovery, and enhance mood with ice baths at Ice Break Bali. Learn more about our cold plunge therapy services."
        />
        <meta
          name="twitter:image"
          content="https://icebreakbali.com/assets/images/content/ice-bath-5.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Ice Break Bali",
            image:
              "https://icebreakbali.com/assets/images/content/ice-bath-5.webp",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bingin, Uluwatu",
              addressLocality: "Bali",
              addressRegion: "ID",
              postalCode: "80361",
              addressCountry: "Indonesia",
            },
            description:
              "Discover the benefits of ice baths and cold plunge therapy at Ice Break Bali. Boost energy, reduce inflammation, and accelerate recovery.",
            priceRange: "$$",
            telephone: "+62 821-4783-0023",
            openingHours: "Mo-Su 08:00-18:00",
            sameAs: ["https://www.instagram.com/icebreakbali"],
          })}
        </script>
      </Helmet>
      <main className="treatment-page">
        {/* Call to Action */}
        <section className="cta-section cta-section-ice color-section">
          <header>
            <h2 className="fade-element">
              Try something new or keep up with your healthy routine
            </h2>
            <h1 className="fade-element">
              Come for the{" "}
              <span style={{ color: "#6fbabc" }}>coldest ice bath</span> in
              Uluwatu
            </h1>
          </header>
        </section>

        {/* What is it? */}
        <section
          className="info-section color-section"
          data-logo-color="logo-white"
        >
          <header>
            <h2 className="fade-element">What is it?</h2>
          </header>
          <p className="fade-element">
            Literally an ice bath with temperatures ranging from 0 to 4℃ / 32-40
            F
          </p>
          <p className="fade-element">Typically you stay for 1-5min</p>
          <p className="fade-element">All it takes is 11 minutes per week</p>
        </section>

        {/* Benefit Sections */}

        <section className="fade-element benefits-of color-section">
          <header>
            <h2 className="fade-element">Benefits of ice baths</h2>
          </header>
        </section>

        <section className="benefit-section text-left fade-element color-section">
          <div className="benefit-image">
            <img
              src={icebathImg4}
              alt="Benefit 1"
              loading="lazy"
              className="clip-crop"
            />
          </div>
          <div className="benefit-content">
            <h3>Increases energy and focus</h3>
            <p>
              Cold exposure triggers the release of adrenaline and
              norepinephrine, boosting energy, focus, and alertness for up to
              six hours. You'll definitely feel these effects well beyond the
              ice bath session.
            </p>
          </div>
        </section>

        <section className="benefit-section text-right fade-element color-section">
          <div className="benefit-content">
            <h3>Accelerates recovery and reduces inflammation</h3>
            <p>
              Ice baths aid recovery from intense physical activity by
              activating cold shock proteins, improving blood flow to core
              organs, and reducing inflammation. They can also help with
              symptoms like 'Bali Belly' or hangovers.
            </p>
          </div>
          <div className="benefit-image">
            <img
              src={icebathImg2}
              alt="Benefit 2"
              loading="lazy"
              className="clip-crop"
            />
          </div>
        </section>

        <section className="benefit-section text-left fade-element color-section">
          <div className="benefit-image">
            <img
              src={icebathImg3}
              alt="Benefit 3"
              loading="lazy"
              className="clip-crop"
            />
          </div>
          <div className="benefit-content">
            <h3>Enhances your mood</h3>
            <p>
              Cold immersion prompts a lasting release of dopamine, which
              enhances mood, energy, and motivation. Even brief full body dips
              can increase dopamine levels by 200-300%, and you will definitely
              feel it in your mood.
            </p>
          </div>
        </section>

        <section className="benefit-section text-right fade-element color-section">
          <div className="benefit-content">
            <h3>Builds resilience & grit</h3>
            <p>
              Cold exposure builds mental resilience by activating brain centers
              that help manage stress. This self-directed challenge strengthens
              your ability to stay calm and focused in difficult situations,
              both in and out of the ice bath.
            </p>
          </div>
          <div className="benefit-image">
            <img
              src={icebathImg5}
              alt="Benefit 4"
              loading="lazy"
              className="clip-crop"
            />
          </div>
        </section>

        <section className="benefit-section text-left fade-element color-section">
          <div className="benefit-image">
            <img
              src={icebathImg1}
              alt="Benefit 5"
              loading="lazy"
              className="clip-crop"
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
        <section
          className="expect-section color-section"
          data-logo-color="logo-white"
        >
          <header>
            <h2>What to Expect?</h2>
          </header>
          <ul className="expect-steps">
            <li className="step" style={{ "--step-index": 0 }}>
              Bring your swimwear (you can change in our cabins)
            </li>
            <li className="step" style={{ "--step-index": 1 }}>
              Check-in at the counter with our team
            </li>
            <li className="step" style={{ "--step-index": 2 }}>
              Get your towel
            </li>
            <li className="step" style={{ "--step-index": 3 }}>
              Take a quick rinse in our shower
            </li>
            <li className="step" style={{ "--step-index": 4 }}>
              Get into the ice! Our team can help you control your time or pep
              talk you
            </li>
            <li className="step" style={{ "--step-index": 5 }}>
              Feel free to rinse again in our shower once you are out
            </li>
            <li className="step" style={{ "--step-index": 6 }}>
              Go out there and warm up in the sun
            </li>
            <li className="step" style={{ "--step-index": 7 }}>
              Enjoy the boost!
            </li>
          </ul>
        </section>

        {/* First Time Section */}
        <section
          className="first-time-section first-time-section-ice-bg color-section"
          data-logo-color="logo-white"
        >
          <h2 className="fade-element">First Time?</h2>
          <p className="fade-element">
            Don't worry, we are (almost) certain you will love it! You can get
            our discovery session and our team will be right there with you the
            whole way, guiding you with breathing exercises and positive energy!
          </p>
        </section>

        {/* Learn More Section */}
        <section className="learn-more-section color-section">
          <h2 className="fade-element">The Science Behind</h2>
          <div className="video-grid">
            <iframe
              src="https://www.youtube.com/embed/pq6WHJzOkno?si=YkJysmryG_6OOcyJ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullscreen
            ></iframe>

            <iframe
              src="https://www.youtube.com/embed/x3MgDtZovks?si=Llz3T_IHhrY_H5xB"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullscreen
            ></iframe>

            <iframe
              src="https://www.youtube.com/embed/2XecbuI-9QE?si=hoTcqcJh00OVrlxq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullscreen
            ></iframe>

            <iframe
              src="https://www.youtube.com/embed/XaLd5w6zF7A?si=ggqhtgKrRXXwGzbF"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullscreen
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}

export default IcebathPage;
