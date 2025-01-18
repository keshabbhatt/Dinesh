import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon
import HeaderSection from './components/HeaderSection';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div>
      <HeaderSection />
      <Experience /> 
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* WhatsApp Icon */}
      <a 
        href="https://wa.me/9805771094" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 sm:h-20  sm:w-20 flex flex-col justify-center items-center"
      >
        <FaWhatsapp size={40} />
      </a>
    </div>
  );
};

export default App;
