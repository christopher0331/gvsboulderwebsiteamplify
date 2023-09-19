// OscillatingCarousel.js
import React, { useState, useEffect } from 'react';

const OscillatingCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const maxIndex = images.length - 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => {
                if (prevIndex === 0) {
                    return 1;
                } else if (prevIndex === maxIndex) {
                    return prevIndex - 1;
                } else {
                    return prevIndex + 1;
                }
            });
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [maxIndex]);

    return (
        <div className="carousel-container">
            <img src={images[currentImageIndex]} alt="oscillating-carousel-image" />
        </div>
    );
};

export default OscillatingCarousel;
