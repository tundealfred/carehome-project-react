import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import carePhoto1 from "../assets/carePhoto1.jpg";
import carePhoto2 from "../assets/carePhoto2.jpg";
import carePhoto7 from "../assets/carePhoto7.jpg";
import carePhoto8 from "../assets/carePhoto8.jpg";
import carePhoto9 from "../assets/carePhoto9.jpg";
import carePhoto10 from "../assets/carePhoto10.jpg";
import carePhoto11 from "../assets/carePhoto11.jpg";
import carePhoto12 from "../assets/carePhoto12.jpg";
import carePhoto13 from "../assets/carePhoto13.jpg";
import carePhoto14 from "../assets/carePhoto14.jpg";
import carePhoto15 from "../assets/carePhoto15.jpg";
import carePhoto16 from "../assets/carePhoto16.jpg";

const services = [
  {
    id: 1,
    image: carePhoto9,
    title: "Care Packages",
    description:
      "Individually designed care packages allowing loved ones to retain independence.",
  },
  {
    id: 2,
    image: carePhoto14,
    title: "Live-In Care",
    description:
      "24/7 in-home care, ensuring comfort and familiarity instead of moving to a care home.",
  },
  {
    id: 3,
    image: carePhoto12,
    title: "Home Care",
    description:
      "Hourly care tailored to your loved one's needs in the comfort of their home.",
  },
  {
    id: 4,
    image: carePhoto16,
    title: "Night Care",
    description:
      "Overnight care providing safety and assistance while families rest.",
  },
  {
    id: 5,
    image: carePhoto13,
    title: "Home from Hospital",
    description:
      "Short-term care to help regain independence after surgery or an accident.",
  },
  {
    id: 6,
    image: carePhoto15,
    title: "End-Of-Life Care",
    description:
      "Compassionate care to support families through difficult times.",
  },
  {
    id: 7,
    image: carePhoto10,
    title: "Dementia Care",
    description:
      "Specialized care for individuals living with dementia in familiar surroundings.",
  },
];

const testimonials = [
  {
    name: "Larisha Barnes",
    date: "6 months ago",
    rating: 5,
    review:
      "A Graceful Way Caregiving is one of the best caregiving companies I have ever seen. They actually treat you like family and go above and beyond to make sure your loved one is cared for.",
  },
  {
    name: "Miracle Wanzo",
    date: "1 year ago",
    rating: 5,
    review:
      "The caregiver was fabulous, making me feel at ease. From consultation to care, I always felt cared for and in good hands. Highly recommend!",
  },
  {
    name: "Claudette Joseph",
    date: "2 years ago",
    rating: 5,
    review:
      "As a registered nurse, I recommend A Graceful Way Home Care. They provide excellent service, ensuring respect and independence for patients.",
  },
  {
    name: "Matthew Troedel",
    date: "2 years ago",
    rating: 4,
    review:
      "Thank you, Ryan and the team! After surgery, I needed home care support, and their service was amazing. Truly grateful for their help!",
  },
  {
    name: "Toby Banks",
    date: "2 years ago",
    rating: 5,
    review:
      "Look no further if you're looking for in-home care for a loved one or yourself! Amazing service and compassionate caregivers.",
  },
  {
    name: "Jane Smith",
    date: "4 months ago",
    rating: 5,
    review:
      "I can’t thank A Graceful Way Care enough! They provided wonderful care for my mother during her recovery. Professional and kind staff!",
  },
];

const Home = () => {
  const sliderRef = useRef(null);

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
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
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

      {/* Testimonial */}
      <section className="relative py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${carePhoto11})`, opacity: 0.7 }} // Adjust opacity here
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-2">
            Discover What Our Clients Are Saying
          </h2>
          <p className="text-lg mb-6">Real stories from real families</p>

          {/* Scrollable Testimonial Slider */}
          <div className="overflow-x-hidden no-scrollbar" ref={sliderRef}>
            <motion.div
              className="flex space-x-6 px-6 my-6"
              drag="x"
              dragConstraints={{ left: -1000, right: 0 }}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 150, bounceDamping: 20 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg w-80 min-w-[320px] flex-shrink-0 text-gray-900"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-lg" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.review}"</p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-blue-700">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{testimonial.date}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <motion.div
          className="relative bg-white text-gray-800 py-12 px-8 flex flex-col md:flex-row items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Schedule An Assessment Today
            </h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <p className="text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-2">
                If you would like to arrange care for you or your loved one our
                expert advisers will be able to help you navigate the
                complexities of arranging care, as well as tailoring a bespoke
                plan to your family’s needs.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative px-4 mt-8 md:mt-0 flex justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white text-lg py-5 px-12 rounded-lg font-bold hover:bg-yellow-400"
            >
              Get in Touch →
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
