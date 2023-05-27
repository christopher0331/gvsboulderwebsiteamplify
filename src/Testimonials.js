import React, { useState } from 'react';
import './styles/Testimonials.css';

const testimonials = [
    
  {
    name: 'Kevin Purdy (Trailsnet)',
    date: '2022-04-21',
    rating: 5,
    message:
      'Greenview Solutions built a sturdy fence for me. Rolando, Jose and Alberto were hard workers and kept me informed each step of the way. They deserve a bonus for their knowledge and professionalism.',
  },
  {
    name: 'Dave Sluiter',
    date: '2021-12-16',
    rating: 5,
    message:
      'A+ business. They showed up on time, completed the project within the estimated time frame they provided, and delivered a high level of quality with attention to detail. They cleaned up the job site nicely at completion time. Additionally, their bid came in approximately 30% lower than competing bids.',
  },
  {
    name: 'Dalton Morrison',
    date: '2021-12-09',
    rating: 5,
    message:
      "Couldn’t speak more highly of this company! They truly are the definition of Excellence from top to bottom. If you need a fence these are your guys!",
  },
  {
    name: 'Rudy N.',
    date: '2021-06-30',
    rating: 5,
    message:
      "Brandon helped us out with a sprinkler problem. It was an extra valve that I was unaware of. It took all of thirty seconds to fix and he charged me ZERO. I Really appreciate his effort and also that he did me a favor when he clearly had a lot of work on his plate elsewhere. Thank you Brandon.",
  },
  {
    name: 'Megan Peterson',
    date: '2020-12-10',
    rating: 5,
    message: 'Their work is exceptional and communication is great would highly recommend them.',
  },
  {
    name: 'Lee Stroud',
    date: '2020-12-09',
    rating: 5,
    message:
      "They go by the book, which is great because you don't want someone reporting your fence to the local municipality and have to pay a fine. They give excellent customer service, great cleaning up, on top of doing an excellent job. I highly recommend them. I don't know their travelling limit but if you're in the metro area, these are your landscaping people. Others wanted to skimp by, not show up for an estimate, not give an estimate, and some wanted to charge too much. I would hire them back, no hesitation.",
  },
  // Add more testimonials here if needed
];

const Testimonials = () => {
  const [expandedReview, setExpandedReview] = useState(null);

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    return stars;
  };

  const handleExpandReview = (index) => {
    setExpandedReview(index);
  };

  const handleReviewClick = () => {
    window.open('https://g.page/r/CaS0ZBtd2mPiEB0/review', '_blank');
  };

  
  const renderReview = (testimonial, index) => {
    const reviewText = testimonial.message;
    const maxChars = 450;
  
    if (reviewText.length <= maxChars) {
      return <p>{reviewText}</p>;
    }
  
    const isExpanded = expandedReview === index;
  
    return (
      <div>
        <p>{isExpanded ? reviewText : `${reviewText.slice(0, maxChars)}...`}</p>
        {!isExpanded && (
          <button className="button" onClick={() => handleExpandReview(index)}>
            View Full Review
          </button>
        )}
      </div>
    );
  };
  
  return (
    <div className="testimonials-container">
      <button className="button" onClick={handleReviewClick}>
        Leave a Review
      </button>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.date}</p>
          <p className="rating">{renderRating(testimonial.rating)}</p>
          {renderReview(testimonial, index)}
        </div>
      ))}
      <button className="button" onClick={handleReviewClick}>
        Leave a Review
      </button>
    </div>
  );

}

export default Testimonials;