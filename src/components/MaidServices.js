// // // import { useState } from "react";
// // // import { FaBroom, FaUtensils, FaBath, FaConciergeBell } from "react-icons/fa";

// // // const services = [
// // //   { id: 1, name: "House Cleaning", icon: <FaBroom />, description: "Experience a spotless home with our professional house cleaning services. Reliable, thorough, and tailored to your needs.", image: "images/maid-page/maid.avif" },
// // //   { id: 2, name: "Kitchen Cleaning", icon: <FaUtensils />, description: "Make your kitchen shine with our expert cleaning service. We tackle grease, grime, and germs for a spotless, hygienic space.", image: "images/maid-page/kitchen.avif" },
// // //   { id: 3, name: "Bathroom Cleaning", icon: <FaBath />, description: "Get a sparkling clean bathroom with our deep cleaning service. We remove stains, sanitize surfaces, and leave it fresh and hygienic.", image: "images/maid-page/bathroom.avif" },
// // //   { id: 4, name: "Cooks", icon: <FaConciergeBell />, description: "Cooks are skilled professionals who prepare and present food in homes, restaurants, or other establishments. They follow recipes, manage kitchen tasks, and ensure food is cooked safely and deliciously.", 
// // //     image: "images/maid-page/cook.jpg" },
// // //   { id: 5, name: "Dusting, Laundry", icon: <FaBath />, description: "Dusting involves removing dirt and allergens from surfaces to keep spaces clean and fresh. Laundry is the process of washing, drying, and folding clothes to maintain hygiene and appearance.", image: "images/maid-page/dusting.avif" },


// // // ];

// // // const MaidServices = () => {
// // //   const [selectedService, setSelectedService] = useState(services[0]);

// // //   return (
// // //     <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto p-6 mb-5 border rounded-lg shadow-lg  bg-gradient-to-r from-black to-green-700">
// // //       {/* Left Sidebar */}
// // //       <div className="w-full md:w-1/3 rounded-md  p-4  bg-yellow-300">
// // //         <h2 className="text-lg font-semibold mb-4">Our Maid Service</h2>
// // //         <ul>
// // //           {services.map((service) => (
// // //             <li
// // //               key={service.id}
// // //               className={`flex items-center gap-3 p-3 cursor-pointer rounded-md mb-2 transition duration-300 ${selectedService.id === service.id ? "bg-black text-white" : "bg-gray-200 hover:bg-green-300"}`}
// // //               onClick={() => setSelectedService(service)}
// // //             >
// // //               <span className="text-2xl">{service.icon}</span>
// // //               <span >{service.name}</span>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>

// // //       {/* Right Display Section */}
// // //       <div className="w-full md:w-2/3 p-4 flex flex-col items-center text-center">
// // //         <img src={selectedService.image} alt={selectedService.name} className="w-full max-w-sm h-48 object-cover rounded-lg mb-4" />
// // //         <h2 className="text-xl font-semibold mb-2 text-yellow-100">{selectedService.name}</h2>
// // //         <p className="text-white">{selectedService.description}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MaidServices;

// // import { useState } from "react";
// // import { FaBroom, FaUtensils, FaBath, FaConciergeBell, FaSprayCan, FaChevronRight } from "react-icons/fa";

