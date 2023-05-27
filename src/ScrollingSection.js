import React from 'react';
import './styles/ScrollingSection.css'; // CSS file for styling

const ScrollingSection = () => {
  return (
    <section className="scrolling-section">
      <div className="image-container">
        <div className="image-overlay"></div>
        <img src="https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project4/picture7?tr=w-900,h-900" alt="Background" className="background-image" />
      </div>
      <div className="content">
        <h1>Proudly Serving</h1>
        <div className="locations">
          <p>Arvada CO</p>
          <p>Boulder CO</p>
          <p>Broomfield CO</p>
          <p>Denver CO</p>
          <p>Golden CO</p>
          <p>Longmont CO</p>
        </div>
      </div>
    </section>
  );
};

export default ScrollingSection;
