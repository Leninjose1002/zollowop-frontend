// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useNavigate } from "react-router-dom";
// import PrimaryButton from "./PrimaryButton";

// const HeroSection = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const navigate = useNavigate();

//   const images = [
//     "https://img.freepik.com/free-photo/male-chef-cook-wearing-black-uniform-cook-hat-holding-plate-with-fresh-vegetables-showing-thumbs-up-standing-white-background_141793-54254.jpg",
//     "https://img.freepik.com/free-photo/young-male-cook-chef-uniform-holding-lettuce-spaghetti-pasta-looking-isolated-orange-space_141793-45288.jpg",
//     "https://img.freepik.com/premium-photo/beautiful-woman-traditional-candomble-clothing-opening-clay-pot-with-smoke-coming-out-it_676921-22909.jpg",
//     "https://img.freepik.com/free-photo/male-plumber-working-fix-problems-client-s-house_23-2150990737.jpg",
//     "https://img.freepik.com/premium-photo/plumber-hands-fixing-water-tap-background_488220-7944.jpg",
//     "https://img.freepik.com/free-photo/male-worker-wearing-work-clothes_273609-10809.jpg",
//   ];

//   return (
//     <section className="bg-gradient-to-br from-blue-50 via-white to-pink-50 py-16 px-4 md:px-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-12" data-aos="fade-up">
//           <h2 className="text-4xl font-bold text-gray-900 font-heading">
//             Making Home Services <span className="font-bold bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text font-heading leading-snug">Effortless</span>
//           </h2>
//           <p className="mt-2 text-blue-800 font-bold font-roboto">
//             Expert care, just a click away.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="flex flex-col md:flex-row items-center gap-12" data-aos="fade-up">
//           {/* Text */}
//           <div className="md:w-1/2 text-center md:text-left">
//             <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text font-heading leading-snug">
//               Skilled Professionals <br />
//               <span className="text-accent italic text-3xl">Delivered to Your Door</span>
//             </h1>
//             <p className="text-gray-700 font-roboto mb-4 text-base">
//               Zollowup offers on-demand home services: cleaning, repairs, cooking, elderly care,
//               and more — handled by trained, background-checked experts.
//             </p>
//             <p className="text-gray-700 font-roboto mb-6 text-base">
//               Book with ease, enjoy competitive pricing, and experience seamless doorstep service
//               without hassle.
//             </p>

//             <PrimaryButton
//               label="Book Your Service"
//               onClick={() => navigate("/services")}
//             />
//           </div>

//           {/* Image Grid */}
//           <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-5" data-aos="fade-left">
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className="relative group rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
//               >
//                 <img
//                   src={image}
//                   alt={`Service ${index + 1}`}
//                   className="w-full h-44 sm:h-52 object-cover"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition duration-300" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useNavigate } from "react-router-dom";
// import PrimaryButton from "./PrimaryButton";

// const HeroSection = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const navigate = useNavigate();

//   const images = [
//     "https://img.freepik.com/free-photo/male-chef-cook-wearing-black-uniform-cook-hat-holding-plate-with-fresh-vegetables-showing-thumbs-up-standing-white-background_141793-54254.jpg",
//     "https://img.freepik.com/free-photo/young-male-cook-chef-uniform-holding-lettuce-spaghetti-pasta-looking-isolated-orange-space_141793-45288.jpg",
//     "https://img.freepik.com/premium-photo/beautiful-woman-traditional-candomble-clothing-opening-clay-pot-with-smoke-coming-out-it_676921-22909.jpg",
//     "https://img.freepik.com/free-photo/male-plumber-working-fix-problems-client-s-house_23-2150990737.jpg",
//     "https://img.freepik.com/premium-photo/plumber-hands-fixing-water-tap-background_488220-7944.jpg",
//     "https://img.freepik.com/free-photo/male-worker-wearing-work-clothes_273609-10809.jpg",
//   ];

//   return (
//     <section className="bg-primary-50 py-16 px-4 md:px-16 overflow-hidden">
//       {/* ✅ UPDATED: Light turquoise background (was: from-blue-50 via-white to-pink-50) */}
      
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-12" data-aos="fade-up">
//           <h2 className="text-4xl font-bold text-gray-900 font-heading">
//             Making Home Services{" "}
//             <span className="font-bold bg-gradient-to-r from-primary-500 to-primary-600 text-transparent bg-clip-text font-heading leading-snug">
//               Effortless
//             </span>
//             {/* ✅ UPDATED: Turquoise gradient (was: from-[#FFB800] to-[#E91E63]) */}
//           </h2>
//           <p className="mt-2 text-primary-600 font-bold font-roboto">
//             {/* ✅ UPDATED: Dark turquoise text (was: text-blue-800) */}
//             Expert care, just a click away.
//           </p>
//         </div>

//         {/* Content */}
//         <div
//           className="flex flex-col md:flex-row items-center gap-12"
//           data-aos="fade-up"
//         >
//           {/* Text */}
//           <div className="md:w-1/2 text-center md:text-left">
//             <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 text-transparent bg-clip-text font-heading leading-snug">
//               {/* ✅ UPDATED: Turquoise gradient (was: from-[#FFB800] to-[#E91E63]) */}
//               Skilled Professionals <br />
//               <span className="text-primary-600 italic text-3xl">
//                 {/* ✅ UPDATED: Dark turquoise (was: text-accent) */}
//                 Delivered to Your Door
//               </span>
//             </h1>
//             <p className="text-gray-700 font-roboto mb-4 text-base">
//               Zollowup offers on-demand home services: cleaning, repairs,
//               cooking, elderly care, and more — handled by trained,
//               background-checked experts.
//             </p>
//             <p className="text-gray-700 font-roboto mb-6 text-base">
//               Book with ease, enjoy competitive pricing, and experience seamless
//               doorstep service without hassle.
//             </p>

//             <PrimaryButton
//               label="Book Your Service"
//               onClick={() => navigate("/services")}
//             />
//           </div>

//           {/* Image Grid */}
//           <div
//             className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-5"
//             data-aos="fade-left"
//           >
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className="relative group rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 border-2 border-primary-200"
//               >
//                 <img
//                   src={image}
//                   alt={`Service ${index + 1}`}
//                   className="w-full h-44 sm:h-52 object-cover"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition duration-300" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const navigate = useNavigate();

  return (
    <section className="bg-primary-50 py-20 px-4 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Headline */}
        <div data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading mb-4 leading-tight">
            Book Trusted Home Services
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-transparent bg-clip-text">
              Instantly
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-700 font-roboto mb-8 max-w-2xl mx-auto">
            Verified professionals at your doorstep. Fast. Affordable. Reliable.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="bg-white rounded-full px-5 py-3 shadow-sm border border-primary-200">
              <span className="text-sm font-semibold text-primary-600">⭐ 4.9/5 Rating</span>
            </div>
            <div className="bg-white rounded-full px-5 py-3 shadow-sm border border-primary-200">
              <span className="text-sm font-semibold text-primary-600">🏠 1K+ Trusted Homes</span>
            </div>
            <div className="bg-white rounded-full px-5 py-3 shadow-sm border border-primary-200">
              <span className="text-sm font-semibold text-primary-600">✅ Google Verified</span>
            </div>
          </div>

          {/* Big CTA Button */}
          <div data-aos="fade-up" data-aos-delay="200">
            <PrimaryButton
              label="Book Your Service"
              onClick={() => navigate("/services")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
