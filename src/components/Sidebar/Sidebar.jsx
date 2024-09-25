import menuIcon from "../../assets/icons/menu-icon.png";
import closeIcon from "../../assets/icons/close-icon.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <div className="menu-icon" onClick={toggleSidebar}>
          <img
            src={menuIcon}
            alt="Location icon"
            style={{ width: "50px", height: "auto" }}
          />
        </div>
      )}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
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
        <Link to="/icebath">
          <h4>Ice Bath</h4>
        </Link>
        <Link to="/redlight">
          <h4>Red Light</h4>
        </Link>
        <Link to="/about">
          <h4>About Us</h4>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
