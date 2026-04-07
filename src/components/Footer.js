import React from "react";
import Logo from "../assets/zollowupf.png";
import { Link } from "react-router-dom"; 
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from 'react-router-dom';


const Footer = () => {
        const navigate = useNavigate();
  
  return (
    <footer className="bg-gray-200 text-black py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {/* Column 1: Logo and About */}
        <div>
          <img src={Logo} alt="ZollowUp Logo" className="h-10 mb-4" />
          <p className="text-gray-800 text-sm leading-relaxed font-roboto">
            ZollowUp is your trusted partner in delivering high-quality, reliable domestic and commercial services. Our team of experienced professionals is dedicated to making your experience seamless and satisfying.
          </p>
           <p className="text-gray-800 text-sm leading-relaxed font-roboto mt-4 mb-5">
We offer transparent pricing, convenient scheduling, and doorstep delivery of all services so your day isn’t disrupted.          </p>
                    <PrimaryButton label="Contact Us" onClick={() => navigate('/contact')} />

        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-roboto">Quick Links</h3>
          <ul className="space-y-3 font-roboto text-sm">
            {["Home", "About", "Services", "Faqs", "Contact"].map((item, index) => (
              <li key={index}>
                <a href={`/${item.toLowerCase()}`} className="hover:text-gray-600 transition duration-200">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <Link to="/privacy-policy" className="hover:text-blue-800 text-blue-800 transition duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-blue-800 text-blue-800 transition duration-200">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:text-blue-800 text-blue-800 transition duration-200">
                Refund & Cancellation Policy
              </Link>
            </li>

          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-roboto">Contact Us</h3>
          
          <p className="text-sm mb-2 font-roboto">Phone: +91 92180 28500</p>
          <p className="text-sm mb-4 font-roboto">Email: sales@zollowup.com</p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" aria-label="Facebook" className="bg-blue-800 p-2 rounded-full hover:bg-blue-600 transition duration-300">
              <img src="https://img.icons8.com/ios-glyphs/24/ffffff/facebook-new.png" alt="Facebook" />
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" aria-label="Twitter" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition duration-300">
              <img src="https://img.icons8.com/ios-glyphs/24/ffffff/twitter.png" alt="Twitter" />
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" aria-label="Instagram" className="bg-pink-600 p-2 rounded-full hover:bg-pink-500 transition duration-300">
              <img src="https://img.icons8.com/ios-glyphs/24/ffffff/instagram-new.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-600 font-roboto">
        &copy; {new Date().getFullYear()} ZollowUp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