// // const services = [
// //   {
// //     id: 1,
// //     name: "House Cleaning",
// //     icon: FaBroom,
// //     description: "Experience a spotless home with our professional house cleaning services. Reliable, thorough, and tailored to your needs.",
// //     image: "images/maid-page/maid.avif",
// //     features: ["Dusting & vacuuming", "Floor cleaning", "Room organization"]
// //   },
// //   {
// //     id: 2,
// //     name: "Kitchen Cleaning",
// //     icon: FaUtensils,
// //     description: "Make your kitchen shine with our expert cleaning service. We tackle grease, grime, and germs for a spotless, hygienic space.",
// //     image: "images/maid-page/kitchen.avif",
// //     features: ["Deep degreasing", "Appliance cleaning", "Countertop sanitization"]
// //   },
// //   {
// //     id: 3,
// //     name: "Bathroom Cleaning",
// //     icon: FaBath,
// //     description: "Get a sparkling clean bathroom with our deep cleaning service. We remove stains, sanitize surfaces, and leave it fresh and hygienic.",
// //     image: "images/maid-page/bathroom.avif",
// //     features: ["Tile & grout cleaning", "Fixture sanitization", "Mirror polishing"]
// //   },
// //   {
// //     id: 4,
// //     name: "Cooks",
// //     icon: FaConciergeBell,
// //     description: "Skilled professionals who prepare and present food in homes, restaurants, or other establishments. They follow recipes, manage kitchen tasks, and ensure food is cooked safely and deliciously.",
// //     image: "images/maid-page/cook.jpg",
// //     features: ["Meal preparation", "Menu planning", "Dietary accommodations"]
// //   },
// //   {
// //     id: 5,
// //     name: "Dusting & Laundry",
// //     icon: FaSprayCan,
// //     description: "Dusting involves removing dirt and allergens from surfaces to keep spaces clean and fresh. Laundry is the process of washing, drying, and folding clothes to maintain hygiene and appearance.",
// //     image: "images/maid-page/dusting.avif",
// //     features: ["Gentle dusting", "Laundry care", "Fabric treatment"]
// //   }
// // ];

// // const MaidServices = () => {
// //   const [selectedService, setSelectedService] = useState(services[0]);
// //   // const [hoveredServiceId, setHoveredServiceId] = useState(null);

// //   return (
// //     <div style={{ background: 'linear-gradient(135deg, #f0faf8 0%, #e8f5f2 100%)' }} className="py-12 px-4">
// //       <div className="max-w-6xl mx-auto">
        
// //         {/* Header */}
// //         <div className="mb-12 text-center">
// //           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
// //             Our <span style={{ color: '#2d5f4f' }}>Maid Services</span>
// //           </h2>
// //           <p className="text-lg text-gray-600">
// //             Professional cleaning and home services tailored to your needs
// //           </p>
// //         </div>

// //         <div className="bg-white rounded-20 shadow-lg overflow-hidden">
// //           <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-0">
            
// //             {/* Left Sidebar - Service List */}
// //             <div className="md:col-span-1 lg:col-span-1 p-6" style={{ background: 'linear-gradient(135deg, #2d5f4f 0%, #1d3f2f 100%)' }}>
// //               <h3 className="text-lg font-bold text-white mb-6">Services</h3>
// //               <nav className="space-y-3">
// //                 {services.map((service) => {
// //                   const IconComponent = service.icon;
// //                   const isSelected = selectedService.id === service.id;
                  
// //                   return (
// //                     <button
// //                       key={service.id}
// //                       onClick={() => setSelectedService(service)}
// //                       // onMouseEnter={() => setHoveredServiceId(service.id)}
// //                       // onMouseLeave={() => setHoveredServiceId(null)}
// //                       className="w-full flex items-center gap-3 p-3 rounded-12 transition-all duration-300 text-left group"
// //                       style={{
// //                         background: isSelected ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)',
// //                         borderLeft: isSelected ? '4px solid #FFD700' : '4px solid transparent',
// //                         color: isSelected ? '#FFD700' : '#E8F5F2'
// //                       }}
// //                     >
// //                       <IconComponent className="text-lg flex-shrink-0" />
// //                       <span className="font-semibold text-sm">{service.name}</span>
// //                       {isSelected && (
// //                         <FaChevronRight  className="ml-auto text-lg opacity-75" />
// //                       )}
// //                     </button>
// //                   );
// //                 })}
// //               </nav>
// //             </div>

// //             {/* Right Display Section */}
// //             <div className="md:col-span-3 lg:col-span-4 p-8 flex flex-col justify-between">
// //               {/* Service Image */}
// //               <div className="mb-8 relative">
// //                 <img
// //                   src={selectedService.image}
// //                   alt={selectedService.name}
// //                   className="w-full h-64 md:h-80 object-cover rounded-16 shadow-lg transition-transform duration-300"
// //                   style={{
// //                     boxShadow: '0 16px 40px rgba(45, 95, 79, 0.15)'
// //                   }}
// //                 />
// //                 <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
// //                   <span className="text-sm font-bold" style={{ color: '#2d5f4f' }}>
// //                     ⭐ Verified
// //                   </span>
// //                 </div>
// //               </div>

