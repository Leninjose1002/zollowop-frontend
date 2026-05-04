// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const services = [
// //   {
// //     image: '/images/housekeeping/kitchen-cleaning.avif',
// //     title: 'Maid Service',
// //     path: '/maid',
// //   },
// //   {
// //     image: '/images/nursing/Baby-Mother-Care.avif',
// //     title: 'Nursing Care',
// //     path: '/nursing',
// //   },
// //   {
// //     image: '/images/electrician/Fuse-Replacement-img.avif',
// //     title: 'Electrician Services',
// //     path: '/electrician',
// //   },
// //   {
// //     image: '/images/plumbing/balcony-drain.webp',
// //     title: 'Plumber Services',
// //     path: '/plumber',
// //   },
// //   {
// //     image: '/images/services/driver.webp',
// //     title: 'Driver on Demand',
// //     path: '/drivers',
// //   },
// //   {
// //     image: '/images/housekeeping/Full-Home-Deep-Cleaning.avif',
// //     title: 'Housekeeping',
// //     path: '/housekeeping',
// //   },
// //   {
// //     image: '/images/services/chef.webp',
// //     title: 'Chef Service',
// //     path: '/chef',
// //   },
// // ];

// // const Services = () => {
// //   return (
// //     <section className="bg-white py-12 px-4 md:px-12">
// //       <div className="max-w-7xl mx-auto text-center mb-10">
// //         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
// //         <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm">
// //           Book trained professionals for cleaning, caregiving, repairs, and more.
// //         </p>
// //       </div>

// //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
// //         {services.map((service, index) => (
// //           <Link to={service.path} key={index}>
// //             <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group text-center p-4 cursor-pointer">
// //               <img
// //                 src={service.image}
// //                 alt={service.title}
// //                 className="w-20 h-20 mx-auto object-contain mb-3 transition-transform duration-300 group-hover:scale-105"
// //               />
// //               <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
// //                 {service.title}
// //               </h3>
// //             </div>
// //           </Link>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Services;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const services = [
//   {
//     image: '/images/housekeeping/kitchen-cleaning.avif',
//     title: 'Maid Service',
//     path: '/maid',
//   },
//   {
//     image: '/images/nursing/Baby-Mother-Care.avif',
//     title: 'Nursing Care',
//     path: '/nursing',
//   },
//   {
//     image: '/images/electrician/Fuse-Replacement-img.avif',
//     title: 'Electrician Services',
//     path: '/electrician',
//   },
//   {
//     image: '/images/plumbing/balcony-drain.webp',
//     title: 'Plumber Services',
//     path: '/plumber',
//   },
//   {
//     image: '/images/services/driver.webp',
//     title: 'Driver on Demand',
//     path: '/drivers',
//   },
//   {
//     image: '/images/housekeeping/Full-Home-Deep-Cleaning.avif',
//     title: 'Housekeeping',
//     path: '/housekeeping',
//   },
//   {
//     image: '/images/services/chef.webp',
//     title: 'Chef Service',
//     path: '/chef',
//   },
// ];

// const Services = () => {
//   return (
//     <section className="bg-primary-50 py-12 px-4 md:px-12">
//       {/* ✅ UPDATED: Light turquoise background (was: bg-white) */}
      
//       <div className="max-w-7xl mx-auto text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Our{" "}
//           <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-transparent bg-clip-text">
//             Services
//           </span>
//         </h2>
//         {/* ✅ UPDATED: Added turquoise gradient to "Services" */}
        
