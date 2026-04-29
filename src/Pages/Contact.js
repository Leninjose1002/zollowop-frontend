// import React, { useState } from "react";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import {submitContactForm } from "../api"
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [responseMsg, setResponseMsg] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponseMsg("");
  
//     try {
//       const res = await submitContactForm(formData);
//       console.log(res);  // Log the response from the API
//       if (res && res.message) {
//         setResponseMsg(res.message);  // Set the success message
//       } else {
//         setResponseMsg("Message sent successfully!");
//       }
//       setFormData({ fullName: "", email: "", phone: "", message: "" });
//     } catch (err) {
//       // Log and handle the error
//       console.error("Error submitting contact form:", err);
//       setResponseMsg("Failed to submit contact form");
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 p-6">
//       {/* Left Side Content */}
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2">
//         <h2 className="text-3xl font-bold mb-4 text-blue-900 font-poppins">Contact Us</h2>
//         <p className="text-gray-600 mb-6 font-roboto">
//           Have question or need assistance? We're here to help! Reach out to us for any inquiries, and
//           our team will get back to you as soon as possible.
//         </p>
//         <div className="space-y-4">
//           <div className="flex items-center space-x-3">
//             <FaPhoneAlt className="text-blue-900" />
//             <span className="text-gray-700 font-medium font-roboto">+91 9218028500</span>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaEnvelope className="text-blue-900" />
//             <span className="text-gray-700 font-medium font-roboto">sales@zollowup.com</span>
//           </div>
          
//         </div>
//       </div>

//       {/* Right Side Form */}
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
//         <h2 className="text-2xl font-bold mb-6 font-poppins">Get in Touch</h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {/* Full Name */}
//           <div>
//             <label className="block text-gray-700 font-medium font-roboto">Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//               placeholder="Enter full name"
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900"
//             />
//           </div>

//           {/* Email Address */}
//           <div>
//             <label className="block text-gray-700 font-medium font-roboto">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email address"
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900"
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="block text-gray-700 font-medium font-roboto">Enter Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               placeholder="Phone Number"
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block text-gray-700 font-medium font-roboto">Enter Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               placeholder="Enter message"
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900"
//               rows="4"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-900 font-roboto text-white p-3 rounded-lg font-bold hover:bg-blue-800"
//             disabled={loading}
//           >
//             {loading ? "Sending..." : "Submit"}
//           </button>

//           {/* Response Message */}
//           {responseMsg && (
//             <p className="text-center mt-4 font-semibold text-green-700">{responseMsg}</p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { submitContactForm } from "../api";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [responseType, setResponseType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
    setResponseType("");

    try {
      const res = await submitContactForm(formData);
      console.log(res);
      if (res && res.message) {
        setResponseMsg(res.message);
        setResponseType("success");
      } else {
        setResponseMsg("✅ Message sent successfully!");
        setResponseType("success");
      }
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      // Auto-clear message after 3 seconds
      setTimeout(() => setResponseMsg(""), 3000);
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setResponseMsg(err.message || "Failed to send message. Please try again.");
      setResponseType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Card 1 - Phone */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Phone size={24} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
              </div>
              <p className="text-gray-600">
                <a href="tel:+919218028500" className="text-primary-600 hover:text-primary-700 font-medium">
                  +91 9218028500
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2">Available 9:30 AM - 7:30 PM</p>
            </div>

            {/* Card 2 - Email */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Mail size={24} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              </div>
              <p className="text-gray-600">
                <a href="mailto:sales@zollowup.com" className="text-primary-600 hover:text-primary-700 font-medium">
                  sales@zollowup.com
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2">We'll respond within 24 hours</p>
            </div>

            {/* Card 3 - Location */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-primary-100 p-3 rounded-full">
                  <MapPin size={24} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-600">
                Bathinda, Punjab<br />
                India
              </p>
              <p className="text-sm text-gray-500 mt-2">Service available pan-India</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:bg-primary-50 transition placeholder-gray-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:bg-primary-50 transition placeholder-gray-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:bg-primary-50 transition placeholder-gray-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help..."
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:bg-primary-50 transition placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                {/* Success Message */}
                {responseMsg && responseType === "success" && (
                  <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                    <CheckCircle size={20} />
                    {responseMsg}
                  </div>
                )}

                {/* Error Message */}
                {responseMsg && responseType === "error" && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {responseMsg}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin">⟳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Info Message */}
              <p className="text-sm text-gray-500 text-center mt-6 pt-6 border-t">
                📋 We typically respond to inquiries within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What are your service hours?</h3>
              <p className="text-gray-600 text-sm">
                We're available from 9:30 AM to 7:30 PM daily. Contact us anytime for inquiries.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How quickly will you respond?</h3>
              <p className="text-gray-600 text-sm">
                We aim to respond to all inquiries within 24 hours during business hours.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What services do you offer?</h3>
              <p className="text-gray-600 text-sm">
                We provide maids, nurses, drivers, cooks, electricians, plumbers, and housekeeping services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you serve my area?</h3>
              <p className="text-gray-600 text-sm">
                We serve pan-India. Check our services page or contact us to confirm service availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
