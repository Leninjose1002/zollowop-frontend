import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ChatBox from "./ChatBox"; // ✅ Adjust path if needed
import { useAuth } from "./AuthContext"; // ✅ Adjust path if needed

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useAuth();

  // Show scroll-to-top button after scrolling down
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed bottom-20 right-4 flex flex-col items-end gap-4 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.link/xudfo1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300"
        >
          <FaWhatsapp size={22} />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919267987940"
          aria-label="Call us"
          className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transition-transform duration-300"
        >
          <FaPhoneAlt size={20} />
        </a>

        {/* CTA Button */}
        <Link
          to="/employee-form"
  className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-800 to-blue-500 rounded-full shadow-md hover:from-cyan-700 hover:to-blue-600 hover:scale-105 transition-transform duration-300"
        >
          मुझे नौकरी चाहिए..
        </Link>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`w-12 h-12 flex items-center justify-center text-white rounded-full shadow-xl transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          } bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-110 animate-bounce`}
        >
          <FaArrowUp size={20} />
        </button>
      </div>

      {/* ChatBox (only for logged-in users) */}
      {user?.name && <ChatBox currentUser={user} />}
    </>
  );
};

export default FloatingButtons;
