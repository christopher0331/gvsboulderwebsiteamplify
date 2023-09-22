import React, { useEffect, useRef } from 'react';
import './styles/ScrollingSection.css';

const ScrollingSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const offset = -rect.top;
        sectionRef.current.style.backgroundPositionY = `${offset * 0.01}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <section className="scrolling-section" ref={sectionRef}>
      <div className="image-overlay"></div>
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
