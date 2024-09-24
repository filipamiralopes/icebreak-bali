import { Link } from "react-router-dom";
import "./Sidebar.css";


function Sidebar() {
  return (
    <nav className="sidebar">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/icebath">
        <button>Ice Bath</button>
      </Link>  
      <Link to="/redlight">
        <button>Red Light</button>
      </Link>  
      <Link to="/about">
        <button>About Us</button>
      </Link>      
    </nav>
  );
}

export default Sidebar;