import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import carePhoto1 from "../assets/carePhoto1.jpg";
import carePhoto2 from "../assets/carePhoto2.jpg";
import carePhoto7 from "../assets/carePhoto7.jpg";
import carePhoto8 from "../assets/carePhoto8.jpg";

const services = [
  {
    id: 1,
    title: "Care Packages",
    description:
      "Individually designed care packages allowing loved ones to retain independence.",
  },
  {
    id: 2,
    title: "Live-In Care",
    description:
      "24/7 in-home care, ensuring comfort and familiarity instead of moving to a care home.",
  },
  {
    id: 3,
    title: "Home Care",
    description:
      "Hourly care tailored to your loved one's needs in the comfort of their home.",
  },
  {
    id: 4,
    title: "Night Care",
    description:
      "Overnight care providing safety and assistance while families rest.",
  },
  {
    id: 5,
    title: "Home from Hospital",
    description:
      "Short-term care to help regain independence after surgery or an accident.",
  },
  {
    id: 6,
    title: "End-Of-Life Care",
    description:
      "Compassionate care to support families through difficult times.",
  },
  {
    id: 7,
    title: "Dementia Care",
    description:
      "Specialized care for individuals living with dementia in familiar surroundings.",
  },
];

const Home = () => {
  return (
    <>
      <HeroSection />

      {/* Features Section */}
      <div className="py-12 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-2">Professional Staff</h3>
            <p className="py-2">
              Our team is experienced and dedicated to providing exceptional
              care. Providing peace of mind for friends and family.
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
            <h3 className="text-xl font-bold mb-2">Personalised Care</h3>
            <p className="py-2">
              Customised plans and supervision to meet individual needs and
              preferences for our members.
            </p>
            <img
              src={carePhoto2}
              alt="care"
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-2">Social Opportunities</h3>
            <p className="py-2">
              Care homes can offer opportunities to socialise with others, such
              as in community areas, gardens, libraries, and other facilities.
            </p>
            <img
              src={carePhoto8}
              alt="care"
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/*Services*/}
      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Services
        </h2>
        <div className="relative flex overflow-x-scroll space-x-6 pb-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden w-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/services"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            View All Services
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
