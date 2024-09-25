import menuIcon from "../../assets/icons/menu-icon.png"
import { Link } from "react-router-dom";
import "./Sidebar.css";


function Sidebar() {
  return (
    <nav className="sidebar">
      <img src={menuIcon} alt="Location icon" style={{ width: "50px", height: "auto" }} className="location-icon"/>
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
    </nav>
  );
}

export default Sidebar;