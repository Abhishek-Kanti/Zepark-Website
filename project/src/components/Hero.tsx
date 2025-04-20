import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && carRef.current) {
          carRef.current.classList.add('animate');
        }
      });
    }, observerOptions);

    if (carRef.current) {
      observer.observe(carRef.current);
    }

    return () => {
      if (carRef.current) {
        observer.unobserve(carRef.current);
      }
    };
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-secondary-950 to-secondary-800 text-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-primary-400 mb-4">A Subsidiary of the Neuronex</p>
            <h1 className="text-white mb-6">
              Smart Parking Solutions for a Greener Future
            </h1>
            <p className="text-secondary-100 mb-8 max-w-xl">
              People spend 17 hours a year looking for parking spaces. We're here to change that. 
              Zepark helps users find parking spots easily while enabling parking providers to 
              monetize their spaces efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/product" className="btn-primary">
                Learn More
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Updates
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <img 
              src="https://i.ibb.co/bgLsYX7C/Zepark-logo-mqeen2.png" 
              alt="Zepark Logo" 
              className="w-full max-w-xl ml-auto translate-x-9 -translate-y-8 scale-110 md:scale-110 transition-transform duration-300"
            />

          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;