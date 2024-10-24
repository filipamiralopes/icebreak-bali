import "./HomePage.css";
import redlightImg from "../../assets/images/content/redlight-image.png";
import redlightImgSq from "../../assets/images/content/redlight-image-sq.png";
import iceVideo from "../../assets/videos/ice-white-1.mp4";
import iceVideoMobile from "../../assets/videos/ice-white-1-converted.mp4";

function HomePage() {
  return (
    <div className="home-page">
      {/* Main section */}
      <section id="landing-section">
        {/* Video background */}
        <video playsinline autoPlay muted loop id="background-video">
          <source src={iceVideoMobile} type="video/mp4" media="(max-width: 768px)"/>
          <source src={iceVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id="landing-headings">
          <h1 id="landing-icebath">Ice bath</h1>
          <h1 id="landing-redlight">
            Red light <br />
            therapy
          </h1>
          <h1 id="and-more">& more</h1>
        </div>
        <div id="location-landing">
          <h6>
            Main Road, Bingin
            <br id="location-br" /> Uluatu, Bali
          </h6>
        </div>
      </section>

      {/* Ice Bath section */}
      <section id="icebath-section">
        <div
          className="content-section content-section-left"
          id="icebath-content-section"
        >
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
        <div
          className="content-section content-section-right"
          id="redlight-content-section"
        >
          <header>
            <h1>
              Red light therapy <br /> promotes healing and wellbeing
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
        <div id="redlight-image">
          <img src={redlightImg} alt="Redlight therapy" height="500px" />
        </div>
        <div id="redlight-image-mobile">
          <img src={redlightImgSq} alt="Redlight therapy" />
        </div>
      </section>

      <section id="more-section">
        <p>Follow us to discover all that we offer in our center!</p>

        <div className="instagram-feed">
          <iframe
            src="https://lightwidget.com/widgets/your-widget-id.html"
            scrolling="no"
            allowtransparency="true"
            className="instagram-embed"
            style={{
              border: "none",
              overflow: "hidden",
              width: "100%",
              height: "500px",
            }}
            title="Instagram Feed"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
