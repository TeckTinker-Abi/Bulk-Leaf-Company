import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import About from '../components/About';
import Products from '../components/Products';
import Process from '../components/Process';
import WhyUs from '../components/WhyUs';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trust />
      <About />
      <Products />
      <Process />
      <WhyUs />
      <CTA />
      <Contact />
      <Footer />
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917904417586"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-circle"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      </a>
    </main>
  );
};

export default Home;
