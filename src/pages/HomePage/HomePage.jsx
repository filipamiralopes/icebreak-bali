import "./HomePage.css";
import placeholder2 from "../../assets/images/content/redlight-image.png";

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
        <div>
          <h1 id="landing-icebath">Ice bath</h1>
          <h1 id="landing-redlight">
            Red light <br />
            therapy
          </h1>
          <h1 id="and-more">& more</h1>
        </div>
        <div>
          <h6>Main Road, Bingin<br/> Uluatu, Bali</h6>
        </div>
      </section>

      {/* Ice Bath section */}
      <section id="icebath-section">
        <div className="content-section content-section-left" id="icebath-content-section">
          <header>
            <h1>
              Ice bath
              <br /> improves mood and feelings of wellbeing
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
      </section>

      {/* Red Light section */}
      <section id="redlight-section">
        <div className="content-section content-section-right" id="redlight-content-section">
          <header>
            <h1>Red light therapy promotes healing and wellbeing</h1>
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
        <div id="redlight-image">
          <img src={placeholder2} alt="Redlight therapy" height="500px" />
        </div>
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
