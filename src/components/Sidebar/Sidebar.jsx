import menuIcon from "../../assets/icons/menu-icon.png";
import closeIcon from "../../assets/icons/close-icon.png";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
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
          <img
            src={menuIcon}
            alt="Menu icon"
            style={{ width: "50px", height: "auto" }}
          />
        </div>
      )}

      <div
        ref={sidebarRef}
        className={`sidebar ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {isOpen && (
          <div className="close-icon" onClick={toggleSidebar}>
            <img
              src={closeIcon}
              alt="Close icon"
              style={{ width: "70px", height: "auto" }}
            />
          </div>
        )}
        <Link to="/">
          <h4>Home</h4>
        </Link>

        

        <a href="#icebath-section">
          <h4>Ice Bath</h4>
        </a>
        <a href="#redlight-section">
          <h4>Red Light</h4>
        </a>

        <Link to="/about">
          <h4>About Us</h4>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
