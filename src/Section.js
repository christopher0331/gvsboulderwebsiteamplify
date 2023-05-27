import React from 'react';
import './styles/Section.css'; // CSS file for styling
import { Link } from 'react-router-dom';

const Section = () => {
  return (
    <section className="section">
      <div className="section-content">
        <div className="section-heading">
          <div className="vertical-line"></div>
          <h1 className="intro">WELCOME TO GREENVIEW SOLUTIONS</h1>
        </div>
        <div className="section-description">
          <p>Greenview Solutions is a fence company serving Arvada, CO, and the surrounding areas. Our team understands that your property is vital to your life, and keeping it secure and presentable is critical to your peace of mind. We are confident that our contractors are qualified and knowledgeable in installing fences on your property. Also, our experienced and skilled contractors can fix and manage any design changes you need for your property's fences.</p>
        </div>
        <div className="section-offerings">
          <h2>Greenview Solutions offers the following:</h2>
          <ul>
            <li>Electric Gate Installations</li>
            <li>Automatic Gate Installations</li>
            <li>Chain Link Fences</li>
            <li>Wood Fence Installations</li>
            <li>And More!</li>
          </ul>
        </div>
        <div className="section-contact">
          <p>You can trust that Greenview Solutions provides the necessary fence installations for your property, including vinyl fencing, aluminum fencing, and privacy fences that can help improve the appearance and security of your property. Our team's priority is to provide our clients with the privacy they need while adding great design to their fences. If you are interested in learning more about our various fencing services, do not hesitate to contact Greenview Solutions today!</p>
        </div>
          <Link to="/about-us">
          <button className="section-button">About Us</button>
        </Link>      </div>
    </section>
  );
};

export default Section;
