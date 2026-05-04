// import React from "react";
// import { useCart } from "../components/CartContext";

// const services = [
//   {
//     id: 'housekeeping-1',
//     title: 'Room Cleaning',
//     description: 'Complete dusting, mopping, and tidying up of bedrooms and living areas.',
//     image: '/images/housekeeping/Room-Cleaning.avif',
//     price: '₹399',
//   },
//   {
//     id: 'housekeeping-2',
//     title: 'Bathroom Cleaning',
//     description: 'Deep cleaning of tiles, fixtures, and sanitization of washrooms.',
//     image: '/images/housekeeping/Bathroom-Cleaning.avif',
//     price: '₹299',
//   },
//   {
//     id: 'housekeeping-3',
//     title: 'Kitchen Cleaning',
//     description: 'Degreasing surfaces, cleaning shelves, and sanitizing kitchen appliances.',
//     image: '/images/housekeeping/Kitchen-Cleaning.avif',
//     price: '₹349',
//   },
//   {
//     id: 'housekeeping-4',
//     title: 'Sofa & Carpet Cleaning',
//     description: 'Shampooing and vacuuming sofas, carpets, and rugs for a fresh look.',
//     image: '/images/housekeeping/Sofa-Carpet-Cleaning.avif',
//     price: '₹499',
//   },
//   {
//     id: 'housekeeping-5',
//     title: 'Full Home Deep Cleaning',
//     description: 'A thorough cleaning of all rooms, furniture, fans, and surfaces.',
//     image: '/images/housekeeping/Full-Home-Deep-Cleaning.avif',
//     price: '₹1499',
//   },
// ];


// const Housekeeping = () => {
//   const { cart, addToCart, updateQuantity } = useCart();

//   const getCartItem = (id) => cart.find((item) => item.id === id);

//   return (
//     <div className="px-4 py-8 sm:px-6 md:px-10">
//       <div className="text-center mb-10">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-600">
//           Housekeeping Services
//         </h1>
//         <p className="text-gray-600 mt-2 text-sm sm:text-base">
//           Powering Homes with Safe, Reliable, and Friendly Service

//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//         {services.map((service) => {
//           const cartItem = getCartItem(service.id);
//           const quantity = cartItem?.quantity || 0;

//           return (
//             <div
//               key={service.id}
//   className="bg-white rounded-2xl shadow-md border transition-all duration-300 flex flex-col overflow-hidden hover:shadow-md hover:border-blue-500"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="h-44 w-full object-cover transform hover:scale-105 transition-transform duration-300"
//               />
//               <div className="p-4 flex flex-col justify-between flex-grow">
//                 <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
//                   {service.title}
//                 </h2>
//                 <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
//                 <p className="text-black font-semibold mt-3">{service.price} onwards</p>

//                 {!cartItem ? (
//                   <button
//                     onClick={() => addToCart({ ...service, quantity: 1 })}
//                     className="mt-4 px-4 py-2 rounded-full  bg-blue-900  text-white hover:brightness-110 text-sm transition duration-300 w-full shadow-lg"
//                   >
//                     Add to Cart
//                   </button>
//                 ) : (
//                   <div className="mt-4 flex items-center justify-center gap-3">
//                     <button
//                       onClick={() =>
//                         quantity === 1
//                           ? updateQuantity(service.id, 0)
//                           : updateQuantity(service.id, quantity - 1)
//                       }
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
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Housekeeping;

import React from "react";
import { motion } from "framer-motion";
import { Star, Zap, BarChart3, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const Housekeeping = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const services = [
    { id: 'housekeeping-1', title: 'Basic Cleaning', price: '₹599', image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=400&fit=crop', rating: 4.8, reviews: 567, badge: "Popular" },
    { id: 'housekeeping-2', title: 'Deep Cleaning', price: '₹1,299', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop', rating: 4.9, reviews: 445, badge: "Top Rated" },
    { id: 'housekeeping-3', title: 'Kitchen Deep Clean', price: '₹899', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop', rating: 4.7, reviews: 334, badge: "Quality" },
    { id: 'housekeeping-4', title: 'Bathroom Sanitization', price: '₹699', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop', rating: 4.8, reviews: 289, badge: "Hygiene" },
    { id: 'housekeeping-5', title: 'Full House Package', price: '₹2,499', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', rating: 4.9, reviews: 512, badge: "Premium" },
    { id: 'housekeeping-6', title: 'Weekly Maintenance', price: '₹2,500/week', image: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=400&h=400&fit=crop', rating: 4.8, reviews: 398, badge: "Popular" },
    { id: 'housekeeping-7', title: 'Post-Construction Cleaning', price: '₹1,799', image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=400&fit=crop', rating: 4.9, reviews: 267, badge: "Professional" },
    { id: 'housekeeping-8', title: 'Move-In/Move-Out Cleaning', price: '₹3,299', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop', rating: 4.8, reviews: 178, badge: "Thorough" },
  ];

  const features = [
    {
      icon: <Zap className="text-primary-600" size={32} />,
      title: "Expert Cleaners",
      description: "Trained professionals with years of cleaning experience",
    },
    {
      icon: <BarChart3 className="text-primary-600" size={32} />,
      title: "Eco-Friendly Products",
      description: "Safe, non-toxic cleaning products for your family",
    },
    {
      icon: <Shield className="text-primary-600" size={32} />,
      title: "Verified & Insured",
      description: "Background-checked and fully insured professionals",
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
              Professional <span className="text-primary-600">Housekeeping</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert cleaning and housekeeping services for a sparkling clean home. Verified, insured, and eco-friendly.
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-8 mt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Star className="text-primary-600" fill="currentColor" />
                <span className="font-bold text-gray-900">4.8 Rating</span>
              </div>
              <div className="text-gray-900 font-bold">32,000+ Homes</div>
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
            Our <span className="text-primary-600">Services</span> (8 Options)
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

      {/* SERVICE DETAILS SECTION */}
      <section className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our <span className="text-primary-600">Housekeeping?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Thorough & Professional</h3>
              <p className="text-gray-600">
                Every corner cleaned meticulously. Our team follows strict cleaning standards and checklists for comprehensive results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Safe & Non-Toxic</h3>
              <p className="text-gray-600">
                We use eco-friendly, non-toxic cleaning products safe for your family and pets. No harsh chemicals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Flexible Scheduling</h3>
              <p className="text-gray-600">
                One-time cleaning, weekly, bi-weekly, or monthly packages. Flexible timings to suit your schedule.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Trustworthy & Insured</h3>
              <p className="text-gray-600">
                All staff are background-checked and verified. Fully insured for your peace of mind and protection.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED SECTION */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What's <span className="text-primary-600">Included</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Dust & wipe all surfaces",
              "Vacuum carpets & rugs",
              "Mop hard floors",
              "Clean windows & mirrors",
              "Tidy up and organize",
              "Disinfect high-touch areas",
              "Bathroom scrubbing & sanitization",
              "Kitchen cleaning & countertops",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 p-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-12 text-center text-white my-12 mx-6 sm:mx-8">
        <h2 className="text-3xl font-bold mb-4">Custom Cleaning Plan?</h2>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          Have specific cleaning needs or special requirements? Contact us for personalized housekeeping packages.
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
            Need Cleaning Today?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Book professional cleaners for immediate service. Same-day available for urgent bookings.
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
              Join as Cleaner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Housekeeping;
