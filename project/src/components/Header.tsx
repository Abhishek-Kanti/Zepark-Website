import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ZeparkLogo from './ZeparkLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <ZeparkLogo className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium text-base transition-colors ${
                isActive
                  ? 'text-primary-500'
                  : isScrolled
                  ? 'text-secondary-900 hover:text-primary-500'
                  : 'text-white hover:text-primary-300'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `font-medium text-base transition-colors ${
                isActive
                  ? 'text-primary-500'
                  : isScrolled
                  ? 'text-secondary-900 hover:text-primary-500'
                  : 'text-white hover:text-primary-300'
              }`
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `font-medium text-base transition-colors ${
                isActive
                  ? 'text-primary-500'
                  : isScrolled
                  ? 'text-secondary-900 hover:text-primary-500'
                  : 'text-white hover:text-primary-300'
              }`
            }
          >
            Team
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium text-base transition-colors ${
                isActive
                  ? 'text-primary-500'
                  : isScrolled
                  ? 'text-secondary-900 hover:text-primary-500'
                  : 'text-white hover:text-primary-300'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-secondary-900 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <nav className="flex flex-col py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-3 px-6 font-medium text-base ${
                  isActive ? 'text-primary-500' : 'text-secondary-900'
                }`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                `py-3 px-6 font-medium text-base ${
                  isActive ? 'text-primary-500' : 'text-secondary-900'
                }`
              }
              onClick={closeMenu}
            >
              Product
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `py-3 px-6 font-medium text-base ${
                  isActive ? 'text-primary-500' : 'text-secondary-900'
                }`
              }
              onClick={closeMenu}
            >
              Team
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-3 px-6 font-medium text-base ${
                  isActive ? 'text-primary-500' : 'text-secondary-900'
                }`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;