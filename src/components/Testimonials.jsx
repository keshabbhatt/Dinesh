import React from 'react';
import Iqbal from "../assets/images/photo.jpg";
import WahidBux from "../assets/images/laxmi.jpg";
import Aitbar from "../assets/images/mommy.jpg";
// Testimonial Component with Friends' Data
const Testimonials = () => {
  const testimonials = [
    {
      name: "kunaal bhatt",
      role: "friend",
      message: "her thinking capacity and working behaviour is increadible. She could also be actively building a network with peers and faculty to prepare for future opportunities in the business field.",
      img: Iqbal
    },
    {
      name: "Laxmi bhatt",
      role: "sister",
      message: "she may be involved in academic activities, group projects, and other extracurricular engagements that allow her to develop professionally.",
      img: WahidBux,
    },
    {
      name: "Basanti Badu ",
      role: "mother",
      message: "Her dedication to education and personal growth at Farwestern University is likely shaping her into a future leader in the business sector.",
      img: Aitbar
    },
  ];

  return (
    <section className="bg-[#121212] py-16">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-8">What My Friends Say </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
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
}

export default Testimonials;
