import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBroom,
  FaUserNurse,
  FaUtensils,
  FaTools,
  FaBolt,
  FaRedRiver,
  FaPumpSoap,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <FaBroom className="text-white text-2xl" />,
    title: 'Maid Service',
    desc: 'Spotless cleaning services for a tidy, fresh home every time.',
    path: '/maid',
    bg: 'bg-orange-500',
  },
  {
    icon: <FaUserNurse className="text-white text-2xl" />,
    title: 'Nursing Care',
    desc: 'Caring and compassionate help for your loved ones.',
    path: '/nursing',
    bg: 'bg-blue-500',
  },
  {
    icon: <FaBolt className="text-white text-2xl" />,
    title: 'Electrician Services',
    desc: 'Certified electricians for safe and efficient solutions.',
    path: '/electrician',
    bg: 'bg-yellow-500',
  },
  {
    icon: <FaTools className="text-white text-2xl" />,
    title: 'Plumber Services',
    desc: 'Quick fixes and maintenance by trusted professionals.',
    path: '/plumber',
    bg: 'bg-green-500',
  },
  {
    icon: <FaRedRiver className="text-white text-2xl" />,
    title: 'Driver',
    desc: 'Experienced drivers for safe and reliable transport.',
    path: '/drivers',
    bg: 'bg-red-500',
  },
  {
    icon: <FaPumpSoap className="text-white text-2xl" />,
    title: 'Housekeeping Services',
    desc: 'Detailed cleaning and upkeep for a spotless home.',
    path: '/housekeeping',
    bg: 'bg-cyan-500',
  },
  {
    icon: <FaUtensils className="text-white text-2xl" />,
    title: 'Chef Services',
    desc: 'Skilled cooks to prepare home-style or special meals.',
    path: '/chef',
    bg: 'bg-purple-500',
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-black font-poppins"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto font-roboto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          From cleaning to caregiving, cooking to repairs – we've got you covered with reliable and expert professionals.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link to={service.path} key={index}>
            <motion.div
              className="bg-[#F8FBFF] shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${service.bg}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-black font-poppins mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base font-roboto">{service.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
