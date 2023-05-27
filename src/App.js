import React from 'react';
import { BrowserRouter as Router, Route, Switch, Suspense } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Header />
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

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
