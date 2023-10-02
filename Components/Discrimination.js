import React from 'react'
import "./Discrimination.css";
import Discrimin1 from "../assets/discrimin1.jpg";
import Discrimin2 from "../assets/discrimin2.jpg";
import Discrimin3 from "../assets/discrimin3.jpg";
import Discrimin4 from "../assets/discrimin4.jpg";
import Discrimin5 from "../assets/discrimin5.jpg";
import Discrimin6 from "../assets/discrimin6.jpg";

 const Discrimination = () => {
  return (
    <div>
        <div class="discrim">
    <h1>Fighting discrimination and building inclusion</h1>
    <div class="hr2">
        <hr/></div>
    <h3>Project Lighthouse</h3>
    <p>Launched in 2020, Project Lighthouse helps uncover and address disparities 
        in how people of colour experience Airbnb. We developed the initiative in partnership with Color Of Change 
        – and with guidance from a number of civil rights and privacy organisations.</p>
    </div>
    <div class="Discrimin1">
        <div class="Discrimin">
            <h3>Using real data</h3>
          <p>We examine how guests and Hosts use our platform. 
            Statistical analyses help us find opportunities to build more equitable experiences in our community.</p>
          </div>
          <div class="Discrimin">
            <h3>Protecting privacy</h3>
          <p>We analyse trends in bulk and don’t associate perceived race information with specific people or accounts.</p>
          </div>
          <div class="Discrimin">
            <h3>Constantly improving</h3>
          <p>Our team is continuing to identify new ways to make Airbnb fairer, more equitable and more inclusive.</p>
          </div>
    </div>
    
    <div class="hr2">
      <hr/>
    </div>
      
<div class="discrim">
 <h3>What we’ve changed</h3>
</div>
<div class="Discrimin2">
  <h3>Eliminating guest profile photos prior to booking</h3>
  <p>In 2018, we implemented changes to ensure Hosts will see a guest’s photo 
  in the booking process only after they’ve accepted a booking request. 
  Analysis found that this change slightly increased the Booking Success
   Rate – the rate at which guests in the United States from different perceived racial 
  groups successfully book an Airbnb listing – for guests who are perceived to be Black.</p>
</div>
  <div class="Discrimin2">
    <h3>More reviews for more guests</h3>
    <p>Guests with reviews have a higher Booking Success Rate. But our analysis found that
       guests perceived to be Black or Latino/Hispanic have fewer reviews than guests perceived to be white or Asian.
       We are implementing changes that will make it easier for all guests to receive a review when they travel.</p>
  </div>

  <div class="Discrimin2">
    <h3>Making more people eligible for Instant Book</h3>
    <p>Instant Book lets a guest book a listing without requiring a Host’s approval.
      It’s an effective tool to reduce discrimination because it creates more objective bookings. 
      We’ve introduced changes to make it easier for 5 million more people to use Instant Book.</p>
  </div>

  <div class="Discrimin2">
    <h3>Building a more inclusive travel community</h3>
    <p>Travel beyond traditional tourist hubs can bring economic opportunity to
       communities that haven’t historically benefited from tourism. In the next year,
        we’ll continue to develop and scale global programmes like the Airbnb Entrepreneurship 
        Academy to ensure broader access to the benefits of hosting on Airbnb. 
      Our efforts include expanding programmes that help recruit more Hosts who are people of colour.</p>
  </div>

  <div class="Discrimin2">
    <h3>Expanding education for Hosts</h3>
    <p>Our Host community plays an important role in creating an equitable and welcoming experience. This year, 
      we launched a Guide to Inclusive Hosting with educational articles and videos to help 
      Hosts welcome guests from all abilities, genders and backgrounds – especially those 
      from historically marginalised communities. We expect to roll out more educational
       programmes and product features to build inclusion.</p>
  </div>

  <div class="Discrimin2">
    <h3>Auditing reservation rejections to remove opportunities for bias</h3>
    <p>We know that there are legitimate reasons why a reservation may not work:
       the Host's calendar may have changed, or the guest may have a need –
        like early check-in or bringing extra guests – that the Host can’t accommodate.
         We are expanding our ability to analyse reservation rejections to help improve 
         our policies and products and fight discrimination.</p>
  </div>

  <div class="Discrimin2">
    <h3>Improving the rebooking experience</h3>
    <p>Under our Open Doors Policy, introduced in 2016, guests with current or upcoming 
      reservations who report experiencing discrimination get help booking an alternative listing.
       We recently launched a 24-hour Safety Line designed to make it easier 
      for guests on a trip to get urgent help, including access to rebooking assistance.</p>
  </div>

  <div class="Discrimin2">
    <h3>Continuing our commitment to guests with mobility needs</h3>
    <p>Our accessibility feature search filters make it easier for guests 
      to find and book stays that meet their needs. 
       Our Adapted category, launched in November 2022, features hundreds of listings 
       adapted for wheelchair access, with verified step-free paths into the home, 
       bedroom and bathroom and at least one accessibility feature in the bathroom.
       Adapted listings even undergo a 3D scan to confirm features and measurements.
    </p>
  </div>

  <div class="hr2">
    <hr/>
  </div>

  <div class="discrim">
    <h3>Meet our partners</h3>
    <p>Since 2016, we’ve consulted and collaborated with leading civil rights groups,
       racial experts and privacy organisations.</p>
  </div>
  <div class="discrim3">
<img src={Discrimin1} alt='Patnercompanylogo'/>
<img src={Discrimin2} alt='Patnercompanylogo'/>
<img src={Discrimin3} alt='Patnercompanylogo'/>
<img src={Discrimin4} alt='Patnercompanylogo'/>
<img src={Discrimin5} alt='Patnercompanylogo'/>
<img src={Discrimin6} alt='Patnercompanylogo'/>
</div>
    </div>
  )
}
export default Discrimination;