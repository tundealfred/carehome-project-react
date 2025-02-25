import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here (e.g., send to an API)
  };

  return (
    <section className="relative">
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(../assets/carePhoto1.jpg)` }}
      ></div>
      <div className="absolute inset-0 bg-gray-200 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-16 text-gray-700">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>

        <p className="text-center text-lg mb-12">
          Have questions? Need assistance? We’re here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <motion.div
            className="bg-white text-gray-900 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                <p>L1, Liverpool, Merseyside, North West, United Kingdom</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-600 text-2xl" />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <p>info@carehome.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>

        {/* Google Map */}
        <motion.div
          className="mt-12 overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <iframe
            title="Google Map"
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9576.886663247366!2d-2.9904890771621058!3d53.40167820003221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b20d78ac4a425%3A0x8e85fa7585ead220!2sLiverpool%20L1!5e1!3m2!1sen!2suk!4v1740482107362!5m2!1sen!2suk"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
