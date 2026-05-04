// // // // // // src/pages/Plumber.js
// // // // // import React from 'react';
// // // // // import { useCart } from '../components/CartContext';

// // // // // const services = [
// // // // //   { id: 'plumber-1', title: 'Bath accessory installation', price: '₹129', image: '/images/plumbing/Bath-accessory-installation.webp' },
// // // // //   { id: 'plumber-2', title: 'Shower installation', price: '₹159+', image: '/images/plumbing/shower-installation.webp' },
// // // // //   { id: 'plumber-3', title: 'Wash basin installation', price: '₹479', image: '/images/plumbing/Wash-basin-installation.webp' },
// // // // //   { id: 'plumber-4', title: 'Waste pipe replacement', price: '₹139', image: '/images/plumbing/waste-pipe-replacement.webp' },
// // // // //   { id: 'plumber-5', title: 'Sink drainage removal', price: '₹189', image: '/images/plumbing/Sink-drainage.webp' },
// // // // //   { id: 'plumber-6', title: 'Bathroom tile grouting', price: '₹1,500', image: '/images/plumbing/Bathroom-tile.webp' },
// // // // //   { id: 'plumber-7', title: 'Kitchen tile grouting', price: '₹1,000', image: '/images/plumbing/kitchen-tile.webp' },
// // // // //   { id: 'plumber-8', title: 'Shower filter installation', price: '₹169', image: '/images/plumbing/shower-filter.webp' },
// // // // //   { id: 'plumber-9', title: 'Washing machine filter install', price: '₹139', image: '/images/plumbing/wm-filter.webp' },
// // // // //   { id: 'plumber-10', title: 'Drainage cover installation', price: '₹179', image: '/images/plumbing/drain-cover.webp' },
// // // // //   { id: 'plumber-11', title: 'Bathroom drainage removal', price: '₹409', image: '/images/plumbing/bath-drain.webp' },
// // // // //   { id: 'plumber-12', title: 'Balcony drainage removal', price: '₹299', image: '/images/plumbing/balcony-drain.webp' },
// // // // //   { id: 'plumber-13', title: 'Toilet seat cover replacement', price: '₹139', image: '/images/plumbing/toilet-seat.webp' },
// // // // //   { id: 'plumber-14', title: 'Flush tank repair (PVC)', price: '₹159', image: '/images/plumbing/flush-pvc.webp' },
// // // // //   { id: 'plumber-15', title: 'Flush tank repair (concealed)', price: '₹169+', image: '/images/plumbing/flush-concealed.webp' },
// // // // //   { id: 'plumber-16', title: 'Western toilet repair', price: '₹699', image: '/images/plumbing/western-repair.webp' },
// // // // //   { id: 'plumber-17', title: 'Toilet pot blockage removal', price: '₹1,299', image: '/images/plumbing/loo-blockage.webp' },
// // // // //   { id: 'plumber-18', title: 'Jet spray installation', price: '₹139', image: '/images/plumbing/jet-spray.webp' },
// // // // //   { id: 'plumber-19', title: 'Flush tank replacement', price: '₹529', image: '/images/plumbing/flush-replace.webp' },
// // // // //   { id: 'plumber-20', title: 'Western toilet installation', price: '₹1,499+', image: '/images/plumbing/western-install.webp' },
// // // // //   { id: 'plumber-21', title: 'Indian toilet installation', price: '₹1,699', image: '/images/plumbing/indian-install.webp' },
// // // // // ];


// // // // // const Plumber = () => {
// // // // //   const { cart, addToCart, updateQuantity } = useCart();

// // // // //   const getCartItem = (id) => cart.find((item) => item.id === id);

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8 lg:px-16">
// // // // //       <div className="text-center mb-10">
// // // // //         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-600">
// // // // //           Plumber Services
// // // // //         </h1>
// // // // //         <p className="text-gray-600 mt-2 text-sm sm:text-base">
// // // // //           High-Quality Plumbing by Fast, Reliable, Certified Technicians


// // // // //         </p>
// // // // //       </div>

// // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
// // // // //         {services.map((s) => {
// // // // //           const cartItem = getCartItem(s.id);
// // // // //           const quantity = cartItem?.quantity || 0;

// // // // //           return (
// // // // //             <div
// // // // //               key={s.id}
// // // // //   className="bg-white rounded-2xl shadow-md border transition-all duration-300 flex flex-col overflow-hidden hover:shadow-md hover:border-blue-500"
// // // // //             >
// // // // //               <img
// // // // //                 src={s.image}
// // // // //                 alt={s.title}
// // // // //                 className="h-40 w-full object-cover transform hover:scale-105 transition-transform duration-300"
// // // // //               />
// // // // //               <div className="p-5 flex flex-col justify-between flex-grow">
// // // // //                 <div>
// // // // //                   <h3 className="text-base  text-gray-600">{s.title}</h3>
// // // // //                   <p className=" text-base text-black font-semibold">{s.price} onwards</p>
// // // // //                 </div>

