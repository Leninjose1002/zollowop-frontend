// // import React from "react";
// // import { useParams } from "react-router-dom";

// // const MaidPage = () => {
// //   const { hours } = useParams(); // This will grab the hour parameter from the URL

// //   // Find the plan based on the hours
// //   const pricingPlans = [
// //     { title: "8 Hours", price: "₹15000", features: ["2 holidays per month."] },
// //     { title: "10 Hours", price: "₹17000", features: ["2 holidays per month."], mostPopular: true },
// //     { title: "24 Hours", price: "₹22000", features: ["2 holidays per month."] },
// //     { title: "2 Hours", price: "₹5000", features: ["2 holidays per month."] },
// //     { title: "4 Hours", price: "₹8000", features: ["2 holidays per month."] },
// //     { title: "12 Hours", price: "₹18000", features: ["2 holidays per month."] },
// //   ];

// //   // Find the selected plan based on hours
// //   const selectedPlan = pricingPlans.find((plan) => plan.title.toLowerCase() === `${hours} hours`);

// //   if (!selectedPlan) {
// //     return <h1>Plan not found!</h1>;
// //   }

// //   return (
// //     <div>
// //       <h1>{selectedPlan.title} Maid</h1>
// //       <p>Price: {selectedPlan.price}</p>
// //       <ul>
// //         {selectedPlan.features.map((feature, index) => (
// //           <li key={index}>{feature}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default MaidPage;

// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const MaidPage = () => {
//   const { hours } = useParams();
//   const navigate = useNavigate();

//   const pricingPlans = [
//     {
//       id: 1,
//       title: "2 Hours",
//       price: "₹5,000/month",
//       features: ["Quick cleaning", "1 visit per day", "Eco-friendly products"]
//     },
//     {
//       id: 2,
//       title: "4 Hours",
//       price: "₹8,000/month",
//       features: ["Thorough cleaning", "1-2 visits per day", "All services"]
//     },
//     {
//       id: 3,
//       title: "8 Hours",
//       price: "₹15,000/month",
//       features: ["Deep cleaning", "2 visits per day", "Premium services"]
//     },
//     {
//       id: 4,
//       title: "10 Hours",
//       price: "₹17,000/month",
//       features: ["Complete care", "Multiple visits", "Dedicated housekeeper"],
//       popular: true
//     },
//     {
//       id: 5,
//       title: "12 Hours",
//       price: "₹18,000/month",
//       features: ["Full home care", "Multiple visits", "Premium services"]
//     },
//     {
//       id: 6,
//       title: "24 Hours",
//       price: "₹22,000/month",
//       features: ["Round-the-clock", "Full-time service", "All features"]
//     }
//   ];

//   const handleSelectPlan = (plan) => {
//     navigate("/checkout", {
//       state: {
//         service: "Maid Service",
//         planTitle: plan.title,
//         price: plan.price
//       }
//     });
//   };

//   return (
//     <div className="bg-white min-h-screen py-12 px-4">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Header */}
//         <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">
//           Maid Service Plans
//         </h1>
//         <p className="text-center text-gray-600 mb-12">
//           Choose the plan that fits your needs
//         </p>

//         {/* Plans Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {pricingPlans.map((plan) => (
//             <div
//               key={plan.id}
//               className={`border rounded-lg p-6 ${
//                 plan.popular ? 'border-gray-900 bg-gray-50' : 'border-gray-200'
//               }`}
//             >
//               {/* Plan Header */}
//               {plan.popular && (
//                 <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">
//                   Most Popular
//                 </p>
//               )}
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {plan.title}
//               </h3>
//               <p className="text-2xl font-bold text-gray-900 mb-6">
//                 {plan.price}
//               </p>

//               {/* Features */}
//               <ul className="space-y-2 mb-6 text-sm text-gray-700">
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <span className="text-gray-400 mt-0.5">•</span>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Button */}
//               <button
//                 onClick={() => handleSelectPlan(plan)}
//                 className={`w-full py-2 rounded font-medium transition-colors ${
//                   plan.popular
//                     ? 'bg-gray-900 text-white hover:bg-gray-800'
//                     : 'border border-gray-300 text-gray-900 hover:bg-gray-50'
//                 }`}
//               >
//                 Select Plan
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MaidPage;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MaidPage = () => {
  const { hours } = useParams();
  const navigate = useNavigate();

  const pricingPlans = [
    {
      id: 1,
      title: "2 Hours",
      price: "₹5,000/month",
      features: ["Quick cleaning", "1 visit per day", "Eco-friendly products"]
    },
    {
      id: 2,
      title: "4 Hours",
      price: "₹8,000/month",
      features: ["Thorough cleaning", "1-2 visits per day", "All services"]
    },
    {
      id: 3,
      title: "8 Hours",
      price: "₹15,000/month",
      features: ["Deep cleaning", "2 visits per day", "Premium services"]
    },
    {
      id: 4,
      title: "10 Hours",
      price: "₹17,000/month",
      features: ["Complete care", "Multiple visits", "Dedicated housekeeper"],
      popular: true
    },
    {
      id: 5,
      title: "12 Hours",
      price: "₹18,000/month",
      features: ["Full home care", "Multiple visits", "Premium services"]
    },
    {
      id: 6,
      title: "24 Hours",
      price: "₹22,000/month",
      features: ["Round-the-clock", "Full-time service", "All features"]
    }
  ];

  const handleSelectPlan = (plan) => {
    navigate("/checkout", {
      state: {
        service: "Maid Service",
        planTitle: plan.title,
        price: plan.price
      }
    });
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #f0faf8 0%, #e8f5f2 100%)' }} className="py-12 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Maid Service Plans
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Choose the plan that fits your needs
        </p>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white p-6 rounded-lg border transition-all"
              style={{
                borderColor: plan.popular ? '#2d5f4f' : '#E5E7EB',
                borderWidth: plan.popular ? '2px' : '1px'
              }}
            >
              {/* Plan Header */}
              {plan.popular && (
                <p className="text-xs font-semibold text-gray-600 mb-2 uppercase" style={{ color: '#2d5f4f' }}>
                  Most Popular
                </p>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {plan.title}
              </h3>

              {/* Pricing */}
              <div className="mb-6 pb-6 border-b" style={{ borderColor: '#E5E7EB' }}>
                <p className="text-2xl font-bold" style={{ color: '#2d5f4f' }}>
                  {plan.price}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6 text-sm text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span style={{ color: '#2d5f4f' }}>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={() => handleSelectPlan(plan)}
                className="w-full py-2 rounded font-semibold transition-all text-white"
                style={{
                  background: plan.popular ? '#2d5f4f' : 'transparent',
                  color: plan.popular ? 'white' : '#2d5f4f',
                  border: plan.popular ? 'none' : '2px solid #2d5f4f'
                }}
                onMouseOver={(e) => {
                  if (plan.popular) {
                    e.currentTarget.style.background = '#1d3f2f';
                  } else {
                    e.currentTarget.style.background = 'rgba(45, 95, 79, 0.05)';
                  }
                }}
                onMouseOut={(e) => {
                  if (plan.popular) {
                    e.currentTarget.style.background = '#2d5f4f';
                  } else {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaidPage;
