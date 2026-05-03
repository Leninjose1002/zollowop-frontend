// // import React from "react";
// // import { useNavigate } from "react-router-dom"; // Import useNavigate
// // import { useCart } from "./CartContext";

// // const pricingPlans = [
// //   { title: "8 Hours", price: "₹15000", features: ["2 holidays per month."] },
// //   { title: "12 Hours", price: "₹17000", features: ["2 holidays per month."], mostPopular: true },
// //   { title: "24 Hours", price: "₹22000", features: ["2 holidays per month."] },

// // ];

// // const Pricing = () => {
// //   const { bookedServices } = useCart();
// //   const navigate = useNavigate(); // Initialize navigate

// //   const handleSelectMaid = (plan) => {
// //     const hours = parseInt(plan.title.split(" ")[0]);
// //     navigate(`/contact`, { state: { selectedHours: hours } });
// //   };


// //   return (
// //     <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="text-center mb-6">
// //   <h2 className="text-3xl sm:text-4xl font-bold font-poppins bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text inline-block">
// //     Our Pricing
// //   </h2>
// //   <p className="text-blue-900 font-bold text-base sm:text-lg mt-2">
// //     Affordable & Transparent Rates
// //   </p>
// // </div>


// //         {/* Pricing Cards */}
// //         <div className="flex flex-wrap justify-center gap-5 mb-8">
// //           {pricingPlans.map((plan, idx) => (
// //             <div
// //               key={idx}
// //               className="relative w-full sm:w-[calc(50%-10px)] lg:w-64 bg-white p-5 rounded-xl border transition-all duration-300 text-center shadow-sm hover:shadow-md hover:border-blue-500"
// //             >
// //               {plan.mostPopular && (
// //                 <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
// //                   Most Popular
// //                 </span>
// //               )}
// //               <h3 className="text-xl font-semibold text-gray-700 mb-1">{plan.title}</h3>
// //               <p className="text-2xl font-bold text-gray-800 mb-2">{plan.price}</p>
// //               <ul className="text-sm text-gray-600 mb-4 space-y-1">
// //                 {plan.features.map((f, i) => (
// //                   <li key={i}>• {f}</li>
// //                 ))}
// //               </ul>
// //               <button
// //                 onClick={() => handleSelectMaid(plan)}
// //                 disabled={bookedServices.has(plan.title)}
// //                 className={`w-full py-2 rounded-lg font-medium transition ${bookedServices.has(plan.title)
// //                   ? "bg-white text-blue-600 border border-blue-600 cursor-not-allowed"
// //                   : "bg-blue-900 text-white hover:bg-blue-700"
// //                   }`}
// //               >
// //                 {bookedServices.has(plan.title) ? "Booked" : "Select Your Maid"}
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Pricing;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "./CartContext";
// import { Check } from "lucide-react";

// const pricingPlans = [
//   {
//     id: 1,
//     title: "8 Hours",
//     price: "₹15,000",
//     period: "/month",
//     description: "Perfect for regular cleaning needs",
//     features: ["2 holidays per month", "Flexible scheduling", "All basic cleaning included", "Eco-friendly products"],
//     mostPopular: false
//   },
//   {
//     id: 2,
//     title: "12 Hours",
//     price: "₹17,000",
//     period: "/month",
//     description: "Most popular choice for families",
//     features: ["2 holidays per month", "Priority scheduling", "All premium services", "Dedicated professional", "Free supply replenishment"],
//     mostPopular: true
//   },
//   {
//     id: 3,
//     title: "24 Hours",
//     price: "₹22,000",
//     period: "/month",
//     description: "Complete home care solution",
//     features: ["2 holidays per month", "Round-the-clock availability", "All premium services", "Personal attention", "Weekly deep cleans"],
//     mostPopular: false
//   }
// ];

// const Pricing = () => {
//   const { bookedServices } = useCart();
//   const navigate = useNavigate();
//   const [hoveredPlanId, setHoveredPlanId] = useState(null);

//   const handleSelectMaid = (plan) => {
//     const hours = parseInt(plan.title.split(" ")[0]);
//     navigate(`/contact`, { state: { selectedHours: hours } });
//   };

