import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import carePhoto1 from "../assets/carePhoto1.jpg";
import carePhoto2 from "../assets/carePhoto2.jpg";

const Home = () => {
  return (
    <>
      <HeroSection />

      {/* Features Section */}
      <div className="py-12 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-2">Professional Staff</h3>
            <p>
              Our team is experienced and dedicated to providing exceptional
              care.
            </p>
            <img src={carePhoto1} alt="Pro staff" />
          </motion.div>
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-2">
              State-of-the-Art Facilities
            </h3>
            <p>Modern amenities designed for comfort and safety.</p>
            <img src={carePhoto2} alt="facility" />
          </motion.div>
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-2">Personalized Care</h3>
            <p>Customized plans to meet individual needs and preferences.</p>
            <img src={carePhoto2} alt="care" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
