import arrowDown from "../../assets/icons/arrow-down.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll";
import "./FAQPage.css";

const faqDataIce = [
  {
    question: "How long should I stay in the cold?",
    answer: {
      text: "It will depend on your experience, how you are feeling, how active you have been, and the goal you have in mind:",
      list: [
        "For the first timers: Aim for 1 or 2 minutes.",
        "In case you have some experience you can have longer session of 3 to 5 minutes.",
        "In case you want to challenge yourself and improve resilience, you can go up to 10min.",
      ],
    },
  },
  {
    question: "How often should I do an ice bath?",
    answer: {
      text: "This will also depend on your objectives but studies support that a total of 11 minutes per week is ideal to maximize the benefits. Here are some examples of how your week could look like:",
      list: [
        "Everyday quick 2 minute session.",
        "3 sessions a week of 4 minutes each.",
        "4 sessions a week of 3 minutes each.",
        "2 sessions a week of 6 minutes each.",
      ],
    },
  },
  {
    question: "Its my first time, what should I do?",
    answer: {
      text: "Do not worry! You can request the discovery session and our team will explain and guide you throughout the whole process. Just bring your swimsuit and positive attitude.",
      list: [],
    },
  },
  {
    question: "Can I book a session?",
    answer: {
      text: "No, we are drop-in based. There are 3 ice baths available and each plunge takes a maximumof 10 min (majority of people only stay for 3-5min), so don't worry, we will have space for you whenever you want to do a session.",
      list: [],
    },
  },
  {
    question: "How do you keep the bath clean?",
    answer: {
      text: "Having clean and fresh water is of prime importance and it is the reason why we request you to rinse before every session. We can already tell you we do not use chlorine (not great for skin & hair). Additionally we have an established protocol:",
      list: [
        "Run a water pump & filter daily to remove small particles such as hair and dirt",
        "Inject Ozone into the water which kills bacteria, algae and other organisms",
        "Daily additions of Hydrogen Peroxide",
        "Remove, deep clean and replace the water every 4/5 days",
      ],
    },
  },
  {
    question: "Is it safe for everybody?",
    answer: {
      text: "Ice Baths are not recommended for people who have the following medical conditions (if you have any of these conditions, please inform us.):",
      list: [
        "Heart disease",
        "High blood pressure",
        "Diabetes",
        "Poor circulation.",
      ],
    },
  },
];

const faqDataRed = [
  {
    question: "How long are the sessions?",
    answer: {
      text: "The sessions typically run for 10-20 minutes",
      list: [],
    },
  },
  {
    question: "Can I book a session?",
    answer: {
      text: "We are currently not taking formal appointments. However, drop us a message if you have aspecific time and we will find a solution",
      list: [],
    },
  },
  {
    question: "Is it safe for everybody?",
    answer: {
      text: "Red Light Therapy is generally considered safe for most people when used correctly, with no reported side effects. This therapy is non-invasive and not toxic. However, if you are pregnant, have photosensitivity or history of skin cancer, please consult with your healhcare provider prior to doing a session.",
      list: [],
    },
  },
  {
    question: "What can I do to pass the time?",
    answer: {
      text: "We are sure you will find a way to pass 20 min but you can:",
      list: [
        "Connect your phone to the speakers and enjoy your favourite tune",
        "Meditate",
        "Use your phone (while on your back)",
        "Read (while on your back)",
      ],
    },
  },
  {
    question: "Can I look into the light?",
    answer: {
      text: "You should use the eye protection provided in the room when facing the panel, as to not stare directly into the LED panels",
      list: [],
    },
  },
];