// // // // //                 {cartItem ? (
// // // // //                   <div className="mt-6 flex items-center justify-center gap-3">
// // // // //                     <button
// // // // //                       onClick={() => updateQuantity(s.id, quantity - 1)}
// // // // //                       className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full font-semibold text-lg"
// // // // //                     >
// // // // //                       –
// // // // //                     </button>
// // // // //                     <span className="text-base font-medium">{quantity}</span>
// // // // //                     <button
// // // // //                       onClick={() => updateQuantity(s.id, quantity + 1)}
// // // // //                       className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full font-semibold text-lg"
// // // // //                     >
// // // // //                       +
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 ) : (
// // // // //                   <button
// // // // //                     onClick={() => addToCart({ ...s, quantity: 1 })}
// // // // //                     className="mt-4 px-4 py-2 rounded-full  text-white bg-blue-900 text-sm transition duration-300 w-full shadow-lg"
// // // // //                   >
// // // // //                     Add to Cart
// // // // //                   </button>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //           );
// // // // //         })}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Plumber;

// // // // import React, { useState } from "react";
// // // // import { motion } from "framer-motion";
// // // // import {
// // // //   Star,
// // // //   Check,
// // // //   ArrowRight,
// // // //   MapPin,
// // // //   MessageSquare,
// // // // } from "lucide-react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { useCart } from "../components/CartContext";

// // // // const Plumber = () => {
// // // //   const navigate = useNavigate();
// // // //   const { addToCart } = useCart();
// // // //   const [selectedTestimonial, setSelectedTestimonial] = useState(0);

// // // //   // Service-Specific Data
// // // //   const serviceRating = {
// // // //     overall: "4.8",
// // // //     reviews: "2,340",
// // // //     bookings: "12,000+",
// // // //   };

// // // //   const whatIncluded = [
// // // //     "Pipe repair & replacement",
// // // //     "Leak detection & fixing",
// // // //     "Faucet & tap installation",
// // // //     "Drain cleaning & unclogging",
// // // //     "Water valve repair",
// // // //     "Emergency plumbing support",
// // // //   ];

// // // //   const pricing = [
// // // //     {
// // // //       duration: "30 Minutes",
// // // //       price: "₹299",
// // // //       frequency: "Diagnosis & Minor Fix",
// // // //       popular: false,
// // // //       features: ["Leak inspection", "Small repairs", "Pipe tightening"],
// // // //     },
// // // //     {
// // // //       duration: "1 Hour",
// // // //       price: "₹599",
// // // //       frequency: "Standard Service",
// // // //       popular: true,
// // // //       features: ["Full diagnosis", "Minor to medium repairs", "Best value"],
// // // //     },
// // // //     {
// // // //       duration: "2 Hours",
// // // //       price: "₹999",
// // // //       frequency: "Complex Work",
// // // //       popular: false,
// // // //       features: [
// // // //         "Full installation work",
// // // //         "Multiple repairs",
// // // //         "Premium service",
// // // //       ],
// // // //     },
// // // //   ];

// // // //   const testimonials = [
// // // //     {
// // // //       name: "Mr. Vikram",
// // // //       location: "Delhi",
// // // //       rating: 5,
// // // //       image: "👨",
// // // //       text: "Had a pipe burst during monsoon. Called ZollowUp and the plumber arrived within 30 mins. Professional, efficient, and fair pricing!",
// // // //     },
// // // //     {
// // // //       name: "Mrs. Anjali",
// // // //       location: "Bangalore",
// // // //       rating: 5,
// // // //       image: "👩",
// // // //       text: "Needed new tap installation. The technician was courteous, explained everything clearly, and did excellent work. Highly satisfied!",
// // // //     },
// // // //     {
// // // //       name: "Mr. Rahul",
// // // //       location: "Mumbai",
// // // //       rating: 5,
// // // //       image: "👨",
// // // //       text: "Best plumbing service I've used. Honest pricing, no hidden charges, and the work quality is outstanding. Will call again!",
// // // //     },
// // // //   ];

// // // //   const handleBooking = (plan) => {
// // // //     // Add service to cart
// // // //     addToCart({
// // // //       id: `plumber-${plan.duration}`,
// // // //       title: `Plumber Service - ${plan.duration}`,
// // // //       price: plan.price,
// // // //       image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=100&h=100&fit=crop",
// // // //       quantity: 1,
// // // //     });

// // // //     // Navigate to checkout
// // // //     navigate("/checkout");
// // // //   };

// // // //   const bookingSteps = [
// // // //     {
// // // //       number: "1",
// // // //       title: "Select Service",
// // // //       description: "Choose duration (30min, 1hr, or 2hr) based on work needed",
// // // //     },
// // // //     {
// // // //       number: "2",
// // // //       title: "Pick Date & Time",
// // // //       description: "Book for today, tomorrow, or any date that works for you",
// // // //     },
// // // //     {
// // // //       number: "3",
// // // //       title: "Certified Plumber Arrives",
// // // //       description: "Expert arrives with tools. Work done fast and professionally",
// // // //     },
// // // //   ];

// // // //   const faqs = [
// // // //     {
// // // //       q: "Are plumbers certified and insured?",
// // // //       a: "100% certified plumbers with 5+ years experience. All insured and verified. Your home is safe with us.",
// // // //     },
// // // //     {
// // // //       q: "Do you fix all types of plumbing issues?",
// // // //       a: "Yes! Leaks, pipe repairs, installation, drainage, valve replacement, and more. Call for complex work.",
// // // //     },
// // // //     {
// // // //       q: "What if emergency happens at night?",
// // // //       a: "We offer 24/7 emergency plumbing. Call us anytime for urgent repairs. Premium charges apply after 10 PM.",
// // // //     },
// // // //     {
// // // //       q: "Do you provide spare parts warranty?",
// // // //       a: "Yes! All parts come with 1-2 year warranty. We use quality materials and guarantee workmanship.",
// // // //     },
// // // //     {
// // // //       q: "Can I request the same plumber again?",
// // // //       a: "Absolutely! After your first booking, you can request the same technician for future work.",
// // // //     },
// // // //     {
// // // //       q: "What if I'm not satisfied with the work?",
// // // //       a: "We guarantee 100% satisfaction. If unhappy, we'll redo the work free of charge within 7 days.",
// // // //     },
// // // //   ];

// // // //   const trustPoints = [
// // // //     "100% Certified Plumbers",
// // // //     "5+ Years Experience",
// // // //     "24/7 Emergency Support",
// // // //     "1-2 Year Warranty",
// // // //     "Fair & Transparent Pricing",
// // // //     "Quick Response Time",
// // // //   ];

// // // //   return (
// // // //     <div className="bg-white overflow-hidden">
// // // //       {/* HERO SECTION */}
// // // //       <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16 px-6 sm:px-8 relative overflow-hidden">
// // // //         <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl -z-10"></div>

// // // //         <div className="max-w-6xl mx-auto">
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // // //             {/* Left - Text */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: -20 }}
// // // //               animate={{ opacity: 1, x: 0 }}
// // // //               transition={{ duration: 0.8 }}
// // // //             >
// // // //               <div className="mb-6">
// // // //                 <span className="text-primary-600 font-semibold text-sm">
// // // //                   Professional Plumbing Services
// // // //                 </span>
// // // //                 <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mt-2 mb-6">
// // // //                   Expert <span className="text-primary-600">Plumbing</span>
// // // //                 </h1>
// // // //                 <p className="text-xl text-gray-700 mb-8">
// // // //                   Fast, reliable, and honest plumbing solutions for your home. Same-day service available.
// // // //                 </p>
// // // //               </div>

// // // //               {/* Quick Stats */}
// // // //               <div className="grid grid-cols-3 gap-4 mb-8 bg-white p-6 rounded-lg">
// // // //                 <div>
// // // //                   <div className="text-2xl font-bold text-primary-600">
// // // //                     {serviceRating.overall}★
// // // //                   </div>
// // // //                   <div className="text-xs text-gray-600">
// // // //                     {serviceRating.reviews} reviews
// // // //                   </div>
// // // //                 </div>
// // // //                 <div>
// // // //                   <div className="text-2xl font-bold text-gray-900">
// // // //                     {serviceRating.bookings}
// // // //                   </div>
// // // //                   <div className="text-xs text-gray-600">Services completed</div>
// // // //                 </div>
// // // //                 <div>
// // // //                   <div className="text-2xl font-bold text-gray-900">
// // // //                     30 min
// // // //                   </div>
// // // //                   <div className="text-xs text-gray-600">Avg response</div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* CTA */}
// // // //               <motion.button
// // // //                 whileHover={{ scale: 1.05 }}
// // // //                 whileTap={{ scale: 0.95 }}
// // // //                 onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
// // // //                 className="px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-xl hover:bg-primary-700 transition shadow-lg inline-flex items-center gap-3"
// // // //               >
// // // //                 Book a Plumber Now
// // // //                 <ArrowRight size={24} />
// // // //               </motion.button>
// // // //             </motion.div>

// // // //             {/* Right - Image */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: 20 }}
// // // //               animate={{ opacity: 1, x: 0 }}
// // // //               transition={{ duration: 0.8 }}
// // // //               className="rounded-xl overflow-hidden shadow-lg h-96"
// // // //             >
// // // //               <img
// // // //                 src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=500&fit=crop"
// // // //                 alt="Professional Plumbing Service"
// // // //                 className="w-full h-full object-cover"
// // // //               />
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* TRUST INDICATORS */}
// // // //       <section className="bg-gray-50 py-16 px-6 sm:px-8">
// // // //         <div className="max-w-6xl mx-auto">
// // // //           <h2 className="text-center text-gray-900 text-2xl font-bold mb-12">
// // // //             Why Choose Our <span className="text-primary-600">Plumbers</span>
// // // //           </h2>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {trustPoints.map((point, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 initial={{ opacity: 0, y: 10 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 transition={{ delay: idx * 0.1 }}
// // // //                 className="flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200"
// // // //               >
// // // //                 <Check className="text-primary-600 flex-shrink-0" size={24} />
// // // //                 <span className="text-gray-800 font-medium">{point}</span>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* WHAT'S INCLUDED */}
// // // //       <section className="py-20 px-6 sm:px-8 bg-white">
// // // //         <div className="max-w-4xl mx-auto">
// // // //           <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
// // // //             What's <span className="text-primary-600">Included</span>
// // // //           </h2>
// // // //           <p className="text-center text-gray-600 mb-12">
// // // //             Complete plumbing solutions for all your needs
// // // //           </p>

