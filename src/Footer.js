import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/fontawesome-free-solid';
import {
  faFacebook,
  faSnapchat,
  faLinkedin,
  faPinterest,
  faYelp,
} from '@fortawesome/fontawesome-free-brands';

const Footer = () => {
  const openingHours = [
    { day: 'Monday', hours: '8AM - 6PM' },
    { day: 'Tuesday', hours: '8AM - 6PM' },
    { day: 'Wednesday', hours: '8AM - 6PM' },
    { day: 'Thursday', hours: '8AM - 6PM' },
    { day: 'Friday', hours: '8AM - 6PM' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' },
  ];


  // New service areas
  const serviceAreas = [
    { name: 'Longmont', slug: 'longmont' },
    { name: 'Loveland', slug: 'loveland' },
    { name: 'Superior', slug: 'superior' },
    { name: 'Erie', slug: 'erie' },
    { name: 'Broomfield', slug: 'broomfield' },
    { name: 'Thornton', slug: 'thornton' },
    { name: 'Westminster', slug: 'westminster' },
    { name: 'Arvada', slug: 'arvada' },
    { name: 'Lafayette', slug: 'lafayette' },
    { name: 'Louisville', slug: 'louisville' },   
    { name: 'Golden', slug: 'golden' },
    { name: 'Dacono', slug: 'dacono' },
    { name: 'Frederick', slug: 'frederick' },
    { name: 'Firestone', slug: 'firestone' },

  ];


  return (
    <div className="footer-outter-container">
      <div className="links-container">
        <a className="link-item" href="/services/automatic-gate-installations">
          AUTOMATIC GATE INSTALLATIONS
        </a>
        <a className="link-item" href="/services/privacy-fences">
          PRIVACY FENCES
        </a>
        <a className="link-item" href="/services/security-fences">
          SECURITY FENCES
        </a>
        <a className="link-item" href="/services/privacy-fence-installation">
          PRIVACY FENCE INSTALLATION
        </a>
        <a className="link-item" href="/services/fence-contractor">
          FENCE CONTRACTOR
        </a>
      </div>

      {/* footer */}

      <footer>
        
        <div className="footer-left">
          <h3>GreenView Solutions</h3>
          <h5>Boulder, CO</h5>
          <div className="opening-hours">
            {openingHours.map((item) => (
              <p key={item.day}>
                <span>{item.day}</span>
                {item.hours}
              </p>
            ))}
          </div>
        </div>
        <div className="footer-middle">
          <div className="phone-number">
            <FontAwesomeIcon className="icon" icon={faPhone} />
            <a href="tel:303-358-8168"><h4 className="MenuItem" id="phone">303.358.8168 |  </h4></a>
          </div>
          <div className="social-icons">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm-3.444 14.966c-.513 1.75-1.758 3.603-4.587 3.603V16.33c1.445 0 2.399-.812 2.81-2.152h.047C6.522 14.178 6 12.72 6 11.2V7.865c0-2.603 1.76-4.344 4.416-4.344h.054c1.64 0 3.02.853 3.567 2.15h.052c.493-1.297 1.9-2.15 3.533-2.15h.05C18.24 3.521 20 5.263 20 7.865V11.2c0 1.52-.52 2.977-1.953 2.977h-.027c.477 1.343 1.43 2.135 2.882 2.135h.043C18.662 17.062 20 15.72 20 13.1v-.78c0-2.14-1.432-4.67-4.645-4.67h-2.318V7.734h2.328c2.15 0 2.49 1.534 2.49 3.366v.798c0 1.827-.33 3.37-2.49 3.37h-2.327v.95h2.326c2.203 0 4.645 1.53 4.645 4.67v.747c0 2.62-1.338 4.02-3.422 4.02h-.043C15.03 20.018 14 19.177 14 18.144v-3.16h-1.583V17.44z"/>
            </svg>
            <a href="https://www.facebook.com/GreenViewSolutions/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </a>
            {/* <FontAwesomeIcon icon={faGoogleBusiness} /> */}
            <a href="https://www.instagram.com/greenview_solutions_llc/?hl=en" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="icon" icon={faSnapchat} />
            </a>
            <a href="https://www.linkedin.com/in/brandon-king-4a848276" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
            <a href="https://www.pinterest.com/greenviewsolutions" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="icon" icon={faPinterest} />
            </a>
            <a href="https://www.yelp.com/biz/greenview-solutions-arvada-2" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="icon" icon={faYelp} />
            </a>
          </div>

          {/* Service Areas Section */}
          <div className="service-areas">
            <h4>Service Areas:</h4>
            <ul className="service-areas-list">
              {serviceAreas.map(area => (
                <li key={area.slug} className="service-area-item">
                  <a href={`/${area.slug}-fencing-contractor`}>{area.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <p className="footer-bottom">
            &copy; 2023 GreenView Solutions. All Rights Reserved. <a href="https://boulderfencingcontractor.com/sitemap.xml">Sitemap</a>. <a href="https://boulderfencingcontractor.com/accessibility">Accessibility Statement</a>
          </p>
        </div>
        <div className="footer-right">
          <p>Trending Searches:</p>
          <p>
            Automatic Gate Installation, Electric Gate Installation, Privacy Fence Installation, Chain Link Fences,
            Denver Fence Companies, Security Fences, Vinyl Fencing, Aluminum Fencing, Residential Fence Installation,
            Wood Fence Installation, Fencing Contractor, Privacy Fences
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
