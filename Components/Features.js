import React from 'react'
import "./Features.css";
import Feature from "../assets/feature.jpg";
 import video from "../assets/video.mp4";

const Features = () => {
  return (
    <div>
         <div className="features">
    <h1>Introducing Airbnb Rooms and over 50 new features</h1>
    </div>
<div className="features1">
    <video width="900" height="500" controls="controls">
        <source src={video} type="video/mp4" />
    </video>
</div>
<div className="features">
    <h1>Airbnb Rooms:
        Featuring the new Host Passport</h1>
        <p>Our new take on the original Airbnb lets you experience a city like a 
            local by staying with one – and now you can get to know your Host before you book.</p>
            <img src={Feature} alt='Feature' width="900px" height="500px"/>
</div>

<div className="features">
    <h1>Over 50 new features
        based on your feedback</h1>
    <p>We’ve made improvements across the entire Airbnb experience, from signup to checkout.</p>
    <hr/>
</div>
<div className='feature22'>
<div className="features2">
    <h2>Wishlist one-tap save</h2>
    <p>Save listings directly to your current wishlist from search results with just one tap.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Wishlist calendar</h2>
    <p>An updated calendar makes it easy to view the availability of wishlisted homes.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Wishlist notes</h2>
    <p>You can now add personal notes to the homes in your<br/> wishlists.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Faster maps</h2>
    <p>Faster refresh speed allows you to quickly see new listings while moving the map.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Persistent pins on maps</h2>
    <p>We’ve improved map pins to stay in place when you zoom and pan around the map.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Smarter search autocomplete    </h2>
    <p>Get more accurate place names and fewer duplicates while searching.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Wishlist one-tap save</h2>
    <p>Save listings directly to your current wishlist from search results with just one tap.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Wishlist calendar</h2>
    <p>An updated calendar makes it easy to view the availability of wishlisted homes.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Wishlist notes</h2>
    <p>You can now add personal notes to the homes in your <br/>wishlists.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Lower fees for monthly </h2>
    <p>We’ve significantly reduced our guest service fees starting in the fourth month of a stay.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Pay by bank</h2>
    <p>Pay with a linked bank account to save on stays of 28 days or longer (US only).</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Monthly payments display</h2>
    <p>For monthly stays, review what’s due for current and future months at checkout.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Checkout reminders</h2>
    <p>Get a helpful reminder of what you need to do to check out, the day before you go.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Checkout reviews</h2>
    <p>Now you can provide feedback about your checkout when reviewing a stay.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Instant rebooking credit</h2>
    <p>If a Host cancels at the last minute, most guests will get credit to rebook instantly.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Priority customer support on a trip</h2>
    <p>Our dedicated 24/7 support team's goal is to answer 90% of calls in English in 2 mins or less.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Distance from points of interest</h2>
    <p>Searching for a landmark on Airbnb? Results will show the distance from each home.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Highlighting infant-friendly homes</h2>
    <p>If you’re travelling with a baby, search results will highlight amenities like cots.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Highlighting kid-friendly homes</h2>
    <p>If you’re travelling with children, search results will highlight amenities like playrooms.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Highlighting homes for monthly stays</h2>
    <p>Planning a longer stay? Search results will show amenities like dedicated workspaces.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Identity verification of Hosts</h2>
    <p>All Hosts getting booked on Airbnb will go through identity verification by the end of June.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Improved identity verification process</h2>
    <p>When required, we’ve made it easy to add more information to verify your identity.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Appeals for blocked bookings</h2>
    <p>You can now appeal a blocked booking if it is incorrectly identified as a party risk.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Airbnb Rooms bathrooms filter</h2>
    <p>  When booking Airbnb Rooms, you can now search for private attached bathrooms.</p>
    <hr/>
  </div>
  <div className="features2">
    <h2>Dynamic price filter</h2>
    <p>Price ranges automatically adjust when using the type of stay filter.</p>
    <hr/>
  </div>

  <div className="features2">
    <h2>Dynamic price filter</h2>
    <p>Price ranges automatically adjust when using the type of stay filter.</p>
    <hr/>
  </div>

   <div className="features2">
    <h2>Dynamic price filter</h2>
    <p>Price ranges automatically adjust when using the type of stay filter.</p>
    <hr/>
  </div>
  </div>
    </div>
  );
};
export default Features;