const faqDataGeneral = [
  {
    question: "Do I need to bring anything for my session?",
    answer: {
      text: "For the ice bath, you need to have your swimwear, we will give you a towel. For the red light therapy you don't need anything.",
      list: [],
    },
  },
  {
    question: "Can I bring a friend?",
    answer: {
      text: "Of course! You can bring your friend for emotional support, they are free to hang around the shop",
      list: [],
    },
  },
  {
    question: "What is your refund policy?",
    answer: {
      text: "Purchased service packages and merchandise are non-refundable.",
      list: [],
    },
  },
];

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null); // State to keep track of the open FAQ

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the clicked section
  };

  useFadeInOnScroll(".fade-element", 0.3, 0.3);

  return (
    <>
      {/* SEO Enhancements */}
      <Helmet>
        <title>
          FAQs - Ice Bath and Red Light Therapy in Uluwatu | Ice Break Bali
        </title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about ice bath and red light therapy in Uluwatu, Bali. Learn about benefits, safety, and session details."
        />
        <meta
          name="keywords"
          content="Ice bath FAQs, Red light therapy FAQs, wellness questions Uluwatu, Bali, cold plunge therapy, light therapy"
        />
        <meta
          property="og:title"
          content="FAQs - Ice Bath and Red Light Therapy in Uluwatu | Ice Break Bali"
        />
        <meta
          property="og:description"
          content="Find answers to frequently asked questions about ice bath and red light therapy in Uluwatu, Bali. Learn about benefits, safety, and session details."
        />
        <meta property="og:url" content="https://icebreakbali.com/faq" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://icebreakbali.com/assets/images/content/founders.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FAQs - Ice Bath and Red Light Therapy in Uluwatu | Ice Break Bali"
        />
        <meta
          name="twitter:description"
          content="Find answers to frequently asked questions about ice bath and red light therapy in Uluwatu, Bali. Learn about benefits, safety, and session details."
        />
        <meta
          name="twitter:image"
          content="https://icebreakbali.com/assets/images/content/founders.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              ...faqDataGeneral.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer.text,
                },
              })),
              ...faqDataIce.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer.text,
                },
              })),
              ...faqDataRed.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer.text,
                },
              })),
            ],
          })}
        </script>
      </Helmet>

      <div className="faq-page">
        <header className="faq-header">
          <h1 className="fade-element">Frequently asked questions</h1>
        </header>

        <header className="faq-header-h2">
          <h2 className="fade-element">General</h2>
        </header>

        <div className="faq-list fade-element">
          {faqDataGeneral.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3>
                {item.question}
                <span
                  className={`arrow ${activeIndex === index ? "rotate" : ""}`}
                >
                  <img
                    src={arrowDown}
                    alt="Arrow down icon"
                    style={{ width: "30px", height: "auto" }}
                  />
                </span>{" "}
                {/* Arrow icon */}
              </h3>
              <div className="faq-answer">
                <p>{item.answer.text}</p>
                {/* Render list if it exists */}
                {item.answer.list && (
                  <ul>
                    {item.answer.list.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <header className="faq-header-h2">
          <Link
            to="/icebath"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <h2 className="fade-element">Ice bath</h2>
          </Link>
        </header>

        <div className="faq-list fade-element">
          {faqDataIce.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3>
                {item.question}
                <span
                  className={`arrow ${activeIndex === index ? "rotate" : ""}`}
                >
                  <img
                    src={arrowDown}
                    alt="Arrow down icon"
                    style={{ width: "30px", height: "auto" }}
                  />
                </span>{" "}
                {/* Arrow icon */}
              </h3>
              <div className="faq-answer">
                <p>{item.answer.text}</p>
                {/* Render list if it exists */}
                {item.answer.list && (
                  <ul>
                    {item.answer.list.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <header className="faq-header-h2">
        <Link
            to="/redlight"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <h2 className="fade-element">Red Light Therapy</h2>
          </Link>
        </header>

        <div className="faq-list fade-element">
          {faqDataRed.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3>
                {item.question}
                <span
                  className={`arrow ${activeIndex === index ? "rotate" : ""}`}
                >
                  <img
                    src={arrowDown}
                    alt="Arrow down icon"
                    style={{ width: "30px", height: "auto" }}
                  />
                </span>{" "}
                {/* Arrow icon */}
              </h3>
              <div className="faq-answer">
                <p>{item.answer.text}</p>
                {/* Render list if it exists */}
                {item.answer.list && (
                  <ul>
                    {item.answer.list.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQPage;
