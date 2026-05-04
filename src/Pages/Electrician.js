// import { useCart } from '../components/CartContext';

// const services = [
//   { id: 'electrician-1', title: 'Fan Repair', price: '₹199', image: '/images/electrician/Switch-Socket-images.avif' },
//   { id: 'electrician-2', title: 'Switch & Socket', price: '₹99', image: '/images/electrician/Switch-Socket-images.avif' },
//   { id: 'electrician-3', title: 'Install Inverter', price: '₹299', image: 'images/electrician/Inverter-Installation-img.avif' },
//   { id: 'electrician-4', title: 'Stabilizer Repair', price: '₹249', image: '/images/electrician/Stabilizer-Repair-img.avif' },
//   { id: 'electrician-5', title: 'Wiring Fix', price: '₹399', image: '/images/electrician/Wiring-Fix-img.avif' },
//   { id: 'electrician-6', title: 'Fuse Replacement', price: '₹149', image: '/images/electrician/Fuse-Replacement-img.avif' },
//   { id: 'electrician-7', title: 'AC Switch Repair', price: '₹249', image: '/images/electrician/Fuse-Replacement-img.avif' },
//   { id: 'electrician-8', title: 'MCB Replacement', price: '₹349', image: '/images/electrician/Fuse-Replacement-img.avif' },
// ];


// const Electrician = () => {
//   const { cart, addToCart, updateQuantity } = useCart();

//   const getCartItem = (id) => cart.find((item) => item.id === id);

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8 lg:px-16">
//       <div className="text-center mb-10">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-600">
//           Electrician Services
//         </h1>
//         <p className="text-gray-600 mt-2 text-sm sm:text-base">
//           Book our professional cleaners for a sparkling clean home.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
//         {services.map((service) => {
//           const cartItem = getCartItem(service.id);
//           const quantity = cartItem?.quantity || 0;

//           return (
//             <div
//               key={service.id}
//   className="bg-white rounded-2xl shadow-md border transition-all duration-300 flex flex-col overflow-hidden hover:shadow-md hover:border-blue-500"
//             >
//               <img
//                 src={service.image || 'https://via.placeholder.com/400x200?text=Service'}
//                 alt={service.title}
//                 className="h-40 w-full object-cover transform hover:scale-105 transition-transform duration-300"
//               />
//               <div className="p-5 flex flex-col justify-between flex-grow">
//                 <div>
//                   <h3 className=" text-base text-gray-600">{service.title}</h3>
//                   <p className="text-base text-black font-semibold">{service.price} onwards</p>
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
// className="mt-4 px-4 py-2 rounded-full  bg-blue-900 text-white hover:brightness-110 text-sm transition duration-300 w-full shadow-lg"
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

// export default Electrician;
  
import React from "react";
import { motion } from "framer-motion";
import { Star, Zap, BarChart3, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const Electrician = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Electrician services
  const services = [
    { id: 'electrician-1', title: 'Fan Repair', price: '₹199', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', rating: 4.8, reviews: 312, badge: "Popular" },
    { id: 'electrician-2', title: 'Switch & Socket Installation', price: '₹99', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop', rating: 4.7, reviews: 245, badge: "Fast" },
    { id: 'electrician-3', title: 'Install Inverter', price: '₹299', image: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=400&h=400&fit=crop', rating: 4.9, reviews: 289, badge: "Top Rated" },
    { id: 'electrician-4', title: 'Stabilizer Repair', price: '₹249', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', rating: 4.8, reviews: 267, badge: "Quality" },
    { id: 'electrician-5', title: 'Wiring Fix', price: '₹399', image: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=400&h=400&fit=crop', rating: 4.9, reviews: 334, badge: "Premium" },
    { id: 'electrician-6', title: 'Light Installation', price: '₹179', image: 'https://images.unsplash.com/photo-1565636192335-14efbe92bff5?w=400&h=400&fit=crop', rating: 4.7, reviews: 198, badge: "Popular" },
  ];

  const features = [
    {
      icon: <Zap className="text-primary-600" size={32} />,
      title: "Same-Day Service",
      description: "Fast electrical repairs and installations available today",
    },
    {
      icon: <BarChart3 className="text-primary-600" size={32} />,
      title: "Transparent Pricing",
      description: "No hidden charges, clear pricing upfront",
    },
    {
      icon: <Shield className="text-primary-600" size={32} />,
      title: "Certified Electricians",
      description: "Licensed and verified professionals only",
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
              Expert <span className="text-primary-600">Electrician Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional electrical repairs, installations, and maintenance. Fast, safe, and reliable.
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-8 mt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Star className="text-primary-600" fill="currentColor" />
                <span className="font-bold text-gray-900">4.8 Rating</span>
              </div>
              <div className="text-gray-900 font-bold">15,000+ Services</div>
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
            Our <span className="text-primary-600">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 transition transform hover:scale-105 flex flex-col"
              >
                {/* Image */}
                <div className="w-full h-48 overflow-hidden bg-gray-200 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {service.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star size={14} fill="#059669" className="text-primary-600" />
                        <span className="font-bold text-gray-900 text-xs">
                          {service.rating}
                        </span>
                      </div>
                      <span className="text-xs text-gray-600">
                        ({service.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-600">Starting from</p>
                      <p className="text-xl font-bold text-primary-600">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(service)}
                    className="w-full py-2 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-2 text-xs"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - "Don't see what you need?" */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-12 text-center text-white my-12 mx-6 sm:mx-8">
        <h2 className="text-3xl font-bold mb-4">Don't see what you need?</h2>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          We handle all electrical services. Contact us for custom projects or emergency repairs.
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
            Electrical Emergency?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Need urgent electrical help? Call us now for same-day emergency service.
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
              Join as Professional
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Electrician;
