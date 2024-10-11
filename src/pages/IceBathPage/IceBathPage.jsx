import placeholder1 from "../../assets/images/placeholder1.png";
import "./IceBathPage.css";

function IceBathPage() {
  return (
    <div className="icebath-page">
      <div className="content-section">
        <header>
          <h1>
            <span className="headline-highlight">Ice bath</span> improves mood
            and feelings of wellbeing
          </h1>
        </header>
        <section>
          <h4>Cold exposure causes the release of dopamine</h4>
          <article>
            <p>
              Dopamine is a powerful molecule capable of elevating mood,
              enhancing focus, attention, and goal-directed behavior. Even short
              bouts of cold exposure can cause a lasting increase in dopamine
              and sustained elevation of mood, energy, and focus.
            </p>
          </article>
        </section>
      </div>
      <div className="image-section">
        <img src={placeholder1} alt="Placeholder 1" height="450px" />
      </div>
    </div>
  );
}

export default IceBathPage;
