import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import TestimonialSection from './Components/Testimonial/TestimonialSection';
import Footer from './Components/Footer/';
import TeckStack from './Components/AnimatedTechStack/'
import SpeakerIntroSection from './Components/WhoisMaryam/SpeakerIntroSection'
import CustomCursor from "./Components/CustomCursor"; // Path to your component

const App = () => {
  return (
    <div className="font-sans text-white bg-black">
      <CustomCursor />
      {/* Navigation Bar */}
      <NavBar />
      
      {/* Hero Section */}
      <Hero />
      <TeckStack/>
      <SpeakerIntroSection/>
      

      {/* About Section */}
      <About />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Footer */}
      <Footer />
      

    </div>
  );
};

export default App;