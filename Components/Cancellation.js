import React from 'react'
import { Link } from 'react-router-dom'
import "./Cancellation.css";

 const Cancellation = () => {
  return (
    <div>
         <div class="cancellation">
    <h2>Community policy</h2>
    <h1>Extenuating Circumstances Policy and the coronavirus (COVID-19)</h1>
    </div>
    <div class="cancellation1">
    <p><b>Note: </b>As of 31 May 2022, we have updated COVID-19 coverage under our extenuating circumstances policy:<br/>
        • For reservations made on or after 31 May 2022, the below COVID-19-related circumstances are no longer covered. 
        Instead, the Host’s cancellation policy will apply as usual.<br/>
        • For reservations made before 31 May 2022, the below COVID-19-related circumstances will continue to be covered.     
        Different policies apply for Luxe reservations and domestic reservations in South Korea.</p>
    </div>
    <div class="column4">
        <h4>Get help with your reservations, account, and more.</h4>
       <Link to="Login.html"><input type="submit" id="btn" name="submit" value="Log in or sign up"/></Link>
        </div>
        <div class="cancellation2">
        <p>Updated 31 May 2022<br/><br/>
            On 11 March 2020, the World Health Organization (WHO) declared the outbreak of coronavirus, 
            known as COVID-19, to be a global pandemic. Since then, the outbreak evolved rapidly with 
            governments around the world taking swift action to slow the spread of COVID-19.
            <br/><br/>
            In response, we have provided the following coverage for COVID-19 under our extenuating 
            circumstances policy to help protect our community and provide peace of mind.</p><br/>
            <h2>Summary</h2><br/>
              <p> Reservations for stays and Airbnb Experiences made on or before 14 March 2020, with a
                 check-in date within the next 45 days from today, are covered by the policy and may be 
                 cancelled before check-in. Guests who cancel will have cancellation and refund options
                  and Hosts can cancel without charge or impact to their Superhost status if they can 
                  provide valid proof that they qualify. Airbnb will either refund you or issue travel
                   credit that includes all service fees for covered cancellations. In order to cancel 
                   under the policy, you will be required to attest to the facts of and/or provide
                    supporting documentation for your circumstance.<br/> <br/>
                The Host’s cancellation policy will apply as usual to reservations made
                 after 14 March 2020 and before 31 May 2022, except where a guest or Host is sick with COVID-19.<br/><br/>
                For reservations made on or after 31 May 2022, the Host’s cancellation policy will apply. 
                COVID-19-related circumstances will not be covered.             
                Cancellations will be handled according to the extenuating circumstances coverage 
                in effect at the time of submission, and reservations that were already cancelled 
                will not be reconsidered. <br/><br/>         
                If a reservation has already begun (the check-in time has passed), this extenuating circumstance
                 does not apply.</p>
           <br/><br/>
                <h2>What reservations are covered</h2><br/>
                <h4>Reservations made on or before 14 March 2020</h4>
                <p>Reservations for stays and Airbnb Experiences made on or before 14 March 2020,
                     with a check-in date within the next 45 days from today, may be cancelled before check-in.
                      This means that guests who cancel under the policy will receive a full cash refund or 
                      travel credit in the amount they paid (where travel credit is available), Hosts can cancel
                       under the policy without charge or impact to their Superhost status, and Airbnb will
                        either refund all service fees or issue travel credit in an amount that includes them.
                    <br/><br/>Reservations for stays and Airbnb Experiences made on or before 14 March 2020, with a 
                    check-in date more than 45 days from today, are not currently covered for COVID-19-related
                     circumstances. The Host’s cancellation policy will apply as usual.               
                   <br/><br/> If a reservation has already begun (the check-in time has passed),
                     this extenuating circumstance does not apply.</p>
            <h4>Reservations made after 14 March 2020 and before 31 May 2022</h4>         
            <p>For reservations for stays and Airbnb Experiences made after 14 March 2020
                 and before 31 May 2022, the Host's cancellation policy will apply as usual 
                 and COVID-19-related circumstances will not be covered under our extenuating 
                 circumstances policy, except where the guest or Host is currently sick with COVID-19. 
                 COVID-19-related circumstances not covered include: transport disruptions and cancellations; 
                 travel advisories and restrictions; health advisories and quarantines; changes 
                 to applicable law; and other government mandates, such as evacuation orders, 
                 border closures, prohibitions on short-term rentals and lockdown requirements.</p>
                 <h4>Reservations made on or after 31 May 2022</h4>
                 <p>For stays and Airbnb Experiences made on or after 31 May 2022, the Host’s
                     cancellation policy will apply. COVID-19-related circumstances will not be 
                     covered under our extenuating circumstances policy.<br/><br/>
                    Our extenuating circumstances policy is intended to protect guests 
                    and Hosts from unforeseen circumstances that arise after booking. 
                    After the declaration of COVID-19 as a global pandemic by the World Health Organization,
                     the extenuating circumstances policy no longer applies because COVID-19 and its
                     consequences are no longer unforeseen or unexpected. Please remember to carefully
                      review the Host's cancellation policy when booking and consider choosing an option 
                      that provides the level of flexibility you need.</p>
        </div>
    </div>
  );
};

export default Cancellation;