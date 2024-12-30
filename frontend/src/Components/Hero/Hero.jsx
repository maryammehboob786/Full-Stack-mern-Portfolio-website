import React from 'react'
import maryam from '../../assets/maryam.jpg';


const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-16 md:pt-24 lg:pt-32">
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        <img 
          src={maryam}
          alt="Maryam's Image" 
          className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-lg" 
        />

        <h1 className="mt-8 md:mt-12 text-center">
          <span className="block text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#DF8908] to-[#B923E1] bg-clip-text text-transparent">
            I'm Maryam Mehboob
          </span>
          <span className="block mt-4 text-2xl md:text-3xl lg:text-4xl font-medium">
            freelance entrepreneur and business growth expert
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-center max-w-2xl leading-relaxed text-gray-200 font-light">
          Maryam Mehboob is a talented WordPress web developer with over three years of experience in building custom websites and digital solutions.
        </p>

        <div className="flex flex-col gap-4 mt-10 w-full sm:w-auto sm:flex-row sm:gap-6">
          <button className="w-full sm:w-auto px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#DA7C25] to-[#B923E1] shadow-lg">
            Connect with me
          </button>
          <button className="w-full sm:w-auto px-10 py-4 rounded-full text-lg font-medium text-white border-2 border-white transition-all duration-300 hover:scale-105 shadow-lg">
            My Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;