import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import loginlogo from "../../assets/login-icon.jpg";
import logo from "../../assets/airbnb.png";
import Amazing from "../../assets/Amazing.jpg"
import lakefront from "../../assets/lakefront.jpg"
import beachfront from "../../assets/beachfront.jpg"
import beach from "../../assets/beach.jpg"
import surfing from "../../assets/surfing.jpg"
import amazingpool from "../../assets/amazingpools.jpg"
import farms from "../../assets/farms.jpg"
import omg from "../../assets/omg.jpg"
import room from "../../assets/rooms.jpg"
import luxe from "../../assets/luxe.jpg"
import search from "../../assets/search.png";
 const Navbar = () => {
  return (
  <div>
  <img src={logo} className="navimg" alt="navbar"/>
<div className="bar11">
<div class="bar">
  <div class="location">
    <p>Location</p>
    <input type="text" placeholder="Where are you going?"/>
  </div>
  <div class="check-in">
        <p>Check in</p>
    <input type="text" placeholder="Add dates"/>
  </div>
  <div class="check-out">
        <p>Check out</p>
    <input type="text" placeholder="Add dates"/>
  </div>
  <div class="guests">
        <p>Guests</p>
    <input type="text" placeholder="Add guests"/>
    <span><img src={search} alt="search"/></span>
  </div>
  </div>
  <Link to="" className="airhome">Airbnb your home</Link>
  <Link to="login.html"> <img id="image" src={loginlogo} alt="login"/></Link>
</div>
<div className="hr">
<hr/>
</div>
<div className="column6" >
<label class="toggle">
         <input class="toggle-input" type="checkbox" />
         <span class="toggle-label" data-off="" data-on="On"></span>
         <span class="toggle-handle"></span>
      </label>
  <h4>Display total before taxes
  </h4>
  </div>

  <nav className="navigation">
 {/* <Link to="/AllLocation" className="navlink">ALL LOCATION</Link>
  <Link to="/Rural" className="navlink">RURAL</Link>
  <Link to="/Urban" className="navlink">URBAN </Link> */}
<img src={Amazing} className="img1" alt="" />
<img src={lakefront} className="img2" alt="" />
<img src={beachfront} className="img3" alt="" />
<img src={beach} className="img4" alt="" />
<img src={surfing} className="img5" alt="" />
<img src={amazingpool} className="img6" alt="" />
<img src={farms} className="img7" alt="" />
<img src={omg} className="img8" alt="" />
<img src={room} className="img9" alt="" />
<img src={luxe} className="img10" alt="" /><br/>
  <Link to="/Amazingviews" className="navlink">Amazing views</Link>
  <Link to="/Lakefront" className="navlink">Lakefront</Link>
  <Link to="/Beachfront" className="navlink">Beachfront</Link>
  <Link to="/Beach" className="navlink">Beach</Link>
  <Link to="/Surfing" className="navlink">Surfing</Link>
  <Link to="/Amazingpools" className="navlink">Amazing pools</Link>
  <Link to="/Farms" className="navlink">Farms</Link>
  <Link to="/OMG" className="navlink">OMG!</Link>
  <Link to="/Rooms" className="navlink">Rooms</Link>
  <Link to="/Luxe" className="navlink">Luxe</Link>
  
        
</nav>
</div>
  );
};
export default Navbar;
















