// import React from "react";
// import Logo from "../assets/zollowupf.png";
// import { Link } from "react-router-dom"; 
// import PrimaryButton from "./PrimaryButton";
// import { useNavigate } from 'react-router-dom';


// const Footer = () => {
//         const navigate = useNavigate();
  
//   return (
//     <footer className="bg-gray-200 text-black py-12">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
//         {/* Column 1: Logo and About */}
//         <div>
//           <img src={Logo} alt="ZollowUp Logo" className="h-10 mb-4" />
//           <p className="text-gray-800 text-sm leading-relaxed font-roboto">
//             ZollowUp is your trusted partner in delivering high-quality, reliable domestic and commercial services. Our team of experienced professionals is dedicated to making your experience seamless and satisfying.
//           </p>
//            <p className="text-gray-800 text-sm leading-relaxed font-roboto mt-4 mb-5">
// We offer transparent pricing, convenient scheduling, and doorstep delivery of all services so your day isn’t disrupted.          </p>
//                     <PrimaryButton label="Contact Us" onClick={() => navigate('/contact')} />

//         </div>

//         {/* Column 2: Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 font-roboto">Quick Links</h3>
//           <ul className="space-y-3 font-roboto text-sm">
//             {["Home", "About", "Services", "Faqs", "Contact"].map((item, index) => (
//               <li key={index}>
//                 <a href={`/${item.toLowerCase()}`} className="hover:text-gray-600 transition duration-200">
//                   {item}
//                 </a>
//               </li>
//             ))}
//             <li>
//               <Link to="/privacy-policy" className="hover:text-blue-800 text-blue-800 transition duration-200">
//                 Privacy Policy
//               </Link>
//             </li>
//             <li>
//               <Link to="/terms-and-conditions" className="hover:text-blue-800 text-blue-800 transition duration-200">
//                 Terms & Conditions
//               </Link>
//             </li>
//             <li>
//               <Link to="/refund-policy" className="hover:text-blue-800 text-blue-800 transition duration-200">
//                 Refund & Cancellation Policy
//               </Link>
//             </li>

//           </ul>
//         </div>

//         {/* Column 3: Contact Info */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 font-roboto">Contact Us</h3>
          
//           <p className="text-sm mb-2 font-roboto">Phone: +91 92180 28500</p>
//           <p className="text-sm mb-4 font-roboto">Email: sales@zollowup.com</p>

//           {/* Social Media Links */}
//           <div className="flex space-x-4">
//             {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//             <a href="#" aria-label="Facebook" className="bg-blue-800 p-2 rounded-full hover:bg-blue-600 transition duration-300">
//               <img src="https://img.icons8.com/ios-glyphs/24/ffffff/facebook-new.png" alt="Facebook" />
//             </a>
//             {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//             <a href="#" aria-label="Twitter" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition duration-300">
//               <img src="https://img.icons8.com/ios-glyphs/24/ffffff/twitter.png" alt="Twitter" />
//             </a>
//             {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//             <a href="#" aria-label="Instagram" className="bg-pink-600 p-2 rounded-full hover:bg-pink-500 transition duration-300">
//               <img src="https://img.icons8.com/ios-glyphs/24/ffffff/instagram-new.png" alt="Instagram" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-600 font-roboto">
//         &copy; {new Date().getFullYear()} ZollowUp. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from "react";
import Logo from "../assets/zollowupf.png";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeMessage("Thank you for subscribing!");
      setEmail("");
      setTimeout(() => setSubscribeMessage(""), 3000);
    }
  };

  const services = [
    { name: "Maids", path: "/maid" },
    { name: "Nursing Care", path: "/nursing" },
    { name: "Drivers", path: "/drivers" },
    { name: "Cooks", path: "/cooks" },
    { name: "Electricians", path: "/electricians" },
    { name: "Plumbers", path: "/plumbers" },
    { name: "Housekeeping", path: "/housekeeping" },
    { name: "More Services", path: "/services" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-gray-100">
      {/* Newsletter Section */}
      <div className="border-b border-primary-700/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Newsletter Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4 font-roboto">
                Stay Updated with ZollowUp
              </h3>
              <p className="text-gray-400 mb-6 font-roboto">
                Get exclusive offers, service updates, and home care tips
                delivered to your inbox.
              </p>
            </motion.div>

            {/* Right - Newsletter Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleNewsletterSignup}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition font-roboto"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight size={18} />
                </button>
              </div>
              {subscribeMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-primary-400 text-sm font-semibold font-roboto"
                >
                  {subscribeMessage}
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* Column 1: Logo and About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <img src={Logo} alt="ZollowUp Logo" className="h-10 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed font-roboto mb-4">
              ZollowUp is your trusted partner in delivering high-quality,
              reliable domestic and commercial services.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-roboto mb-6">
              Transparent pricing, convenient scheduling, doorstep delivery.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="text-primary-400" size={18} />
                <a
                  href="tel:+919218028500"
                  className="text-gray-300 hover:text-primary-400 transition text-sm"
                >
                  +91 92180 28500
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary-400" size={18} />
                <a
                  href="mailto:sales@zollowup.com"
                  className="text-gray-300 hover:text-primary-400 transition text-sm"
                >
                  sales@zollowup.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary-400" size={18} />
                <span className="text-gray-300 text-sm">
                  Bathinda, Punjab, India
                </span>
              </div>
            </div>

            <PrimaryButton
              label="Contact Us"
              onClick={() => navigate("/contact")}
            />
          </motion.div>

          {/* Column 2: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 font-roboto text-white">
              Our Services
            </h3>
            <ul className="space-y-3 font-roboto text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(service.path)}
                    className="text-gray-400 hover:text-primary-400 transition"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 font-roboto text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 font-roboto text-sm">
              {["Home", "About", "Services", "Faqs", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => navigate(`/${item.toLowerCase()}`)}
                      className="text-gray-400 hover:text-primary-400 transition"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Column 4: Legal & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-6 font-roboto text-white">
              Legal
            </h3>
            <ul className="space-y-3 font-roboto text-sm mb-8">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-primary-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-400 hover:text-primary-400 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-gray-400 hover:text-primary-400 transition"
                >
                  Refund & Cancellation
                </Link>
              </li>
            </ul>

            {/* Social Media Links */}
            <h3 className="text-lg font-bold mb-4 font-roboto text-white">
              Follow Us
            </h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/zollowup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-primary-600 p-2 rounded-full hover:bg-primary-700 transition transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/zollowup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="bg-primary-600 p-2 rounded-full hover:bg-primary-700 transition transform hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/zollowup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-primary-600 p-2 rounded-full hover:bg-primary-700 transition transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-8"></div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-roboto gap-4"
        >
          <p>&copy; {new Date().getFullYear()} ZollowUp. All rights reserved.</p>

          {/* Trust Badges */}
          <div className="flex gap-3 flex-wrap justify-center">
            <span className="px-3 py-1 bg-gray-800 rounded-lg text-xs flex items-center gap-1">
              <Check size={14} className="text-primary-400" /> Verified
            </span>
            <span className="px-3 py-1 bg-gray-800 rounded-lg text-xs flex items-center gap-1">
              <Check size={14} className="text-primary-400" /> Secure
            </span>
            <span className="px-3 py-1 bg-gray-800 rounded-lg text-xs flex items-center gap-1">
              <Check size={14} className="text-primary-400" /> 24/7 Support
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