// // // //           <div className="bg-gradient-to-br from-primary-50 to-gray-50 rounded-xl p-8 border border-primary-200">
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // // //               {whatIncluded.map((item, idx) => (
// // // //                 <motion.div
// // // //                   key={idx}
// // // //                   initial={{ opacity: 0, x: -10 }}
// // // //                   whileInView={{ opacity: 1, x: 0 }}
// // // //                   transition={{ delay: idx * 0.1 }}
// // // //                   className="flex items-center gap-4"
// // // //                 >
// // // //                   <Check className="text-primary-600 flex-shrink-0" size={24} />
// // // //                   <span className="text-gray-800 text-lg font-medium">
// // // //                     {item}
// // // //                   </span>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* PRICING - TRANSPARENT */}
// // // //       <section id="pricing" className="py-20 px-6 sm:px-8 bg-gray-50">
// // // //         <div className="max-w-6xl mx-auto">
// // // //           <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
// // // //             Transparent <span className="text-primary-600">Pricing</span>
// // // //           </h2>
// // // //           <p className="text-center text-gray-600 mb-12">
// // // //             Choose the duration that fits your plumbing needs
// // // //           </p>

// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //             {pricing.map((plan, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 initial={{ opacity: 0, y: 20 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 transition={{ delay: idx * 0.15 }}
// // // //                 className={`rounded-xl p-8 transition ${
// // // //                   plan.popular
// // // //                     ? "bg-primary-600 text-white ring-2 ring-primary-600 md:scale-105 shadow-lg"
// // // //                     : "bg-white border border-gray-200 text-gray-900"
// // // //                 }`}
// // // //               >
// // // //                 {plan.popular && (
// // // //                   <div className="text-xs font-bold mb-4 bg-primary-700 px-3 py-1 rounded-full inline-block">
// // // //                     BEST VALUE
// // // //                   </div>
// // // //                 )}

// // // //                 <h3 className="text-2xl font-bold mb-2">{plan.duration}</h3>
// // // //                 <p className={`text-sm mb-6 ${plan.popular ? "text-primary-100" : "text-gray-600"}`}>
// // // //                   {plan.frequency}
// // // //                 </p>

// // // //                 <div className="mb-6">
// // // //                   <span className="text-4xl font-bold">{plan.price}</span>
// // // //                   <span className={`text-sm ${plan.popular ? "text-primary-100" : "text-gray-600"}`}>
// // // //                     /service
// // // //                   </span>
// // // //                 </div>

