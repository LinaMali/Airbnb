import React from 'react'
import { Link } from 'react-router-dom'
import "./AirCover.css";
import Guests from "../assets/AC_Guests.png";

const AirCover = () => {
  return (
    <div>
<div className="column4">
        <h4>Get help with your reservations, account, and more.</h4>
       <Link to="Login.html"><input type="submit" id="btn" name="submit" value="Log in or sign up"/></Link>
        </div>
    <div className="aircover">
    <h3>AirCover for Guests</h3>
    <img src={Guests} alt="AirCover"/>
    <p>Every booking comes with AirCover for guests. If there’s a serious issue with your
         Airbnb that your Host can’t resolve, we’ll help you find a similar place,
          depending on availability at comparable pricing. If a similar place isn’t available or you’d 
          prefer not to rebook, we’ll give you a full or partial refund.
        If anything comes up, your Host is your best point of contact; it’s likely they’ll be able to fix it. 
        You can message your Host directly from your inbox to let them know what’s going on.</p><br/><br/>
    </div>
    <div className="hr1">
        <hr/>
    </div>
    <div className="aircover">
    <h4>Host cancellations</h4>
    <p>
If your Host cancels within 30 days of check-in, we’ll help you find a similar place, depending on 
availability at comparable pricing. If a similar place isn’t available or you’d prefer 
not to rebook, we’ll give you a refund.</p><br/><br/>
</div>
<div className="hr1">
    <hr/>
</div>
<div className="aircover">
<h3>Unable to check in</h3>
<p>When you have a confirmed reservation, you’ll have your Host’s email and phone 
number in the message thread for your trip. If you can’t get into your
 Airbnb on arrival and your Host doesn’t respond or can’t resolve the issue,
  we’ll help you find a similar place, depending on availability at comparable pricing.
 If a similar place isn’t available or you’d prefer not to rebook, we’ll give you a refund.</p><br/><br/>
</div>
<div className="hr1">
    <hr/>
</div>
<div className="aircover">
    <h3>Inaccurate listings</h3>
    <p>If the listing is different than advertised, your Host is a great resource to fix the issue. 
        If the listing is significantly different than advertised and your Host can’t resolve 
        the issue, we’ll help you find a similar place, depending on availability at comparable pricing. 
        If a similar place isn’t available or you’d prefer not to rebook, we’ll give you a full or partial refund.</p><br/><br/>
</div>
<div className="hr1">
    <hr/>
</div>
<div className="aircover">
    <h3>24-hour Safety Line</h3>
    <p>If you ever feel unsafe, we’re here to help you get 
        priority access to specially trained safety agents who will assist you with your safety issues or directly connect
         you to local emergency authorities, day or night.</p><br/><br/>
</div>
<div className="hr1">
    <hr/>
</div>
</div>
  );
};

export default AirCover;

