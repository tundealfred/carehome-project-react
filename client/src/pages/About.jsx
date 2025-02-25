import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaBookOpen,
  FaHandsHelping,
  FaBullseye,
  FaEye,
  FaStar,
} from "react-icons/fa"; // React Icons
import carePhoto1 from "../assets/carePhoto1.jpg";
import carePhoto2 from "../assets/carePhoto2.jpg";
import carePhoto3 from "../assets/carePhoto3.jpg";
import carePhoto4 from "../assets/carePhoto4.jpg";
import carePhoto5 from "../assets/carePhoto5.jpg";
import carePhoto6 from "../assets/carePhoto6.jpg";
import carePhoto7 from "../assets/carePhoto7.jpg";
import carePhoto8 from "../assets/carePhoto8.jpg";
import carePhoto17 from "../assets/carePhoto17.jpg";
import carePhoto18 from "../assets/carePhoto18.jpg";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="relative bg-blue-700 text-white py-12 px-8 flex flex-col md:flex-row items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Who We Are</h1>
          <p className="text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-6">
            Dedicated to providing compassionate care, we ensure every
            individual feels safe, valued, and supported.
          </p>
        </div>
        <div className="md:w-1/2 px-4 mt-8 md:mt-0 flex justify-center">
          <img
            src={carePhoto1}
            alt="About Us"
            className="rounded-lg shadow-lg w-3/4"
          />
        </div>
      </motion.section>

      {/* Company Overview, Brand Story & Social Impact */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Company Overview */}
          <motion.div
            className="bg-white shadow-xl p-8 rounded-2xl flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaBuilding className="text-blue-600 w-12 h-12 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Company Overview</h2>
            <p className="text-gray-600">
              We provide professional home care services, ensuring dignity and
              independence for our clients.
            </p>
          </motion.div>

          {/* Brand Story */}
          <motion.div
            className="bg-white shadow-xl p-8 rounded-2xl flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaBookOpen className="text-blue-600 w-12 h-12 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Brand Story</h2>
            <p className="text-gray-600">
              Founded with a passion for care, our journey started with a vision
              to provide exceptional home care.
            </p>
          </motion.div>

          {/* Social Impact */}
          <motion.div
            className="bg-white shadow-xl p-8 rounded-2xl flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaHandsHelping className="text-blue-600 w-12 h-12 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Social Impact</h2>
            <p className="text-gray-600">
              We actively support communities through volunteer programs and
              charitable initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Our Mission, Vision & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaBullseye className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-gray-600 mt-2">
                To provide exceptional care that enhances the quality of life
                with dignity and respect.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaEye className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-gray-600 mt-2">
                To be the leading provider of personalized home care services,
                ensuring comfort and independence.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaStar className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold">Our Values</h3>
              <p className="text-gray-600 mt-2">
                Compassion, Integrity, Excellence, and Respect drive everything
                we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="py-12 px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[carePhoto17, carePhoto18, carePhoto17, carePhoto18].map(
            (photo, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={photo}
                  alt="Team Member"
                  className="rounded-full w-32 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Team Member {index + 1}</h3>
                <p className="text-gray-600">
                  Passionate and dedicated professionals committed to care
                  excellence.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-8 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[carePhoto5, carePhoto6].map((photo, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-600 italic">
                "Exceptional care and support from a team that truly cares."
              </p>
              <img src={photo} alt="Client" className="rounded-lg mt-4" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        className="relative bg-blue-600 text-white py-12 px-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">
          Interested in our services? Contact us today to learn how we can help.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 py-3 px-6 rounded-lg font-bold hover:bg-yellow-400"
        >
          Contact Us →
        </a>
      </motion.section>
    </>
  );
};

export default About;