// // // //                 <button
// // // //                   onClick={() => handleBooking(plan)}
// // // //                   className={`w-full py-3 rounded-lg font-semibold mb-6 transition ${
// // // //                     plan.popular
// // // //                       ? "bg-white text-primary-600 hover:bg-gray-100"
// // // //                       : "bg-primary-600 text-white hover:bg-primary-700"
// // // //                   }`}
// // // //                 >
// // // //                   Book Now
// // // //                 </button>

// // // //                 <ul className="space-y-3">
// // // //                   {plan.features.map((feature, i) => (
// // // //                     <li key={i} className="flex items-center gap-3 text-sm">
// // // //                       <Check size={18} />
// // // //                       <span>{feature}</span>
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* TESTIMONIALS - Service Specific */}
// // // //       <section className="py-20 px-6 sm:px-8 bg-primary-50">
// // // //         <div className="max-w-4xl mx-auto">
// // // //           <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
// // // //             Customer Stories That <span className="text-primary-600">Inspire</span>
// // // //           </h2>
// // // //           <p className="text-center text-gray-600 mb-12">
// // // //             Real feedback from homeowners
// // // //           </p>

// // // //           <motion.div
// // // //             key={selectedTestimonial}
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             transition={{ duration: 0.5 }}
// // // //             className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-200 text-center mb-8"
// // // //           >
// // // //             <div className="text-6xl mb-4">
// // // //               {testimonials[selectedTestimonial].image}
// // // //             </div>

// // // //             <div className="flex justify-center gap-1 mb-6">
// // // //               {[...Array(testimonials[selectedTestimonial].rating)].map(
// // // //                 (_, i) => (
// // // //                   <Star
// // // //                     key={i}
// // // //                     fill="#059669"
// // // //                     stroke="#059669"
// // // //                     size={24}
// // // //                   />
// // // //                 )
// // // //               )}
// // // //             </div>

// // // //             <p className="text-xl text-gray-800 mb-6 italic">
// // // //               "{testimonials[selectedTestimonial].text}"
// // // //             </p>

// // // //             <div>
// // // //               <div className="font-bold text-gray-900">
// // // //                 {testimonials[selectedTestimonial].name}
// // // //               </div>
// // // //               <div className="text-sm text-gray-600 flex items-center justify-center gap-1 mt-1">
// // // //                 <MapPin size={16} />
// // // //                 {testimonials[selectedTestimonial].location}
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>

// // // //           <div className="flex justify-center gap-3">
// // // //             {testimonials.map((_, idx) => (
// // // //               <button
// // // //                 key={idx}
// // // //                 onClick={() => setSelectedTestimonial(idx)}
// // // //                 className={`w-3 h-3 rounded-full transition ${
// // // //                   selectedTestimonial === idx
// // // //                     ? "bg-primary-600 w-8"
// // // //                     : "bg-gray-300 hover:bg-gray-400"
// // // //                 }`}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* BOOKING PROCESS - 3 Simple Steps */}
// // // //       <section className="py-20 px-6 sm:px-8 bg-white">
// // // //         <div className="max-w-5xl mx-auto">
// // // //           <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
// // // //             How It <span className="text-primary-600">Works</span>
// // // //           </h2>
// // // //           <p className="text-center text-gray-600 mb-16">
// // // //             Booking a plumber has never been easier
// // // //           </p>

// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //             {bookingSteps.map((step, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 initial={{ opacity: 0, y: 20 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 transition={{ delay: idx * 0.2 }}
// // // //                 className="relative"
// // // //               >
// // // //                 {/* Step Number */}
// // // //                 <div className="mb-6">
// // // //                   <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
// // // //                     {step.number}
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Content */}
// // // //                 <div className="text-center">
// // // //                   <h3 className="text-xl font-bold text-gray-900 mb-3">
// // // //                     {step.title}
// // // //                   </h3>
// // // //                   <p className="text-gray-600">{step.description}</p>
// // // //                 </div>

// // // //                 {/* Arrow */}
// // // //                 {idx < bookingSteps.length - 1 && (
// // // //                   <div className="hidden md:block absolute top-8 -right-6 text-primary-600">
// // // //                     <ArrowRight size={32} />
// // // //                   </div>
// // // //                 )}
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>

// // // //           <div className="text-center mt-12">
// // // //             <motion.button
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //               onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
// // // //               className="px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-xl hover:bg-primary-700 transition shadow-lg inline-flex items-center gap-3"
// // // //             >
// // // //               Start Booking Now
// // // //               <ArrowRight size={24} />
// // // //             </motion.button>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* FAQ */}
// // // //       <section className="py-20 px-6 sm:px-8 bg-gray-50">
// // // //         <div className="max-w-4xl mx-auto">
// // // //           <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
// // // //             Common <span className="text-primary-600">Questions</span>
// // // //           </h2>

// // // //           <div className="space-y-4">
// // // //             {faqs.map((faq, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 initial={{ opacity: 0, x: -20 }}
// // // //                 whileInView={{ opacity: 1, x: 0 }}
// // // //                 transition={{ delay: idx * 0.1 }}
// // // //                 className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-300 transition"
// // // //               >
// // // //                 <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
// // // //                   <MessageSquare className="text-primary-600" size={20} />
// // // //                   {faq.q}
// // // //                 </h3>
// // // //                 <p className="text-gray-600">{faq.a}</p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* FINAL CTA */}
// // // //       <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 px-6 sm:px-8 text-white">
// // // //         <div className="max-w-4xl mx-auto text-center">
// // // //           <h2 className="text-4xl font-bold mb-6">
// // // //             Need Professional Plumbing Help?
// // // //           </h2>
// // // //           <p className="text-xl mb-8 text-primary-100">
// // // //             Join 12,000+ homeowners who trust ZollowUp for their plumbing needs.
// // // //           </p>

// // // //           <motion.button
// // // //             whileHover={{ scale: 1.05 }}
// // // //             whileTap={{ scale: 0.95 }}
// // // //             onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
// // // //             className="px-8 py-4 bg-white text-primary-600 text-lg font-bold rounded-xl hover:bg-gray-100 transition shadow-lg inline-flex items-center gap-3"
// // // //           >
// // // //             Book a Plumber Today
// // // //             <ArrowRight size={24} />
// // // //           </motion.button>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Plumber;

