import menuIcon from "../../assets/icons/menu-icon.png";
import closeIcon from "../../assets/icons/close-icon.png";
import arrowDownIcon from "../../assets/icons/arrow-down.png";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isKnowMoreOpen, setIsKnowMoreOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleKnowMore = () => {
    setIsKnowMoreOpen(!isKnowMoreOpen);
  };

  const handleContactClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
    setIsOpen(false); // Close the sidebar after clicking
  };

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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <div className="menu-icon" onClick={toggleSidebar}>
          <img src={menuIcon} alt="Menu icon" style={{ width: "50px", height: "auto" }} />
        </div>
      )}

      <div
        ref={sidebarRef}
        className={`sidebar ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close-icon" onClick={toggleSidebar}>
          <img src={closeIcon} alt="Close icon" style={{ width: "70px", height: "auto" }} />
        </div>

        <Link to="/" onClick={() => { toggleSidebar(); window.scrollTo(0, 0); }}>
          <h4>Home</h4>
        </Link>

        <Link to="/icebath" onClick={toggleSidebar}>
          <h4>Ice Bath</h4>
        </Link>

        <Link to="/redlight" onClick={toggleSidebar}>
          <h4>Red Light Therapy</h4>
        </Link>

        <div className="know-more">
          <h4 onClick={toggleKnowMore}>
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
      </div>
    </>
  );
};

export default Sidebar;
