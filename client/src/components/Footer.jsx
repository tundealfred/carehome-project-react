import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold">Care Home</h2>
            <p className="mt-2 text-sm">
              Providing compassionate care and a warm community for seniors,
              ensuring comfort, safety, and joy in every moment.
            </p>
            <div className="flex space-x-4 mt-4">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-blue-600" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-pink-600" />
              <FaXTwitter className="w-5 h-5 cursor-pointer hover:text-black" />
              <FaGithub className="w-5 h-5 cursor-pointer hover:text-gray-900" />
              <FaYoutube className="w-5 h-5 cursor-pointer hover:text-red-600" />
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Personalized Care</li>
              <li>Health & Wellness</li>
              <li>Senior Activities</li>
              <li>Companionship</li>
              <li>Memory Care</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Contact Us</li>
              <li>Family Resources</li>
              <li>Guides & FAQs</li>
              <li>Community Programs</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>License</li>
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h3 className="text-lg font-semibold">Join Us</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <button
                type="button"
                class="text-white hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
              >
                Care application form
              </button>
              <button
                type="button"
                class="text-white hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
              >
                Apply to be a caregiver
              </button>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm border-t pt-4">
          © 2025 Care Home, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
