import { useEffect } from "react";

const useFadeInOnScroll = (selector = ".fade-element", threshold = 0.3, delay = 0.2) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Set a custom delay for each element
            entry.target.style.setProperty("--animation-delay", `${index * delay}s`);
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold, delay]);
};

export default useFadeInOnScroll;
