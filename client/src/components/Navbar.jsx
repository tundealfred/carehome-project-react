import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 py-2">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold m-2 text-gray-800">
          <Link to="/" className="hover:text-blue-600 transition">
            Care Home Logo
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          Menu
          {/* Hamburger SVG */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navbar */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } text-xl absolute top-full left-0 w-full bg-white md:static md:w-auto space-y-4 md:space-y-0 md:flex md:items-center md:space-x-6 transition-all duration-300`}
        >
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `relative text-xl font-medium block py-2 px-6 md:py-0 md:px-0 ${
                isActive
                  ? "text-blue-500 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-1 after:bg-yellow-400"
                  : "text-gray-800 hover:text-blue-500 hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:w-full hover:after:h-1 hover:after:bg-yellow-400"
              } transition`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `relative text-xl font-medium block py-2 px-6 md:py-0 md:px-0 ${
                isActive
                  ? "text-blue-500 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-1 after:bg-yellow-400"
                  : "text-gray-800 hover:text-blue-500 hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:w-full hover:after:h-1 hover:after:bg-yellow-400"
              } transition`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `relative text-xl font-medium block py-2 px-6 md:py-0 md:px-0 ${
                isActive
                  ? "text-blue-500 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-1 after:bg-yellow-400"
                  : "text-gray-800 hover:text-blue-500 hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:w-full hover:after:h-1 hover:after:bg-yellow-400"
              } transition`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `relative text-xl font-medium block py-2 px-6 md:py-0 md:px-0 ${
                isActive
                  ? "text-blue-500 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-1 after:bg-yellow-400"
                  : "text-gray-800 hover:text-blue-500 hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:w-full hover:after:h-1 hover:after:bg-yellow-400"
              } transition`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/faqs"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `relative text-xl font-medium block py-2 px-6 md:py-0 md:px-0 ${
                isActive
                  ? "text-blue-500 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-1 after:bg-yellow-400"
                  : "text-gray-800 hover:text-blue-500 hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:w-full hover:after:h-1 hover:after:bg-yellow-400"
              } transition`
            }
          >
            FAQs
          </NavLink>
        </nav>
        <Link
          to="/"
          className="text-center flex items-center justify-center w-60 h-20 m-2 text-blue-900 text-xl font-medium border-2 border-yellow-400 rounded-3xl hover:bg-blue-800 hover:text-white transition"
        >
          <svg
            class="w-10 h-10 text-blue-600 dark:text-blue-500 px-1 hover:text-yellow-500 transition"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 19 18"
          >
            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
          </svg>
          : 07123-456789
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
