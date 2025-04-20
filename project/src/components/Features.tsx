import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Search, 
  MapPin, 
  Clock, 
  CreditCard, 
  BarChart, 
  Smartphone,
  Camera,
  Building2
} from 'lucide-react';

const features = [
  {
    icon: <Search className="w-10 h-10 text-primary-500" />,
    title: 'Easy Parking Search',
    description: 'Find available parking spots near you with real-time availability updates.'
  },
  {
    icon: <MapPin className="w-10 h-10 text-primary-500" />,
    title: 'Location Navigation',
    description: 'Get guided directions to your parking spot with precise location mapping.'
  },
  {
    icon: <Clock className="w-10 h-10 text-primary-500" />,
    title: 'Time-Saving',
    description: 'Reduce time spent searching for parking and get to your destination faster.'
  },
  {
    icon: <CreditCard className="w-10 h-10 text-primary-500" />,
    title: 'Contactless Payment',
    description: 'Pay for parking digitally without the need for cash or physical tickets.'
  },
  {
    icon: <Building2 className="w-10 h-10 text-primary-500" />,
    title: 'For All Providers',
    description: 'From homeowners with a single spot to malls with large parking lots - everyone can become a parking provider.'
  },
  {
    icon: <Camera className="w-10 h-10 text-primary-500" />,
    title: 'Free Equipment',
    description: 'Get a free parking management system and IP camera to monitor your parking space.'
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary-500" />,
    title: 'Provider Dashboard',
    description: 'Track vehicles and revenue with a comprehensive analytics dashboard.'
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary-500" />,
    title: 'Mobile App',
    description: 'Manage everything on the go with our intuitive mobile application.'
  }
];

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md border border-secondary-100 hover:shadow-lg transition-shadow"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-secondary-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <h2>Smart Features for Better Parking</h2>
          <p className="section-description">
            Our innovative solution offers a range of features to make parking hassle-free
            for users and profitable for providers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;