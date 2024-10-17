import React from 'react';
import image1 from "../../assets/images/content/about-image1.png";
import image2 from "../../assets/images/content/about-image2.png";
import image3 from "../../assets/images/content/about-image3.png";
import './AboutPage.css';

function AboutUPage() {
  return (
    <div className="about-page">
      {/* Section 1 */}
      <section className="about-section">
        <div className="content-section content-section-right about-content-section">
          <header>
            <h1>Our Philosophy</h1>
          </header>
          <div>
            <h4>Your Wellness, Our Mission</h4>
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla ac convallis felis. Cras pharetra velit non lorem laoreet, 
                non tincidunt lorem hendrerit. Quisque in felis sed metus tincidunt bibendum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla ac convallis felis. Cras pharetra velit non lorem laoreet, 
                non tincidunt lorem hendrerit. Quisque in felis sed metus tincidunt bibendum.
              </p>
            </article>
          </div>
        </div>
        <div className="about-image fade-background">
          <img src={image1} alt="Our mission"/>
        </div>
      </section>

      {/* Section 2 */}
      <section className="about-section">
        <div className="about-image fade-background">
          <img src={image2} alt="Our vision" />
        </div>
        <div className="content-section content-section-left about-content-section">
          <header>
            <h1>Our Vision</h1>
          </header>
          <div>
            <h4>Leading the Future of Wellness</h4>
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum finibus tortor non purus iaculis condimentum. 
                Fusce id sapien quis libero fermentum posuere a ac metus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum finibus tortor non purus iaculis condimentum. 
                Fusce id sapien quis libero fermentum posuere a ac metus.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="about-section">
        <div className="content-section content-section-right about-content-section">
          <header>
            <h1>Our Values</h1>
          </header>
          <div>
            <h4>Commitment to Excellence</h4>
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque at diam nec urna ullamcorper dignissim nec vel justo. 
                Nulla facilisi. Cras scelerisque risus et eros elementum, ut suscipit purus luctus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque at diam nec urna ullamcorper dignissim nec vel justo. 
                Nulla facilisi. Cras scelerisque risus et eros elementum, ut suscipit purus luctus.
              </p>
            </article>
          </div>
        </div>
        <div className="about-image fade-background">
          <img src={image3} alt="Our values"/>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="about-section founder-section">
        <div className="full-width-section">
          <header>
            <h1>Founder's Note</h1>
          </header>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Proin eget quam a massa vehicula sollicitudin. Suspendisse potenti. 
              Maecenas malesuada, eros sit amet pulvinar gravida, lectus erat dapibus orci, 
              eget convallis lectus erat sit amet dui.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Proin eget quam a massa vehicula sollicitudin. Suspendisse potenti. 
              Maecenas malesuada, eros sit amet pulvinar gravida, lectus erat dapibus orci, 
              eget convallis lectus erat sit amet dui.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default AboutUPage;