// // // import React, { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import { Star, ShoppingCart } from "lucide-react";
// // // // import { useNavigate } from "react-router-dom";
// // // import { useCart } from "../components/CartContext";

// // // const PlumberCardGrid = () => {
// // //   // const navigate = useNavigate();
// // //   const { addToCart } = useCart();
// // //   const [setSelectedService] = useState(null);
// // //   const [quantity, setQuantity] = useState(1);

// // //   const services = [
// // //     {
// // //       id: 1,
// // //       title: "Bath Accessory Installation",
// // //       price: "₹129",
// // //       rating: 4.8,
// // //       reviews: 245,
// // //       image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=300&fit=crop",
// // //       description: "Professional installation of bathroom fixtures and accessories",
// // //       time: "30 mins",
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Shower Installation",
// // //       price: "₹159",
// // //       rating: 4.9,
// // //       reviews: 312,
// // //       image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",
// // //       description: "Expert shower setup and waterproofing",
// // //       time: "45 mins",
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Wash Basin Installation",
// // //       price: "₹479",
// // //       rating: 4.7,
// // //       reviews: 189,
// // //       image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=300&fit=crop",
// // //       description: "Complete basin installation with plumbing connections",
// // //       time: "1 hour",
// // //     },
// // //     {
// // //       id: 4,
// // //       title: "Waste Pipe Replacement",
// // //       price: "₹139",
// // //       rating: 4.8,
// // //       reviews: 267,
// // //       image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",
// // //       description: "Replace and repair waste pipes safely",
// // //       time: "30 mins",
// // //     },
// // //     {
// // //       id: 5,
// // //       title: "Kitchen Tile Grouting",
// // //       price: "₹249",
// // //       rating: 4.6,
// // //       reviews: 156,
// // //       image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=300&fit=crop",
// // //       description: "Professional tile grouting and sealing",
// // //       time: "1-2 hours",
// // //     },
// // //     {
// // //       id: 6,
// // //       title: "Shower Filter Installation",
// // //       price: "₹199",
// // //       rating: 4.9,
// // //       reviews: 298,
// // //       image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",
// // //       description: "Install water filters for shower heads",
// // //       time: "20 mins",
// // //     },
// // //     {
// // //       id: 7,
// // //       title: "Pipe Leak Repair",
// // //       price: "₹299",
// // //       rating: 4.9,
// // //       reviews: 445,
// // //       image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",
// // //       description: "Quick diagnosis and repair of leaking pipes",
// // //       time: "30 mins",
// // //     },
// // //     {
// // //       id: 8,
// // //       title: "Drain Cleaning",
// // //       price: "₹349",
// // //       rating: 4.8,
// // //       reviews: 367,
// // //       image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=300&fit=crop",
// // //       description: "Unclog and clean drainage systems",
// // //       time: "45 mins",
// // //     },
// // //   ];

// // //   const handleAddToCart = (service) => {
// // //     addToCart({
// // //       id: `plumber-${service.id}`,
// // //       title: service.title,
// // //       price: service.price,
// // //       image: service.image,
// // //       quantity: quantity,
// // //     });
// // //     setSelectedService(null);
// // //     setQuantity(1);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-gray-50 py-12 px-4 sm:px-8">
// // //       <div className="max-w-7xl mx-auto">
// // //         {/* Header */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: -20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           className="text-center mb-16"
// // //         >
// // //           <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
// // //             Plumber Services
// // //           </h1>
// // //           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// // //             High-Quality Plumbing by Fast, Reliable, Certified Technicians
// // //           </p>

// // //           {/* Quick Stats */}
// // //           <div className="flex justify-center gap-8 mt-8 flex-wrap">
// // //             <div className="flex items-center gap-2">
// // //               <Star className="text-primary-600" fill="currentColor" />
// // //               <span className="font-bold text-gray-900">4.8 Rating</span>
// // //             </div>
// // //             <div className="text-gray-900 font-bold">12,000+ Bookings</div>
// // //             <div className="text-gray-900 font-bold">Same-Day Available</div>
// // //           </div>
// // //         </motion.div>

// // //         {/* Services Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
// // //           {services.map((service, idx) => (
// // //             <motion.div
// // //               key={service.id}
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: idx * 0.05 }}
// // //               className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border border-gray-200"
// // //             >
// // //               {/* Image */}
// // //               <div className="w-full h-40 overflow-hidden bg-gray-200 relative group">
// // //                 <img
// // //                   src={service.image}
// // //                   alt={service.title}
// // //                   className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
// // //                 />
// // //                 <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold">
// // //                   {service.time}
// // //                 </div>
// // //               </div>

// // //               {/* Content */}
// // //               <div className="p-5">
// // //                 {/* Title */}
// // //                 <h3 className="font-bold text-gray-900 mb-2 text-sm line-clamp-2">
// // //                   {service.title}
// // //                 </h3>

// // //                 {/* Description */}
// // //                 <p className="text-xs text-gray-600 mb-4 line-clamp-2">
// // //                   {service.description}
// // //                 </p>

// // //                 {/* Rating */}
// // //                 <div className="flex items-center gap-2 mb-4">
// // //                   <div className="flex items-center gap-1">
// // //                     <Star size={14} fill="#059669" className="text-primary-600" />
// // //                     <span className="font-bold text-gray-900 text-sm">
// // //                       {service.rating}
// // //                     </span>
// // //                   </div>
// // //                   <span className="text-xs text-gray-600">
// // //                     ({service.reviews})
// // //                   </span>
// // //                 </div>

// // //                 {/* Price */}
// // //                 <div className="mb-4">
// // //                   <p className="text-xs text-gray-600">Starting from</p>
// // //                   <p className="text-2xl font-bold text-primary-600">
// // //                     {service.price}
// // //                   </p>
// // //                 </div>

