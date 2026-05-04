// import React from 'react';
// import { useCart } from '../components/CartContext';

// // List of AC services modeled after UrbanCompany offerings
// const acServices = [
//   { id: 'ac-1', title: 'Foam Jet Service', price: '₹1000', image: '/images/ac-service/Ac-Foam-JET.WEBP' },
//   { id: 'ac-2', title: 'AC Split Service (1 Ton)', price: '₹799', image: '/images/ac-service/AC-Split-Service-(1 Ton).jpg' },
//   { id: 'ac-3', title: 'AC Split Service (1.5 Ton)', price: '₹899', image: '/images/ac-service/AC-Split-Service-(1.5 Ton).jpg' },
//   { id: 'ac-5', title: 'AC Window Service', price: '₹749', image: '/images/ac-service/AC Window Service.jpg' },
//   { id: 'ac-6', title: 'AC less / no cooling repair', price: '₹500', image: '/images/ac-service/AC-less-no-cooling-repair.jpg' },
//   { id: 'ac-7', title: 'AC power issue repair', price: '₹500', image: '/images/ac-service/AC-power-issue-repair.jpg' },
//   { id: 'ac-8', title: 'AC noise/smell repair', price: '₹1000', image: '/images/ac-service/AC-noise-smell-repair.jpg' },
//   { id: 'ac-9', title: 'AC water leakage repair', price: '₹500', image: '/images/ac-service/AC-watee-leakage-repair.jpg' },
//   { id: 'ac-10', title: 'Gas refill and check-up ', price: '₹500', image: '/images/ac-service/Gas-refill-and-check-up.jpg' },
//   { id: 'ac-12', title: 'Split AC installation ', price: '₹1200', image: '/images/ac-service/Split-AC-installation.jpg' },
//   { id: 'ac-13', title: 'Window AC installation', price: '₹1200', image: '/images/ac-service/Window-AC-installation.jpg' },
//   { id: 'ac-14', title: 'Split AC uninstallation', price: '₹850', image: '/images/ac-service/Split-AC-uninstallation.jpg' },
//   { id: 'ac-15', title: 'Window AC uninstallation ', price: '₹850', image: '/images/ac-service/Window-AC-uninstallation.jpg' },


// ];

// const AcService = () => {
//   const { cart, addToCart, updateQuantity } = useCart();
//   const getCartItem = (id) => cart.find(item => item.id === id);

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8 lg:px-16">
//       <div className="text-center mb-10">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-600">
//           AC Services
//         </h1>
//         <p className="text-gray-600 mt-2 text-sm sm:text-base">
//           Choose from our comprehensive AC care and repair services.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//         {acServices.map(service => {
//           const cartItem = getCartItem(service.id);
//           const quantity = cartItem?.quantity || 0;

//           return (
//             <div
//               key={service.id}
//               className="bg-white rounded-2xl shadow-md border transition-all duration-300 flex flex-col overflow-hidden hover:shadow-lg hover:border-blue-500"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="h-40 w-full object-cover transform hover:scale-105 transition-transform duration-300"
//               />

//               <div className="p-5 flex flex-col justify-between flex-grow">
//                 <div>
//                   <h3 className="text-base text-gray-800 font-semibold">
//                     {service.title}
//                   </h3>
//                   <p className="text-base text-black mt-1">
//                     {service.price} onwards
//                   </p>
//                 </div>

//                 {cartItem ? (
//                   <div className="mt-6 flex items-center justify-center gap-3">
//                     <button
//                       onClick={() => updateQuantity(service.id, quantity - 1)}
//                       className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full font-semibold text-lg"
//                     >
//                       –
//                     </button>
//                     <span className="text-base font-medium">{quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(service.id, quantity + 1)}
//                       className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full font-semibold text-lg"
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     onClick={() => addToCart({ ...service, quantity: 1 })}
//                     className="mt-4 px-4 py-2 rounded-full bg-blue-600 text-white hover:brightness-110 text-sm transition duration-300 w-full shadow-lg"
//                   >
//                     Add to Cart
//                   </button>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AcService;