// //               {/* Service Details */}
// //               <div>
// //                 <h3 className="text-3xl font-bold mb-3 text-gray-900">
// //                   {selectedService.name}
// //                 </h3>
// //                 <p className="text-lg text-gray-700 leading-relaxed mb-6">
// //                   {selectedService.description}
// //                 </p>

// //                 {/* Features */}
// //                 <div className="mb-8">
// //                   <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
// //                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// //                     {selectedService.features.map((feature, index) => (
// //                       <li
// //                         key={index}
// //                         className="flex items-start gap-3 p-3 rounded-lg"
// //                         style={{ background: 'rgba(45, 95, 79, 0.05)' }}
// //                       >
// //                         <span className="text-lg mt-0.5" style={{ color: '#2d5f4f' }}>✓</span>
// //                         <span className="text-gray-700 font-medium">{feature}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>

// //                 {/* CTA Button */}
// //                 <button
// //                   className="w-full md:w-auto px-8 py-3 text-white font-bold rounded-12 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
// //                   style={{
// //                     background: '#2d5f4f'
// //                   }}
// //                   onMouseOver={(e) => {
// //                     e.currentTarget.style.background = '#1d3f2f';
// //                     e.currentTarget.style.transform = 'translateY(-2px)';
// //                   }}
// //                   onMouseOut={(e) => {
// //                     e.currentTarget.style.background = '#2d5f4f';
// //                     e.currentTarget.style.transform = 'translateY(0)';
// //                   }}
// //                 >
// //                   Book This Service →
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Service Stats */}
// //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
// //           <div className="bg-white p-6 rounded-16 text-center shadow-md">
// //             <div className="text-3xl font-bold mb-2" style={{ color: '#2d5f4f' }}>5+</div>
// //             <p className="text-gray-600 font-medium">Service Types</p>
// //           </div>
// //           <div className="bg-white p-6 rounded-16 text-center shadow-md">
// //             <div className="text-3xl font-bold mb-2" style={{ color: '#2d5f4f' }}>3000+</div>
// //             <p className="text-gray-600 font-medium">Happy Customers</p>
// //           </div>
// //           <div className="bg-white p-6 rounded-16 text-center shadow-md">
// //             <div className="text-3xl font-bold mb-2" style={{ color: '#2d5f4f' }}>4.9★</div>
// //             <p className="text-gray-600 font-medium">Average Rating</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Custom Styles for Rounded Corners */}
// //       <style jsx>{`
// //         .rounded-20 {
// //           border-radius: 20px;
// //         }
// //         .rounded-16 {
// //           border-radius: 16px;
// //         }
// //         .rounded-12 {
// //           border-radius: 12px;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default MaidServices;

// import { useState } from "react";

// const services = [
//   {
//     id: 1,
//     name: "House Cleaning",
//     description: "Professional house cleaning service for a spotless home.",
//     image: "images/maid-page/maid.avif"
//   },
//   {
//     id: 2,
//     name: "Kitchen Cleaning",
//     description: "Expert kitchen cleaning including all appliances and surfaces.",
//     image: "images/maid-page/kitchen.avif"
//   },
//   {
//     id: 3,
//     name: "Bathroom Cleaning",
//     description: "Deep bathroom cleaning with sanitization.",
//     image: "images/maid-page/bathroom.avif"
//   },
//   {
//     id: 4,
//     name: "Cooks",
//     description: "Skilled professionals for meal preparation and kitchen management.",
//     image: "images/maid-page/cook.jpg"
//   },
//   {
//     id: 5,
//     name: "Dusting & Laundry",
//     description: "Dusting and laundry services for home maintenance.",
//     image: "images/maid-page/dusting.avif"
//   }
// ];

// const MaidServices = () => {
//   const [selectedService, setSelectedService] = useState(services[0]);

