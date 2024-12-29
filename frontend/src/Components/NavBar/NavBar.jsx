import React, { useState, useEffect } from 'react';
import mfLogo from '../../assets/23.png';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false); // Track if sticky state is active
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Update isSticky on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // If scrolling goes beyond 50px
        setIsSticky(true); // Set sticky state to true
      } else {
        setIsSticky(false); // Reset to non-sticky when on top of the page
      }
    };

    window.addEventListener('scroll', handleScroll); // Attach scroll event

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`w-full ${isSticky ? 'fixed top-0 left-0 z-50' : 'relative'} transition-all duration-300`}
    >
      <div
        className={`flex items-center justify-between mx-4 ${isSticky ? 'mt-[30px]' : 'mt-[100px]'} my-6 
                    ${isSticky ? 'bg-opacity-10 backdrop-blur-lg rounded-[20px] py-4 px-8' : ''}
                    ${isSticky ? 'bg-white bg-opacity-10' : ''} 
                    ${isSticky ? 'translate-y-0' : '-translate-y-20'} transition-transform duration-500 ease-out`}
      >
        {/* Logo */}
        <img src={mfLogo} alt="MF Innovatech Logo" className="w-[200px] h-auto" />

        {/* Desktop Menu */}
        <ul className={`list-none flex gap-[40px] text-[20px] p-[10px] rounded-[23px] border border-white border-opacity-30 shadow-lg 
                        ${isSticky ? 'text-white' : 'text-white'}`}>
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About me</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Portfolio</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* Desktop button */}
        <div className={`hidden md:block p-[20px] py-[10px] rounded-[50px] text-[22px] cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105
                        ${isSticky ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white' : 'bg-gradient-to-r from-orange-500 to-purple-600'}`}>
          Connect with me
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden text-4xl text-white" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white bg-opacity-5 backdrop-blur-md p-4 rounded-lg shadow-lg absolute top-0 left-0 w-full`}>
        <ul className="list-none text-center text-white text-xl">
          <li className="py-2 hover:text-gray-300 cursor-pointer">Home</li>
          <li className="py-2 hover:text-gray-300 cursor-pointer">About me</li>
          <li className="py-2 hover:text-gray-300 cursor-pointer">Services</li>
          <li className="py-2 hover:text-gray-300 cursor-pointer">Portfolio</li>
          <li className="py-2 hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
