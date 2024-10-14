import arrowDown from "../../assets/icons/arrow-down.png";
import React, { useState } from "react";
import "./FAQPage.css";

const faqData = [
  {
    question: "For how long should I stay in the ice?",
    answer:
      "It will depend on your experience, how you are feeling, and the goal you have in mind: First-timers should aim for 1 to 2 minutes, experienced users can stay 3 to 5 minutes, and those looking for a challenge can stay up to 10 minutes.",
  },
  {
    question: "How often should I do ice baths?",
    answer:
      "A total of 11 minutes per week is suggested for optimal benefits. This can be achieved with 3 sessions of 4 minutes or 2 sessions of 6 minutes.",
  },
  {
    question: "Which time of the day should I do the ice bath?",
    answer:
      "Avoid doing it too close to bedtime as it may raise your body temperature and make it harder to sleep.",
  },
  {
    question: "How about the face? Should I dip my head too?",
    answer:
      "Yes! Immersing your face can enhance skin firmness and reduce puffiness.",
  },
  {
    question: "How often should I do red light therapy?",
    answer:
      "We recommend 3 sessions per week, gradually increasing to 5 sessions for best results.",
  },
  {
    question: "How long should a red light therapy session last?",
    answer: "Each session lasts around 20 minutes using a full-body device.",
  },
  {
    question: "Which time of the day should I do red light therapy?",
    answer:
      "Red light therapy can be done anytime, but it's better to avoid doing it right before sleep.",
  },
  {
    question: "Which should I do first, ice bath or red light therapy?",
    answer:
      "We recommend starting with the ice bath and following with red light therapy.",
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
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
