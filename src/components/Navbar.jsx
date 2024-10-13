import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo.png";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsAnimating(true); // Start fade-out animation
      setTimeout(() => {
        setIsMenuOpen(false); // Close the menu after animation
        setIsAnimating(false); // Reset animation state
      }, 600); // Match this duration with fadeOut animation
    } else {
      setIsMenuOpen(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 100); // Delay before showing the navbar elements
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className='relative flex items-center justify-between px-6 py-4 md:px-8 md:py-8 lg:px-36 lg:py-11'>
      <div className={`logo flex items-center justify-center gap-3 ${hasLoaded ? 'animate-fadeIn' : ''}`}>
        <img src={Logo} alt="Oceania Logo" className="mr-2" />
        <a href="/" className={`text-silver text-[32px] font-bold ${hasLoaded ? 'animate-fadeIn' : ''}`}>Oceania</a>
      </div>
      <div>
        <ul className='hidden md:flex items-center gap-4'>
          {['Home', 'Tour', 'Contact'].map((link, index) => (
            <li key={index} className={`text-white text-2xl font-normal cursor-pointer hover:text-blue transition-colors duration-300 nav-link ${hasLoaded ? 'animate-fadeIn' : ''}`} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              {link}
            </li>
          ))}
        </ul>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className={`absolute top-0 right-0 bg-white bg-opacity-5 backdrop-blur-md border border-gray-300 w-1/2 h-svh flex flex-col items-center justify-center gap-16 py-4 transition-all duration-300 ease-in-out opacity-100 z-10 ${isAnimating ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
            {['Home', 'Tour', 'Contact', 'Start a Journey'].map((link, index) => (
              <li key={index} className={`text-white text-2xl font-normal cursor-pointer hover:text-blue transition-colors duration-300 nav-link ${hasLoaded ? 'animate-fadeIn' : ''}`} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <div className={`hidden md:block text-blue text-2xl font-bold start-journey ${hasLoaded ? 'animate-fadeIn' : ''}`}>Start a Journey</div>
        <div className="block md:hidden cursor-pointer relative z-20" onClick={toggleMenu}>
          <RiMenu3Line color='#ffffff' width={40} height={40} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
