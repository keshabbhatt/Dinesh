import React, { useEffect } from "react";
import { FaBroom, FaClock, FaHandsHelping, FaUsers, FaShieldAlt, FaClipboardList } from "react-icons/fa";
import AOS from 'aos';  // Importing AOS
import 'aos/dist/aos.css'; // Importing AOS styles

// Testimonial Component with Friends' Data
const ServicesSection = () => {
  useEffect(() => {
    // Initialize AOS after the component is mounted
    AOS.init({
      duration: 1000,  // duration of the animation
      once: true, // triggers animation only once when scrolled into view
    });
  }, []);  // Empty dependency array means it runs once when component mounts

  const services = [
    {
      title: "Sanitation & Cleaning",
      description:
        "Proficient in cleaning and sanitation practices, ensuring hygiene standards are met at all times.",
      icon: <FaBroom className="text-blue-400 text-4xl mx-auto" />,
    },
    {
      title: "Time Management",
      description:
        "Strong attention to detail, excellent time management, and multitasking abilities to ensure efficiency.",
      icon: <FaClock className="text-green-400 text-4xl mx-auto" />,
    },
    {
      title: "Customer Service Excellence",
      description:
        "Customer-first approach, resolving complaints effectively while ensuring guest satisfaction and positive experiences.",
      icon: <FaUsers className="text-yellow-400 text-4xl mx-auto" />,
    },
    {
      title: "Teamwork & Adaptability",
      description:
        "Flexibility and adaptability to dynamic environments, excelling in teamwork and collaborative settings.",
      icon: <FaHandsHelping className="text-red-400 text-4xl mx-auto" />,
    },
    {
      title: "Safety & Hygiene Protocols",
      description:
        "Familiarity with safety standards and hygiene protocols to maintain a safe environment for both guests and staff.",
      icon: <FaShieldAlt className="text-purple-400 text-4xl mx-auto" />,
    },
    {
      title: "Guest Complaint Handling",
      description:
        "Proficiency in handling and resolving guest complaints professionally to ensure complete satisfaction and loyalty.",
      icon: <FaClipboardList className="text-orange-400 text-4xl mx-auto" />,
    },
    {
      title: "Working Under Pressure",
      description:
        "Strong ability to work effectively under pressure while maintaining high service standards and calmness in stressful situations.",
      icon: <FaClock className="text-pink-400 text-4xl mx-auto" />,
    },
    {
      title: "Detail-Oriented & Organized",
      description:
        "Meticulous attention to detail and organizational skills, ensuring all tasks are completed efficiently and to the highest standard.",
      icon: <FaClipboardList className="text-teal-400 text-4xl mx-auto" />,
    },
  ];

  return (
    <div id="services" className="bg-black text-gray-100 py-10 px-5 sm:px-20 md:px-32">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills & Competencies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-transform transform hover:scale-105"
            data-aos="fade-up"  // Adding AOS animation for scroll effect
            data-aos-delay={`${index * 200}`}  // Delay each service slightly for staggered effect
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
