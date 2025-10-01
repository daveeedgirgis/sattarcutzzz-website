'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
      >
        <div className="space-y-1.5">
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-black border-l border-gray-800 transform transition-transform duration-300 z-50 md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="text-xl font-bold">Menu</div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
              aria-label="Close menu"
            >
              <div className="w-6 h-6 relative">
                <div className="absolute top-3 w-6 h-0.5 bg-current rotate-45"></div>
                <div className="absolute top-3 w-6 h-0.5 bg-current -rotate-45"></div>
              </div>
            </button>
          </div>
          
          <nav className="space-y-6">
            <a 
              href="#services" 
              className="block text-lg text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#reviews" 
              className="block text-lg text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className="block text-lg text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="pt-6 border-t border-gray-800">
              <a 
                href="https://sattarcutzzz.setmore.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white text-black px-6 py-3 rounded-md font-semibold text-center hover:bg-gray-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </div>
            <div className="space-y-4">
              <a 
                href="tel:(289) 938-6660"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                📞 (289) 938-6660
              </a>
              <a 
                href="https://www.instagram.com/sattarcutzzz" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                📱 @sattarcutzzz
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}