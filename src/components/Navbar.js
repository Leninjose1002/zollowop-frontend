import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import Location from "./Location";
import { useCart } from "./CartContext";
import UserSignup from "./UserSignup";
import EmployeeLogin from "./EmployeeLogin";
import Logo from "../assets/image.png";
import { FaUser, FaUserTie } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserSignup, setShowUserSignup] = useState(false);
  const [showEmployeeLogin, setShowEmployeeLogin] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { cart } = useCart();
  const cartItemCount = cart.length;
  const dropdownRef = useRef();
  const isMobile = window.innerWidth < 1024;

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="bg-white px-4 lg:px-10 py-4 sticky top-0 z-50 shadow-md font-poppins flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <NavLink to="/">
            <img src={Logo} alt="Logo" className="h-10" />
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 mx-auto" ref={dropdownRef}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition ${isActive ? "text-yellow-500 font-semibold" : "text-gray-800 hover:text-yellow-500"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition ${isActive ? "text-yellow-500 font-semibold" : "text-gray-800 hover:text-yellow-500"}`
            }
          >
            AboutUs
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative">
            <div
              onClick={() => toggleDropdown("services")}
              className="flex items-center gap-1 cursor-pointer text-gray-800 hover:text-yellow-500 transition"
            >
              Services {activeDropdown === "services" ? <ChevronUp /> : <ChevronDown />}
            </div>
            {activeDropdown === "services" && (
              <ul className="absolute left-0 mt-2 w-52 bg-white text-gray-800 rounded-lg shadow-lg transition-all duration-300 z-50">
                {[
                  { to: "/maid", text: "Maid Services" },
                  { to: "/nursing", text: "Nursing Care" },
                  { to: "/electrician", text: "Electrician" },
                  { to: "/plumber", text: "Plumber" },
                  { to: "/drivers", text: "Drivers" },
                  { to: "/housekeeping", text: "Housekeeping" },
                ].map(({ to, text }) => (
                  <li key={to}>
                    <NavLink to={to} className="block px-4 py-2 hover:bg-gray-100">
                      {text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition ${isActive ? "text-yellow-500 font-semibold" : "text-gray-800 hover:text-yellow-500"}`
            }
          >
            ContactUs
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 ml-auto">
          <Location />
          <NavLink to="/checkout" className="relative">
            <ShoppingCart size={24} className="text-gray-700 hover:text-yellow-500 transition" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </NavLink>

          <button
            onClick={() => setShowUserSignup(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-yellow-100"
          >
            <FaUser />
            User Signup
          </button>

          <button
            onClick={() => setShowEmployeeLogin(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-sm text-black font-semibold"
          >
            <FaUserTie />
            Employee Login
          </button>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="p-4 text-right w-full text-gray-700"
        >
          <X size={24} />
        </button>
        <ul className="px-4 space-y-4">
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)} className="block px-2 py-2 hover:bg-gray-100">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className="block px-2 py-2 hover:bg-gray-100">
              AboutUs
            </NavLink>
          </li>

          <li>
            <div
              onClick={() => toggleDropdown("services")}
              className="flex items-center justify-between px-2 py-2 cursor-pointer"
            >
              Services {activeDropdown === "services" ? <ChevronUp /> : <ChevronDown />}
            </div>
            {activeDropdown === "services" && (
              <ul className="pl-4 space-y-2">
                {[
                  { to: "/maid", text: "Maid Services" },
                  { to: "/nursing", text: "Nursing Care" },
                  { to: "/electrician", text: "Electrician" },
                  { to: "/plumber", text: "Plumber" },
                  { to: "/drivers", text: "Drivers" },
                  { to: "/housekeeping", text: "Housekeeping" },
                ].map(({ to, text }) => (
                  <li key={to}>
                    <NavLink to={to} onClick={() => setIsOpen(false)} className="block px-4 py-1 hover:bg-gray-100">
                      {text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block px-2 py-2 hover:bg-gray-100">
              ContactUs
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Modals */}
      {showUserSignup && <UserSignup onClose={() => setShowUserSignup(false)} />}
      {showEmployeeLogin && <EmployeeLogin onClose={() => setShowEmployeeLogin(false)} />}
    </>
  );
};

export default Navbar;
