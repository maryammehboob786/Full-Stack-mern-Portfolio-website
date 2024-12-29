import React, { useState } from 'react';
import axios from 'axios';  // Import axios to make HTTP requests

const AnimatedTechStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [appointment, setAppointment] = useState({
    userName: '',
    phoneNumber: '',
    appointmentTime: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const technologies = [
    {
      name: 'Express',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      name: 'Blender',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
    },
    {
      name: 'Flutter',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    },
  ];

  // Handle form input change
  const handleInputChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  // Submit appointment form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/appointments', appointment);  // Replace with your backend URL if different
      setResponseMessage('Appointment successfully booked!');
      console.log(response.data); // Optional: Log response to check for success
    } catch (error) {
      setResponseMessage('Error creating appointment.');
      console.error(error);
    }
  };

  const TechCard = ({ tech, index }) => (
    <div
      className="flex flex-col items-center justify-center min-w-[120px] relative mx-6 animate-float"
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className={`absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 
        rounded-xl blur-lg transition-opacity duration-300
        ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
      ></div>
      
      <div className={`relative z-10 p-6 rounded-xl backdrop-blur-md
        border border-white/10 transition-all duration-500 animate-pulse
        ${hoveredIndex === index ? 'bg-white/30 scale-110 border-white/30' : 'bg-white/10'}`}
      >
        <div className="relative">
          <img
            src={tech.logo}
            alt={`${tech.name} logo`}
            className={`w-16 h-16 object-contain transition-all duration-500 animate-spin-slow
              ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
          />
          <div className={`absolute inset-0 bg-white/20 rounded-full blur-md transition-opacity duration-300
            ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
          ></div>
        </div>
        
        <span className={`block text-center mt-4 font-medium transition-all duration-300
          ${hoveredIndex === index ? 'text-white scale-105' : 'text-white/70'}`}
        >
          {tech.name}
        </span>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-black relative overflow-hidden pt-32 pb-20 ">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-132px * ${technologies.length}));
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .marquee-container {
          display: flex;
          animation: scroll 20s linear infinite;
          width: fit-content;
        }
        .marquee-track {
          display: flex;
          flex-shrink: 0;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto">
        <div className="overflow-hidden relative">
          <div className="marquee-container mt-[20px]">
            <div className="marquee-track">
              {[...Array(4)].map((_, groupIndex) => (
                technologies.map((tech, index) => (
                  <TechCard 
                    key={`group-${groupIndex}-${index}`} 
                    tech={tech} 
                    index={index} 
                  />
                ))
              ))}
            </div>
          </div>
        </div>

       

        {/* Enhanced gradient overlays */}
        <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black via-black/90 to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default AnimatedTechStack;