// // //                 {/* Add to Cart Button */}
// // //                 <button
// // //                   onClick={() => {
// // //                     setSelectedService(service);
// // //                     handleAddToCart(service);
// // //                   }}
// // //                   className="w-full py-2 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-2 text-sm"
// // //                 >
// // //                   <ShoppingCart size={16} />
// // //                   Add to Cart
// // //                 </button>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //         {/* CTA Section */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-12 text-center text-white"
// // //         >
// // //           <h2 className="text-3xl font-bold mb-4">Don't see what you need?</h2>
// // //           <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
// // //             We handle all plumbing services. Contact us for custom requests or emergency repairs.
// // //           </p>
// // //           <button className="px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition">
// // //             Contact Us
// // //           </button>
// // //         </motion.div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PlumberCardGrid;

// // import React from "react";
// // import { motion } from "framer-motion";
// // import { Star, ArrowRight, Zap, BarChart3, Shield } from "lucide-react";
// // import { useNavigate } from "react-router-dom";

// // const PlumberHybrid = () => {
// //   const navigate = useNavigate();

// //   const services = [
// //     {
// //       id: "bath-accessories",
// //       title: "Bath Accessory Installation",
// //       price: "₹129 onwards",
// //       rating: 4.8,
// //       reviews: 245,
// //       image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=300&fit=crop",
// //       badge: "Popular",
// //     },
// //     {
// //       id: "shower-installation",
// //       title: "Shower Installation",
// //       price: "₹159 onwards",
// //       rating: 4.9,
// //       reviews: 312,
// //       image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",
// //       badge: "Top Rated",
// //     },
// //     {
// //       id: "wash-basin",
// //       title: "Wash Basin Installation",
// //       price: "₹479 onwards",
// //       rating: 4.7,
// //       reviews: 189,
// //       image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=300&fit=crop",
// //       badge: "Premium",
// //     },
// //     {
// //       id: "waste-pipe",
// //       title: "Waste Pipe Replacement",
// //       price: "₹139 onwards",
// //       rating: 4.8,
// //       reviews: 267,
// //       image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",
// //       badge: "Fast",
// //     },
// //     {
// //       id: "drain-cleaning",
// //       title: "Drain Cleaning",
// //       price: "₹349 onwards",
// //       rating: 4.8,
// //       reviews: 367,
// //       image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=300&fit=crop",
// //       badge: "Top Rated",
// //     },
// //     {
// //       id: "pipe-leak",
// //       title: "Pipe Leak Repair",
// //       price: "₹299 onwards",
// //       rating: 4.9,
// //       reviews: 445,
// //       image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",
// //       badge: "Urgent",
// //     },
// //   ];

// //   const features = [
// //     {
// //       icon: <Zap className="text-primary-600" size={32} />,
// //       title: "30-Minute Response",
// //       description: "Fast response time to your plumbing emergencies",
// //     },
// //     {
// //       icon: <BarChart3 className="text-primary-600" size={32} />,
// //       title: "Transparent Pricing",
// //       description: "No hidden charges, fair pricing for all services",
// //     },
// //     {
// //       icon: <Shield className="text-primary-600" size={32} />,
// //       title: "Warranty Included",
// //       description: "1-2 year warranty on all repairs and parts",
// //     },
// //   ];

// //   return (
// //     <div className="bg-white overflow-hidden">
// //       {/* HERO SECTION */}
// //       <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 px-6 sm:px-8">
// //         <div className="max-w-6xl mx-auto">
// //           <motion.div
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             className="text-center mb-12"
// //           >
// //             <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
// //               Expert <span className="text-primary-600">Plumbing Services</span>
// //             </h1>
// //             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //               Professional, reliable, and honest plumbing solutions for your home. Fast response, certified technicians.
// //             </p>

// //             {/* Quick Stats */}
// //             <div className="flex justify-center gap-8 mt-8 flex-wrap">
// //               <div className="flex items-center gap-2">
// //                 <Star className="text-primary-600" fill="currentColor" />
// //                 <span className="font-bold text-gray-900">4.8 Rating</span>
// //               </div>
// //               <div className="text-gray-900 font-bold">12,000+ Bookings</div>
// //               <div className="text-gray-900 font-bold">24/7 Available</div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* FEATURES */}
// //       <section className="py-16 px-6 sm:px-8 bg-gray-50">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {features.map((feature, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 10 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 className="text-center"
// //               >
// //                 <div className="flex justify-center mb-4">{feature.icon}</div>
// //                 <h3 className="text-lg font-bold text-gray-900 mb-2">
// //                   {feature.title}
// //                 </h3>
// //                 <p className="text-gray-600">{feature.description}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* SERVICES GRID - WITH CARDS LINKING TO DETAILS */}
// //       <section className="py-20 px-6 sm:px-8 bg-white">
// //         <div className="max-w-7xl mx-auto">
// //           <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
// //             Our <span className="text-primary-600">Services</span>
// //           </h2>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {services.map((service, idx) => (
// //               <motion.div
// //                 key={service.id}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 onClick={() => navigate(`/plumber/${service.id}`)}
// //                 className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 transition transform hover:scale-105"
// //               >
// //                 {/* Image */}
// //                 <div className="w-full h-48 overflow-hidden bg-gray-200 relative">
// //                   <img
// //                     src={service.image}
// //                     alt={service.title}
// //                     className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
// //                   />
// //                   <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-xs font-bold">
// //                     {service.badge}
// //                   </div>
// //                 </div>

// //                 {/* Content */}
// //                 <div className="p-6">
// //                   <h3 className="text-lg font-bold text-gray-900 mb-3">
// //                     {service.title}
// //                   </h3>

// //                   {/* Rating */}
// //                   <div className="flex items-center gap-2 mb-4">
// //                     <div className="flex items-center gap-1">
// //                       <Star size={18} fill="#059669" className="text-primary-600" />
// //                       <span className="font-bold text-gray-900">
// //                         {service.rating}
// //                       </span>
// //                     </div>
// //                     <span className="text-sm text-gray-600">
// //                       ({service.reviews} reviews)
// //                     </span>
// //                   </div>

