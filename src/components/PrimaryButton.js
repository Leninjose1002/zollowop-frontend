// import React from "react";

// const PrimaryButton = ({ label = "Get Started", onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="relative group overflow-hidden h-14 w-48 text-lg font-roboto transition-all duration-300 bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-full shadow-md"
//     >
//       {/* Bubbles - Cooler tones */}
//       <div className="absolute w-12 h-12 rounded-full bg-cyan-400 right-12 top-12 group-hover:-top-2 group-hover:-right-2 group-hover:scale-125 transition-all duration-700 z-10 opacity-70"></div>
//       <div className="absolute w-8 h-8 rounded-full bg-blue-400 right-20 -top-6 group-hover:-top-1 group-hover:-right-1 group-hover:scale-125 transition-all duration-700 z-10 opacity-60"></div>
//       <div className="absolute w-6 h-6 rounded-full bg-indigo-400 right-28 top-6 group-hover:-top-1 group-hover:-right-2 group-hover:scale-125 transition-all duration-700 z-10 opacity-50"></div>
//       <div className="absolute w-4 h-4 rounded-full bg-purple-500 right-2 top-12 group-hover:-top-1 group-hover:-right-2 group-hover:scale-125 transition-all duration-700 z-10 opacity-40"></div>

//       {/* Button Label */}
//       <span className="relative z-20">{label}</span>
//     </button>
//   );
// };

// export default PrimaryButton;

import React from "react";

const PrimaryButton = ({ label = "Get Started", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative group overflow-hidden h-14 w-48 text-lg font-roboto transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg"
    >
      {/* Bubbles - Turquoise tones */}
      <div className="absolute w-12 h-12 rounded-full bg-primary-300 right-12 top-12 group-hover:-top-2 group-hover:-right-2 group-hover:scale-125 transition-all duration-700 z-10 opacity-70"></div>
      <div className="absolute w-8 h-8 rounded-full bg-primary-400 right-20 -top-6 group-hover:-top-1 group-hover:-right-1 group-hover:scale-125 transition-all duration-700 z-10 opacity-60"></div>
      <div className="absolute w-6 h-6 rounded-full bg-primary-500 right-28 top-6 group-hover:-top-1 group-hover:-right-2 group-hover:scale-125 transition-all duration-700 z-10 opacity-50"></div>
      <div className="absolute w-4 h-4 rounded-full bg-primary-600 right-2 top-12 group-hover:-top-1 group-hover:-right-2 group-hover:scale-125 transition-all duration-700 z-10 opacity-40"></div>

      {/* Button Label */}
      <span className="relative z-20">{label}</span>
    </button>
  );
};

export default PrimaryButton;
