// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import PrimaryButton from "./PrimaryButton";

// const Services = () => {
//   const navigate = useNavigate();
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const services = [
//     {
//       title: "Maid Services",
//       image:
//         "https://img.freepik.com/free-photo/young-woman-wearing-apron-rubber-gloves-holding-basin-with-cleaning-tools-with-big-smile-face-showing-thumbs-up-orange-wall_141793-13583.jpg",
//       path: "/maid",
//     },
//     {
//       title: "Nursing Care",
//       image:
//         "https://img.freepik.com/premium-photo/indian-nurse-with-uniform_984354-3724.jpg",
//       path: "/nursing",
//     },
//     {
//       title: "Drivers",
//       image:
//         "https://img.freepik.com/premium-photo/man-car-tablet-delivery-management-ecommerce-order-online-shopping-transport-logistics-smile-happy-courier-worker-technology-van-e-commerce-product-retail-distribution_590464-96742.jpg",
//       path: "/drivers",
//     },
//     {
//       title: "Cooks",
//       image:
//         "https://img.freepik.com/free-photo/young-confident-caucasian-cook-girl-chef-uniform-holds-frying-pan-thumbs-up-isolated-blue-wall-with-copy-space_141793-33183.jpg",
//       path: "/cooks",
//     },
//     {
//       title: "Electrician",
//       image:
//         "https://mehedi.asiandevelopers.com/demo/html/fouens/images/services/3.jpg",
//       path: "/electrician",
//     },
//     {
//       title: "Plumber",
//       image:
//         "https://img.freepik.com/free-photo/sanitary-technician-gesturing-thumb-up_23-2147772204.jpg",
//       path: "/plumber",
//     },
//     {
//       title: "Housekeeping",
//       image:
//         "https://img.freepik.com/free-photo/chambermaid-hotel-room_23-2148095321.jpg",
//       path: "/housekeeping",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     speed: 600,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section
//       className="bg-gradient-to-br from-blue-50 via-white to-rose-50 py-20 px-4 sm:px-10"
//       data-aos="fade-up"
//     >
//       <div className="max-w-7xl mx-auto">
//         <h2
//   className="text-4xl font-bold text-center text-gray-900 font-heading mb-4"
//   data-aos="fade-down"
// >
//   Discover <span className="bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text">Top Services</span> Tailored for You
// </h2>
// <p className="text-center text-blue-800 font-bold font-roboto mb-12">
//   Explore the most trusted and in-demand offerings at Zollowup.
// </p>


//         <div className="relative">
//           <Slider ref={sliderRef} {...settings}>
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="p-4"
//                 data-aos="zoom-in"
//                 data-aos-delay={index * 100}
//               >
//                 <div
//                   className="rounded-xl shadow-md bg-white overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
//                   onClick={() => navigate(service.path)}
//                 >
//                   <div className="relative">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
//                       <p className="text-white text-lg font-semibold font-roboto">
//                         {service.title}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="text-center py-4 font-roboto">
//                     <h5 className="text-lg font-bold text-gray-800">
//                       {service.title}
//                     </h5>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>

//           {/* Arrows (Optional if you still want them) */}
//           <button
//             onClick={() => sliderRef.current.slickPrev()}
//             className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full z-10 shadow hover:bg-blue-600"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={() => sliderRef.current.slickNext()}
//             className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full z-10 shadow hover:bg-blue-600"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-12" data-aos="fade-up">
//           <p className="text-gray-600 mb-4 font-roboto">
//             Get personalized, on-demand help with just one click.
//           </p>
//           <PrimaryButton
//             label="Explore More"
//             onClick={() => navigate("/services")}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryButton from "./PrimaryButton";

const Services = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      title: "Maid Services",
      image:
        "https://img.freepik.com/free-photo/young-woman-wearing-apron-rubber-gloves-holding-basin-with-cleaning-tools-with-big-smile-face-showing-thumbs-up-orange-wall_141793-13583.jpg",
      path: "/maid",
    },
    {
      title: "Nursing Care",
      image:
        "https://img.freepik.com/premium-photo/indian-nurse-with-uniform_984354-3724.jpg",
      path: "/nursing",
    },
    {
      title: "Drivers",
      image:
        "https://img.freepik.com/premium-photo/man-car-tablet-delivery-management-ecommerce-order-online-shopping-transport-logistics-smile-happy-courier-worker-technology-van-e-commerce-product-retail-distribution_590464-96742.jpg",
      path: "/drivers",
    },
    {
      title: "Cooks",
      image:
        "https://img.freepik.com/free-photo/young-confident-caucasian-cook-girl-chef-uniform-holds-frying-pan-thumbs-up-isolated-blue-wall-with-copy-space_141793-33183.jpg",
      path: "/cooks",
    },
    {
      title: "Electrician",
      image:
        "https://mehedi.asiandevelopers.com/demo/html/fouens/images/services/3.jpg",
      path: "/electrician",
    },
    {
      title: "Plumber",
      image:
        "https://img.freepik.com/free-photo/sanitary-technician-gesturing-thumb-up_23-2147772204.jpg",
      path: "/plumber",
    },
    {
      title: "Housekeeping",
      image:
        "https://img.freepik.com/free-photo/chambermaid-hotel-room_23-2148095321.jpg",
      path: "/housekeeping",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="bg-primary-50 py-20 px-4 sm:px-10"
      data-aos="fade-up"
    >
      {/* ✅ UPDATED: bg-primary-50 (was: from-blue-50 via-white to-rose-50) */}
      
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-center text-gray-900 font-heading mb-4"
          data-aos="fade-down"
        >
          Discover{" "}
          <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-transparent bg-clip-text">
            Top Services
          </span>{" "}
          Tailored for You
        </h2>
        {/* ✅ UPDATED: from-primary-500 to-primary-600 (was: from-[#FFB800] to-[#E91E63]) */}
        
        <p className="text-center text-primary-600 font-bold font-roboto mb-12">
          {/* ✅ UPDATED: text-primary-600 (was: text-blue-800) */}
          Explore the most trusted and in-demand offerings at Zollowup.
        </p>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {services.map((service, index) => (
              <div
                key={index}
                className="p-4"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div
                  className="rounded-xl shadow-md bg-white overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.03] border-b-4 border-primary-500"
                  onClick={() => navigate(service.path)}
                >
                  {/* ✅ UPDATED: Added border-b-4 border-primary-500 */}
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <p className="text-white text-lg font-semibold font-roboto">
                        {service.title}
                      </p>
                    </div>
                  </div>
                  <div className="text-center py-4 font-roboto">
                    <h5 className="text-lg font-bold text-gray-800">
                      {service.title}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Arrows */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 bg-primary-500 text-white p-2 rounded-full z-10 shadow hover:bg-primary-600 transition"
          >
            {/* ✅ UPDATED: bg-primary-500 hover:bg-primary-600 (was: bg-blue-500 hover:bg-blue-600) */}
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-primary-500 text-white p-2 rounded-full z-10 shadow hover:bg-primary-600 transition"
          >
            {/* ✅ UPDATED: bg-primary-500 hover:bg-primary-600 (was: bg-blue-500 hover:bg-blue-600) */}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-gray-600 mb-4 font-roboto">
            Get personalized, on-demand help with just one click.
          </p>
          <PrimaryButton
            label="Explore More"
            onClick={() => navigate("/services")}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
