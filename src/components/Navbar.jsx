"use client";

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className='bg-white fixed top-0 left-0 right-0 w-full z-50 border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 h-16 flex items-center justify-between shadow-sm'>
        {/* Logo/Nom */}
        <div className="flex items-center">
          <h1 className='font-bold text-gray-900 text-xl sm:text-2xl cursor-pointer hover:text-blue-600 transition duration-300'>
            Mariama
          </h1>
        </div>
        
        {/* Menu Desktop */}
        <ul className='hidden sm:flex gap-4 md:gap-6 lg:gap-8 list-none text-base md:text-lg font-medium'>
          <li>
            <a href="#apropos" className='px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300'>
              À propos
            </a>
          </li>
          <li>
            <a href="#experiences" className='px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300'>
              Expériences
            </a>
          </li>
          <li>
            <a href="#projets" className='px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300'>
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className='px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300'>
              Contact
            </a>
          </li>
        </ul>
        
        {/* Menu Mobile (hamburger) */}
        <div className="sm:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Mobile Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden pt-16">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20" 
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div className="relative bg-white shadow-lg animate-slideDown">
            <div className="flex flex-col py-4">
              <a 
                href="#apropos" 
                onClick={closeMenu}
                className="px-6 py-4 text-lg font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition border-b border-gray-100"
              >
                À propos
              </a>
              <a 
                href="#experiences" 
                onClick={closeMenu}
                className="px-6 py-4 text-lg font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition border-b border-gray-100"
              >
                Expériences
              </a>
              <a 
                href="#projets" 
                onClick={closeMenu}
                className="px-6 py-4 text-lg font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition border-b border-gray-100"
              >
                Projets
              </a>
              <a 
                href="#contact" 
                onClick={closeMenu}
                className="px-6 py-4 text-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition mx-6 mt-4 rounded-lg text-center"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Ajoutez ce style dans votre fichier global.css ou dans un style tag */}
      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Navbar;