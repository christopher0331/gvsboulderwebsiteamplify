import React, { useState } from 'react';
import './styles/Header.css';
import Menu from './Menu.js';
import { useLocation } from 'react-router-dom';

const Header = (props) => {
  const imageUrls = {
    imageForHomePage: 'https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project1/picture13?tr=',
    imageForServicesPage: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project4/FullSize/IMG_1874.JPG?tr=',
    imageForContactUsPage: 'https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/AboutUs/AboutUsImage.jpg',
    imageForAboutUsPage: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project14/FullSize/project1Picture10.webp?tr=',
    imageForTestimonyPage: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project14/FullSize/project1Picture7.webp?tr=',
    imageForGalleryPage: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project5/FullSize/IMG_5426.jpeg?tr=',
    imageForFenceContractor: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project6/FullSize/IMG_7143.jpeg?tr=',
    imageForSecurityFence: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project11/FullSize/project11Picture10.webp?tr=',
    imageForPrivacyFence: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project11/FullSize/project11Picture4.webp?tr=',
    imageForAutoGate: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project1/FullSize/project1Picture1.webp?tr=',
    imageForPrivacyFenceInstallation: 'https://ik.imagekit.io/greenviewsolutions/Portfolio/Project3/FullSize/IMG_1575.JPG?tr=',
  };

  const location = useLocation();
  const currentPage = location.pathname;

  const [headerImage, setHeaderImage] = useState(imageUrls.imageForHomePage);
  const [headerText, setHeaderText] = useState({ h1: 'GREENVIEW SOLUTIONS', subtext: 'From Privacy Structures to Quality Fences, We\'ve Got You Covered' });

  const logo = "https://ik.imagekit.io/greenviewsolutions/HomePage/FullSizedWebp/clearGVSLogo_300.webp?tr=w-300,h-300";

  const changeHeaderImage = (newImage, h1Text) => {
    setHeaderImage(imageUrls[newImage]);
    setHeaderText({ h1: h1Text.toUpperCase(), subtext: '' });
  };
  

  return (
    <div>
      <div className="header">
        <img className="headerLogo" rel='preload' src={logo} alt="Greenview Solutions Logo" />
        <Menu changePage={props.changePage} changeHeaderImage={changeHeaderImage} />
      </div>

      <div className="hero-image" style={{     backgroundImage: `url(${headerImage})`, background: `rgba(0, 0, 0, 0.5)`, backgroundBlendMode: "darken" }}>
        <h2>{headerText.h1}</h2>
      </div>
    </div>
  );
};

export default Header;