// //                   {/* Price */}
// //                   <div className="mb-6">
// //                     <p className="text-sm text-gray-600">Starting from</p>
// //                     <p className="text-2xl font-bold text-primary-600">
// //                       {service.price}
// //                     </p>
// //                   </div>

// //                   {/* CTA */}
// //                   <button className="w-full py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-2 group/btn">
// //                     View Details
// //                     <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition" />
// //                   </button>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA SECTION */}
// //       <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 px-6 sm:px-8 text-white">
// //         <div className="max-w-4xl mx-auto text-center">
// //           <h2 className="text-4xl font-bold mb-6">
// //             Emergency Plumbing Help?
// //           </h2>
// //           <p className="text-xl text-primary-100 mb-8">
// //             Need urgent service? Call us now for same-day emergency plumbing.
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <button
// //               onClick={() => window.location.href = "tel:+919218028500"}
// //               className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition"
// //             >
// //               Call Now
// //             </button>
// //             <button
// //               onClick={() => navigate("/employee-form")}
// //               className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-600 transition"
// //             >
// //               Join as Professional
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default PlumberHybrid;

// import React from "react";
// import { motion } from "framer-motion";
// import { Star, ArrowRight, Zap, BarChart3, Shield } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const PlumberHybrid = () => {
//   const navigate = useNavigate();

//   const services = [
//     {
//       id: "bath-accessories",
//       title: "Bath Accessory Installation",
//       price: "₹129 onwards",
//       rating: 4.8,
//       reviews: 245,
//       image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop",
//       badge: "Popular",
//     },
//     {
//       id: "shower-installation",
//       title: "Shower Installation",
//       price: "₹159 onwards",
//       rating: 4.9,
//       reviews: 312,
//       image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
//       badge: "Top Rated",
//     },
//     {
//       id: "wash-basin",
//       title: "Wash Basin Installation",
//       price: "₹479 onwards",
//       rating: 4.7,
//       reviews: 189,
//       image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop",
//       badge: "Premium",
//     },
//     {
//       id: "waste-pipe",
//       title: "Waste Pipe Replacement",
//       price: "₹139 onwards",
//       rating: 4.8,
//       reviews: 267,
//       image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
//       badge: "Fast",
//     },
//     {
//       id: "kitchen-tile",
//       title: "Kitchen Tile Grouting",
//       price: "₹249 onwards",
//       rating: 4.6,
//       reviews: 156,
//       image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop",
//       badge: "Quality",
//     },
//     {
//       id: "shower-filter",
//       title: "Shower Filter Installation",
//       price: "₹199 onwards",
//       rating: 4.9,
//       reviews: 298,
//       image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
//       badge: "Top Rated",
//     },
//   ];

//   const features = [
//     {
//       icon: <Zap className="text-primary-600" size={32} />,
//       title: "30-Minute Response",
//       description: "Fast response time to your plumbing emergencies",
//     },
//     {
//       icon: <BarChart3 className="text-primary-600" size={32} />,
//       title: "Transparent Pricing",
//       description: "No hidden charges, fair pricing for all services",
//     },
//     {
//       icon: <Shield className="text-primary-600" size={32} />,
//       title: "Warranty Included",
//       description: "1-2 year warranty on all repairs and parts",
//     },
//   ];

//   return (
//     <div className="bg-white overflow-hidden">
//       {/* HERO SECTION */}
//       <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 px-6 sm:px-8">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-12"
//           >
//             <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
//               Expert <span className="text-primary-600">Plumbing Services</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Professional, reliable, and honest plumbing solutions for your home. Fast response, certified technicians.
//             </p>

//             {/* Quick Stats */}
//             <div className="flex justify-center gap-8 mt-8 flex-wrap">
//               <div className="flex items-center gap-2">
//                 <Star className="text-primary-600" fill="currentColor" />
//                 <span className="font-bold text-gray-900">4.8 Rating</span>
//               </div>
//               <div className="text-gray-900 font-bold">12,000+ Bookings</div>
//               <div className="text-gray-900 font-bold">24/7 Available</div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="py-16 px-6 sm:px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="flex justify-center mb-4">{feature.icon}</div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SERVICES GRID - WITH CARDS LINKING TO DETAILS */}
//       <section className="py-20 px-6 sm:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
//             Our <span className="text-primary-600">Services</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 onClick={() => navigate(`/plumber/${service.id}`)}
//                 className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 transition transform hover:scale-105"
//               >
//                 {/* Image */}
//                 <div className="w-full h-48 overflow-hidden bg-gray-200 relative">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
//                   />
//                   <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-xs font-bold">
//                     {service.badge}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-gray-900 mb-3">
//                     {service.title}
//                   </h3>

//                   {/* Rating */}
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className="flex items-center gap-1">
//                       <Star size={18} fill="#059669" className="text-primary-600" />
//                       <span className="font-bold text-gray-900">
//                         {service.rating}
//                       </span>
//                     </div>
//                     <span className="text-sm text-gray-600">
//                       ({service.reviews} reviews)
//                     </span>
//                   </div>

//                   {/* Price */}
//                   <div className="mb-6">
//                     <p className="text-sm text-gray-600">Starting from</p>
//                     <p className="text-2xl font-bold text-primary-600">
//                       {service.price}
//                     </p>
//                   </div>

//                   {/* CTA */}
//                   <button className="w-full py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-2 group/btn">
//                     View Details
//                     <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition" />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION - "Don't see what you need?" */}
//       <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-12 text-center text-white my-12 mx-6 sm:mx-8">
//         <h2 className="text-3xl font-bold mb-4">Don't see what you need?</h2>
//         <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
//           We handle all plumbing services. Contact us for custom requests or emergency repairs.
//         </p>
//         <button 
//           onClick={() => navigate("/contact")}
//           className="px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition"
//         >
//           Contact Us
//         </button>
//       </section>

//       {/* EMERGENCY CTA SECTION */}
//       <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 px-6 sm:px-8 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-6">
//             Emergency Plumbing Help?
//           </h2>
//           <p className="text-xl text-primary-100 mb-8">
//             Need urgent service? Call us now for same-day emergency plumbing.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={() => window.location.href = "tel:+919218028500"}
//               className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition"
//             >
//               Call Now
//             </button>
//             <button
//               onClick={() => navigate("/employee-form")}
//               className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-600 transition"
//             >
//               Join as Professional
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PlumberHybrid;

