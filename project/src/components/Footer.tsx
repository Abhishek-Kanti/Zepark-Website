import React from 'react';
import { Link } from 'react-router-dom';
import ZeparkLogo from './ZeparkLogo';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <ZeparkLogo className="h-10 w-auto mb-4" />
            <p className="text-secondary-300 mb-4">
              A subsidiary of the Neuronex, revolutionizing urban parking to create efficient, sustainable cities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/zepark/posts/?feedView=all" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-secondary-300">
              <p className="mb-2">Kolkata, West Bengal</p>
              <p className="mb-2">India</p>
              <p className="mb-2">business@theneuronex.com</p>
              <p>+91 1234567890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-secondary-700 pt-8 mt-8 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} Zepark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;