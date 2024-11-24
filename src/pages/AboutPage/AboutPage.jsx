import React from "react";
import foundersImg from "../../assets/images/content/founders.jpg";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll";
import "./AboutPage.css";

const AboutPage = () => {
  useFadeInOnScroll(".fade-element", 0.3, 0.3);

  return (
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
      <section className="section founder-note" aria-labelledby="founder-title">
        <header>
          <h2 id="founder-title" className="fade-element">
            A brief note from the founders
          </h2>
        </header>
        <div className="founders-note-content">
          <article className="fade-element note-content">
            <p>
              We are M and V — both from a small corner of Europe known for some
              of the biggest waves ever surfed - Portugal. We are college
              sweethearts with a nerdy background in physics, who spent (too)
              many years in the corporate world. After years of living fast, we
              yearned to go back to basics and reconnect with nature - and with
              ourselves.
              <br />
              <br />
              While ocean dips were frequent back home (and the ocean can be
              cruelly cold), plunging into truly icy waters had a profound
              effect on us. Each time we emerged stronger—mentally sharper,
              physically more resilient, and emotionally more centered. Through
              these experiences we found that pushing our boundaries in the cold
              created a sense of clarity and empowerment that is hard to achieve
              anywhere else.
              <br />
              <br />
              We miss those icy waters here in Bali. So, we envisioned a space
              where people (including ourselves!) could experience those same
              benefits - a place that merges efficiency, honesty, challenge and
              community. That is the foundation of Ice Break, a place where you
              can transform through safe discomfort.
              <br />
              <br />
              Whether you are sore from surfing or working out, hangover or just
              want to challenge yourself - we want to be a part of your daily
              routine, helping you push your limits and find your inner
              strength. First timers or cold-therapy enthusiasts, we are here to
              support you or leave you to it, with care and a smile!
              <br />
              <br />
              With warmth (and a bit of chill),
              <br />M and V
              <br />
              <h6 style={{ color: "#6fbabc", fontSize: "1.2rem" }}>If you can face the ice,<br/> what else can you do in your life?</h6>
            </p>
          </article>
          <div class="founders-img fade-element">
            <img src={foundersImg} alt="Founders image" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
