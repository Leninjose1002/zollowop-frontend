// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Cleaning = () => {
//   const navigate = useNavigate();
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     AOS.init({ duration: 800, easing: "ease-in-out", once: true });
//   }, []);

//   const services = [
//     {
//       title: "Kitchen Cleaning",
//       image: "https://img.freepik.com/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg",
//       path: "/maid",
//     },
//     {
//       title: "Bathroom Cleaning",
//       image: "https://img.freepik.com/free-photo/household-chores-concept_53876-139519.jpg",
//       path: "/housekeeping",
//     },
//     {
//       title: "Full Home Cleaning",
//       image: "https://img.freepik.com/premium-photo/cleaning-service-team-working-messy-room-after-new-year-party_495423-36368.jpg",
//       path: "/housekeeping",
//     },
//     {
//       title: "Chef",
//       image: "https://img.freepik.com/premium-photo/young-woman-cook-sweet-cake-kitchen_41471-8748.jpg",
//       path: "/chef",
//     },
//     {
//       title: "Nanny",
//       image: "https://img.freepik.com/premium-photo/beautiful-mother-with-her-cute-baby-blue-background_1215445-5206.jpg",
//       path: "/maid",
//     },
//   ];

//   const sliderSettings = {
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
//     <div className="bg-gradient-to-br from-orange-50 via-white to-pink-100 py-20 px-4" data-aos="fade-up">
//      <h2
//   className="text-3xl sm:text-4xl font-bold text-center text-gray-900 font-heading mb-4"
//   data-aos="fade-down"
// >
//   <span className="bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text">
//     Cleaning & Cooking
//   </span>
// </h2>
// <p className="text-center text-blue-800 font-bold font-roboto mb-10">
//   Keep your home spotless and your meals stress-free with trusted experts.
// </p>


//       <div className="relative max-w-7xl mx-auto">
//         <Slider ref={sliderRef} {...sliderSettings}>
//           {services.map((service, index) => (
//             <div key={index} className="p-4" data-aos="zoom-in" data-aos-delay={index * 100}>
//               <div
//                 className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl"
//                 onClick={() => navigate(service.path)}
//               >
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="h-44 w-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
//                 />
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
//                 {/* Title */}
//                 <div className="absolute bottom-5 left-0 w-full text-center text-white text-lg font-roboto font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   {service.title}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>

//         {/* Arrows */}
//         <button
//           onClick={() => sliderRef.current.slickPrev()}
//           className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-md p-2 rounded-full z-10 hover:scale-110 transition"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>

//         <button
//           onClick={() => sliderRef.current.slickNext()}
//           className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-md p-2 rounded-full z-10 hover:scale-110 transition"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cleaning;

import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Cleaning = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const services = [
    {
      title: "Kitchen Cleaning",
      image: "https://img.freepik.com/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg",
      path: "/maid",
    },
    {
      title: "Bathroom Cleaning",
      image: "https://img.freepik.com/free-photo/household-chores-concept_53876-139519.jpg",
      path: "/housekeeping",
    },
    {
      title: "Full Home Cleaning",
      image: "https://img.freepik.com/premium-photo/cleaning-service-team-working-messy-room-after-new-year-party_495423-36368.jpg",
      path: "/housekeeping",
    },
    {
      title: "Chef",
      image: "https://img.freepik.com/premium-photo/young-woman-cook-sweet-cake-kitchen_41471-8748.jpg",
      path: "/chef",
    },
    {
      title: "Nanny",
      image: "https://img.freepik.com/premium-photo/beautiful-mother-with-her-cute-baby-blue-background_1215445-5206.jpg",
      path: "/maid",
    },
  ];

  const sliderSettings = {
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
    <div className="bg-primary-50 py-20 px-4" data-aos="fade-up">
      <h2
        className="text-3xl sm:text-4xl font-bold text-center text-gray-900 font-heading mb-4"
        data-aos="fade-down"
      >
        <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-transparent bg-clip-text">
          Cleaning & Cooking
        </span>
      </h2>
      <p className="text-center text-primary-600 font-bold font-roboto mb-10">
        Keep your home spotless and your meals stress-free with trusted experts.
      </p>

      <div className="relative max-w-7xl mx-auto">
        <Slider ref={sliderRef} {...sliderSettings}>
          {services.map((service, index) => (
            <div key={index} className="p-4" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div
                className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl border-b-4 border-primary-500"
                onClick={() => navigate(service.path)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-44 w-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                <div className="absolute bottom-5 left-0 w-full text-center text-white text-lg font-roboto font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.title}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-md p-2 rounded-full z-10 hover:scale-110 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-md p-2 rounded-full z-10 hover:scale-110 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Cleaning;
