import React from 'react';

const AnimatedTechStack = () => {
  const technologies = [
    {
      name: 'MongoDB',
      icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.8.0/mongodb.svg'
    },
    {
      name: 'Express',
      icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.8.0/express.svg'
    },
    {
      name: 'React',
      icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.8.0/react.svg'
    },
    {
      name: 'Node.js',
      icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.8.0/nodejs.svg'
    },
    {
      name: 'WordPress',
      icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.8.0/wordpress.svg'
    },
    {
      name: 'Shopify',
      icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.8.0/shopify.svg'
    },
    {
      name: 'Blender',
      icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.8.0/blender.svg'
    }
  ];

  // Duplicate the array four times to ensure smooth infinite scroll
  const duplicatedTech = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <div className="w-full bg-black relative overflow-hidden py-16">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 backdrop-blur-sm"></div>

      {/* Main container */}
      <div className="relative max-w-full">
        <div className="relative w-full overflow-hidden flex items-center">
          {/* Single row infinite scroll */}
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedTech.map((tech, index) => (
              <div
                key={`tech-${index}`}
                className="flex flex-col items-center justify-center mx-8 min-w-[120px]
                          bg-white/5 backdrop-blur-md rounded-xl p-6
                          transform hover:scale-110 transition-all duration-300
                          border border-white/10 hover:border-white/20
                          group"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 mb-3 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient fade effect on edges */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
    </div>
  );
};

// Add these styles to your global CSS
const styles = `
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
`;

export default AnimatedTechStack;