import arrowDown from "../../assets/icons/arrow-down.png";
import React, { useState } from "react";
import "./FAQPage.css";

const faqData = [
    {
        question: "For how long should I stay in the ice?",
        answer: {
          text: "It will depend on your experience, how you are feeling, how active you have been, and the goal you have in mind:",
          list: [
            "For the first timers: Aim for 1 or 2 minutes.",
            "In case you have some experience you can have longer session of 3 to 5 minutes.",
            "In case you want to challenge yourself and improve resilience, you can go north of 5 minutes with a cap of 10 minutes for safety."
          ]
        }
      },
      {
        question: "How often should I do ice baths?",
        answer: {
          text: "This will also depend. According to Dr. Andrew Huberman it should amount to a total 11 minutes per week TOTAL in order to achieve all of the benefits. This is based on a recent study that explored a range of effects. Here are some examples of how your week could look like:",
          list: [
            "Everyday quick 2 minute session to start the day.",
            "3 sessions a week of 4 minutes each.",
            "4 sessions a week of 3 minutes each.",
            "2 sessions a week of 6 minutes each."
          ]
        }
      },
  {
    question: "Which time of the day should I do the ice bath?",
    answer: {
      text: "Ice Baths can be done at any time of the day but there a few caveats and considerations to be made:",
      list: ["It is suggested to avoid too close to bedtime as it heats up your body, which in turn makes you feel awake. Fortunately we close at 7PM, so that shouldn't be a problem at Ice Break."]
    }
  },
  {
    question: "How about the face? Should I dip it too?",
    answer: {
      text: "Definitely! A good time to immerse the face is right when you enter and before you leave the ice bath. The ice increases skin firmness and help relieve puffiness specially are the eyes. In case you want to do just the face we provide a container for it. Ask at the staff! They will be happy to help.",
      list: []
    }
  },
  {
    question: "For how long should my red light therapy session last?",
    answer: {
      text: "This will depend on the device and intensity you will be using. At Ice Break we use a full body device with a powerful energy output. Given this we suggest and provide 20 minute sessions. Let our staff know if you want to stay longer.",
      list: []
    }
  },
  {
    question: "How often should I do red light therapy",
    answer: {
      text: "For best results we suggest you start out with 3 sessions a week and scale it up to 5 sessions.",
      list: []
    }
  },
  {
    question: "Which time of the day should I do red light therapy?",
    answer: {
      text: "Any time of the day is a good time. In case you are close to bedtime we will adjust the intensity to ensure we don't have a negative effect on your ability to fall asleep.",
      list: []
    }
  },
  {
    question: "Which one should I do first, ice bath or red light therapy?",
    answer: {
      text: "This is a matter of personal preference but our recommendation is to do the ice bath first, followed by the red light. The reason is the red light warming effect which will provide a cozy feeling after the cold.",
      list: []
    }
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
