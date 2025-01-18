import React, { useEffect } from "react";
import HolidayImage from "../assets/images/holiday.jpg"; // Add correct image path
import MejorLoungeImage from "../assets/images/mejorlounge.jpg"; // Add correct image path
import FlemingImage from "../assets/images/fleming.jpg";
import AishwaryaImage from "../assets/images/aishwarya.jpg";
import AOS from 'aos';  // Importing AOS
import 'aos/dist/aos.css'; // Importing AOS styles

// Testimonial Component with Friends' Data
const Experience = () => {
  useEffect(() => {
    // Initialize AOS after the component is mounted
    AOS.init({
      duration: 1000,  // duration of the animation
      once: true, // triggers animation only once when scrolled into view
    });
  }, []);  // Empty dependency array means it runs once when component mounts

  const Experiences = [
    {
      "title": "Holiday Inn Peterborough-Waterfront",
      "description": "Room attendant responsibilities included ensuring guest comfort through daily bed linen and towel changes, thorough cleaning of rooms and bathrooms, and maintaining cleanliness standards as per brand requirements.",
      "image": HolidayImage,
      "link": "#",
      "technologies": [
        "Room Attendant", 
        "Housekeeping", 
        "Cleaning & Sanitation", 
        "Attention to Detail", 
        "Time Management", 
        "Teamwork", 
        "Guest Satisfaction", 
        "Safety Protocols"
      ]
    },
    {
      "title": "Mejor Lounge",
      "description": "Server duties included providing outstanding dining experiences, ensuring timely and accurate service, maintaining a clean dining area, and assisting guests with menu recommendations.",
      "image": MejorLoungeImage,
      "link": "#",
      "technologies": [
        "Server", 
        "Customer Service", 
        "POS Systems", 
        "Menu Recommendations", 
        "Timely Service", 
        "Organizational Skills", 
        "Communication", 
        "Multitasking"
      ]
    },
    {
      "title": "Fleming College, Sutherland Campus",
      "description": "Currently pursuing a Diploma in Hotel and Restaurant Operations. The program focuses on developing skills in hospitality management, customer service, and operational procedures.",
      "image": FlemingImage, // You can replace this with an actual image for the college
      "link": "#",
      "technologies": [
        "Hotel Management", 
        "Restaurant Operations", 
        "Hospitality Management", 
        "Customer Service Excellence"
      ]
    },
    {
      "title": "Aishwarya Vidhya Niketan",
      "description": "Completed High School with a focus on Hotel Management, gaining foundational knowledge in the hospitality industry.",
      "image": AishwaryaImage, // Replace with an image for your high school
      "link": "#",
      "technologies": [
        "Hotel Management", 
        "Hospitality Education", 
        "Customer Interaction", 
        "Basic Operations"
      ]
    }
  ];

  return (
    <div id="Experience" className="bg-[#121212] text-white py-10 px-5 sm:px-20 md:px-32">
      <h2 className="text-3xl font-bold mb-8 text-center">My Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"  // Adding AOS animation for scroll effect
            data-aos-delay={`${index * 200}`}  // Delay each experience slightly for staggered effect
          >
            <img
              src={experience.image}
              alt={experience.title}
              className="w-full h-52 object-cover rounded-xl p-2"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
              <p className="text-gray-300 mb-3">{experience.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-white text-xs font-medium py-1 px-3 rounded-full"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
              >
                View Experience
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
