import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Abhishek Kanti',
    role: 'AI & Embedded Engineer',
    image: 'https://i.ibb.co/xthgVK8L/Abhishek-img.jpg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Abhishek specializes in AI algorithms and embedded systems, focusing on optimizing the parking space detection system.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/abhishek-kanti-a32a81220/',
      github: 'https://github.com/Abhishek-Kanti',
      email: 'kantiabhishek1@gmail.com'
    }
  },
  {
    name: 'Aman Kumar',
    role: 'Market Researcher & Finance',
    image: 'https://i.ibb.co/TxYpRKjn/Aman.jpg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Aman handles market research and financial planning, ensuring the business model remains sustainable and scalable.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/aman-kumar-81095321a',
      email: 'ak1327755@gmail.com'
    }
  },
  {
    name: 'Nilanjan Debnath',
    role: 'AI & Backend Engineer',
    image: 'https://i.ibb.co/C55VCSch/Nil.png?auto=compress&cs=tinysrgb&w=600',
    bio: 'Nilanjan focuses on developing robust AI models for parking prediction and optimization algorithms.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/nilanjan-debnath',
      github: 'https://github.com/nilanjan-debnath',
      email: 'nilanjand172@gmail.com'
    }
  },
  {
    name: 'Subam Chatterjee',
    role: 'Data Engineer',
    image: 'https://i.ibb.co/LDZnY0d4/Subam.jpg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Subam specializes in data engineering, creating systems to process and analyze parking data at scale.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/subam-chatterjee-958672236',
      github: 'https://github.com/subhamchatterjee21',
      email: 'chatterjeesubham03@gmail.com'
    }
  },
  {
    name: 'Avijit Hira',
    role: 'Web Developer',
    image: 'https://i.ibb.co/LDMNk75J/Hira.jpg',
    bio: 'Avijit is responsible for creating the web interfaces and ensuring seamless user experiences across platforms.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/avijit-hira-819a99258',
      github: 'https://github.com/Avijit200318',
      email: 'avijithira14@gmail.com'
    }
  },
  {
    name: 'Saurav Tewari',
    role: 'Web Developer',
    image: 'https://i.ibb.co/rKQkSZ42/Sourav.jpg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Saurav is responsible for creating the web interfaces and ensuring seamless user experiences across platforms.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/sourav-tewary-82a19b221/',
      github: 'https://github.com/Sourav1232',
      email: 'stewary376@gmail.com'
    }
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
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
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="aspect-w-1 aspect-h-1 w-full">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-72 object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-primary-600 font-medium mb-3">{member.role}</p>
        <p className="text-secondary-600 mb-4">{member.bio}</p>
        <div className="flex gap-3">
          {member.socials.linkedin && (
            <a 
              href={member.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-500 hover:text-primary-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
          {member.socials.github && (
            <a 
              href={member.socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-500 hover:text-primary-500 transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {member.socials.email && (
            <a 
              href={`mailto:${member.socials.email}`}
              className="text-secondary-500 hover:text-primary-500 transition-colors"
            >
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection: React.FC = () => {
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
          <h2>Meet Our Team</h2>
          <p className="section-description">
            Our talented team is dedicated to revolutionizing the urban parking experience
            with innovative technology and data-driven solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;