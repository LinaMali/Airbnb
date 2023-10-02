import React from 'react'
import "./Privacy.css";
import { Link } from 'react-router-dom';
import Privacy1 from "../assets/airbnb-privacy.jpeg";
 const Privacy = () => {
  return (
    <div>
         <div className="column4">
        <h4>Get help with your reservations, account, and more.</h4>
       <Link to="Login.html"><input type="submit" id="btn" name="submit" value="Log in or sign up"/></Link>
        </div>
    <div className="policy">
        <h5>legal terms</h5>
    <h3>Airbnb Privacy</h3>
    <img src={Privacy1} alt='Privacy'/>
   <h4>Privacy Policy</h4>
   <div className='policy-paragraph'>
    <p>Our Privacy Policy explains what personal information we 
        collect, how we use personal information, how personal information is shared, and privacy rights.</p><br/><br/>
        </div>
    </div>
    <div className="policy">
    <h4>North America (Excluding Mexico)</h4>
    <p><ul>
        <li>Privacy Policy for the United States</li>
        <li>Privacy Policy for Outside the U.S. (English)</li>
        <li>Privacy Policy for Outside the U.S. (French)</li>
    </ul>
</p><br/><br/>
</div>
<div className="policy">
    <h4>Latin America (Including Mexico, Central and South America, and the Caribbean)</h4>
    <p><ul>
        <li>Privacy Policy for Latin America (English)</li>
        <li>Privacy Policy for Latin America (Spanish)</li>
        <li>Privacy Policy for Latin America (Portuguese)</li>
    </ul>
</p><br/><br/>
</div>
<div className="policy">
    <h4>Europe, Middle East, and Africa</h4>
    <p><ul>
        <li>Privacy Policy for Europe, the Middle East, Africa, and Other Countries</li>
    </ul>
</p><br/><br/>
</div>
<div className="policy">
    <h4>Asia Pacific</h4>
    <p><ul>
        <li>Privacy Policy for Asia Pacific (Excluding China)</li>
    </ul>
</p><br/><br/>
</div>
<div className="policy">
    <h4>China</h4>
    <p><ul>
        <li>Privacy Policy for China
            Please review the supplemental privacy policies linked within the privacy
             policy documents, such as for certain Airbnb services, that may be applicable to you.</li>
    </ul>
</p><br/><br/>
</div>
<div className="policy">
    <h4>Supplemental Privacy Policy Documents:</h4>
    <p><ul>
        <li>Outside the United States</li>
        <li>California, Colorado, Connecticut, Utah, Vermont, and Virginia</li>
        <li>Cookie Policy</li>
        <li>Enterprise Customers and Airbnb for Work</li>
        <li>Colombia Only</li>
        <li>Non-User DAC7 Privacy Notice</li>
    </ul>
</p><br/><br/>
</div>
    </div>
  );
};
export default Privacy;