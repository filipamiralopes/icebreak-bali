import menuIcon from "../../assets/icons/menu-icon.png";
import closeIcon from "../../assets/icons/close-icon.png";
import arrowDownIcon from "../../assets/icons/arrow-down.png";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isKnowMoreOpen, setIsKnowMoreOpen] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleKnowMore = () => {
    setIsKnowMoreOpen((prev) => !prev);
  };

  const handleContactClick = () => {
    setIsOpen(false); // Close the sidebar first

    // Delay the scroll action slightly to allow the sidebar to close first
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 300); // Adjust the timeout as needed; 300ms is generally sufficient
  };
  
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Scroll to top on navigation change when sidebar closes
  useEffect(() => {
    if (!isOpen) {
      window.scrollTo(0, 0);
    }
  }, [location, isOpen]);

  return (
    <>
      {!isOpen && (
        <div className="menu-icon" onClick={toggleSidebar}>
          <img
            src={menuIcon}
            alt="Menu icon"
            style={{ width: "50px", height: "auto" }}
          />
        </div>
      )}

      <nav
        ref={sidebarRef}
        className={`sidebar ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
        aria-label="Main Sidebar Navigation"
      >
        <div className="close-icon" onClick={toggleSidebar}>
          <img
            src={closeIcon}
            alt="Close icon"
            style={{ width: "70px", height: "auto" }}
          />
        </div>

        <Link to="/" onClick={toggleSidebar}>
          <h4>Home</h4>
        </Link>

        <Link to="/icebath" onClick={toggleSidebar}>
          <h4>Ice Bath</h4>
        </Link>

        <Link to="/redlight" onClick={toggleSidebar}>
          <h4>Red Light Therapy</h4>
        </Link>

        <div className="know-more">
          <h4 onClick={toggleKnowMore} aria-expanded={isKnowMoreOpen}>
            Know More
            <img
              src={arrowDownIcon}
              alt="Arrow icon"
              className={`arrow-icon ${isKnowMoreOpen ? "open" : ""}`}
            />
          </h4>
          {isKnowMoreOpen && (
            <div className="submenu">
              <Link to="/about" onClick={toggleSidebar}>
                <h4>About Us</h4>
              </Link>
              <Link to="/faq" onClick={toggleSidebar}>
                <h4>FAQ</h4>
              </Link>
            </div>
          )}
        </div>

        <Link onClick={handleContactClick}>
          <h4>Contact Us</h4>
        </Link>
      </nav>
    </>
  );
};

export default Sidebar;
