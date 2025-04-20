import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParkedCar from './ParkedCar';
import { Car, Building, TrendingDown, Leaf } from 'lucide-react';

const Mission: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const benefits = [
    {
      icon: <Car size={32} className="text-primary-500" />,
      title: "Reduced Congestion",
      description: "Less time spent looking for parking means fewer cars circling and contributing to traffic congestion."
    },
    {
      icon: <Leaf size={32} className="text-primary-500" />,
      title: "Lower Emissions",
      description: "Efficient parking reduces fuel consumption and vehicle emissions, contributing to cleaner air."
    },
    {
      icon: <Building size={32} className="text-primary-500" />,
      title: "Optimized Space Usage",
      description: "Unlocking private parking spaces increases the efficient use of existing infrastructure."
    },
    {
      icon: <TrendingDown size={32} className="text-primary-500" />,
      title: "Data-Driven Decisions",
      description: "Collected data helps cities make informed decisions about urban planning and infrastructure."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Our Mission
          </motion.h2>
          <motion.p variants={itemVariants} className="section-description mb-12">
            We're revolutionizing urban parking to reduce traffic congestion and pollution
            by efficiently utilizing existing parking spaces.
          </motion.p>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto bg-gradient-to-r from-secondary-900 to-secondary-800 text-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-primary-400 text-2xl font-bold mb-6">Environmental Impact</h3>
            <div className="space-y-4 text-left">
              <p className="text-secondary-100">
                Parking search traffic accounts for one-third of inner-city traffic, creating 1.3kg of CO2 emissions per search.
              </p>
              <p className="text-secondary-100">
                By facilitating efficient parking solutions and utilizing idle spaces, Zepark could reduce inner-city parking traffic by up to 60% and prevent the emission of approximately 14,000 metric tons of CO2 annually per urban area.
              </p>
              <p className="text-secondary-100">
                This significant environmental impact is equivalent to taking over 3,000 passenger vehicles off the road for an entire year.
              </p>
            </div>
          </motion.div>

          <ParkedCar />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 text-left p-6 border border-secondary-100 rounded-lg"
              >
                <div className="mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-secondary-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;