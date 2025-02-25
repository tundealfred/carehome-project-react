import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import { FaPlus, FaMinus } from "react-icons/fa";
import carePhoto3 from "../assets/carePhoto3.jpg";
// import faqHeroImage from "../assets/faqHero.jpg"; // Add a relevant hero image

const faqData = [
  {
    question: "What services do care homes provide?",
    answer:
      "Care homes provide personal care, medical assistance, meals, and social activities to ensure residents' well-being.",
  },
  {
    question: "How do I choose the right care home?",
    answer:
      "Consider factors like location, services, staff qualifications, reviews, and visit the home to assess the environment.",
  },
  {
    question: "What is the difference between a nursing home and a care home?",
    answer:
      "A nursing home provides medical care by registered nurses, while a care home offers personal assistance without medical staff.",
  },
  {
    question: "Can I visit my loved one in a care home?",
    answer:
      "Yes, most care homes have visiting hours and policies to ensure residents maintain connections with family and friends.",
  },
  {
    question: "What qualifications do caregivers have?",
    answer:
      "Caregivers typically have certifications in health and social care, first aid training, and specialized dementia care training if required.",
  },
  {
    question: "Are care home fees covered by insurance?",
    answer:
      "Some insurance policies cover care home fees. It's best to check with your provider or explore government assistance options.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${carePhoto3})` }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <motion.div
          className="relative px-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-lg">
            Find answers to common questions about our care home and services.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Your Questions Answered
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaMinus className="text-blue-600" />
                ) : (
                  <FaPlus className="text-blue-600" />
                )}
              </div>
              {activeIndex === index && (
                <motion.p
                  className="mt-3 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQs;
