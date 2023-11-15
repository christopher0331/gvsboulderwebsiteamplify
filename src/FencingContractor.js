import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/FencingContractor.css'; // Assuming you have a separate CSS file for this component

function FencingContractor() {
    const { location } = useParams();
    console.log("Location:", location); // Debugging line to see the value of location
  
    const cityName = location 
      ? location.charAt(0).toUpperCase() + location.slice(1).replace(/-/g, ' ') 
      : 'Your City';
  
  return (
    <div className="fencing-contractor-page">
      <h1>{cityName} Fencing Contractor Services</h1>
      <p>Welcome to {cityName} Fencing Contractor Services! We specialize in providing top-quality fencing solutions tailored to the unique needs of our clients in {cityName} and the surrounding areas. Whether you're looking for privacy, security, or simply an aesthetic upgrade to your property, our expert team is here to help you choose the perfect fencing option.</p>
      
      <h2>Types of Fences We Offer</h2>
      <h3>Wooden Fences</h3>
      <p><strong>Pros:</strong> Classic look, customizable, privacy. <strong>Cons:</strong> Requires maintenance.</p>
      
      <h3>Vinyl Fences</h3>
      <p><strong>Pros:</strong> Low maintenance, weather-resistant. <strong>Cons:</strong> Higher initial cost.</p>
      
      <h3>Aluminum Fences</h3>
      <p><strong>Pros:</strong> Durable, rust-proof. <strong>Cons:</strong> Less privacy.</p>
      
      <h3>Chain Link Fences</h3>
      <p><strong>Pros:</strong> Cost-effective, durable. <strong>Cons:</strong> Less aesthetic appeal.</p>
      
      <h2>Why Choose Us in {cityName}?</h2>
      <p>Our team is well-versed in {cityName}'s specific zoning laws and regulations, ensuring your fence meets all legal standards. We offer personalized solutions tailored to the landscape and aesthetic of {cityName}, with a commitment to quality craftsmanship.</p>
      
      <h2>Testimonials from {cityName} Residents</h2>
      {/* Insert testimonials */}
      
      <h2>Get in Touch</h2>
      {/* Contact details and CTA */}
    </div>
  );
}

export default FencingContractor;
