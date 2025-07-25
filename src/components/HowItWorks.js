import React from "react";
import { FaSearch, FaCalendarCheck, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaSearch className="text-white text-3xl" />,
    title: "1. Choose a Service",
    description: "Select from a wide range of cleaning, cooking, and caregiving services tailored to your needs.",
    bg: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    icon: <FaCalendarCheck className="text-white text-3xl" />,
    title: "2. Pick Date & Time",
    description: "Schedule a convenient slot for your appointment and leave the rest to us.",
    bg: "bg-gradient-to-r from-pink-500 to-red-500",
  },
  {
    icon: <FaHome className="text-white text-3xl" />,
    title: "3. Relax at Home",
    description: "Our verified professional arrives at your doorstep to deliver hassle-free service.",
    bg: "bg-gradient-to-r from-green-400 to-teal-500",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 font-heading text-center">
  How <span className="bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text">Zollowup</span> Works
</h2>
<p className="text-center text-blue-800 mt-3 font-roboto text-base font-bold max-w-xl mx-auto">
  Just 3 simple steps to book trusted home services with ease.
</p>

      </motion.div>

      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl text-center transition hover:-translate-y-2 duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 shadow-md" style={{ background: 'linear-gradient(to right, #6EE7B7, #3B82F6)' }}>
              <div className={`${step.bg} p-4 rounded-full`}>
                {step.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 font-poppins mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm font-roboto">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
