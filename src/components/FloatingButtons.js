import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import ChatBox from "./ChatBox";
import { useAuth } from "./AuthContext";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  // ✅ Hide on all /dashboard routes
const shouldHide =
  location.pathname.startsWith("/dashboard") ||
  location.pathname.startsWith("/admin");

  // ✅ Run always — hooks can't be inside conditional
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (shouldHide) return null;

  return (
    <>
      <div className="fixed bottom-20 right-4 flex flex-col items-end gap-4 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.link/uskwm4"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300"
        >
          <FaWhatsapp size={22} />
        </a>

        {/* Call */}
        <a
          href="tel:+919218028500"
          className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transition-transform duration-300"
        >
          <FaPhoneAlt size={20} />
        </a>

        {/* CTA */}
        <Link
          to="/employee-form"
          className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-yellow-600 to-pink-500 rounded-full shadow-md hover:from-cyan-700 hover:to-blue-600 hover:scale-105 transition-transform duration-300"
        >
          मुझे नौकरी चाहिए..
        </Link>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`w-12 h-12 flex items-center justify-center text-white rounded-full shadow-xl transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          } bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-110 animate-bounce`}
        >
          <FaArrowUp size={20} />
        </button>
      </div>

      {/* ChatBox only for logged-in users */}
      {user?.name && <ChatBox currentUser={user} />}
    </>
  );
};

export default FloatingButtons;
