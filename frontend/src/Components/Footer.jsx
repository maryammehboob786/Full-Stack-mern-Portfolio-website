import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-8 mt-auto">
      <hr className="border-gray-800 mb-8" />
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social Icons - First Row */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-gray-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/maryammehboobalam/" className="text-white hover:text-gray-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>

          {/* Email Input with Glassmorphism */}
          <div className="w-full md:w-auto">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full md:w-72 px-4 py-2 bg-white/10 backdrop-blur-md 
                         border border-white/20 rounded-lg
                         text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-white/30
                         transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2
                               text-white hover:text-gray-300 transition-colors duration-300">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Maryam Mehboob. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;