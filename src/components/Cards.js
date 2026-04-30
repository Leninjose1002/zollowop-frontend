// import React from "react";

// const Cards = () => {
//   const cardData = [
//     {
//       title: "Mission",
//       description:
//         "Our mission is to innovate and deliver high-quality solutions that empower individuals and businesses. We strive to create user-friendly, efficient, and scalable digital experiences that enhance productivity and foster growth.",
//     },
//     {
//       title: "Vision",
//       description:
//         "Our vision is to be a leader in the digital landscape, setting new standards for excellence and creativity. We aim to shape the future by leveraging cutting-edge technology to provide seamless and impactful solutions that make a difference.",
//     },
//   ];

//   return (
//     <div className="flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <h2 className="text-3xl md:text-4xl font-bold text-center font-poppins mb-6 text-gray-800">
//   <span className="bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text">
//     Mission
//   </span>{" "}
//   and{" "}
//   <span className="bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text">
//     Vision
//   </span>
// </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className="relative max-w-md w-full p-8 rounded-xl bg-light text-gray-800 shadow-md overflow-hidden group"
//           >
//             <div className="absolute blur w-72 h-72 rounded-full bg-accent opacity-20 group-hover:translate-x-12 group-hover:translate-y-12 transition duration-700 right-1 -bottom-24"></div>
//             <div className="absolute blur w-12 h-12 rounded-full bg-primary opacity-20 right-12 bottom-12 group-hover:translate-x-8 transition duration-700"></div>
//             <div className="absolute blur w-36 h-36 rounded-full bg-primary opacity-20 right-1 -top-12 group-hover:-translate-y-6 transition duration-700"></div>
//             <div className="absolute blur w-24 h-24 bg-accent opacity-20 rounded-full group-hover:-translate-x-12 transition duration-700"></div>

//             <div className="relative z-10 space-y-4">
//               <h3 className="text-xl md:text-2xl font-bold font-heading">{card.title}</h3>
//               <p className="text-sm md:text-base font-sans">{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;

import React from "react";
import { Target, Eye } from "lucide-react";

const Cards = () => {
  const cardData = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To simplify home management by connecting trusted, verified professionals with families who deserve reliable, affordable, and convenient services. We believe everyone deserves access to quality home help without the stress.",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-500",
      iconColor: "text-blue-600",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be India's most trusted home services platform, where every family can find professional help for any household need—from cleaning to care to repairs. We envision a future where quality home services are accessible, affordable, and just a tap away.",
      color: "from-primary-50 to-primary-100",
      borderColor: "border-primary-500",
      iconColor: "text-primary-600",
    },
  ];

  return (
    <div className="py-16 px-6 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Mission</span> &{" "}
            <span className="text-primary-600">Vision</span>
          </h2>
          <p className="text-lg text-gray-600">
            What drives us every day at ZollowUp
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${card.color} p-8 sm:p-10 rounded-xl border-l-4 ${card.borderColor} shadow-lg hover:shadow-xl transition`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${card.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            At ZollowUp, everything we do is guided by these principles. We're committed to building a platform that serves families, empowers professionals, and transforms how people approach home management in India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
