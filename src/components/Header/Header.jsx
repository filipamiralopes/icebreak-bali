import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import logo from "../../assets/logos/logo-black.png";
import "./Header.css";

function Header() {
  const [logoClass, setLogoClass] = useState(""); // Default to no special class
  const location = useLocation(); // Detect route changes

  useEffect(() => {
    const sections = document.querySelectorAll(".color-section");

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleEntry = null;

        // Find the most visible section
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!mostVisibleEntry || entry.intersectionRatio > mostVisibleEntry.intersectionRatio) {
              mostVisibleEntry = entry;
            }
          }
        });

        // Update the logo class based on the most visible section
        if (mostVisibleEntry) {
          const colorClass = mostVisibleEntry.target.getAttribute("data-logo-color");
          setLogoClass(colorClass || ""); // Use default if no color is specified
        }
      },
      {
        threshold: [0.5, 0.75], // Higher thresholds for better detection
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer
  }, [location]); // Re-run the effect whenever the route changes

  return (
    <header className="header">
      <Link
        to="/"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="logo-link"
      >
        <img
          src={logo}
          alt="Logo"
          className={`logo ${logoClass}`} // Dynamically apply the class
        />
      </Link>
    </header>
  );
}

export default Header;