//         <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm">
//           Book trained professionals for cleaning, caregiving, repairs, and more.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {services.map((service, index) => (
//           <Link to={service.path} key={index}>
//             <div className="bg-white border-2 border-primary-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:border-primary-500 transition-all duration-300 group text-center p-4 cursor-pointer">
//               {/* ✅ UPDATED: Added turquoise border styling */}
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-20 h-20 mx-auto object-contain mb-3 transition-transform duration-300 group-hover:scale-105"
//               />
//               <h3 className="text-sm font-medium text-gray-800 group-hover:text-primary-600 transition-colors duration-200">
//                 {/* ✅ UPDATED: Changed hover color to turquoise (was: group-hover:text-blue-600) */}
//                 {service.title}
//               </h3>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Star, ArrowRight, BarChart3, Shield, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Maid Service",
      description: "Household cleaning and maintenance",
      icon: "🧹",
      to: "/maid",
      color: "from-blue-400 to-blue-600",
      rating: 4.8,
      reviews: 2500,
    },
    {
      id: 2,
      title: "Nursing Care",
      description: "Professional healthcare at home",
      icon: "⚕️",
      to: "/nursing",
      color: "from-red-400 to-red-600",
      rating: 4.9,
      reviews: 1800,
    },
    {
      id: 3,
      title: "Plumber",
      description: "Plumbing repairs and installation",
      icon: "🔧",
      to: "/plumber",
      color: "from-yellow-400 to-yellow-600",
      rating: 4.8,
      reviews: 3200,
    },
    {
      id: 4,
      title: "Electrician",
      description: "Electrical services and repairs",
      icon: "⚡",
      to: "/electrician",
      color: "from-orange-400 to-orange-600",
      rating: 4.8,
      reviews: 2800,
    },
    {
      id: 6,
      title: "Cooks",
      description: "Professional chefs & meal prep",
      icon: "👨‍🍳",
      to: "/cooks",
      color: "from-pink-400 to-pink-600",
      rating: 4.8,
      reviews: 1800,
    },
    {
      id: 7,
      title: "Housekeeping",
      description: "Deep cleaning & maintenance",
      icon: "🏠",
      to: "/housekeeping",
      color: "from-green-400 to-green-600",
      rating: 4.8,
      reviews: 3200,
    },
    {
      id: 8,
      title: "AC Service",
      description: "AC repair & installation",
      icon: "❄️",
      to: "/ac-service",
      color: "from-cyan-400 to-cyan-600",
      rating: 4.8,
      reviews: 2800,
    },
    {
      id: 9,
      title: "Chef Service",
      description: "Event catering & meal prep",
      icon: "🍽️",
      to: "/chef",
      color: "from-rose-400 to-rose-600",
      rating: 4.9,
      reviews: 1900,
    },
    {
      id: 10,
      title: "Beautician",
      description: "Professional beauty treatments",
      icon: "💄",
      to: "/beautician",
      color: "from-fuchsia-400 to-fuchsia-600",
      rating: 4.8,
      reviews: 2200,
    },
  ];

  const features = [
    {
      icon: <Star className="text-primary-600" size={32} />,
      title: "Expert Professionals",
      description: "Certified and verified professionals in every service",
    },
    {
      icon: <BarChart3 className="text-primary-600" size={32} />,
      title: "Transparent Pricing",
      description: "Clear pricing with no hidden charges",
    },
    {
      icon: <Shield className="text-primary-600" size={32} />,
      title: "Safe & Insured",
      description: "All professionals are background-checked and insured",
    },
    {
      icon: <Users className="text-primary-600" size={32} />,
      title: "24/7 Support",
      description: "Round-the-clock customer support available",
    },
  ];

  const stats = [
    { label: "Happy Customers", value: "150,000+", icon: "😊" },
    { label: "Services Completed", value: "500,000+", icon: "✅" },
    { label: "Professional Network", value: "10,000+", icon: "👥" },
    { label: "Average Rating", value: "4.8★", icon: "⭐" },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Our Professional <span className="text-primary-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Book trained professionals for cleaning, caregiving, repairs, and more. Trusted by thousands. Available 24/7.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose <span className="text-primary-600">ZollowUp?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            All Our <span className="text-primary-600">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <NavLink to={service.to} className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 transition transform hover:scale-105 h-full flex flex-col cursor-pointer">
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-br ${service.color} p-8 text-white text-5xl h-32 flex items-center justify-center group-hover:scale-110 transition duration-300`}>
                      {service.icon}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {service.description}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-yellow-400">⭐</span>
                          <span className="font-bold text-gray-900">
                            {service.rating}
                          </span>
                          <span className="text-xs text-gray-600">
                            ({service.reviews})
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-sm font-semibold text-primary-600">
                          Book Now
                        </span>
                        <ArrowRight size={18} className="text-primary-600 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </div>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            How It <span className="text-primary-600">Works</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Browse Services", description: "Select the service you need" },
              { step: 2, title: "Choose Professional", description: "Pick your preferred expert" },
              { step: 3, title: "Book & Pay", description: "Schedule at your convenience" },
              { step: 4, title: "Enjoy Service", description: "Get quality service at home" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 -right-8 w-16 h-1 bg-gradient-to-r from-primary-600 to-transparent"></div>
                )}

                <div className="bg-white p-8 rounded-xl shadow-lg text-center border-2 border-primary-100 hover:border-primary-600 transition">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our <span className="text-primary-600">Customers Say</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Singh",
                rating: 5,
                comment: "Excellent service! The maid was professional and thorough. Will book again!",
              },
              {
                name: "Rahul Patel",
                rating: 5,
                comment: "Best electrician service in Delhi. Quick response and quality work.",
              },
              {
                name: "Neha Gupta",
                rating: 5,
                comment: "Amazing Chef service for my wedding. Everyone loved the food!",
              },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg border border-primary-100"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
                <p className="font-bold text-gray-900">- {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 px-6 sm:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Book a Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of happy customers. Book professional services at your doorstep today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/maid"
              className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Explore Services
            </NavLink>
            <a
              href="tel:+919218028500"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-600 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
