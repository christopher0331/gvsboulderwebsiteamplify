import React, { useEffect, useState } from 'react';
import './styles/GoogleMapsSection.css';

const GoogleMapsSection = () => {
  const [businessName, setBusinessName] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCnKu_Z0h_fQSRnv0sXNzmGGqhJKN_ts9s&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    window.initMap = () => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: '6526 Gunpark Dr Ste 370, #110, Boulder, CO' }, (results, status) => {
        if (status === 'OK') {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 15,
          };
          const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

          const marker = new window.google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
          });

          const service = new window.google.maps.places.PlacesService(map);
          service.getDetails({ placeId: 'YOUR_PLACE_ID' }, (place, status) => {
            if (status === 'OK') {
              setBusinessName(place.name);
              setReviews(place.reviews);
            }
          });
        }
      });
    };

    loadScript();

    return () => {
      const script = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <section className="google-maps-section">
      <div className="map-container">
        <div id="map"></div>
      </div>
      <div className="business-info">
        <h2 className="business-name">{businessName}</h2>
        <div className="reviews-container">
          {reviews.map((review) => (
            <div className="review" key={review.time}>
              <p className="review-rating">{review.rating} stars</p>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleMapsSection;
