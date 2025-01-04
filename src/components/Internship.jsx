import React from "react";
import EmployeMangement from "../assets/images/employee.jpg";
import ArmyImage from "../assets/images/army.jpg";
import EcomereceImage from "../assets/images/ecomerce.jpg";
import TravelImage from "../assets/images/travel.jpg";

const internships = [
  {
    title: "Nepal bank limited",
    description:
      "A web-based application to manage employee records and operations efficiently, developed using React.js.",
    image: EmployeMangement,
    link: "#",
    technologies: ["Receptionist", "Cashier"],
  },
  {
    title: "Nepal Rastiya Bank",
    description:
      "A professional website designed for a military academy, focusing on modern UI and user experience.",
    image: ArmyImage,
    link: "#",
    technologies: ["Bank Teller", "Loan Officer"],
  },
  {
    title: "machhapuchhre bank  Limited",
    description:
      "An e-commerce platform showcasing digital assets with features like product listing and responsive design.",
    image: EcomereceImage,
    link: "#",
    technologies: ["Financial Analyst", "Internal Auditor"],
  },
  {
    title: "Laxmi Bank Limited",
    description:
      "A modern and sleek website designed for a travel agency, highlighting their services and destinations.",
    image: TravelImage,
    link: "#",
    technologies: ["Bank Teller", "Loan Officer"],
  },
];

const Internship = () => {
  return (
    <div id="internship" className="bg-[#121212] text-white py-10 px-5 sm:px-20 md:px-32">
      <h2 className="text-3xl font-bold mb-8 text-center">My internship</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {internships.map((internship, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={internship.image}
              alt={internship.title}
              className="w-full h-52 object-cover rounded-xl p-2 "
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{internship.title}</h3>
              <p className="text-gray-300 mb-3">{internship.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {internship.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-white text-xs font-medium py-1 px-3 rounded-full"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
              <a
                href={internship.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
              >
                View internship
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
