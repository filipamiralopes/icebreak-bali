import arrowDown from "../../assets/icons/arrow-down.png";
import React, { useState } from "react";
import "./FAQPage.css";

const faqData = [
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
    question: "Which time of the day should I do the ice bath?",
    answer: {
      text: "Ice Baths can be done at any time of the day but there a few caveats and considerations to be made:",
      list: [
        "It is suggested to avoid too close to bedtime as it heats up your body, which in turn makes you feel awake. Fortunately we close at 7PM, so that shouldn't be a problem at Ice Break.",
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
  {
    question: "Other considerations",
    answer: {
      text: "Good to know:",
      list: [
        "Cold immersion after a big meal - It's best to wait 1-2 hours between a feast and your ice bath for optimal safety and comfort",
        "Ice baths while intoxicated - Not a good idea. Alcohol dulls your senses, making it harder to gauge cold and pain, which can be risky",
        "Strength and hypertrophy training - Cold therapy right after can limit muscle growth. It's recommended to do your ice bath before the workout or wait 2-3 hours after",
      ],
    },
  },
  {
    question:
      "What if I feel unconfortable and need to stop the session early?",
    answer: {
      text: "Our ice bath space is wide and open, you will have our team watching you the whole time. You can leave the bath at any time and if you need any help you just need to call out",
      list: [],
    },
  },
];

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null); // State to keep track of the open FAQ

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the clicked section
  };

  return (
    <div className="faq-page">
      <header className="faq-header">
        <h1>The science behind it</h1>
      </header>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <h2>
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
            </h2>
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
  );
}

export default FAQPage;
