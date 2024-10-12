import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      {/* Main section */}
      <section id="landing-section">
        {/* Video background */}
        <video autoPlay muted loop id="background-video">
          <source src="/src/assets/videos/ice-white-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 id="landing-icebath">Ice bath</h1>
        <h1 id="landing-redlight">
          Red light <br />
          therapy
        </h1>
        <h1 className="and-more">& more</h1>
      </section>

      {/* Ice Bath section */}
      <section id="icebath-section">
        <div id="icebath-content-section">
          <header>
            <h1>
              <span className="headline-highlight">Ice bath</span> improves mood
              and feelings of wellbeing
            </h1>
          </header>
          <div>
            <h4>Cold exposure causes the release of dopamine</h4>
            <article>
              <p>
                Dopamine is a powerful molecule capable of elevating mood,
                enhancing focus, attention, and goal-directed behavior. Even
                short bouts of cold exposure can cause a lasting increase in
                dopamine and sustained elevation of mood, energy, and focus.
              </p>
            </article>
          </div>
        </div>
        {/* <div id="icebath-image">
          <img src={placeholder1} alt="Placeholder 1" height="450px" />
        </div> */}
      </section>

      {/* Red Light section */}
      <section id="redlight-section">
        <div id="redlight-content-section">
          <header>
            <h1>
              <span className="headline-highlight">Red light therapy</span>{" "}
              promotes healing and wellbeing
            </h1>
          </header>
          <div>
            <h4>Red light stimulates energy production in cells</h4>
            <article>
              <p>
                Red light therapy enhances the function of mitochondria,
                boosting energy production in cells. This increase in cellular
                energy supports healing, reduces inflammation, and can improve
                skin health. Even short sessions of red light exposure can lead
                to long-lasting benefits, such as improved recovery, reduced
                pain, and enhanced feelings of vitality and wellbeing.
              </p>
            </article>
          </div>
        </div>
        {/* <div id="icebath-image">
          <img src={placeholder1} alt="Placeholder 1" height="450px" />
        </div> */}
      </section>

      {/* Other sections as needed */}
      <section id="more-section">
        <h1>Explore More</h1>
        <p>Discover all that we offer in our center.</p>
      </section>
    </div>
  );
}

export default HomePage;
