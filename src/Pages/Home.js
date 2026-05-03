// // import React, { useEffect, useState } from "react";
// // import { useLocation } from "react-router-dom";
// // import HowItWorks from "../components/HowItWorks";
// // import Herosection from "../components/Herosection";
// // import InfoSection from "../components/InfoSection";
// // import Cta from "../components/Cta";
// // import Introduction from "../components/Introduction";
// // // import Reasons from "../components/Reasons";
// // import NewAndNoteworthySlider from "../components/NewAndNoteworthySlider";
// // import Testimonial from "../components/Testimonial";
// // import CountingNumber from "../components/CountingNumber";
// // import Cleaning from "../components/Cleaning";
// // import HomePageSection from "../components/HomePageSection";

// // // 🔁 Modals
// // import UserLogin from "../components/UserLogin";
// // import UserSignup from "../components/UserSignup";

// // const Home = () => {
// //   // const [data, setData] = useState(null);
// //   const [showLogin, setShowLogin] = useState(false);
// //   const [showSignup, setShowSignup] = useState(false);
// //   const location = useLocation();

// //   // ✅ Handle email verification modal logic
// //   useEffect(() => {
// //     const params = new URLSearchParams(location.search);
// //     const verified = params.get("verified");

// //     if (verified === "true" || verified === "expired" || verified === "already") {
// //       setShowLogin(true);
// //       // ✅ Clean up the URL
// //       const cleanUrl = window.location.pathname;
// //       window.history.replaceState({}, "", cleanUrl);
// //     }
// //   }, [location]);

// //   // // 📡 Fetch homepage data (optional, depends on your API)
// //   // useEffect(() => {
// //   //   axios
// //   //     .get(`${process.env.REACT_APP_API_URL}/api/your-endpoint`)
// //   //     .then((response) => setData(response.data))
// //   //     .catch((error) => console.error("Error fetching data:", error));
// //   // }, []);

// //   return (
// //     <div className="overflow-x-hidden relative">
// //       {/* Modals */}
// //       {showLogin && (
// //         <UserLogin
// //           onClose={() => setShowLogin(false)}
// //           setShowLogin={setShowLogin}
// //           setShowSignup={setShowSignup}
// //         />
// //       )}
// //       {showSignup && (
// //         <UserSignup
// //           onClose={() => setShowSignup(false)}
// //           setShowLogin={setShowLogin}
// //         />
// //       )}

// //       {/* Page Sections */}
// //       <Introduction />
// //       <Herosection />
// //       <InfoSection />
// //       <HowItWorks />
// //       <NewAndNoteworthySlider />
// //       <Cleaning />
// //       <CountingNumber />
// //       <Testimonial />
// //       <HomePageSection />
// //       <Cta />
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import HowItWorks from "../components/HowItWorks";
// import Herosection from "../components/Herosection";
// import Cta from "../components/Cta";
// // import Reasons from "../components/Reasons";
// import Services from "../components/InfoSection";
// import Introduction from "../components/Introduction";

// // 🔁 Modals
// import UserLogin from "../components/UserLogin";
// import UserSignup from "../components/UserSignup";

// const Home = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const location = useLocation();

//   // ✅ Handle email verification modal logic
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const verified = params.get("verified");

//     if (verified === "true" || verified === "expired" || verified === "already") {
//       setShowLogin(true);
//       // ✅ Clean up the URL
//       const cleanUrl = window.location.pathname;
//       window.history.replaceState({}, "", cleanUrl);
//     }
//   }, [location]);

//   return (
//     <div className="overflow-x-hidden relative">
//       {/* Modals */}
//       {showLogin && (
//         <UserLogin
//           onClose={() => setShowLogin(false)}
//           setShowLogin={setShowLogin}
//           setShowSignup={setShowSignup}
//         />
//       )}
//       {showSignup && (
//         <UserSignup
//           onClose={() => setShowSignup(false)}
//           setShowLogin={setShowLogin}
//         />
//       )}

//       {/* ✅ MINIMALIST HOMEPAGE - 7 Sections Only */}
      
//       {/* 1. Hero Section */}
//       <Herosection />
      
//       <Introduction /> 
      
//       {/* 2. How It Works */}
//       <HowItWorks />
      
//       {/* 4. Services Carousel */}
//       <Services />
      
