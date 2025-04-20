import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParkedCar from '../components/ParkedCar';
import { Smartphone, Car, Users, Clock, Database, MapPin } from 'lucide-react';

const Product: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-r from-secondary-950 to-secondary-800 text-white">
        <div className="container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-white mb-6">
              Our Product
            </h1>
            <p className="text-secondary-100 max-w-3xl mx-auto">
              Zepark is a comprehensive parking solution that connects users looking for parking spots 
              with providers who have available parking spaces to offer.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <motion.div 
            ref={contentRef}
            variants={containerVariants}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="mb-4">Smart Parking Technology</h2>
              <p className="section-description">
                Our intelligent system helps users find available parking spots in real-time
                while providing parking space owners a platform to monetize their assets.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4">Mobile Application</h3>
                <p className="mb-6">
                  Our user-friendly mobile app provides seamless navigation to available parking spots,
                  contactless payment options, and real-time updates on parking availability.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: <MapPin className="text-primary-500" size={20} />, text: "Real-time parking spot availability" },
                    { icon: <Clock className="text-primary-500" size={20} />, text: "Time-saving navigation to the nearest spot" },
                    { icon: <Smartphone className="text-primary-500" size={20} />, text: "Mobile payments and digital receipts" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-1">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Mobile App Interface" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Provider Dashboard</h3>
                <p className="mb-6">
                  Parking providers gain access to a comprehensive dashboard that tracks vehicles,
                  monitors revenue, and provides valuable insights into parking usage patterns.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: <Users className="text-primary-500" size={20} />, text: "Track vehicles using your parking space" },
                    { icon: <Database className="text-primary-500" size={20} />, text: "Monitor revenue and usage analytics" },
                    { icon: <Car className="text-primary-500" size={20} />, text: "Manage multiple parking locations" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-1">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/6393013/pexels-photo-6393013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Provider Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <ParkedCar />

            <motion.div 
              variants={itemVariants} 
              className="text-center mt-16 py-12 px-8 bg-primary-500 rounded-xl text-white max-w-4xl mx-auto"
            >
              <h2 className="text-white mb-6">Launching Soon</h2>
              <p className="text-primary-50 mb-8">
                We're working hard to bring you the future of parking. 
                Sign up to be notified when Zepark launches in your city.
              </p>
              <a 
                href="/contact" 
                className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Updates
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Product;