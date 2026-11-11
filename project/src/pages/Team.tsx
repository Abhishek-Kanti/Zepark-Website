import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TeamSection from '../components/Team';

const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-r from-secondary-950 to-secondary-800 text-white">
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-secondary-100 max-w-3xl mx-auto">
              Our talented team is dedicated to revolutionizing the urban parking experience
              with innovative technology and data-driven solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <TeamSection />
    </>
  );
};

export default Team;