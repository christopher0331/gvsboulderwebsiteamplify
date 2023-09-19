import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './styles/Header.css';
import { Link } from "react-router-dom";

const Menu = ({ changeHeaderImage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleClick = (imageUrl, h1Text) => {
    changeHeaderImage(imageUrl, h1Text);
  };

  const menuIcon = isMenuOpen ? faTimes : faBars;

  return (
    <div className="InfoAndMenu">
      
      <div className="ContactInfo">
        <a href="tel:303-358-8168"><h4 className="MenuItem" id="phone">303.358.8168 |  </h4></a>
        <a href="mailto:brandon@greenviewsolutions.net"><h4 className="MenuItem" id="email">brandon@greenviewsolutions.net</h4></a>
      </div>
      
      <div className='socialIconBar'>
        {/* You can extract this to a separate functional component if it gets larger */}
        {[
          { link: "https://www.facebook.com/GreenViewSolutions/", icon: faFacebookF },
          { link: "https://www.linkedin.com/company/greenview-solutions-llc/about/", icon: faLinkedin },
          { link: "https://www.instagram.com/greenview_solutions_llc/?hl=en", icon: faInstagram }
        ].map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon className='socialIcons' icon={social.icon} size='lg' color='white' />
          </a>
        ))}
      </div>
        <div id="Menu">
          <nav className="nav-items">
            <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FontAwesomeIcon icon={menuIcon} size="lg" color="white" />
            </div>
              <ul className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={() => handleClick('imageForHomePage', 'GREENVIEW SOLUTIONS')}>Home</Link></li>
                <li onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}>
                  <div  className="services-item">Services <span className="services-item">▼</span></div>
                  <ul className={`submenu ${isSubmenuOpen ? 'open' : ''}`}>
                    <li><Link to="/services/privacy-fence-installation" onClick={() => handleClick('imageForPrivacyFenceInstallation', 'Privacy Fence Installation')}>Privacy Fence Installation</Link></li>
                    <li><Link to="/services/fence-contractor" onClick={() => handleClick('imageForFenceContractor', 'Fence Contractor')}>Fence Contractor</Link></li>
                    <li><Link to="/services/automatic-gate-installations" onClick={() => handleClick('imageForAutoGate', 'Automatic Gate Installations')}>Automatic Gate Installations</Link></li>
                    <li><Link to="/services/privacy-fences" onClick={() => handleClick('imageForPrivacyFence', 'Privacy Fences')}>Privacy Fences</Link></li>
                    <li><Link to="/services/security-fences" onClick={() => handleClick('imageForSecurityFence', 'Security Fences')}>Security Fences</Link></li>
                  </ul>
                </li>
                <li><Link to="/contact-us" onClick={() => handleClick('imageForContactUsPage', 'Contact Us')}>Contact Us</Link></li>
                <li><Link to="/about-us" onClick={() => handleClick('imageForAboutUsPage', 'About Us')}>About Us</Link></li>
                <li><Link to="/testimonials" onClick={() => handleClick('imageForTestimonyPage', 'Testimonials')}>Testimonials</Link></li>
                <li><Link to="/gallery" onClick={() => handleClick('imageForGalleryPage', 'Gallery')}>Gallery</Link></li>
              </ul>
          </nav>
        </div>
      </div>
  );
}  

export default Menu;
