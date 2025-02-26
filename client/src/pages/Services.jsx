import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaQuoteLeft, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import carePhoto1 from "../assets/carePhoto1.jpg";
import carePhoto2 from "../assets/carePhoto2.jpg";
import carePhoto3 from "../assets/carePhoto3.jpg";
import carePhoto4 from "../assets/carePhoto4.jpg";
import carePhoto5 from "../assets/carePhoto5.jpg";
import carePhoto6 from "../assets/carePhoto6.jpg";
import carePhoto7 from "../assets/carePhoto7.jpg";
import carePhoto8 from "../assets/carePhoto8.jpg";
import carePhoto9 from "../assets/carePhoto9.jpg";

const services = [
  {
    id: 1,
    image: carePhoto1,
    title: "Live-In Care",
    description: "24/7 care at home, ensuring comfort and safety.",
  },
  {
    id: 2,
    image: carePhoto2,
    title: "Dementia Care",
    description: "Specialized support for individuals with dementia.",
  },
  {
    id: 3,
    image: carePhoto3,
    title: "Respite Care",
    description: "Short-term relief for primary caregivers.",
  },
  {
    id: 4,
    image: carePhoto4,
    title: "Palliative Care",
    description: "Compassionate end-of-life support for families.",
  },
  {
    id: 5,
    image: carePhoto5,
    title: "Companionship Care",
    description: "Social interaction and emotional support.",
  },
  {
    id: 6,
    image: carePhoto6,
    title: "Home Nursing",
    description: "Medical assistance in the comfort of home.",
  },
];

const testimonials = [
  {
    name: "Anna Thompson",
    review:
      "The team provided outstanding care for my father during his recovery.",
  },
  {
    name: "John Richards",
    review: "Compassionate caregivers who truly go above and beyond.",
  },
  {
    name: "Margaret Lewis",
    review: "Professional and kind staff that made a real difference.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h1>

      {/* Featured Services */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <FaQuoteLeft className="text-gray-400 text-3xl mb-2" />
              <p className="text-gray-700 italic">"{testimonial.review}"</p>
              <h4 className="mt-4 font-semibold text-lg">
                - {testimonial.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 bg-blue-600 text-white text-center py-10 rounded-lg">
        <h2 className="text-3xl font-bold">Need Personalized Care?</h2>
        <p className="mt-2">
          Contact us today to discuss a care plan tailored to your needs.
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Services;
