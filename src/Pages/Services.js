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
//     <section className="bg-white py-12 px-4 md:px-12">
//       <div className="max-w-7xl mx-auto text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
//         <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm">
//           Book trained professionals for cleaning, caregiving, repairs, and more.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {services.map((service, index) => (
//           <Link to={service.path} key={index}>
//             <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group text-center p-4 cursor-pointer">
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-20 h-20 mx-auto object-contain mb-3 transition-transform duration-300 group-hover:scale-105"
//               />
//               <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
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

import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    image: '/images/housekeeping/kitchen-cleaning.avif',
    title: 'Maid Service',
    path: '/maid',
  },
  {
    image: '/images/nursing/Baby-Mother-Care.avif',
    title: 'Nursing Care',
    path: '/nursing',
  },
  {
    image: '/images/electrician/Fuse-Replacement-img.avif',
    title: 'Electrician Services',
    path: '/electrician',
  },
  {
    image: '/images/plumbing/balcony-drain.webp',
    title: 'Plumber Services',
    path: '/plumber',
  },
  {
    image: '/images/services/driver.webp',
    title: 'Driver on Demand',
    path: '/drivers',
  },
  {
    image: '/images/housekeeping/Full-Home-Deep-Cleaning.avif',
    title: 'Housekeeping',
    path: '/housekeeping',
  },
  {
    image: '/images/services/chef.webp',
    title: 'Chef Service',
    path: '/chef',
  },
];

const Services = () => {
  return (
    <section className="bg-primary-50 py-12 px-4 md:px-12">
      {/* ✅ UPDATED: Light turquoise background (was: bg-white) */}
      
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our{" "}
          <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-transparent bg-clip-text">
            Services
          </span>
        </h2>
        {/* ✅ UPDATED: Added turquoise gradient to "Services" */}
        
        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm">
          Book trained professionals for cleaning, caregiving, repairs, and more.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {services.map((service, index) => (
          <Link to={service.path} key={index}>
            <div className="bg-white border-2 border-primary-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:border-primary-500 transition-all duration-300 group text-center p-4 cursor-pointer">
              {/* ✅ UPDATED: Added turquoise border styling */}
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 mx-auto object-contain mb-3 transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-primary-600 transition-colors duration-200">
                {/* ✅ UPDATED: Changed hover color to turquoise (was: group-hover:text-blue-600) */}
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
