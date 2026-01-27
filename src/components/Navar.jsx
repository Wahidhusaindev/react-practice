import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-500 px-6 py-4 text-white">
      <Link to="/" className="text-lg font-semibold tracking-wide">
        Learning
      </Link>

      <ul className="flex items-center gap-6">
        <li>
          <Link className="hover:text-green-200 transition" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-green-200 transition" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-green-200 transition" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
