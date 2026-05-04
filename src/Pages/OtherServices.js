// import React, { useState } from "react";
// import GenericServiceForm from "./GenericServiceForm";
// import { FaTools } from "react-icons/fa";

// const OtherServices = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-20 text-center">
//         <div className="flex justify-center mb-4">
//           <FaTools className="text-5xl text-blue-600" />
//         </div>
//         <h1 className="text-4xl font-bold text-blue-800 mb-3 tracking-tight">
//           Book a Professional Service
//         </h1>
//         <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
//           Need a driver, welder, car mechanic, or another expert? We’ve got you covered — just fill in a few details and we’ll handle the rest.
//         </p>
//         <button
//           onClick={() => setShowModal(true)}
//           className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
//         >
//           Book Now
//         </button>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
//           <div className="bg-white w-full max-w-2xl rounded-2xl p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-fade-in-up">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700 transition"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-semibold mb-4 text-blue-700">Service Booking Form</h2>
//             <GenericServiceForm closeModal={() => setShowModal(false)} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default OtherServices;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Wrench, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const OtherServices = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedService, setSelectedService] = useState("");
  const [serviceDetails, setServiceDetails] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("4");
  const [errors, setErrors] = useState({});

  const services = [
    { id: "carpenter", name: "Carpenter", price: "₹600/hr", desc: "Carpentry & furniture repairs" },
    { id: "painter", name: "Painter", price: "₹300/hr", desc: "Interior & exterior painting" },
    // { id: "gardener", name: "Gardener", price: "₹400/day", desc: "Garden maintenance & landscaping" },
    // { id: "beautician", name: "Beautician", price: "₹500+", desc: "Beauty treatments & services" },
    { id: "tailor", name: "Tailor", price: "₹100+", desc: "Tailoring & alterations" },
    { id: "maison", name: "Maison", price: "₹800/day", desc: "House maintenance & care" },
    // { id: "laundry", name: "Laundry Worker", price: "₹200/bag", desc: "Laundry & ironing services" },
    // { id: "pressman", name: "Pressman", price: "₹50/piece", desc: "Pressing & ironing" },
    { id: "car-mechanic", name: "Car Mechanic", price: "₹500/hr", desc: "Car repairs & service" },
    // { id: "welder", name: "Welder", price: "₹600/hr", desc: "Welding services" },
    // { id: "sewage-cleaner", name: "Sewage Cleaner", price: "₹1,500+", desc: "Cleaning & maintenance" },
    { id: "bar-attender", name: "Bar Attender", price: "₹400/hr", desc: "Event bar service" },
    { id: "labour", name: "Labour Worker", price: "₹300/day", desc: "General labour work" },
    // { id: "security", name: "Security Guard", price: "₹400/day", desc: "Security services" },
  ];

  const durations = [
    { value: "4", label: "4 Hours", price: 600 },
    { value: "8", label: "8 Hours", price: 1200 },
    { value: "12", label: "12 Hours", price: 1800 },
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service.id);
    setErrors({ ...errors, service: "" });
  };

  const handleBooking = () => {
    const newErrors = {};
    
    if (!selectedService) newErrors.service = "Please select a service";
    if (!serviceDetails.trim()) newErrors.details = "Please describe what you need";
    if (!selectedDuration) newErrors.duration = "Please select duration";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Find selected service details
    const service = services.find(s => s.id === selectedService);
    const duration = durations.find(d => d.value === selectedDuration);

    // Add to cart
    addToCart({
      id: `other-${selectedService}-${Date.now()}`,
      title: `${service.name} - ${duration.label}`,
      price: `₹${duration.price}`,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop",
      quantity: 1,
    });

    // Navigate to checkout
    navigate("/checkout");
  };

  const selectedServiceObj = services.find(s => s.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-gray-50 py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-primary-600 p-4 rounded-full">
              <Wrench size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Book a <span className="text-primary-600">Professional Service</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Need a carpenter, painter, welder, or another expert? We've got you covered — just select a service and we'll handle the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Service Selection Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Select Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Step 1: <span className="text-primary-600">Select Service</span>
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleServiceSelect(service)}
                    className={`p-4 rounded-lg border-2 transition text-left ${
                      selectedService === service.id
                        ? "border-primary-600 bg-primary-50 shadow-lg"
                        : "border-gray-200 hover:border-primary-300 bg-white"
                    }`}
                  >
                    <p className="font-bold text-gray-900 text-sm">{service.name}</p>
                    <p className="text-xs text-gray-600 mt-1">{service.price}</p>
                  </motion.button>
                ))}
              </div>

              {errors.service && (
                <div className="flex items-center gap-2 text-red-600 text-sm mt-4">
                  <AlertCircle size={18} />
                  {errors.service}
                </div>
              )}
            </motion.div>

            {/* Service Details */}
            {selectedServiceObj && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Step 2: <span className="text-primary-600">Describe Your Need</span>
                </h2>
                <p className="text-gray-600 mb-4">
                  Tell us what you need from {selectedServiceObj.name}
                </p>

                <textarea
                  placeholder="E.g., Need to repair a wooden door, paint my bedroom walls, fix a welding joint, etc."
                  value={serviceDetails}
                  onChange={(e) => {
                    setServiceDetails(e.target.value);
                    setErrors({ ...errors, details: "" });
                  }}
                  rows="5"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none ${
                    errors.details ? "border-red-500" : "border-gray-300"
                  }`}
                />

                {errors.details && (
                  <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                    <AlertCircle size={18} />
                    {errors.details}
                  </div>
                )}
              </motion.div>
            )}

            {/* Duration Selection */}
            {selectedServiceObj && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Step 3: <span className="text-primary-600">Choose Duration</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {durations.map((duration) => (
                    <motion.button
                      key={duration.value}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedDuration(duration.value);
                        setErrors({ ...errors, duration: "" });
                      }}
                      className={`p-4 rounded-lg border-2 transition text-center ${
                        selectedDuration === duration.value
                          ? "border-primary-600 bg-primary-50 shadow-lg"
                          : "border-gray-200 hover:border-primary-300 bg-white"
                      }`}
                    >
                      <p className="font-bold text-gray-900">{duration.label}</p>
                      <p className="text-primary-600 font-bold mt-2">₹{duration.price}</p>
                    </motion.button>
                  ))}
                </div>

                {errors.duration && (
                  <div className="flex items-center gap-2 text-red-600 text-sm mt-4">
                    <AlertCircle size={18} />
                    {errors.duration}
                  </div>
                )}
              </motion.div>
            )}

            {/* Book Button */}
            {selectedServiceObj && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={handleBooking}
                className="w-full py-4 bg-primary-600 text-white font-bold text-lg rounded-xl hover:bg-primary-700 transition shadow-lg inline-flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight size={24} />
              </motion.button>
            )}
          </div>

          {/* Right - Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-8 shadow-lg sticky top-8"
            >
              <h3 className="text-2xl font-bold mb-6">Service Summary</h3>

              {selectedServiceObj ? (
                <div className="space-y-6">
                  {/* Service Selected */}
                  <div>
                    <p className="text-primary-100 text-sm mb-1">Service:</p>
                    <p className="text-xl font-bold">{selectedServiceObj.name}</p>
                    <p className="text-primary-100 text-sm mt-1">{selectedServiceObj.desc}</p>
                  </div>

                  {/* Details */}
                  {serviceDetails && (
                    <div className="pb-6 border-b border-primary-500">
                      <p className="text-primary-100 text-sm mb-2">Your Request:</p>
                      <p className="text-sm line-clamp-3">{serviceDetails}</p>
                    </div>
                  )}

                  {/* Duration & Price */}
                  {selectedDuration && (
                    <div className="pb-6 border-b border-primary-500">
                      <p className="text-primary-100 text-sm mb-2">Duration:</p>
                      <p className="text-xl font-bold">
                        {durations.find(d => d.value === selectedDuration).label}
                      </p>
                    </div>
                  )}

                  {/* Total */}
                  {selectedDuration && (
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-3xl font-bold">
                          ₹{durations.find(d => d.value === selectedDuration).price}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Trust Info */}
                  <div className="space-y-2 text-sm text-primary-100">
                    <div className="flex items-center gap-2">
                      <Check size={16} />
                      <span>Verified professionals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={16} />
                      <span>100% secure payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={16} />
                      <span>Money-back guarantee</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-primary-100">Select a service to see summary</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
