import React from 'react'
import { Link } from 'react-router-dom'
import "./Career.css";
import AirbnbCareer from "../assets/Airbnb_Careers_Home_Hero.webp";
import AIRBNB from "../assets/AIRBNB.webp";
import valenteertimeimg from "../assets/valenteertimeimg.jpg";
import healthyfoodimg from "../assets/healthyfoodimg.png";
import familyimg from "../assets/familyimg.jpg";
import learningimg from "../assets/learningimg.jpg";
import transing from "../assets/transing";
const Career = () => {
  return (
    <div>
<div className="Career">
        <h2>Career At Airbnb</h2>
        <img src={AirbnbCareer} alt='Airbnb_Careers_Home-photo'/>
    </div>
    <div className="Career">
        <h4>OUR MISSION</h4>
        <h1>Create a world where anyone can belong anywhere</h1>
        <p>It’s an audacious, incredibly rewarding mission that our increasingly diverse team is dedicated to achieving.
           <br/><br/> Airbnb is built around the idea that everyone should be able to take the perfect trip, including where they 
            stay, what they do, and who they meet. To that end, we empower millions of people around the world to use 
            their spaces, passions, and talents to become entrepreneurs.          
           <br/><br/> Exciting challenges lie ahead—new regions, technologies, and businesses. Guided by our four core values,
            we’ll meet these challenges creatively and with the support of our global community. Join us!</p>
    </div>
    <div className="Career">
        <img src={AIRBNB} alt='AIRBNB-Photo' id="careerimg"/>
    </div>
    <div className="Career">
        <h4>BENEFITS</h4>
        <h1>Live your best life</h1>
        <p>There’s life at work and life outside of work. We want everyone to be healthy,
             travel often, get time to give back, and have the financial resources and support they need.</p>
            </div>
            <div className="Career2">
            <div className="Career1">            
                  <img  src={valenteertimeimg} width="80px" height="60px"/>
                  <h3>Comprehensive health plans</h3>
            </div>
            <div className="Career1">   
                    <img  src={healthyfoodimg} alt='' width="130px" height="80px" />
                    <h3>Paid volunteer time</h3>
            </div>
                    <div className="Career1">   
                    <img  src={healthyfoodimg} alt='' width="130px" height="80px" />
                    <h3>Healthy food and snacks</h3>
                    </div>
                    <div className="Career1">   
                   <img  src={familyimg} alt='' width="130px" height="80px" />
                   <h3>Generous parental and family leave</h3>
                    </div>
                   <div className="Career1">   
                   <img  src={learningimg} alt='' width="130px" height="80px" />
                   <h3>Learning and development</h3>
                   </div>
                   <div className="Career1">   
                   <img  src={transing} alt='' width="130px" height="80px" />
                   <h3>Annual travel and experiences credit</h3>
                   </div>
    </div>
    <div className="career4">
    <div className="Career3">
        <h3>Build extraordinary products</h3>
        <p>Engineering technologies that br/ing people together in the real world is both inspiring and daunting. 
            We're tackling challenges in search relevance, payments, fraud prevention, discrimination, 
            and growth—all while maintaining a beautiful experience. 
            We love to contribute to the community, from our work on testing React components to our new Android framework.</p>
        <hr/>
        </div>
      <div className="Career3">
        <h3>Include everyone</h3>
        <p>A world where anyone can belong anywhere starts with a workplace where you feel welcome and can
             contribute your best work. <br/>Airbnb welcomes candidates with backgrounds that are traditionally 
            underrepresented in tech and offers opportunities to create community in our offices around the world.</p>
            <hr/>
      </div>
      </div>
    <div className="Career5">
        <h1>Reasonable accommodation</h1>
        <p>Airbnb values diversity & belonging and is proud to be an Equal Employment Opportunity employer.
             All individuals seeking employment at Airbnb are considered without regard to race, color, religion, national origin, age, sex, marital status, ancestry, physical or mental disability, veteran status, gender identity, sexual orientation, or any other legally protected characteristic. We are committed to providing reasonable accommodations for qualified applicants with disabilities in our job application and recruitment process. 
            If you need assistance, or an accommodation, please contact us at: <Link to="#">reasonableaccommodations@airbnb.com.</Link></p>
            </div>
    </div>
  );
};
export default Career;