import React from "react";
import { motion } from "framer-motion";
import { Star, Zap, BarChart3, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const PlumberHybrid = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // All 21 original plumber services with actual images and prices
  const services = [
    { id: 'plumber-1', title: 'Bath Accessory Installation', price: '₹129', image: '/images/plumbing/Bath-accessory-installation.webp', rating: 4.8, reviews: 245, badge: "Popular" },
    { id: 'plumber-2', title: 'Shower Installation', price: '₹159+', image: '/images/plumbing/shower-installation.webp', rating: 4.9, reviews: 312, badge: "Top Rated" },
    { id: 'plumber-3', title: 'Wash Basin Installation', price: '₹479', image: '/images/plumbing/Wash-basin-installation.webp', rating: 4.7, reviews: 189, badge: "Premium" },
    { id: 'plumber-4', title: 'Waste Pipe Replacement', price: '₹139', image: '/images/plumbing/waste-pipe-replacement.webp', rating: 4.8, reviews: 267, badge: "Fast" },
    { id: 'plumber-5', title: 'Sink Drainage Removal', price: '₹189', image: '/images/plumbing/Sink-drainage.webp', rating: 4.6, reviews: 156, badge: "Quality" },
    { id: 'plumber-6', title: 'Bathroom Tile Grouting', price: '₹1,500', image: '/images/plumbing/Bathroom-tile.webp', rating: 4.7, reviews: 134, badge: "Premium" },
    { id: 'plumber-7', title: 'Kitchen Tile Grouting', price: '₹1,000', image: '/images/plumbing/kitchen-tile.webp', rating: 4.6, reviews: 112, badge: "Quality" },
    { id: 'plumber-8', title: 'Shower Filter Installation', price: '₹169', image: '/images/plumbing/shower-filter.webp', rating: 4.9, reviews: 298, badge: "Top Rated" },
    { id: 'plumber-9', title: 'Washing Machine Filter Install', price: '₹139', image: '/images/plumbing/wm-filter.webp', rating: 4.8, reviews: 178, badge: "Popular" },
    { id: 'plumber-10', title: 'Drainage Cover Installation', price: '₹179', image: '/images/plumbing/drain-cover.webp', rating: 4.5, reviews: 98, badge: "Quick" },
    { id: 'plumber-11', title: 'Bathroom Drainage Removal', price: '₹409', image: '/images/plumbing/bath-drain.webp', rating: 4.7, reviews: 145, badge: "Premium" },
    { id: 'plumber-12', title: 'Balcony Drainage Removal', price: '₹299', image: '/images/plumbing/balcony-drain.webp', rating: 4.6, reviews: 121, badge: "Quality" },
    { id: 'plumber-13', title: 'Toilet Seat Cover Replacement', price: '₹139', image: '/images/plumbing/toilet-seat.webp', rating: 4.8, reviews: 267, badge: "Fast" },
    { id: 'plumber-14', title: 'Flush Tank Repair (PVC)', price: '₹159', image: '/images/plumbing/flush-pvc.webp', rating: 4.7, reviews: 189, badge: "Quality" },
    { id: 'plumber-15', title: 'Flush Tank Repair (Concealed)', price: '₹169+', image: '/images/plumbing/flush-concealed.webp', rating: 4.8, reviews: 203, badge: "Top Rated" },
    { id: 'plumber-16', title: 'Western Toilet Repair', price: '₹699', image: '/images/plumbing/western-repair.webp', rating: 4.9, reviews: 234, badge: "Top Rated" },
    { id: 'plumber-17', title: 'Toilet Pot Blockage Removal', price: '₹1,299', image: '/images/plumbing/loo-blockage.webp', rating: 4.8, reviews: 167, badge: "Urgent" },
    { id: 'plumber-18', title: 'Jet Spray Installation', price: '₹139', image: '/images/plumbing/jet-spray.webp', rating: 4.7, reviews: 145, badge: "Popular" },
    { id: 'plumber-19', title: 'Flush Tank Replacement', price: '₹529', image: '/images/plumbing/flush-replace.webp', rating: 4.8, reviews: 189, badge: "Premium" },
    { id: 'plumber-20', title: 'Western Toilet Installation', price: '₹1,499+', image: '/images/plumbing/western-install.webp', rating: 4.9, reviews: 276, badge: "Premium" },
    { id: 'plumber-21', title: 'Indian Toilet Installation', price: '₹1,699', image: '/images/plumbing/indian-install.webp', rating: 4.8, reviews: 198, badge: "Premium" },
  ];

  const features = [
    {
      icon: <Zap className="text-primary-600" size={32} />,
      title: "30-Minute Response",
      description: "Fast response time to your plumbing emergencies",
    },
    {
      icon: <BarChart3 className="text-primary-600" size={32} />,
      title: "Transparent Pricing",
      description: "No hidden charges, fair pricing for all services",
    },
    {
      icon: <Shield className="text-primary-600" size={32} />,
      title: "Warranty Included",
      description: "1-2 year warranty on all repairs and parts",
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
              Expert <span className="text-primary-600">Plumbing Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional, reliable, and honest plumbing solutions for your home. Fast response, certified technicians.
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-8 mt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Star className="text-primary-600" fill="currentColor" />
                <span className="font-bold text-gray-900">4.8 Rating</span>
              </div>
              <div className="text-gray-900 font-bold">12,000+ Bookings</div>
              <div className="text-gray-900 font-bold">24/7 Available</div>
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

      {/* SERVICES GRID - ALL 21 SERVICES WITH ADD TO CART */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-primary-600">Services</span> (21 Options)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop";
                    }}
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
          We handle all plumbing services. Contact us for custom requests or emergency repairs.
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
            Emergency Plumbing Help?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Need urgent service? Call us now for same-day emergency plumbing.
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

export default PlumberHybrid;
