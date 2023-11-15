import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactUs from './Contact.js';
import HomePage from './Home.js';
import AboutUs from './AboutUs.js';
import Header from './Header.js';
import Footer from './Footer.js';
import PrivacyFenceComponent from './PrivacyFenceInstallation.js';
import FenceContractor from './FenceContractor.js';
import SecurityFences from './SecurityFences.js';
import AutomaticGateInstallation from './AutomaticGateInstallation.js';
import PrivacyFences from './PrivacyFences.js';
import Testimonials from './Testimonials.js';
import Gallery from './Gallery.js';
import Accessibility from './AccessabilityStatement.js';
import Sitemap from './Sitemap.xml';
import FencingContractor from './FencingContractor.js'; // Import the new component

function App() {
  const [headerImage, setHeaderImage] = useState('');
  const [headerText, setHeaderText] = useState({ h1: '', subtext: '' });

  const changeHeaderImage = (newImage, h1Text) => {
    setHeaderImage(newImage);
    setHeaderText({ h1: h1Text.toUpperCase(), subtext: '' });
  };

  return (
    <Router>
      <Header headerImage={headerImage} headerText={headerText} setHeaderImage={setHeaderImage} setHeaderText={setHeaderText} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/services/privacy-fence-installation" component={PrivacyFenceComponent} />
        <Route path="/services/fence-contractor" component={FenceContractor} />
        <Route path="/services/security-fences" component={SecurityFences} />
        <Route path="/services/automatic-gate-installations" component={AutomaticGateInstallation} />
        <Route path="/services/privacy-fences" component={PrivacyFences} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/accessibility" component={Accessibility} />
        <Route path="/sitemap" component={Sitemap} />


\       {/* Dynamic Routes for Fencing Contractor */}
      <Route path="/:location-fencing-contractor" component={FencingContractor} />


      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