import React from "react";
import { motion } from "framer-motion";
import { Star, Zap, BarChart3, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const AcService = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const services = [
    { id: 'ac-1', title: 'Foam Jet Service', price: '₹1,000', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop', rating: 4.8, reviews: 456, badge: "Popular" },
    { id: 'ac-2', title: 'AC Split Service (1 Ton)', price: '₹799', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop', rating: 4.7, reviews: 334, badge: "Fast" },
    { id: 'ac-3', title: 'AC Split Service (1.5 Ton)', price: '₹899', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop', rating: 4.8, reviews: 389, badge: "Quality" },
    { id: 'ac-5', title: 'AC Window Service', price: '₹749', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop', rating: 4.7, reviews: 267, badge: "Popular" },
    { id: 'ac-6', title: 'AC Less/No Cooling Repair', price: '₹500', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop', rating: 4.6, reviews: 178, badge: "Quick Fix" },
    { id: 'ac-7', title: 'AC Power Issue Repair', price: '₹500', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop', rating: 4.8, reviews: 223, badge: "Expert" },
    { id: 'ac-8', title: 'AC Noise/Smell Repair', price: '₹1,000', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop', rating: 4.7, reviews: 145, badge: "Professional" },
    { id: 'ac-9', title: 'AC Water Leakage Repair', price: '₹500', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop', rating: 4.9, reviews: 312, badge: "Urgent" },
    { id: 'ac-10', title: 'Gas Refill & Check-up', price: '₹500', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop', rating: 4.8, reviews: 289, badge: "Essential" },
    { id: 'ac-12', title: 'Split AC Installation', price: '₹1,200', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop', rating: 4.9, reviews: 401, badge: "Premium" },
    { id: 'ac-13', title: 'Window AC Installation', price: '₹1,200', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop', rating: 4.8, reviews: 267, badge: "Professional" },
    { id: 'ac-14', title: 'Split AC Uninstallation', price: '₹850', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop', rating: 4.7, reviews: 156, badge: "Safe" },
    { id: 'ac-15', title: 'Window AC Uninstallation', price: '₹850', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop', rating: 4.8, reviews: 189, badge: "Careful" },
  ];

  const features = [
    {
      icon: <Zap className="text-primary-600" size={32} />,
      title: "Expert Technicians",
      description: "Certified AC technicians with years of experience",
    },
    {
      icon: <BarChart3 className="text-primary-600" size={32} />,
      title: "Fast Service",
      description: "Quick diagnosis and repair. Same-day available",
    },
    {
      icon: <Shield className="text-primary-600" size={32} />,
      title: "Warranty Backed",
      description: "All repairs come with service warranty",
    },
  ];

  const handleAddToCart = (service) => {
    addToCart({
      id: service.id,
      title: service.title,
      price: service.price,
      image: service.image,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Professional <span className="text-primary-600">AC Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete AC care, repair, installation, and maintenance. Expert technicians, fast service, warranty backed.
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-8 mt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Star className="text-primary-600" fill="currentColor" />
                <span className="font-bold text-gray-900">4.8 Rating</span>
              </div>
              <div className="text-gray-900 font-bold">28,000+ Services</div>
              <div className="text-gray-900 font-bold">Same-Day Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-primary-600">Services</span> (13 Options)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 transition transform hover:scale-105 flex flex-col"
              >
                {/* Image */}
                <div className="w-full h-40 overflow-hidden bg-gray-200 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {service.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star size={12} fill="#059669" className="text-primary-600" />
                        <span className="font-bold text-gray-900 text-xs">
                          {service.rating}
                        </span>
                      </div>
                      <span className="text-xs text-gray-600">
                        ({service.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mb-3">
                      <p className="text-xs text-gray-600">Starting from</p>
                      <p className="text-lg font-bold text-primary-600">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(service)}
                    className="w-full py-2 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition text-xs"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-primary-600">Service Categories</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔧 AC Repair</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ No cooling repair</li>
                <li>✓ Power issue repair</li>
                <li>✓ Noise/smell repair</li>
                <li>✓ Water leakage repair</li>
                <li>✓ Gas refill & check-up</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">🧹 AC Cleaning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Foam Jet Service</li>
                <li>✓ Split AC Service (1 Ton)</li>
                <li>✓ Split AC Service (1.5 Ton)</li>
                <li>✓ Window AC Service</li>
                <li>✓ Full system cleaning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">📦 Installation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Split AC installation</li>
                <li>✓ Window AC installation</li>
                <li>✓ Split AC uninstallation</li>
                <li>✓ Window AC uninstallation</li>
                <li>✓ Professional relocation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our <span className="text-primary-600">AC Services?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Certified Technicians</h3>
              <p className="text-gray-600">
                All technicians are certified and trained in AC repair, installation, and maintenance. Years of industry experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Fast & Same-Day Service</h3>
              <p className="text-gray-600">
                Quick response time with same-day service available. Rapid diagnosis and efficient problem resolution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Genuine Parts & Tools</h3>
              <p className="text-gray-600">
                We use genuine replacement parts and professional-grade tools. Quality assured for long-lasting results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Service Warranty</h3>
              <p className="text-gray-600">
                All repair services come with warranty. Peace of mind with guaranteed quality and customer support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-12 text-center text-white my-12 mx-6 sm:mx-8">
        <h2 className="text-3xl font-bold mb-4">AC Not Working?</h2>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          Don't suffer in the heat! Call us now for immediate AC repair and service.
        </p>
        <button 
          onClick={() => navigate("/contact")}
          className="px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </button>
      </section>

      {/* EMERGENCY CTA SECTION */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 px-6 sm:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            AC Emergency?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Need urgent AC repair? Call us now for immediate service. Available 24/7 for emergency cooling needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = "tel:+919218028500"}
              className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Call Now
            </button>
            <button
              onClick={() => navigate("/employee-form")}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-600 transition"
            >
              Join as Technician
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcService;