//   return (
//     <div className="bg-white min-h-screen py-8 px-4">
//       <div className="max-w-5xl mx-auto">
        
//         {/* Header */}
//         <h1 className="text-2xl font-semibold text-center text-gray-900 mb-8">
//           Our Services
//         </h1>

//         {/* Two Column Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
//           {/* Left - Service List */}
//           <div className="bg-gray-50 p-6 rounded-lg h-fit">
//             <h2 className="font-semibold text-gray-900 mb-4">Services</h2>
//             <nav className="space-y-2">
//               {services.map((service) => (
//                 <button
//                   key={service.id}
//                   onClick={() => setSelectedService(service)}
//                   className={`w-full text-left px-4 py-2 rounded text-sm transition-colors ${
//                     selectedService.id === service.id
//                       ? 'bg-gray-900 text-white font-medium'
//                       : 'text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {service.name}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           {/* Right - Service Details */}
//           <div className="md:col-span-2">
//             {/* Image */}
//             <img
//               src={selectedService.image}
//               alt={selectedService.name}
//               className="w-full h-64 object-cover rounded-lg mb-6 border border-gray-200"
//             />

//             {/* Content */}
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               {selectedService.name}
//             </h2>
//             <p className="text-gray-700 mb-8 leading-relaxed text-base">
//               {selectedService.description}
//             </p>

//             {/* CTA */}
//             <button className="px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 transition-colors">
//               Book Service
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MaidServices;

import { useState } from "react";
import { FaBroom, FaUtensils, FaBath, FaConciergeBell, FaSprayCan } from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "House Cleaning",
    icon: FaBroom,
    description: "Professional house cleaning service for a spotless home.",
    image: "images/maid-page/maid.avif"
  },
  {
    id: 2,
    name: "Kitchen Cleaning",
    icon: FaUtensils,
    description: "Expert kitchen cleaning including all appliances and surfaces.",
    image: "images/maid-page/kitchen.avif"
  },
  {
    id: 3,
    name: "Bathroom Cleaning",
    icon: FaBath,
    description: "Deep bathroom cleaning with sanitization.",
    image: "images/maid-page/bathroom.avif"
  },
  {
    id: 4,
    name: "Cooks",
    icon: FaConciergeBell,
    description: "Skilled professionals for meal preparation and kitchen management.",
    image: "images/maid-page/cook.jpg"
  },
  {
    id: 5,
    name: "Dusting & Laundry",
    icon: FaSprayCan,
    description: "Dusting and laundry services for home maintenance.",
    image: "images/maid-page/dusting.avif"
  }
];

const MaidServices = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div style={{ background: 'linear-gradient(135deg, #f0faf8 0%, #e8f5f2 100%)' }} className="py-8 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h1>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-lg overflow-hidden border" style={{ borderColor: '#E5E7EB' }}>
          
          {/* Left - Service List */}
          <div className="p-6" style={{ background: '#2d5f4f' }}>
            <h2 className="font-semibold text-white mb-4">Services</h2>
            <nav className="space-y-2">
              {services.map((service) => {
                const IconComponent = service.icon;
                const isSelected = selectedService.id === service.id;

                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className="w-full text-left px-4 py-2 rounded text-sm transition-colors flex items-center gap-2"
                    style={{
                      background: isSelected ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                      color: isSelected ? '#FFD700' : '#E8F5F2'
                    }}
                  >
                    <IconComponent className="text-base" />
                    <span className="font-medium">{service.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right - Service Details */}
          <div className="md:col-span-2 p-6">
            {/* Image */}
            <img
              src={selectedService.image}
              alt={selectedService.name}
              className="w-full h-64 object-cover rounded-lg mb-6 border"
              style={{ borderColor: '#E5E7EB' }}
            />

            {/* Content */}
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {selectedService.name}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {selectedService.description}
            </p>

            {/* CTA */}
            <button
              className="px-6 py-3 text-white rounded font-semibold transition-all"
              style={{
                background: '#2d5f4f'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#1d3f2f';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#2d5f4f';
              }}
            >
              Book Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaidServices;
