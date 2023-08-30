import logo from './logo.svg';
import './App.css';
import Section from "./Section.js";
import ScrollingSection from "./ScrollingSection.js";
import Services from "./Services.js";
import GoogleMapsSection from "./GoogleMapsSections.js";


function Home() {
  return (
    <div>
      <Section />
      <ScrollingSection />
      <Services />
      <GoogleMapsSection />
    </div>
  );
}

export default Home;