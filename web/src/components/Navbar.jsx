import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-green-600 flex justify-between items-center px-4 h-12 text-white w-screen">
      <div className="logo font-bold text-xl flex gap-3">
        <lord-icon
          src="https://cdn.lordicon.com/kpjdxodr.json"
          trigger="hover"
          stroke="light"
        ></lord-icon>
        CureMind
      </div>

      <ul className="md:block hidden">
        <li className="flex gap-6">
          <Link
            to="/home"
            className="hover:font-bold hover:underline cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:font-bold hover:underline cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:font-bold hover:underline cursor-pointer"
          >
            Contact
          </Link>
          <Link
            target="_"
            to="https://github.com/Rohan-Beta"
            className="hover:font-bold hover:underline cursor-pointer"
          >
            Developer
          </Link>
        </li>
      </ul>

      {/* drop down menu */}

      <div className="relative block md:hidden">
        <button
          onClick={toggleDropdown}
          className="focus:outline-none hover:font-bold hover:underline"
        >
          <lord-icon
            src="https://cdn.lordicon.com/eouimtlu.json"
            trigger="hover"
            colors="primary:#ffffff"
          ></lord-icon>
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-green-600 text-white rounded-lg shadow-lg z-10">
            <Link
              to="/home"
              className="block px-4 py-2
            hover:bg-green-700"
            >
              Home
            </Link>
            <Link to="/about" className="block px-4 py-2 hover:bg-green-700">
              About
            </Link>
            <Link to="/contact" className="block px-4 py-2 hover:bg-green-700">
              Contact
            </Link>
            <Link
              target="_"
              to="https://github.com/Rohan-Beta"
              className="block px-4 py-2 hover:bg-green-700"
            >
              Developer
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
