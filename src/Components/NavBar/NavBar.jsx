import React from 'react';
import mfLogo from '../../assets/mfpng.png';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between mx-[20px] my-[30px]">
      <img src={mfLogo} alt="MF Innovatech Logo" className="w-[200px] h-auto" />
      <ul 
        className="list-none flex gap-[60px] text-[20px] p-[10px] rounded-[23px] bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-30 shadow-lg"
      >
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">About me</li>
        <li className="hover:text-gray-300 cursor-pointer">Services</li>
        <li className="hover:text-gray-300 cursor-pointer">Portfolio</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>
      <div 
        className="p-[20px] py-[10px] rounded-[50px] text-[22px] cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105"
        style={{ background: 'linear-gradient(267deg, #DA7C25 0.36%, #B923E1)' }}
      >
        Connect with me
      </div>
    </div>
  );
};

export default NavBar;
