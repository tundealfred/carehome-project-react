import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import carePhoto1 from "../assets/carePhoto1.jpg";
import carePhoto2 from "../assets/carePhoto2.jpg";
import carePhoto7 from "../assets/carePhoto7.jpg";

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
            <p className="py-2">
              Our team is experienced and dedicated to providing exceptional
              care.
            </p>
            <img
              src={carePhoto1}
              alt="Pro staff"
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-2">
              State-of-the-Art Facilities
            </h3>
            <p className="py-2">
              Modern amenities designed for comfort and safety that meets health
              and regulatory standards.
            </p>
            <img
              src={carePhoto7}
              alt="facility"
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-2">Personalized Care</h3>
            <p className="py-2">
              Customized plans to meet individual needs and preferences for our
              members.
            </p>
            <img
              src={carePhoto2}
              alt="care"
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
