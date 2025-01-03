import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  // State to manage the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#BAD8B6] p-4 text-[#123524] flex justify-between items-center">
      {/* Logo Section */}
      <div className="hover:scale-105">
        <NavLink to="/" className="text-2xl font-bold tracking-widest">
          Mental Wellness
        </NavLink>
      </div>

      {/* Hamburger Menu (Visible on Small Screens) */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="text-[#123524] hover:text-[#3E7B27] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3E7B27]"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {/* Hamburger Icon */}
          {!isOpen ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          ) : (
            // Close Icon
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`flex flex-col md:flex-row items-center ${isOpen ? 'block' : 'hidden'} md:block`} id="mobile-menu">
        <NavLink
          to="/"
          className="mt-2 md:mt-0 md:ml-6 text-lg hover:text-gray-500 tracking-wider hover:scale-105 active:text-black transition-transform duration-200"
          onClick={() => setIsOpen(false)} // Close menu on link click
        >
          Home
        </NavLink>
        <NavLink
          to="/journal"
          className="mt-2 md:mt-0 md:ml-6 text-lg hover:text-gray-500 tracking-wider hover:scale-105 transition-transform duration-200"
          onClick={() => setIsOpen(false)}
        >
          Journal
        </NavLink>
        <NavLink
          to="/quotes"
          className="mt-2 md:mt-0 md:ml-6 text-lg hover:text-gray-500 tracking-wider hover:scale-105 transition-transform duration-200"
          onClick={() => setIsOpen(false)}
        >
          Quotes
        </NavLink>
        <NavLink
          to="/mood"
          className="mt-2 md:mt-0 md:ml-6 text-lg hover:text-gray-500 tracking-wider hover:scale-105 transition-transform duration-200"
          onClick={() => setIsOpen(false)}
        >
          Mood
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
