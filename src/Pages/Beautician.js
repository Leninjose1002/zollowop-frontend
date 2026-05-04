import React from "react";
import { motion } from "framer-motion";
import { Star, Zap, BarChart3, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const Beautician = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const services = [
    { id: 'beauty-1', title: 'Facial Treatment', price: '₹599', image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b26693?w=400&h=400&fit=crop', rating: 4.9, reviews: 567, badge: "Popular" },
    { id: 'beauty-2', title: 'Hair Spa & Treatment', price: '₹499', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop', rating: 4.8, reviews: 445, badge: "Top Rated" },
    { id: 'beauty-3', title: 'Manicure & Pedicure', price: '₹349', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop', rating: 4.9, reviews: 512, badge: "Popular" },
    { id: 'beauty-4', title: 'Threading & Shaping', price: '₹199', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop', rating: 4.7, reviews: 334, badge: "Fast" },
    { id: 'beauty-5', title: 'Waxing Services', price: '₹349', image: 'https://images.unsplash.com/photo-1599308158581-19c18ea6a8bb?w=400&h=400&fit=crop', rating: 4.8, reviews: 289, badge: "Quality" },
    { id: 'beauty-6', title: 'Bridal Makeup', price: '₹2,999', image: 'https://images.unsplash.com/photo-1596215914033-5d71dba6c6c0?w=400&h=400&fit=crop', rating: 4.9, reviews: 401, badge: "Premium" },
    { id: 'beauty-7', title: 'Party Makeup', price: '₹799', image: 'https://images.unsplash.com/photo-1596215914033-5d71dba6c6c0?w=400&h=400&fit=crop', rating: 4.8, reviews: 267, badge: "Trending" },
    { id: 'beauty-8', title: 'Hair Coloring', price: '₹899', image: 'https://images.unsplash.com/photo-1562322503-6f4ee4bfed5d?w=400&h=400&fit=crop', rating: 4.7, reviews: 178, badge: "Professional" },
    { id: 'beauty-9', title: 'Bridal Package', price: '₹4,999', image: 'https://images.unsplash.com/photo-1596215914033-5d71dba6c6c0?w=400&h=400&fit=crop', rating: 4.9, reviews: 334, badge: "Premium" },
    { id: 'beauty-10', title: 'Skin Whitening Treatment', price: '₹1,299', image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b26693?w=400&h=400&fit=crop', rating: 4.8, reviews: 223, badge: "Professional" },
  ];

  const features = [
    {
      icon: <Zap className="text-primary-600" size={32} />,
      title: "Expert Beauticians",
      description: "Certified beauty professionals with years of experience",
    },
    {
      icon: <BarChart3 className="text-primary-600" size={32} />,
      title: "Premium Products",
      description: "High-quality, branded beauty products for best results",
    },
    {
      icon: <Shield className="text-primary-600" size={32} />,
      title: "Hygiene & Safety",
      description: "Strict hygiene standards with sterilized equipment",
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
              Professional <span className="text-primary-600">Beauty Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert beauticians at your home. From everyday beauty to bridal glam. Premium treatments, professional results, at your convenience.
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-8 mt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Star className="text-primary-600" fill="currentColor" />
                <span className="font-bold text-gray-900">4.8 Rating</span>
              </div>
              <div className="text-gray-900 font-bold">45,000+ Customers</div>
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
            Our <span className="text-primary-600">Services</span> (10 Options)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
            Our <span className="text-primary-600">Beauty Categories</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">💄 Makeup</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Bridal makeup</li>
                <li>✓ Party makeup</li>
                <li>✓ Daily makeup</li>
                <li>✓ Professional makeup</li>
                <li>✓ HD makeup</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">💅 Hair & Nails</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Hair spa & treatment</li>
                <li>✓ Hair coloring</li>
                <li>✓ Manicure & pedicure</li>
                <li>✓ Nail art</li>
                <li>✓ Hair styling</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">✨ Skincare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Facial treatments</li>
                <li>✓ Skin whitening</li>
                <li>✓ Acne treatment</li>
                <li>✓ Threading & shaping</li>
                <li>✓ Waxing services</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our <span className="text-primary-600">Beauty Services?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Certified Beauticians</h3>
              <p className="text-gray-600">
                All our beauticians are certified professionals trained in latest beauty techniques and treatments. Years of experience in makeup and skincare.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Premium Quality</h3>
              <p className="text-gray-600">
                We use only high-quality, branded beauty products. Dermatologist-tested and safe for all skin types and tones.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Hygiene Standards</h3>
              <p className="text-gray-600">
                Strict hygiene protocols with sterilized equipment. All tools and products are sanitized for your safety and health.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Convenience at Home</h3>
              <p className="text-gray-600">
                Professional beauty treatments at your home. No need to travel. Customized services based on your skin type and preferences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Your Beauty Treatment <span className="text-primary-600">Includes</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Professional beautician consultation",
              "Skin analysis & assessment",
              "Premium quality products",
              "Customized treatment plan",
              "Expert application techniques",
              "Post-treatment skincare advice",
              "Follow-up care recommendations",
              "Convenient home service",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 p-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
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
        <h2 className="text-3xl font-bold mb-4">Special Beauty Needs?</h2>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          Looking for customized beauty packages or special treatments? Contact us for personalized beauty services.
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
            Beauty Emergency?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Need urgent beauty services for an event? Call us now for same-day beauty appointments and emergency makeup services.
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
              Join as Beautician
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beautician;
