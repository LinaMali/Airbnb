import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css";
export const Footer = () => {
  return (
    <div>
        <footer>
    <div class="footer">
      <h3>Support</h3>
    <p><h5><Link to="">  Help Centre</Link></h5>
        <h5><Link to="AirCover.html"> AirCover</Link> </h5>
        <h5><Link to="Discrimination.html"> Anti-discrimination</Link> </h5>
        <h5><Link to=""> Disability support</Link> </h5>
        <h5><Link to="Cancellation.html"> Cancellation options</Link> </h5>
        <h5><Link to=""> Report neighbourhood concern</Link> </h5>
        </p>
    </div>
    <div class="footer">
      <h3>Hosting</h3>
     <p>
        <h5><Link to="home.html"> Airbnb your home</Link> </h5>
        <h5><Link to="AirCoverHost.html"> AirCover for Hosts</Link> </h5>
        <h5><Link to=""> Hosting resources</Link></h5>
        <h5><Link to="Career.html"> Career</Link></h5>
        <h5><Link to=""> Hosting resposibly</Link></h5>
    </p>
    </div>
   <div class="footer">
    <h3>Airbnb</h3>
    <p>
        <h5><Link to=""> Newsroom</Link></h5>
        <h5><Link to="Features.html"> New features</Link></h5>
        <h5><Link to="FAQ.html"> FAQ</Link></h5>
        <h5><Link to=""> Inestors</Link></h5>
        <h5><Link to=""> Airbnb.org emergency stays</Link></h5>
    </p>
   </div>
   <div class="foot">
    <p> &copy; 2023 Airbnb, Inc. &nbsp;&nbsp;&nbsp;
        <Link to="Privacy.html">Privacy</Link>&nbsp;&nbsp;&nbsp;<Link to="terms.html">Terms</Link>&nbsp;&nbsp;&nbsp;<Link to="">Sitmap</Link>&nbsp;&nbsp;&nbsp;<Link to=""> Company Details</Link></p>
</div>

  </footer>
    </div>
  );
}
export default Footer;