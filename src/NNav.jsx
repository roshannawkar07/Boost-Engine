import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CloseIcon from "@mui/icons-material/Close"; // Import the MUI Close icon

const NNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between bg-blue-950 text-white py-5 px-8 md:sticky-top-0-z-50">
      <div className="logo">
        <span className="font-bold text-xl">Boost Ingine</span>
      </div>

      {/* Desktop Navbar */}
      <ul className="hidden lg:flex gap-12">
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/"
        >
          <li className="transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
            Home
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/more"
        >
          <li className="transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
            About Us
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/wedo"
        >
          <li className="transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
            What We Do
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/pricing"
        >
          <li className="transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
            Pricing
          </li>
        </NavLink>
        {/* Projects, Blogs, and Gallery Links */}
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/work" // Corrected path to '/work'
        >
          <li className="transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
            Projects
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/navblog" // Corrected path to '/navblog'
        >
          <li className="transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
            Blogs
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/gallary" // Corrected path to '/gallary'
        >
          <li className="transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
            Gallery
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/career"
        >
          <li className="transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
            Careers
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/contact"
        >
          <button className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 hover:border-gray-400 px-4 py-1 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Contact Us
          </button>
          <PermIdentityIcon className="ml-5 mb-2 hover:text-yellow-500 hover:scale-110 hover:underline" />
        </NavLink>
      </ul>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Conditional rendering for hamburger and close icon */}
          {isMenuOpen ? (
            <CloseIcon className="h-6 w-6" /> // Using the MUI Close icon
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="absolute top-0 left-0 w-full bg-stone-950 text-white flex flex-col items-center py-5">
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/"
            onClick={closeMenu} // Close the menu on click
          >
            <li className="py-2 transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
              Home
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/more"
            onClick={closeMenu} // Close the menu on click
          >
            <li className="py-2 transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
              About Us
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/wedo"
            onClick={closeMenu} // Close the menu on click
          >
            <li className="py-2 transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
              What We Do
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/pricing"
            onClick={closeMenu} // Close the menu on click
          >
            <li className="py-2 transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
              Pricing
            </li>
          </NavLink>
          {/* Projects, Blogs, and Gallery Links in Mobile Menu */}
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/work"
            onClick={closeMenu} // Close the menu on click
          >
            <li className="py-2 transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
              Projects
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/navblog"
            onClick={closeMenu} // Close the menu on click
          >
            <li className="py-2 transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
              Blogs
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/gallary"
            onClick={closeMenu} // Close the menu on click
          >
            <li className="py-2 transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
              Gallery
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/career"
            onClick={closeMenu} // Close the menu on click
          >
            <li className="py-2 transition-all duration-300 hover:text-yellow-500 hover:scale-110 hover:underline">
              Careers
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/contact"
            onClick={closeMenu} // Close the menu on click
          >
            <button className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 hover:border-gray-400 px-4 py-1 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Contact Us
            </button>
            <PermIdentityIcon className="ml-5 mb-2 hover:text-yellow-500 hover:scale-110 hover:underline" />
          </NavLink>
        </ul>
      )}
    </nav>
  );
};

export default NNav;
