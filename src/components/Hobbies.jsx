import React from "react";
import { FaBook, FaHamburger, FaGlobe, FaMusic } from "react-icons/fa";

const services = [
  {
    title: "Reading Books",
    description:
      "Exploring a wide range of books across genres to expand knowledge and foster creativity.",
    icon: <FaBook className="text-blue-400 text-4xl mx-auto" />,
  },
  {
    title: "Food",
    description:
      "Enjoying and discovering different cuisines, with a focus on flavors, presentation, and cultural significance.",
    icon: <FaHamburger className="text-green-400 text-4xl mx-auto" />,
  },
  {
    title: "Travel",
    description:
      "Embarking on journeys to new destinations, experiencing different cultures, and gaining new perspectives.",
    icon: <FaGlobe className="text-pink-400 text-4xl mx-auto" />,
  },
  {
    title: "Music",
    description:
      "Listening to and exploring various music genres, while appreciating rhythm, melody, and the emotional connection it brings.",
    icon: <FaMusic className="text-yellow-400 text-4xl mx-auto" />,
  },
];

const ServicesSection = () => {
  return (
    <div id="services" className="bg-black text-gray-100 py-10 px-5 sm:px-20 md:px-32">
      <h2 className="text-3xl font-bold mb-8 text-center">My Hobbies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-100">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
