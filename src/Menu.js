import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './styles/Header.css';
import { Link } from "react-router-dom";

const Menu = ({changeHeaderImage}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (imageUrl, h1Text) => {
    changeHeaderImage(imageUrl, h1Text);
};

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="InfoAndMenu">
      
      <div className="ContactInfo">
        <a href="tel:303-358-8168">
          <h4 className="MenuItem" id="phone">303.358.8168 |  </h4>
        </a>

        <a href="mailto:brandon@greenviewsolutions.net">
          <h4 className="MenuItem" id="email">   brandon@greenviewsolutions.net</h4>
        </a>
      </div>


      
      <div className='socialIconBar'>
        <a href="https://www.facebook.com/GreenViewSolutions/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className='socialIcons' icon={faFacebookF} size='lg' color='white' />
        </a>
        <a href="https://www.linkedin.com/company/greenview-solutions-llc/about/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className='socialIcons' icon={faLinkedin} size='lg' color='white' />
        </a>
        <a href="https://www.instagram.com/greenview_solutions_llc/?hl=en" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className='socialIcons' icon={faInstagram} size='lg' color='white' />
        </a>
      </div>
      
      
      
      <div id="Menu">
      
      <nav className="nav-items">
        <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" color="white" />
        </div>
        <ul className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={() => handleClick('imageForHomePage', 'GREENVIEW SOLUTIONS')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => handleClick('imageForServicesPage', 'Services')}>
              Services
            </Link>
            <ul className="submenu">
              <li>
                <Link
                  to="/services/privacy-fence-installation"
                  onClick={() => handleClick('imageForPrivacyFenceInstallation', 'Privacy Fence Installation')}
                >
                  Privacy Fence Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/fence-contractor"
                  onClick={() => handleClick('imageForFenceContractor', 'Fence Contractor')}
                >
                  Fence Contractor
                </Link>
              </li>
              <li>
                <Link
                  to="/services/automatic-gate-installations"
                  onClick={() => handleClick('imageForAutoGate', 'Automatic Gate Installations')}
                >
                  Automatic Gate Installations
                </Link>
              </li>
              <li>
                <Link
                  to="/services/privacy-fences"
                  onClick={() => handleClick('imageForPrivacyFence', 'Privacy Fences')}
                >
                  Privacy Fences
                </Link>
              </li>
              <li>
                <Link
                  to="/services/security-fences"
                  onClick={() => handleClick('imageForSecurityFence', 'Security Fences')}
                >
                  Security Fences
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact-us" onClick={() => handleClick('imageForContactUsPage', 'Contact Us')}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={() => handleClick('imageForAboutUsPage', 'About Us')}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/testimonials" onClick={() => handleClick('imageForTestimonyPage', 'Testimonials')}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => handleClick('imageForGalleryPage', 'Gallery')}>
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
}

export default Menu;