//   return (
//     <div style={{ background: 'linear-gradient(135deg, #f0faf8 0%, #e8f5f2 100%)' }} className="py-16 px-4">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="mb-16 text-center">
//           <div className="inline-block mb-4 px-4 py-2 rounded-full" style={{ background: 'rgba(45, 95, 79, 0.08)' }}>
//             <span className="text-sm font-semibold" style={{ color: '#2d5f4f', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
//               💰 Transparent Pricing
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
//             Our <span style={{ color: '#2d5f4f' }}>Pricing Plans</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Affordable & transparent rates. Choose the plan that fits your home's needs.
//           </p>
//         </div>

//         {/* Pricing Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {pricingPlans.map((plan) => {
//             const isBooked = bookedServices.has(plan.title);
//             const isHovered = hoveredPlanId === plan.id;

//             return (
//               <div
//                 key={plan.id}
//                 className="relative transition-all duration-300"
//                 style={{
//                   transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
//                 }}
//                 onMouseEnter={() => setHoveredPlanId(plan.id)}
//                 onMouseLeave={() => setHoveredPlanId(null)}
//               >
//                 {/* Most Popular Badge */}
//                 {plan.mostPopular && (
//                   <div className="absolute -top-4 left-8 right-8 flex justify-center z-10">
//                     <div className="bg-gradient-to-r from-green-400 to-teal-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
//                       ⭐ Most Popular
//                     </div>
//                   </div>
//                 )}

//                 <div
//                   className="h-full p-8 rounded-20 transition-all duration-300"
//                   style={{
//                     background: 'white',
//                     boxShadow:
//                       plan.mostPopular || isHovered
//                         ? '0 20px 40px rgba(45, 95, 79, 0.15)'
//                         : '0 2px 8px rgba(0, 0, 0, 0.08)',
//                     border: plan.mostPopular ? '2px solid #2d5f4f' : '1px solid rgba(0, 0, 0, 0.1)',
//                     borderRadius: '20px'
//                   }}
//                 >
//                   {/* Plan Header */}
//                   <div className="mb-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                       {plan.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm">{plan.description}</p>
//                   </div>

//                   {/* Pricing */}
//                   <div className="mb-8 pb-8 border-b border-gray-200">
//                     <div className="flex items-baseline gap-2 mb-2">
//                       <span className="text-4xl font-bold" style={{ color: '#2d5f4f' }}>
//                         {plan.price}
//                       </span>
//                       <span className="text-gray-600 text-sm font-medium">
//                         {plan.period}
//                       </span>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       Monthly billing • Cancel anytime
//                     </p>
//                   </div>

//                   {/* Features List */}
//                   <ul className="space-y-4 mb-8">
//                     {plan.features.map((feature, index) => (
//                       <li key={index} className="flex items-start gap-3">
//                         <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#2d5f4f' }} />
//                         <span className="text-gray-700 text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* CTA Button */}
//                   <button
//                     onClick={() => handleSelectMaid(plan)}
//                     disabled={isBooked}
//                     className="w-full py-3 rounded-12 font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                     style={{
//                       background: isBooked 
//                         ? '#9CA3AF' 
//                         : plan.mostPopular 
//                           ? '#2d5f4f' 
//                           : 'transparent',
//                       color: isBooked 
//                         ? 'white' 
//                         : plan.mostPopular 
//                           ? 'white' 
//                           : '#2d5f4f',
//                       border: !isBooked && !plan.mostPopular ? '2px solid #2d5f4f' : 'none',
//                       cursor: isBooked ? 'not-allowed' : 'pointer'
//                     }}
//                     onMouseOver={(e) => {
//                       if (!isBooked) {
//                         if (plan.mostPopular) {
//                           e.currentTarget.style.background = '#1d3f2f';
//                           e.currentTarget.style.boxShadow = '0 8px 16px rgba(45, 95, 79, 0.3)';
//                         } else {
//                           e.currentTarget.style.background = 'rgba(45, 95, 79, 0.05)';
//                         }
//                       }
//                     }}
//                     onMouseOut={(e) => {
//                       if (!isBooked) {
//                         if (plan.mostPopular) {
//                           e.currentTarget.style.background = '#2d5f4f';
//                           e.currentTarget.style.boxShadow = 'none';
//                         } else {
//                           e.currentTarget.style.background = 'transparent';
//                         }
//                       }
//                     }}
//                   >
//                     {isBooked ? "✓ Booked" : "Select Your Maid"}
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* FAQ Section */}
//         <div className="max-w-3xl mx-auto">
//           <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
//             Have Questions?
//           </h3>

