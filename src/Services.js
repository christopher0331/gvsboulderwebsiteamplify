import React from 'react';
import { Link } from 'react-router-dom';
import OscillatingCarousel from './OscillatingCarousel'
import './styles/Services.css'; // CSS file for styling

const contentData = [
  {
    title: 'AUTOMATIC GATE INSTALLATIONS',
    header: "Don't bother opening and closing the gate, as we offer automatic gate installations for your needs!",
    url: "https://ik.imagekit.io/greenviewsolutions/Portfolio/Project1/FullSize/project1Picture4.webp?tr=w-700,h-700",
    className: 'box-1',
  },
  {
    title: 'SECURITY FENCES',
    header: 'Greenview Solutions offers security fences to ensure your property remains safe and aesthetically pleasing.',
    url: "https://ik.imagekit.io/greenviewsolutions/Portfolio/Project12/FullSize/project12Picture10.webp?tr=w-700,h-700",
    className: 'box-3',
  },
  {
    title: 'FENCE CONTRACTOR',
    header: 'Does your property require new fencing? Greenview Solutions will provide skillful residential fence installations at your convenience.',
    url: "https://ik.imagekit.io/greenviewsolutions/Portfolio/Project4/FullSize/IMG_1874.JPG?tr=w-700,h-700",
    className: 'box-5',
  },
  {
    title: 'PRIVACY FENCES',
    header: 'Greenview Solutions are expert when it comes to privacy fence installation. We take great pride in enhancing properties with high-quality fencing solutions.',
    url: "https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project1/picture13?tr=w-900,h-900",
    className: 'box-2',
  },
  {
    title: 'PRIVACY FENCE INSTALLATION',
    header: 'Greenview Solutions proudly offers privacy fence installations for your security. Our goal is to enhance and improve the entry of your home or office building.',
    url: "https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project2/picture2?tr=w-700,h-700,custom%20horizontal%20fence,%20300%20linear%20feet",
    className: 'box-4',
  },
];

const BoxesSection = () => {
  return (
    <section className="boxes-section">
      <div className="boxes-container">
        <div className="top-row">
          {contentData.slice(0,3).map((item, index) => (
            <Link to={`/services/${item.title.toLowerCase().replace(/ /g, '-')}`} key={index} className="box-link">
              <div className={`box ${item.className}`}>
                {item.title === 'AUTOMATIC GATE INSTALLATIONS' ? 
                  <OscillatingCarousel images={[
                    'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Portfolio/gvsBoulderWebsite/ag1.png?tr=w-700,h-900',
                    'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Portfolio/gvsBoulderWebsite/ag2.png?tr=w-700,h-900',
                    'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Portfolio/gvsBoulderWebsite/ag3.png?tr=w-700,h-900',
                    'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Portfolio/gvsBoulderWebsite/ag4.png?tr=w-700,h-900',
                    'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Portfolio/gvsBoulderWebsite/ag5.jpeg?tr=w-700,h-700',
                  ]} />
                : item.title === 'SECURITY FENCES' ? 
                  <OscillatingCarousel images={[
                    'https://ik.imagekit.io/greenviewsolutions/Portfolio/gvsBoulderWebsite/sf1.png?tr=w-700,h-700',
                    'https://ik.imagekit.io/greenviewsolutions/Portfolio/gvsBoulderWebsite/image5.JPG?tr=w-700,h-700',
                    'https://ik.imagekit.io/greenviewsolutions/Portfolio/gvsBoulderWebsite/image6.JPG?tr=w-700,h-700',
                    'https://ik.imagekit.io/greenviewsolutions/Portfolio/gvsBoulderWebsite/image7.jpeg?tr=w-700,h-700',
                  ]} />
                : item.title === 'FENCE CONTRACTOR' ? 
                  <OscillatingCarousel images={[
                    'https://ik.imagekit.io/greenviewsolutions/Portfolio/gvsBoulderWebsite/image1.jpg?tr=w-700,h-700',
                    'https://ik.imagekit.io/greenviewsolutions/Portfolio/gvsBoulderWebsite/image2.jpg?tr=w-700,h-700',
                    'https://ik.imagekit.io/greenviewsolutions/Portfolio/gvsBoulderWebsite/image3.jpg?tr=w-700,h-700',
                  ]} />
                : <img src={item.url} alt={`${item.title}`} />
                }
                <h2 className="services">{item.title}</h2>
                <p>{item.header}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="bottom-row">
          {contentData.slice(3).map((item, index) => (
            <Link to={`/services/${item.title.toLowerCase().replace(/ /g, '-')}`} key={index} className="box-link">
              <div className={`box ${item.className}`}>
                {item.title === 'PRIVACY FENCES' ? 
                  <OscillatingCarousel images={[
                    'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Portfolio/gvsBoulderWebsite/pf1.png?tr=w-700,h-700',
                    'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Portfolio/gvsBoulderWebsite/pf2.png?tr=w-700,h-700',
                    'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Portfolio/gvsBoulderWebsite/pf3.png?tr=w-700,h-700',
                  ]} />
                : item.title === 'PRIVACY FENCE INSTALLATION' ? 
                  <OscillatingCarousel images={[
                    'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Portfolio/gvsBoulderWebsite/pf4.png?tr=w-700,h-700',
                    'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Portfolio/gvsBoulderWebsite/pf5.png?tr=w-700,h-700',
                    'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/Portfolio/gvsBoulderWebsite/pf6.png?tr=w-700,h-700',
                  ]} />
                : <img src={item.url} alt={`${item.title}`} />
                }
                <h2 className="services">{item.title}</h2>
                <p>{item.header}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoxesSection;
