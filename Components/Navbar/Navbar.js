import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import loginlogo from "../../assets/login-icon.jpg";
import logo from "../../assets/airbnb.png";

 const Navbar = () => {
  return (
  
  <nav className="navigation">
  <img src={logo} alt="navbar"/>
 <Link to="/AllLocation">ALL LOCATION</Link>
  <Link to="/Rural">RURAL</Link>
  <Link to="/Urban">Urban</Link>
  <input type="text" className="Search" name="Search" id="search-item"/>
 <img id="image" src={loginlogo} alt="login"/>
</nav>
  );
};
export default Navbar;
















