import React, { useState, useEffect } from 'react';

const OscillatingCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState('forward'); // New state to keep track of direction
    const maxIndex = images.length - 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => {
                if (direction === 'forward') {
                    if (prevIndex === maxIndex) {
                        setDirection('backward');
                        return prevIndex - 1;
                    }
                    return prevIndex + 1;
                } else { // If direction is 'backward'
                    if (prevIndex === 0) {
                        setDirection('forward');
                        return 1;
                    }
                    return prevIndex - 1;
                }
            });
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [direction, maxIndex]);

    return (
        <div className="carousel-container">
            <img src={images[currentImageIndex]} alt="oscillating-carousel-image" />
        </div>
    );
};

export default OscillatingCarousel;
