import React from "react";
import { motion } from "framer-motion";
import carePhoto3 from "../assets/carePhoto3.jpg";
import carePhoto4 from "../assets/carePhoto4.jpg";
import carePhoto5 from "../assets/carePhoto5.jpg";
import carePhoto6 from "../assets/carePhoto6.jpg";

const HeroSection = () => {
  return (
    <section>
      <motion.div
        className="relative bg-blue-700 text-white py-20 px-8 flex flex-col md:flex-row items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bringing Comfort and Care to Every Moment
          </h1>
          <p className="text-lg text-justify md:text-xl max-w-lg mx-auto md:mx-0 mb-6">
            At our care home, we create a warm and supportive community where
            every resident feels valued, safe, and connected. With compassionate
            care and enriching activities, we ensure a life filled with dignity,
            joy, and companionship.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="/get-started"
              className="bg-white text-blue-700 py-2 px-6 rounded-lg font-bold hover:bg-gray-200"
            >
              Get started →
            </a>
          </div>
        </div>
        <div className="md:w-1/2 relative px-4 mt-8 md:mt-0 flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            {[carePhoto3, carePhoto4, carePhoto5, carePhoto6].map(
              (photo, index) => (
                <motion.img
                  key={index}
                  src={photo}
                  alt={`Tile ${index + 1}`}
                  className="w-56 h-32 md:w-72 md:h-48 rounded-lg shadow-lg object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
