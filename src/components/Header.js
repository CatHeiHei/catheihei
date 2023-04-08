import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/cat-heihei-logo.png";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between py-4 items-center">
      <Link to="/">
        <img src={logo} alt="Cat Heihei Logo" className="w-32" />
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="font-bold"
              className="hover:text-gray-700"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="font-bold"
              className="hover:text-gray-700"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
