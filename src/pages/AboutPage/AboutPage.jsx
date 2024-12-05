import React from "react";
import { Helmet } from "react-helmet";
import foundersImg from "../../assets/images/content/founders.webp";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll";
import "./AboutPage.css";

const AboutPage = () => {
  useFadeInOnScroll(".fade-element", 0.3, 0.3);

  return (
    <>
      {/* SEO Enhancements */}
      <Helmet>
        <title>About Us - Ice Break Bali | Founders' Story & Mission</title>
        <meta
          name="description"
          content="Learn about the founders of Ice Break Bali and their mission to bring the benefits of cold therapy to Uluwatu. A place for growth, challenge, and community."
        />
        <meta
          name="keywords"
          content="About Ice Break Bali, Founders' Story, Cold Therapy Bali, Uluwatu Wellness, Ice Baths and Community"
        />
        <meta
          property="og:title"
          content="About Us - Ice Break Bali | Founders' Story & Mission"
        />
        <meta
          property="og:description"
          content="Meet the founders of Ice Break Bali and discover their journey to bringing cold therapy and red light therapy to Uluwatu. Transform through safe discomfort."
        />
        <meta
          property="og:image"
          content="https://icebreakbali.com/assets/images/content/founders.webp"
        />
        <meta property="og:url" content="https://icebreakbali.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - Ice Break Bali | Founders' Story & Mission"
        />
        <meta
          name="twitter:description"
          content="Meet the founders of Ice Break Bali and discover their journey to bringing cold therapy and red light therapy to Uluwatu. Transform through safe discomfort."
        />
        <meta
          name="twitter:image"
          content="https://icebreakbali.com/assets/images/content/founders.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            headline: "About Us - Ice Break Bali",
            description:
              "Learn about the founders of Ice Break Bali and their mission to bring the benefits of cold therapy to Uluwatu. A place for growth, challenge, and community.",
            mainEntity: {
              "@type": "Organization",
              name: "Ice Break Bali",
              founders: [
                {
                  "@type": "Person",
                  name: "M",
                  description:
                    "Co-founder of Ice Break Bali with a physics background.",
                },
                {
                  "@type": "Person",
                  name: "V",
                  description:
                    "Co-founder of Ice Break Bali with a physics background.",
                },
              ],
              foundingDate: "2024",
              foundingLocation: {
                "@type": "Place",
                name: "Uluwatu, Bali",
              },
              mission:
                "To help individuals push their boundaries and transform through safe discomfort.",
            },
          })}
        </script>
      </Helmet>

      <main className="about-page">
        {/* Section 1 */}
        <section
          className="section header-section"
          aria-labelledby="header-title"
        >
          <h1 id="header-title" className="fade-element">
            Discomfort might just be the cure
          </h1>
        </section>

        {/* Section 2 */}
        <section
          className="section founder-note"
          aria-labelledby="founder-title"
        >
          <header>
            <h2 id="founder-title" className="fade-element">
              A brief note from the founders
            </h2>
          </header>
          <div className="founders-note-content">
            <article className="fade-element note-content">
              <p>
                We are M and V — both from a small corner of Europe known for
                some of the biggest waves ever surfed - Portugal. We are college
                sweethearts with a nerdy background in physics, who spent (too)
                many years in the corporate world. After years of living fast,
                we yearned to go back to basics and reconnect with nature - and
                with ourselves.
                <br />
                <br />
                While ocean dips were frequent back home (and the ocean can be
                cruelly cold), plunging into truly icy waters had a profound
                effect on us. Each time we emerged stronger—mentally sharper,
                physically more resilient, and emotionally more centered.
                Through these experiences we found that pushing our boundaries
                in the cold created a sense of clarity and empowerment that is
                hard to achieve anywhere else.
                <br />
                <br />
                We miss those icy waters here in Bali. So, we envisioned a space
                where people (including ourselves!) could experience those same
                benefits - a place that merges efficiency, honesty, challenge
                and community. That is the foundation of Ice Break, a place
                where you can transform through safe discomfort.
                <br />
                <br />
                Whether you are sore from surfing or working out, hangover or
                just want to challenge yourself - we want to be a part of your
                daily routine, helping you push your limits and find your inner
                strength. First timers or cold-therapy enthusiasts, we are here
                to support you or leave you to it, with care and a smile!
                <br />
                <br />
                With warmth (and a bit of chill),
                <br />M and V
                <br />
                <h6 style={{ color: "#6fbabc", fontSize: "1.2rem" }}>
                  If you can face the ice,
                  <br /> what else can you do in your life?
                </h6>
              </p>
            </article>
            <div className="founders-img fade-element">
              <img src={foundersImg} alt="Founders of Ice Break Bali" loading="lazy" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
