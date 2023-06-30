import React, { useState, useEffect} from 'react';
import './styles/Header.css';
import Menu from './Menu.js';
import { useLocation } from 'react-router-dom';

const Header = ({headerImage, headerText, setHeaderImage, setHeaderText}) => {
    
    
    const imageUrls = [
      {
        page: '/',
        imageUrl: 'https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project1/picture13?tr=',
        headerText: { h1: 'GreenView Solutions', subtext: 'From Privacy Structures to Quality Fences, We\'ve Got You Covered' }
      },
      {
        page: '/services/',
        imageUrl: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project4/FullSize/IMG_1874.JPG?tr=',
        headerText: { h1: 'Services', subtext: 'Explore Our Range of Services and Offerings' }
      },
      {
        page: '/contact-us',
        imageUrl: 'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/AboutUs/AboutUsImage.jpg',
        headerText: { h1: 'Contact Us', subtext: 'Get in Touch with Us Today' }
      },
      {
        page: '/about-us',
        imageUrl: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project14/FullSize/project1Picture10.webp?tr=',
        headerText: { h1: 'About Us', subtext: 'Learn More About Our Company and Values' }
      },
      {
        page: '/testimonials',
        imageUrl: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project14/FullSize/project1Picture7.webp?tr=',
        headerText: { h1: 'Testimonials', subtext: 'See What Our Clients Are Saying About Us' }
      },
      {
        page: '/gallery',
        imageUrl: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project5/FullSize/IMG_5426.jpeg?tr=',
        headerText: { h1: 'Gallery', subtext: 'Explore Our Project Gallery' }
      },
      {
        page: '/services/fence-contractor',
        imageUrl: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project6/FullSize/IMG_7143.jpeg?tr=',
        headerText: { h1: 'Fence Contractor', subtext: 'Professional Fence Installation Services' }
      },
      {
        page: '/services/privacy-fence-installation',
        imageUrl: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project3/FullSize/IMG_1575.JPG?tr=',
        headerText: { h1: 'Privacy Fence Installation', subtext: 'Enhance Your Privacy with Our Fence Installation' }
      },
      {
        page: '/services/privacy-fences',
        imageUrl: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project11/FullSize/project11Picture4.webp?tr=',
        headerText: { h1: 'Privacy Fences', subtext: 'Secure Your Property with Privacy Fencing Solutions'  }
      },
      {
        page: '/services/security-fences',
        imageUrl: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project11/FullSize/project11Picture10.webp?tr=',
        headerText: { h1: 'Security Fences', subtext: 'Protect Your Property with High-Quality Security Fencing' }
      },
      {
        page: '/automatic-gate-installations',
        imageUrl: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project1/FullSize/project1Picture1.webp?tr=',
        headerText: { h1: 'Automatic Gate Installation', subtext: 'Enhance Security and Convenience with Automatic Gate Installations' }
      },

    ];



    const location = useLocation();
    const currentPage = location.pathname;

    const logo = 'https://ik.imagekit.io/greenviewsolutions/HomePage/FullSizedWebp/clearGVSLogo_300.webp?tr=w-300,h-300';

    const changeHeaderImage = (newImage, h1Text) => {
      setHeaderImage(newImage);
      setHeaderText({ h1: h1Text.toUpperCase(), subtext: '' });
    };

    function getHeaderImage(page) {
      const foundImage = imageUrls.find(item => item.page === page);
      return foundImage ? foundImage.imageUrl : '';
    }

    function getHeaderText(page) {
      const foundText = imageUrls.find(item => item.page === page);
      return foundText ? foundText.headerText : { h1: '', subtext: '' };
    }

    useEffect(() => {
      setHeaderImage(getHeaderImage(currentPage));
      setHeaderText(getHeaderText(currentPage));
  }, [currentPage]);

    return (
      <div>
        <div className="header">
          <img className="headerLogo" rel='preload' src={logo} alt="Greenview Solutions Logo" />
          <Menu changeHeaderImage={changeHeaderImage} />
        </div>
  
        <div 
          className="hero-image" 
          style={{ 
            backgroundImage: `url(${headerImage})`, 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            backgroundBlendMode: 'darken', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <h2>{headerText.h1}</h2>
          <p>{headerText.subtext}</p>
        </div>
    </div>
    );

}
export default Header;



