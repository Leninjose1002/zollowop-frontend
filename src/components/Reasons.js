import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Calendar, Wallet, Settings, Gift } from "lucide-react";

const Reasons = () => {
  const reasonsList = [
    { icon: <BadgeCheck size={28} />, text: "Qualified Experts" },
    { icon: <Calendar size={28} />, text: "Service on Schedule" },
    { icon: <Wallet size={28} />, text: "Affordable Prices" },
    { icon: <Settings size={28} />, text: "Reliable Service" },
    { icon: <Gift size={28} />, text: "Special Offers" },
  ];

  return (
    <section className="py-5 px-4 sm:px-10 md:px-20">
      {/* Gradient Main Heading outside the background */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center font-bold text-4xl sm:text-4xl font-poppins mb-12 "
      >
        <span className="bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text">
    Why Choose
  </span>{" "}
  <span className="text-gray-900">Zollowup?</span>
      </motion.h2>

      {/* Background design block */}
      <div
        className="relative bg-cover bg-center py-24 px-4 sm:px-10 md:px-20 text-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://mehedi.asiandevelopers.com/demo/html/fouens/images/parallax-background/choose-bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-black/70 to-purple-900/80 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 font-roboto">
          {reasonsList.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-white"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white shadow-md">
                {reason.icon}
              </div>
              <h5 className="font-medium text-sm md:text-base">{reason.text}</h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
