// // // // src/pages/Maid.js
// // // import React from "react";
// // // import MaidServices from "../components/MaidServices";
// // // import Cta from "../components/Cta";
// // // // import ExitIntentPopup from "../components/ExitIntentPopup";
// // // import Pricing from "../components/Pricing";


// // // const Maid = () => {
// // //   return (
// // //     <div className="bg-gray-100">
// // //       {/* <ExitIntentPopup /> */}
// // //       {/* Hero Section */}
// // //       <div className="w-full relative h-[350px] md:h-[450px] bg-cover bg-center mb-5" style={{ backgroundImage: "url('https://media.istockphoto.com/id/868638364/photo/worker-with-a-gesture-of-his-hands-to-protect-the-quality-of-the-work.jpg?s=612x612&w=0&k=20&c=2kzTUkckatJq_m0hOX8CRFDp8FKNLoyJLpdwf37GmD8=')" }}>
// // //         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// // //           <div className="text-center text-white px-4 max-w-4xl mx-auto">
// // //             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold"> Maid </h1>
// // //             <p className="mt-4 text-sm sm:text-base md:text-lg">
// // //             Want a freshly cleaned home and your free time back? Zollowup Maid today and take advantage of our expert home cleaning services!             
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>


// // //       {/* Maid Services & Handy Cleaning Sections */}
// // //       <MaidServices />
// // //       <Pricing />
// // //       <Cta />
// // //       {/* Call to Action Section */}

// // //     </div>
// // //   );
// // // };

// // // export default Maid;

// // // src/pages/Maid.js
// // import React from "react";
// // import MaidServices from "../components/MaidServices";
// // import Cta from "../components/Cta";
// // // import ExitIntentPopup from "../components/ExitIntentPopup";
// // import Pricing from "../components/Pricing";

// // const Maid = () => {
// //   return (
// //     <div className="bg-white">
// //       {/* <ExitIntentPopup /> */}
      
// //       {/* Hero Section - Minimalist Zollowup */}
// //       <div style={{ background: 'linear-gradient(135deg, #f0faf8 0%, #e8f5f2 100%)' }} className="py-0 px-4 md:px-16">
// //         <div className="max-w-6xl mx-auto">
// //           {/* Hero Image Container */}
// //           <div className="relative h-96 md:h-[500px] w-full overflow-hidden rounded-lg border mt-6 mb-8" style={{ borderColor: '#E5E7EB' }}>
// //             {/* Background Image */}
// //             <img
// //               src="https://media.istockphoto.com/id/868638364/photo/worker-with-a-gesture-of-his-hands-to-protect-the-quality-of-the-work.jpg?s=612x612&w=0&k=20&c=2kzTUkckatJq_m0hOX8CRFDp8FKNLoyJLpdwf37GmD8="
// //               alt="Professional maid service"
// //               className="w-full h-full object-cover"
// //             />

// //             {/* Overlay */}
// //             <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.3)' }}></div>

// //             {/* Content */}
// //             <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
// //               <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
// //                 Maid Service
// //               </h1>
// //               <p className="text-lg md:text-xl text-white mb-8 max-w-xl">
// //                 Want a freshly cleaned home and your free time back? Zollowup Maid today and take advantage of our expert home cleaning services!
// //               </p>
              
// //               {/* CTA Button */}
// //               <button
// //                 className="px-8 py-3 text-white font-bold rounded transition-all"
// //                 style={{
// //                   background: '#2d5f4f'
// //                 }}
// //                 onMouseOver={(e) => {
// //                   e.currentTarget.style.background = '#1d3f2f';
// //                 }}
// //                 onMouseOut={(e) => {
// //                   e.currentTarget.style.background = '#2d5f4f';
// //                 }}
// //               >
// //                 Book Now →
// //               </button>
// //             </div>
// //           </div>