//           <div className="space-y-4">
//             {[
//               {
//                 q: "Can I change my plan?",
//                 a: "Yes, you can upgrade or downgrade your plan anytime. Changes take effect at the next billing cycle."
//               },
//               {
//                 q: "What if I'm not satisfied?",
//                 a: "We offer 100% satisfaction guarantee. If you're not happy, we'll replace your professional or provide a refund."
//               },
//               {
//                 q: "Are there hidden charges?",
//                 a: "No, our pricing is completely transparent. What you see is what you pay—no hidden fees."
//               }
//             ].map((faq, index) => (
//               <div key={index} className="bg-white p-6 rounded-16 shadow-sm border border-gray-100">
//                 <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
//                 <p className="text-gray-600 text-sm">{faq.a}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .rounded-20 {
//           border-radius: 20px;
//         }
//         .rounded-16 {
//           border-radius: 16px;
//         }
//         .rounded-12 {
//           border-radius: 12px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Pricing;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const pricingPlans = [
  {
    id: 1,
    title: "8 Hours",
    price: "₹15,000",
    period: "/month",
    features: ["2 holidays per month", "Flexible scheduling", "All basic cleaning"],
    mostPopular: false
  },
  {
    id: 2,
    title: "12 Hours",
    price: "₹17,000",
    period: "/month",
    features: ["2 holidays per month", "Priority scheduling", "All premium services"],
    mostPopular: true
  },
  {
    id: 3,
    title: "24 Hours",
    price: "₹22,000",
    period: "/month",
    features: ["2 holidays per month", "Round-the-clock availability", "All premium services"],
    mostPopular: false
  }
];

const Pricing = () => {
  const { bookedServices } = useCart();
  const navigate = useNavigate();

  const handleSelectMaid = (plan) => {
    const hours = parseInt(plan.title.split(" ")[0]);
    navigate(`/contact`, { state: { selectedHours: hours } });
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #f0faf8 0%, #e8f5f2 100%)' }} className="py-12 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Our Pricing
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Affordable & transparent rates
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => {
            const isBooked = bookedServices.has(plan.title);

            return (
              <div
                key={plan.id}
                className="bg-white p-6 rounded-lg border transition-all"
                style={{
                  borderColor: plan.mostPopular ? '#2d5f4f' : '#E5E7EB',
                  borderWidth: plan.mostPopular ? '2px' : '1px'
                }}
              >
                {/* Most Popular Label */}
                {plan.mostPopular && (
                  <p className="text-xs font-semibold mb-2 uppercase" style={{ color: '#2d5f4f' }}>
                    Most Popular
                  </p>
                )}

                {/* Plan Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.title}
                </h3>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b" style={{ borderColor: '#E5E7EB' }}>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold" style={{ color: '#2d5f4f' }}>
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-600">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">Monthly billing</p>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span style={{ color: '#2d5f4f' }}>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() => handleSelectMaid(plan)}
                  disabled={isBooked}
                  className="w-full py-2 rounded font-semibold transition-all disabled:opacity-50"
                  style={{
                    background: isBooked 
                      ? '#E5E7EB' 
                      : plan.mostPopular 
                        ? '#2d5f4f' 
                        : 'transparent',
                    color: isBooked 
                      ? '#9CA3AF' 
                      : plan.mostPopular 
                        ? 'white' 
                        : '#2d5f4f',
                    border: !isBooked && !plan.mostPopular ? '2px solid #2d5f4f' : 'none',
                    cursor: isBooked ? 'not-allowed' : 'pointer'
                  }}
                  onMouseOver={(e) => {
                    if (!isBooked) {
                      if (plan.mostPopular) {
                        e.currentTarget.style.background = '#1d3f2f';
                      } else {
                        e.currentTarget.style.background = 'rgba(45, 95, 79, 0.05)';
                      }
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isBooked) {
                      if (plan.mostPopular) {
                        e.currentTarget.style.background = '#2d5f4f';
                      } else {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }
                  }}
                >
                  {isBooked ? "✓ Booked" : "Select Your Maid"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

