import React, { useEffect } from 'react';
import Iqbal from "../assets/images/photo.jpg";
import WahidBux from "../assets/images/laxmi.jpg";
import Aitbar from "../assets/images/sdai.jpg";
import AOS from 'aos';  // Importing AOS
import 'aos/dist/aos.css'; // Importing AOS styles

// Testimonial Component with Friends' Data
const Testimonials = () => {
  useEffect(() => {
    // Initialize AOS after the component is mounted
    AOS.init({
      duration: 1000,  // duration of the animation
      once: true, // triggers animation only once when scrolled into view
    });
  }, []);

  const testimonials = [
    {
      name: "Kunaal Bhatt",
      role: "Friend",
      message: "Dinesh is proficient in cleaning and sanitation practices, with a keen eye for detail and organization. His excellent time management and multitasking abilities allow him to efficiently handle various tasks while maintaining high-quality standards.",
      img: Iqbal,
    },
    {
      name: "Laxmi Bhatt",
      role: "Sister",
      message: "With a customer-first approach, Dinesh excels at handling and resolving guest complaints, ensuring complete satisfaction. He works effectively under pressure and is adaptable to dynamic environments, maintaining professionalism and high service standards.",
      img: WahidBux,
    },
    {
      name: "Sahil Pal",
      role: "Friend",
      message: "Dinesh thrives in fast-paced settings, using his organizational skills to keep everything running smoothly. His ability to work under pressure without compromising on quality ensures that tasks are completed efficiently, even in stressful situations.",
      img: Aitbar,
    },
  ];

  return (
    <section className="bg-[#121212] py-16">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-8">What My Friends Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              data-aos="fade-up"  // Adding AOS animation for scroll effect
              data-aos-delay={`${index * 200}`}  // Delay each testimonial slightly
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-400 mb-4">"{testimonial.message}"</p>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