// //           {/* Trust Info Below Hero */}
// //           <div className="px-6 py-8">
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //               <div className="text-center">
// //                 <p className="text-2xl font-bold" style={{ color: '#2d5f4f' }}>4.9★</p>
// //                 <p className="text-sm text-gray-600">Average Rating</p>
// //               </div>
// //               <div className="text-center">
// //                 <p className="text-2xl font-bold" style={{ color: '#2d5f4f' }}>3000+</p>
// //                 <p className="text-sm text-gray-600">Happy Customers</p>
// //               </div>
// //               <div className="text-center">
// //                 <p className="text-2xl font-bold" style={{ color: '#2d5f4f' }}>100%</p>
// //                 <p className="text-sm text-gray-600">Satisfaction Guarantee</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Maid Services & Pricing Sections */}
// //       <MaidServices />
// //       <Pricing />
// //       <Cta />
// //       {/* Call to Action Section */}
// //     </div>
// //   );
// // };

// // export default Maid;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Star,
//   Check,
//   ArrowRight,
//   MapPin,
//   MessageSquare,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Maid = () => {
//   const navigate = useNavigate();
//   const [selectedTestimonial, setSelectedTestimonial] = useState(0);

//   // Service-Specific Data
//   const serviceRating = {
//     overall: "4.9",
//     reviews: "2,340",
//     bookings: "15,000+",
//   };

//   const whatIncluded = [
//     "Dusting & vacuuming",
//     "Floor cleaning & mopping",
//     "Kitchen cleaning",
//     "Bathroom cleaning",
//     "Bed making & laundry",
//     "General tidying",
//   ];

//   const pricing = [
//     {
//       duration: "4 Hours",
//       price: "₹2,000",
//       frequency: "One-time or Daily",
//       popular: false,
//       features: ["Basic cleaning", "2-3 rooms", "Same-day booking"],
//     },
//     {
//       duration: "8 Hours",
//       price: "₹4,000",
//       frequency: "One-time or Daily",
//       popular: true,
//       features: [
//         "Deep cleaning",
//         "Entire home",
//         "Priority support",
//         "Most popular choice",
//       ],
//     },
//     {
//       duration: "12 Hours",
//       price: "₹5,500",
//       frequency: "One-time or Daily",
//       popular: false,
//       features: [
//         "Complete cleaning",
//         "All areas covered",
//         "Premium service",
//       ],
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Mrs. Sharma",
//       location: "Delhi",
//       rating: 5,
//       image: "👩",
//       text: "Ramna has been our maid for 8 months now. Very reliable, professional, and trustworthy. Highly recommend ZollowUp!",
//     },
//     {
//       name: "Priya Patel",
//       location: "Bangalore",
//       rating: 5,
//       image: "👩‍🦰",
//       text: "Finally found a verified maid service. No more worrying about reliability. ZollowUp maids are well-trained!",
//     },
//     {
//       name: "Anjali Kumar",
//       location: "Mumbai",
//       rating: 5,
//       image: "👩",
//       text: "Best decision ever. My home is spotless, and I can focus on work. The verification process gave me so much peace of mind.",
//     },
//   ];

//   const bookingSteps = [
//     {
//       number: "1",
//       title: "Select Service",
//       description: "Choose duration (4h, 8h, or 12h) and frequency",
//     },
//     {
//       number: "2",
//       title: "Pick Date & Time",
//       description: "Book for today or any date that works for you",
//     },
//     {
//       number: "3",
//       title: "Verified Maid Arrives",
//       description: "Professional arrives ready to work. Payment after service",
//     },
//   ];

//   const faqs = [
//     {
//       q: "How are maids verified?",
//       a: "100% background checked, identity verified, trained in professional cleaning standards. Your safety is our priority.",
//     },
//     {
//       q: "Can I request a specific maid?",
//       a: "Yes! After your first booking, you can request the same maid for consistency and comfort.",
//     },
//     {
//       q: "What if I'm not satisfied?",
//       a: "We offer a satisfaction guarantee. If unsatisfied, we'll send another verified maid or provide a full refund.",
//     },
//     {
//       q: "Do maids bring their own supplies?",
//       a: "Yes, maids bring professional cleaning supplies. You can provide specific preferences too.",
//     },
//     {
//       q: "Can I book same-day?",
//       a: "Yes! Available slots can be booked same-day. Call 24/7 support for urgent bookings.",
//     },
//     {
//       q: "What's your cancellation policy?",
//       a: "Free cancellation up to 24 hours before. Emergency cancellations may have a small fee.",
//     },
//   ];

