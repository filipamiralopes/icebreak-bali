import "./HomePage.css";
import yeahCoolImg from "../../assets/images/content/yeah-cool-green.png";
import iceVideo from "../../assets/videos/ice-white-1.mp4";
import benefitImage1 from "../../assets/images/content/about-image1-sq.png";
import benefitImage2 from "../../assets/images/content/about-image2-sq.png";
import benefitImage3 from "../../assets/images/content/about-image3-sq.png";
import { ElfsightWidget } from "react-elfsight-widget";

function HomePage() {
  return (
    <div className="home-page">
      {/* Main section */}
      <section className="landing-section">
        {/* Video background */}
        <video playsinline autoPlay muted loop id="background-video">
          <source src={iceVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="landing-section-content">
          <img src={yeahCoolImg} alt="Yeah cool img" />
          <h5>Ice Break, Uluwatu, Bali</h5>
        </div>
      </section>

      {/* Motto*/}
      <section id="motto">
        <div>
          <header>
            <h2>
              Boost your wellbeing and recovery through a quick, intense and
              challenging experience while connecting with like-minded people.
            </h2>
          </header>
        </div>
      </section>

      {/* Services*/}
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


      <section id="more-section">
        {/* <p>Follow us to discover all that we offer in our center!</p> */}

        <div className="instagram-feed">
          {/* <iframe
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
          ></iframe> */}

          {/* Note for Filipa: when free Elfsight widget reaches 200 website views and gets disable, switch to lightwidget (10$ one time fee per widget) and ask M&V to create account, connect IG and add me as dev*/}

          <ElfsightWidget
            widgetId={"db065442-8db8-4e6f-8cc2-fd090a285493"}
            lazy
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
