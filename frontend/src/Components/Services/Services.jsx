import React from 'react';

const services = [
  {
    title: "Web Development",
    description: "Creating stunning and functional websites tailored to your needs.",
  },
  {
    title: "E-commerce Solutions",
    description: "Building scalable e-commerce platforms to help grow your business.",
  },
  {
    title: "UI/UX Design",
    description: "Designing seamless user interfaces with a focus on intuitive experiences.",
  },
  {
    title: "E-commerce Solutions",
    description: "Building scalable e-commerce platforms to help grow your business.",
  },
  {
    title: "UI/UX Design",
    description: "Designing seamless user interfaces with a focus on intuitive experiences.",
  },
  {
    title: "SEO Optimization",
    description: "Optimizing your website to improve visibility on search engines.",
  },
];

export default function Services() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-black p-8">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-7/10 bg-gradient-to-t from-black to-transparent rounded-lg shadow-lg p-8 backdrop-blur-md bg-white/10 space-y-8">
        <h2 className="text-4xl font-bold text-center text-white animate__animated animate__fadeIn">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/30 p-6 rounded-lg shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300"
            >
              <h3
                className={`text-2xl font-semibold ${
                  index === services.length - 1
                    ? "bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                {service.title}
              </h3>
              <p className="text-white mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