//   const trustPoints = [
//     "100% Verified & Background Checked",
//     "Professional Training Certified",
//     "24/7 Customer Support",
//     "Satisfaction Guarantee",
//     "Secure Payment",
//     "Insured Services",
//   ];

//   return (
//     <div className="bg-white overflow-hidden">
//       {/* HERO SECTION */}
//       <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16 px-6 sm:px-8 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl -z-10"></div>

//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left - Text */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="mb-6">
//                 <span className="text-primary-600 font-semibold text-sm">
//                   Professional Home Cleaning
//                 </span>
//                 <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mt-2 mb-6">
//                   Expert Maid <span className="text-primary-600">Services</span>
//                 </h1>
//                 <p className="text-xl text-gray-700 mb-8">
//                   Professional, verified maids who care about your home. Book in
//                   minutes. No hidden charges.
//                 </p>
//               </div>

//               {/* Quick Stats */}
//               <div className="grid grid-cols-3 gap-4 mb-8 bg-white p-6 rounded-lg">
//                 <div>
//                   <div className="text-2xl font-bold text-primary-600">
//                     {serviceRating.overall}★
//                   </div>
//                   <div className="text-xs text-gray-600">
//                     {serviceRating.reviews} reviews
//                   </div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-gray-900">
//                     {serviceRating.bookings}
//                   </div>
//                   <div className="text-xs text-gray-600">Bookings completed</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-gray-900">
//                     100%
//                   </div>
//                   <div className="text-xs text-gray-600">Verified</div>
//                 </div>
//               </div>

//               {/* CTA */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
//                 className="px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-xl hover:bg-primary-700 transition shadow-lg inline-flex items-center gap-3"
//               >
//                 Book a Maid Now
//                 <ArrowRight size={24} />
//               </motion.button>
//             </motion.div>

//             {/* Right - Image */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="rounded-xl overflow-hidden shadow-lg h-96"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=500&fit=crop"
//                 alt="Professional Maid Service"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* TRUST INDICATORS */}
//       <section className="bg-gray-50 py-16 px-6 sm:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-center text-gray-900 text-2xl font-bold mb-12">
//             Why Choose Our <span className="text-primary-600">Maids</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {trustPoints.map((point, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200"
//               >
//                 <Check className="text-primary-600 flex-shrink-0" size={24} />
//                 <span className="text-gray-800 font-medium">{point}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHAT'S INCLUDED */}
//       <section className="py-20 px-6 sm:px-8 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
//             What's <span className="text-primary-600">Included</span>
//           </h2>
//           <p className="text-center text-gray-600 mb-12">
//             Comprehensive cleaning services for your entire home
//           </p>

