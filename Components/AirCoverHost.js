import React from 'react'
import "./AirCoverHost.css";
import sliderimg1 from "../assets/sliderimg1";
import sliderimg2 from "../assets/sliderimg2";
const AirCoverHost = () => {
  return (
    <div>
<div class="host">
   <div class="host1">
     <span>aircover</span><br/>
     <span id="hosts">for Hosts</span>

     <p>Top-to-bottom protection.<br/>
        Always included, always free.<br/>
        Only on Airbnb.</p>
   </div>
 <div class="hr3">
    <hr/>
 </div>
   <div class="host2">
    <h2>Guest identity verification</h2>
    <p>Our comprehensive verification system checks details such as name, address,
         government ID and more to confirm the identity of guests who book on Airbnb.</p>
         <h2>Reservation screening</h2>
         <p>Our proprietary technology analyses hundreds of factors in each reservation and blocks 
            certain bookings that show a high risk for disruptive parties and property damage.</p>
        
         <h2>$3m USD damage protection</h2>
         <p>If guests do not pay for the damage caused to your home and belongings, Host damage protection is
             in place to help reimburse costs up to $3m USD, including these specialised protections:</p>
   </div>
   <div class="host4">
  <div class="host3">
    <h2>Art & valuables</h2>
    <p>Get reimbursed for damaged art or valuables.</p>
    <hr/>
  </div>
     
  <div class="host3">
    <h2>Pet damage</h2>
    <p>Get reimbursed for damage caused by a guest’s pet.</p>
    <hr/>
  </div>

  <div class="host3">
    <h2>Auto & boat</h2>
    <p>Get reimbursed for damage to cars, boats and other watercraft that you park or store at your home.
    </p>
    <hr/>
  </div>

  <div class="host3">
    <h2>Income loss</h2>
    <p>If you have to cancel Airbnb bookings due to guest damage, you'll be compensated for the lost income.</p>
  <hr/>
</div>
   </div>

  <div class="host2">
    <h2>$1m USD liability insurance</h2>
    <p>Protection in the rare event that a guest gets hurt or their belongings are damaged or stolen.</p>
    <h2>24-hour safety line</h2>
    <p>If you ever feel unsafe, our app provides one-tap access to specially trained safety agents, day or night.</p>
  </div>
</div>
<div class="host2">
    <h2>Painting and Other Arts</h2>
</div>
<div class="slider">
    <span id="slide-1"></span>
    <span id="slide-2"></span>
  
    <div class="image-container">
      <img src={sliderimg1} alt='Art-image' class="slide" width="900" height="600" />
      <img src={sliderimg2} alt='art-image' class="slide" width="900" height="600" />
   
    </div>
    <div class="buttons">
      <a href="#slide-1"></a>
      <a href="#slide-2"></a>
    </div>
  </div>
    </div>
  )
}
 export default AirCoverHost;