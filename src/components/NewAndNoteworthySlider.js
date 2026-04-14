// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";

// const sliderItems = [
//   {
//     id: 1,
//     title: "Maid Services",
//     description:
//       "Experienced and reliable maids to keep your home spotless, hygienic, and stress-free.",
//     image: "https://img.freepik.com/free-photo/chambermaid-hotel-room_23-2148095264.jpg",
//     badge: "Top Rated",
//   },
//   {
//     id: 2,
//     title: "Plumbing",
//     description:
//       "Quick and professional plumbing solutions for installations, leaks, and repairs.",
//     image: "https://img.freepik.com/premium-photo/serious-handyman-using-pliers-when-fixing-leaking-pipe-sink-kitchen-customer_274689-26032.jpg",
//     badge: "Trending",
//   },
//   {
//     id: 3,
//     title: "Electrician",
//     description:
//       "Certified electricians for safe and efficient electrical work at your home or office.",
//     image: "https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-18026.jpg",
//     badge: "New",
//   },
//   {
//     id: 4,
//     title: "Cook",
//     description:
//       "Skilled home cooks to prepare fresh and tasty meals tailored to your preferences.",
//     image: "https://img.freepik.com/free-photo/chef-kitchen_23-2148006182.jpg",
//   },
//   {
//     id: 5,
//     title: "Housekeeping",
//     description:
//       "Thorough housekeeping for a clean, tidy, and comfortable living space and more.",
//     image: "https://img.freepik.com/premium-photo/african-man-cleaning-cooktop-cooker-hood-home-brick-wall-with-mountain-unwashed-dirty-dishes-near-sink-background_175356-4288.jpg",
//     badge: "Top Rated",
//   },
// ];

// const NewAndNoteworthySlider = () => {
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 3 } },
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false, amount: 0.2 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="bg-gradient-to-br from-blue-50 via-white to-purple-100 py-20 px-4"
//     >
//       <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900 font-heading">
//   Our Most Popular <span className="bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text">Home Services</span>
// </h2>
// <p className="text-center text-blue-800 font-bold font-roboto mb-10">
//   Trusted by hundreds of families for quality, speed, and care.
// </p>


//       <div className="relative max-w-7xl mx-auto">
//         <Slider ref={sliderRef} {...settings}>
//           {sliderItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.2 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className="p-3"
//             >
//               <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border hover:border-blue-500">
//                 {item.badge && (
//                   <span className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-md font-semibold uppercase tracking-wide">
//                     {item.badge}
//                   </span>
//                 )}
//                 <div className="overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-44 w-full object-cover transition-transform duration-300 hover:scale-105 rounded-t-2xl"
//                   />
//                 </div>
//                 <div className="p-5">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-1 font-poppins">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 font-roboto">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </Slider>

//         {/* Arrows */}
//         <button
//           className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full z-10 hover:bg-blue-700 transition-colors shadow-md"
//           onClick={() => sliderRef.current.slickPrev()}
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>

//         <button
//           className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full z-10 hover:bg-blue-700 transition-colors shadow-md"
//           onClick={() => sliderRef.current.slickNext()}
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default NewAndNoteworthySlider;

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const sliderItems = [
  {
    id: 1,
    title: "Maid Services",
    description:
      "Experienced and reliable maids to keep your home spotless, hygienic, and stress-free.",
    image: "https://img.freepik.com/free-photo/chambermaid-hotel-room_23-2148095264.jpg",
    badge: "Top Rated",
  },
  {
    id: 2,
    title: "Plumbing",
    description:
      "Quick and professional plumbing solutions for installations, leaks, and repairs.",
    image: "https://img.freepik.com/premium-photo/serious-handyman-using-pliers-when-fixing-leaking-pipe-sink-kitchen-customer_274689-26032.jpg",
    badge: "Trending",
  },
  {
    id: 3,
    title: "Electrician",
    description:
      "Certified electricians for safe and efficient electrical work at your home or office.",
    image: "https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-18026.jpg",
    badge: "New",
  },
  {
    id: 4,
    title: "Cook",
    description:
      "Skilled home cooks to prepare fresh and tasty meals tailored to your preferences.",
    image: "https://img.freepik.com/free-photo/chef-kitchen_23-2148006182.jpg",
  },
  {
    id: 5,
    title: "Housekeeping",
    description:
      "Thorough housekeeping for a clean, tidy, and comfortable living space and more.",
    image: "https://img.freepik.com/premium-photo/african-man-cleaning-cooktop-cooker-hood-home-brick-wall-with-mountain-unwashed-dirty-dishes-near-sink-background_175356-4288.jpg",
    badge: "Top Rated",
  },
];

const NewAndNoteworthySlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-primary-50 py-20 px-4"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900 font-heading">
        Our Most Popular{" "}
        <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-transparent bg-clip-text">
          Home Services
        </span>
      </h2>
      <p className="text-center text-primary-600 font-bold font-roboto mb-10">
        Trusted by hundreds of families for quality, speed, and care.
      </p>

      <div className="relative max-w-7xl mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {sliderItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-3"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border hover:border-primary-500">
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-primary-400 to-primary-500 text-white text-xs px-3 py-1 rounded-full shadow-md font-semibold uppercase tracking-wide">
                    {item.badge}
                  </span>
                )}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-full object-cover transition-transform duration-300 hover:scale-105 rounded-t-2xl"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-roboto">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>

        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary-500 text-white p-2 rounded-full z-10 hover:bg-primary-600 transition-colors shadow-md"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary-500 text-white p-2 rounded-full z-10 hover:bg-primary-600 transition-colors shadow-md"
          onClick={() => sliderRef.current.slickNext()}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
};

export default NewAndNoteworthySlider;