//           <div className="bg-gradient-to-br from-primary-50 to-gray-50 rounded-xl p-8 border border-primary-200">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {whatIncluded.map((item, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: idx * 0.1 }}
//                   className="flex items-center gap-4"
//                 >
//                   <Check className="text-primary-600 flex-shrink-0" size={24} />
//                   <span className="text-gray-800 text-lg font-medium">
//                     {item}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PRICING - TRANSPARENT */}
//       <section id="pricing" className="py-20 px-6 sm:px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
//             Transparent <span className="text-primary-600">Pricing</span>
//           </h2>
//           <p className="text-center text-gray-600 mb-12">
//             Choose the duration that works best for you
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {pricing.map((plan, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.15 }}
//                 className={`rounded-xl p-8 transition ${
//                   plan.popular
//                     ? "bg-primary-600 text-white ring-2 ring-primary-600 md:scale-105 shadow-lg"
//                     : "bg-white border border-gray-200 text-gray-900"
//                 }`}
//               >
//                 {plan.popular && (
//                   <div className="text-xs font-bold mb-4 bg-primary-700 px-3 py-1 rounded-full inline-block">
//                     MOST POPULAR
//                   </div>
//                 )}

//                 <h3 className="text-2xl font-bold mb-2">{plan.duration}</h3>
//                 <p className={`text-sm mb-6 ${plan.popular ? "text-primary-100" : "text-gray-600"}`}>
//                   {plan.frequency}
//                 </p>

//                 <div className="mb-6">
//                   <span className="text-4xl font-bold">{plan.price}</span>
//                   <span className={`text-sm ${plan.popular ? "text-primary-100" : "text-gray-600"}`}>
//                     /day
//                   </span>
//                 </div>

//                 <button
//                   onClick={() => navigate("/checkout", { state: { service: "Maid", duration: plan.duration, price: plan.price } })}
//                   className={`w-full py-3 rounded-lg font-semibold mb-6 transition ${
//                     plan.popular
//                       ? "bg-white text-primary-600 hover:bg-gray-100"
//                       : "bg-primary-600 text-white hover:bg-primary-700"
//                   }`}
//                 >
//                   Book Now
//                 </button>

//                 <ul className="space-y-3">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-3 text-sm">
//                       <Check size={18} />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS - Service Specific */}
//       <section className="py-20 px-6 sm:px-8 bg-primary-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
//             Why Families Love <span className="text-primary-600">Our Maids</span>
//           </h2>
//           <p className="text-center text-gray-600 mb-12">
//             Real reviews from satisfied customers
//           </p>

//           <motion.div
//             key={selectedTestimonial}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-200 text-center mb-8"
//           >
//             <div className="text-6xl mb-4">
//               {testimonials[selectedTestimonial].image}
//             </div>

//             <div className="flex justify-center gap-1 mb-6">
//               {[...Array(testimonials[selectedTestimonial].rating)].map(
//                 (_, i) => (
//                   <Star
//                     key={i}
//                     fill="#059669"
//                     stroke="#059669"
//                     size={24}
//                   />
//                 )
//               )}
//             </div>

//             <p className="text-xl text-gray-800 mb-6 italic">
//               "{testimonials[selectedTestimonial].text}"
//             </p>

//             <div>
//               <div className="font-bold text-gray-900">
//                 {testimonials[selectedTestimonial].name}
//               </div>
//               <div className="text-sm text-gray-600 flex items-center justify-center gap-1 mt-1">
//                 <MapPin size={16} />
//                 {testimonials[selectedTestimonial].location}
//               </div>
//             </div>
//           </motion.div>

//           <div className="flex justify-center gap-3">
//             {testimonials.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setSelectedTestimonial(idx)}
//                 className={`w-3 h-3 rounded-full transition ${
//                   selectedTestimonial === idx
//                     ? "bg-primary-600 w-8"
//                     : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* BOOKING PROCESS - 3 Simple Steps */}
//       <section className="py-20 px-6 sm:px-8 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
//             How It <span className="text-primary-600">Works</span>
//           </h2>
//           <p className="text-center text-gray-600 mb-16">
//             Booking a maid has never been easier
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {bookingSteps.map((step, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.2 }}
//                 className="relative"
//               >
//                 {/* Step Number */}
//                 <div className="mb-6">
//                   <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
//                     {step.number}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="text-center">
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-600">{step.description}</p>
//                 </div>

//                 {/* Arrow */}
//                 {idx < bookingSteps.length - 1 && (
//                   <div className="hidden md:block absolute top-8 -right-6 text-primary-600">
//                     <ArrowRight size={32} />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
//               className="px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-xl hover:bg-primary-700 transition shadow-lg inline-flex items-center gap-3"
//             >
//               Start Booking Now
//               <ArrowRight size={24} />
//             </motion.button>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-20 px-6 sm:px-8 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
//             Common <span className="text-primary-600">Questions</span>
//           </h2>

//           <div className="space-y-4">
//             {faqs.map((faq, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-300 transition"
//               >
//                 <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
//                   <MessageSquare className="text-primary-600" size={20} />
//                   {faq.q}
//                 </h3>
//                 <p className="text-gray-600">{faq.a}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 px-6 sm:px-8 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-6">
//             Ready for a Clean Home?
//           </h2>
//           <p className="text-xl mb-8 text-primary-100">
//             Join 15,000+ families using ZollowUp for their maid services.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => navigate("/contact")}
//             className="px-8 py-4 bg-white text-primary-600 text-lg font-bold rounded-xl hover:bg-gray-100 transition shadow-lg inline-flex items-center gap-3"
//           >
//             Book Your Maid Today
//             <ArrowRight size={24} />
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Maid;


import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Check,
  ArrowRight,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const Maid = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  // Service-Specific Data
  const serviceRating = {
    overall: "4.9",
    reviews: "2,340",
    bookings: "15,000+",
  };

  const whatIncluded = [
    "Dusting & vacuuming",
    "Floor cleaning & mopping",
    "Kitchen cleaning",
    "Bathroom cleaning",
    "Bed making & laundry",
    "General tidying",
  ];

  const pricing = [
    {
      duration: "4 Hours",
      price: "₹2,000",
      frequency: "One-time or Daily",
      popular: false,
      features: ["Basic cleaning", "2-3 rooms", "Same-day booking"],
    },
    {
      duration: "8 Hours",
      price: "₹4,000",
      frequency: "One-time or Daily",
      popular: true,
      features: [
        "Deep cleaning",
        "Entire home",
        "Priority support",
        "Most popular choice",
      ],
    },
    {
      duration: "12 Hours",
      price: "₹5,500",
      frequency: "One-time or Daily",
      popular: false,
      features: [
        "Complete cleaning",
        "All areas covered",
        "Premium service",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Mrs. Sharma",
      location: "Delhi",
      rating: 5,
      image: "👩",
      text: "Ramna has been our maid for 8 months now. Very reliable, professional, and trustworthy. Highly recommend ZollowUp!",
    },
    {
      name: "Priya Patel",
      location: "Bangalore",
      rating: 5,
      image: "👩‍🦰",
      text: "Finally found a verified maid service. No more worrying about reliability. ZollowUp maids are well-trained!",
    },
    {
      name: "Anjali Kumar",
      location: "Mumbai",
      rating: 5,
      image: "👩",
      text: "Best decision ever. My home is spotless, and I can focus on work. The verification process gave me so much peace of mind.",
    },
  ];

  const handleBooking = (plan) => {   
    // Add service to cart
    addToCart({
      id: `maid-${plan.duration}`,
      title: `Maid Service - ${plan.duration}`,
      price: plan.price,
      image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=100&h=100&fit=crop",
      quantity: 1,
    });

    // Navigate to checkout
    navigate("/checkout");
  };

  const bookingSteps = [
    {
      number: "1",
      title: "Select Service",
      description: "Choose duration (4h, 8h, or 12h) and frequency",
    },
    {
      number: "2",
      title: "Pick Date & Time",
      description: "Book for today or any date that works for you",
    },
    {
      number: "3",
      title: "Verified Maid Arrives",
      description: "Professional arrives ready to work. Payment after service",
    },
  ];

  const faqs = [
    {
      q: "How are maids verified?",
      a: "100% background checked, identity verified, trained in professional cleaning standards. Your safety is our priority.",
    },
    {
      q: "Can I request a specific maid?",
      a: "Yes! After your first booking, you can request the same maid for consistency and comfort.",
    },
    {
      q: "What if I'm not satisfied?",
      a: "We offer a satisfaction guarantee. If unsatisfied, we'll send another verified maid or provide a full refund.",
    },
    {
      q: "Do maids bring their own supplies?",
      a: "Yes, maids bring professional cleaning supplies. You can provide specific preferences too.",
    },
    {
      q: "Can I book same-day?",
      a: "Yes! Available slots can be booked same-day. Call 24/7 support for urgent bookings.",
    },
    {
      q: "What's your cancellation policy?",
      a: "Free cancellation up to 24 hours before. Emergency cancellations may have a small fee.",
    },
  ];

  const trustPoints = [
    "100% Verified & Background Checked",
    "Professional Training Certified",
    "24/7 Customer Support",
    "Satisfaction Guarantee",
    "Secure Payment",
    "Insured Services",
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16 px-6 sm:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="text-primary-600 font-semibold text-sm">
                  Professional Home Cleaning
                </span>
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mt-2 mb-6">
                  Expert Maid <span className="text-primary-600">Services</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Professional, verified maids who care about your home. Book in
                  minutes. No hidden charges.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 bg-white p-6 rounded-lg">
                <div>
                  <div className="text-2xl font-bold text-primary-600">
                    {serviceRating.overall}★
                  </div>
                  <div className="text-xs text-gray-600">
                    {serviceRating.reviews} reviews
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {serviceRating.bookings}
                  </div>
                  <div className="text-xs text-gray-600">Bookings completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    100%
                  </div>
                  <div className="text-xs text-gray-600">Verified</div>
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-xl hover:bg-primary-700 transition shadow-lg inline-flex items-center gap-3"
              >
                Book a Maid Now
                <ArrowRight size={24} />
              </motion.button>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-lg h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=500&fit=crop"
                alt="Professional Maid Service"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="bg-gray-50 py-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-gray-900 text-2xl font-bold mb-12">
            Why Choose Our <span className="text-primary-600">Maids</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200"
              >
                <Check className="text-primary-600 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            What's <span className="text-primary-600">Included</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Comprehensive cleaning services for your entire home
          </p>

          <div className="bg-gradient-to-br from-primary-50 to-gray-50 rounded-xl p-8 border border-primary-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whatIncluded.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <Check className="text-primary-600 flex-shrink-0" size={24} />
                  <span className="text-gray-800 text-lg font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING - TRANSPARENT */}
      <section id="pricing" className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Transparent <span className="text-primary-600">Pricing</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Choose the duration that works best for you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className={`rounded-xl p-8 transition ${
                  plan.popular
                    ? "bg-primary-600 text-white ring-2 ring-primary-600 md:scale-105 shadow-lg"
                    : "bg-white border border-gray-200 text-gray-900"
                }`}
              >
                {plan.popular && (
                  <div className="text-xs font-bold mb-4 bg-primary-700 px-3 py-1 rounded-full inline-block">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.duration}</h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-primary-100" : "text-gray-600"}`}>
                  {plan.frequency}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? "text-primary-100" : "text-gray-600"}`}>
                    /day
                  </span>
                </div>

                <button
                  onClick={() => handleBooking(plan)}
                  className={`w-full py-3 rounded-lg font-semibold mb-6 transition ${
                    plan.popular
                      ? "bg-white text-primary-600 hover:bg-gray-100"
                      : "bg-primary-600 text-white hover:bg-primary-700"
                  }`}
                >
                  Book Now
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Service Specific */}
      <section className="py-20 px-6 sm:px-8 bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Why Families Love <span className="text-primary-600">Our Maids</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Real reviews from satisfied customers
          </p>

          <motion.div
            key={selectedTestimonial}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-200 text-center mb-8"
          >
            <div className="text-6xl mb-4">
              {testimonials[selectedTestimonial].image}
            </div>

            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[selectedTestimonial].rating)].map(
                (_, i) => (
                  <Star
                    key={i}
                    fill="#059669"
                    stroke="#059669"
                    size={24}
                  />
                )
              )}
            </div>

            <p className="text-xl text-gray-800 mb-6 italic">
              "{testimonials[selectedTestimonial].text}"
            </p>

            <div>
              <div className="font-bold text-gray-900">
                {testimonials[selectedTestimonial].name}
              </div>
              <div className="text-sm text-gray-600 flex items-center justify-center gap-1 mt-1">
                <MapPin size={16} />
                {testimonials[selectedTestimonial].location}
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition ${
                  selectedTestimonial === idx
                    ? "bg-primary-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING PROCESS - 3 Simple Steps */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            How It <span className="text-primary-600">Works</span>
          </h2>
          <p className="text-center text-gray-600 mb-16">
            Booking a maid has never been easier
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookingSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Arrow */}
                {idx < bookingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-6 text-primary-600">
                    <ArrowRight size={32} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-xl hover:bg-primary-700 transition shadow-lg inline-flex items-center gap-3"
            >
              Start Booking Now
              <ArrowRight size={24} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Common <span className="text-primary-600">Questions</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-300 transition"
              >
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MessageSquare className="text-primary-600" size={20} />
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 px-6 sm:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for a Clean Home?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join 15,000+ families using ZollowUp for their maid services.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-primary-600 text-lg font-bold rounded-xl hover:bg-gray-100 transition shadow-lg inline-flex items-center gap-3"
          >
            Book Your Maid Today
            <ArrowRight size={24} />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Maid;
