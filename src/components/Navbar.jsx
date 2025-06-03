import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll to top helper and close menu
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 shadow-2xl border-b border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center space-x-2"
              onClick={handleLinkClick}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-gray-900 font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Risikesan
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="hover:text-yellow-300"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-yellow-300"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="hover:text-yellow-300"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="hover:text-yellow-300"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-900 shadow-lg z-50 max-w-[50vw] w-full transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-gray-300 hover:text-yellow-400 focus:outline-none"
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col p-6 space-y-6 mt-4">
          <Link
            to="/"
            className="hover:text-yellow-300 text-lg"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-300 text-lg"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-yellow-300 text-lg"
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-300 text-lg"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
