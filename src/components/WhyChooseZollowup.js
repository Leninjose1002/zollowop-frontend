import React from "react";
import {
  CheckCircle,
  Shield,
  Clock,
  DollarSign,
  Smartphone,
  Zap,
  Award,
  Home,
  Heart,
  Car,
  Utensils,
  Lightbulb,
  Wrench,
  Sparkles,
  ShoppingCart
} from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

const WhyChooseZollowup = () => {
  const navigate = useNavigate();

  // All services offered by ZollowUp
  const services = [
    { icon: Home, label: "Maids & Cleaning", color: "text-blue-500" },
    { icon: Heart, label: "Nursing Care", color: "text-red-500" },
    { icon: Car, label: "Drivers", color: "text-yellow-500" },
    { icon: Utensils, label: "Cooks", color: "text-orange-500" },
    { icon: Lightbulb, label: "Electricians", color: "text-amber-500" },
    { icon: Wrench, label: "Plumbers", color: "text-purple-500" },
    { icon: Sparkles, label: "Housekeeping", color: "text-teal-500" },
    { icon: ShoppingCart, label: "and More", color: "text-pink-500" },
  ];

  // Key benefits
  const benefits = [
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All service providers are thoroughly screened and background-checked",
      color: "bg-blue-100",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden charges. Upfront pricing for complete peace of mind",
      color: "bg-green-100",
    },
    {
      icon: Clock,
      title: "Easy Scheduling",
      description: "Book instantly or schedule recurring services at your convenience",
      color: "bg-yellow-100",
    },
    {
      icon: Smartphone,
      title: "24/7 Support",
      description: "Customer support available round-the-clock to help you anytime",
      color: "bg-purple-100",
    },
    {
      icon: Award,
      title: "Satisfaction Guaranteed",
      description: "Our quality guarantee ensures you're happy with every service",
      color: "bg-pink-100",
    },
    {
      icon: Zap,
      title: "Quick Service",
      description: "Fast response times and professional execution of all tasks",
      color: "bg-indigo-100",
    },
  ];

  return (
    <div className="py-16 px-6 sm:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-primary-600">ZollowUp?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just a service platform—we're your trusted partner for all home management needs. Here's what makes us different.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our <span className="text-primary-600">Services</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
                >
                  <Icon className={`${service.color} w-10 h-10 mx-auto mb-3`} />
                  <p className="text-gray-700 font-semibold text-sm sm:text-base">
                    {service.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our <span className="text-primary-600">Commitment</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`${benefit.color} p-8 rounded-lg border-l-4 border-primary-600`}
                >
                  <Icon className="w-8 h-8 text-primary-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Features List */}
        <div className="bg-white p-10 rounded-lg shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Sets Us Apart
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Rigorous vetting process for all professionals",
              "Real-time tracking of service providers",
              "Flexible booking—one-time or recurring services",
              "Competitive pricing with no hidden charges",
              "Professional ratings and reviews from real customers",
              "Secure payment options and billing transparency",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary-50 to-primary-100 p-10 rounded-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Experience the ZollowUp Difference Today
          </h3>
          <p className="text-gray-700 mb-8 text-lg">
            Join thousands of families who trust us with their home services
          </p>
          <PrimaryButton label="Get Started Now" onClick={() => navigate('/services')} />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseZollowup;
