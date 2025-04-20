import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Mission from '../components/Mission';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Mission />
      <ContactForm />
    </>
  );
};

export default Home;