//       {/* 6. Call to Action */}
//       <Cta />
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Shield,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  // Social Proof Metrics
  const metrics = [
    { number: "10,000+", label: "Happy Customers", icon: Users },
    { number: "4.8★", label: "Average Rating", icon: Star },
    { number: "50,000+", label: "Hours Served", icon: Clock },
    { number: "100%", label: "Verified Professionals", icon: Shield },
  ];

  // Featured Services
  const featuredServices = [
    {
      title: "Maids & Housekeeping",
      description: "Professional home cleaning, daily or weekly",
      icon: "🏠",
      rating: "4.9★",
      reviews: "2,340 reviews",
      price: "₹500/hour",
      cta: "Book Maid",
      path: "/maid",
    },
    {
      title: "Nursing Care",
      description: "Trained nurses for elderly & post-operative care",
      icon: "❤️",
      rating: "4.9★",
      reviews: "1,240 reviews",
      price: "₹600/hour",
      cta: "Book Care",
      path: "/nursing",
    },
    {
      title: "Plumbers & Electricians",
      description: "Skilled technicians for repairs & installations",
      icon: "🔧",
      rating: "4.8★",
      reviews: "1,890 reviews",
      price: "₹800/job",
      cta: "Book Professional",
      path: "/plumbers",
    },
  ];

  // Customer Testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      text: "Finally found reliable maids! They're professional and trustworthy. Been using ZollowUp for 6 months now.",
      rating: 5,
      image: "👩",
    },
    {
      name: "Rajesh Kumar",
      location: "Bangalore",
      text: "When my mother needed nursing care, ZollowUp connected us with an amazing nurse. Highly recommend!",
      rating: 5,
      image: "👨",
    },
    {
      name: "Neha Patel",
      location: "Mumbai",
      text: "Transparent pricing, no hidden charges. Booked a plumber in 5 minutes. What could be better?",
      rating: 5,
      image: "👩‍🦰",
    },
  ];

  // Trust Points
  const trustPoints = [
    "Verified & Background Checked",
    "Transparent Pricing",
    "24/7 Customer Support",
    "Satisfaction Guarantee",
    "Secure Payment",
    "Insured Services",
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO SECTION - Trust Building */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-24 px-6 sm:px-8 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted Home Services
              <br />
              <span className="text-primary-600">On Your Terms</span>
            </h1>

            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              10,000+ families rely on ZollowUp for verified, affordable home
              services. Book in minutes. No hidden charges.
            </p>

            {/* PRIMARY CTA - ONE CLEAR ACTION */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services")}
              className="px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-xl hover:bg-primary-700 transition shadow-lg hover:shadow-xl inline-flex items-center gap-3"
            >
              Book a Service
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>

          {/* SOCIAL PROOF METRICS - Build Trust Instantly */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="text-primary-600 mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold text-gray-900">
                    {metric.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FEATURED SERVICES - 3 Most Popular */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Most Requested <span className="text-primary-600">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our most popular services used by thousands daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 hover:border-primary-300 transition cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="text-5xl mb-4">{service.icon}</div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                  {service.description}
                </p>

                {/* Rating & Reviews */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <div className="font-bold text-gray-900">
                      {service.rating}
                    </div>
                    <div className="text-xs text-gray-600">
                      {service.reviews}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary-600">
                      {service.price}
                    </div>
                    <div className="text-xs text-gray-600">Starting from</div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => navigate(service.path)}
                  className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
                >
                  {service.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* View All Services CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/services")}
              className="text-primary-600 font-semibold flex items-center justify-center gap-2 hover:text-primary-700 transition mx-auto"
            >
              View All 8 Services <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS - Investor Appeal */}
      <section className="bg-gray-50 py-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-gray-900 text-2xl font-bold mb-12">
            Why Families Choose <span className="text-primary-600">ZollowUp</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200"
              >
                <CheckCircle className="text-primary-600 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Social Proof */}
      <section className="py-20 px-6 sm:px-8 bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Real Stories from <span className="text-primary-600">Real Customers</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Join thousands of families who trust ZollowUp
          </p>

          {/* Main Testimonial */}
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
              <div className="text-sm text-gray-600">
                {testimonials[selectedTestimonial].location}
              </div>
            </div>
          </motion.div>

          {/* Testimonial Indicators */}
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

      {/* PRICING TRANSPARENCY */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Transparent <span className="text-primary-600">Pricing</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            No hidden charges. See exactly what you'll pay.
          </p>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { hours: "4 Hours", price: "₹2,000", popular: false },
                { hours: "8 Hours", price: "₹4,000", popular: true },
                { hours: "12 Hours", price: "₹5,500", popular: false },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`text-center ${
                    plan.popular ? "md:scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="text-xs font-bold text-primary-600 mb-2 bg-primary-100 py-1 rounded">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {plan.price}
                  </div>
                  <div className="text-gray-600 mb-4">{plan.hours} / Day</div>
                  <p className="text-xs text-gray-600">
                    2 holidays per month included
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Convert Now */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 px-6 sm:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Simplify Your Home?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Book your first service today. Join 10,000+ happy families.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/services")}
            className="px-8 py-4 bg-white text-primary-600 text-lg font-bold rounded-xl hover:bg-gray-100 transition shadow-lg inline-flex items-center gap-3"
          >
            Book Now
            <ArrowRight size={24} />
          </motion.button>
        </div>
      </section>

      {/* FAQ - Minimal */}
      <section className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Common <span className="text-primary-600">Questions</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How do I book a service?",
                a: "Click 'Book a Service', choose your service and date, and we'll confirm within 2 hours.",
              },
              {
                q: "Are professionals verified?",
                a: "Yes, 100% background checked and trained. Your safety is our priority.",
              },
              {
                q: "What if I'm not satisfied?",
                a: "We offer a satisfaction guarantee. If unsatisfied, we'll send another professional or refund.",
              },
              {
                q: "Do you work on weekends?",
                a: "Yes, we operate 24/7 including weekends and holidays.",
              },
            ].map((faq, idx) => (
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
    </div>
  );
};

export default Home;