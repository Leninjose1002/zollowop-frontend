// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../components/CartContext";
// import { useAuth } from "../components/AuthContext";
// import { createRazorpayOrder, verifyRazorpayPayment,   } from "../api";
// import axiosInstance from "../api/axiosInstance";

// const CheckoutPage = () => {
//   const { cart, removeFromCart, getTotal, clearCart, updateQuantity } = useCart();
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const [bookingDateTime, setBookingDateTime] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState(user?.email || "");
//   const [phoneError, setPhoneError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [promoCode, setPromoCode] = useState("");
//   const [agreeTerms, setAgreeTerms] = useState(false);

//   const totalCost = getTotal();

//   const handlePhoneChange = (e) => {
//     let input = e.target.value.replace(/\s+/g, "");
//     if (/^[6-9]\d{9}$/.test(input)) {
//       input = `+91${input}`;
//     }

//     setPhone(input);

//     const phoneRegex = /^(\+91)[6-9]\d{9}$/;
//     setPhoneError(phoneRegex.test(input) ? "" : "Enter a valid Indian number with +91.");
//   };

//   const handleEmailChange = (e) => {
//     const input = e.target.value;
//     setEmail(input);

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     setEmailError(emailRegex.test(input) ? "" : "Enter a valid email address.");
//   };

//   const handleConfirmBooking = async () => {
//     if (!agreeTerms) {
//       alert("Please agree to the terms and conditions.");
//       return;
//     }

//     if (!user || !user._id) {
//       alert("User not logged in.");
//       return;
//     }

//     if (phoneError || !phone) {
//       alert("Please enter a valid phone number.");
//       return;
//     }

//     if (emailError || !email) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     const finalPhone = phone.startsWith("+91") ? phone.slice(3) : phone;
//     const userId = user._id;

//     try {
//       const orderData = await createRazorpayOrder(totalCost * 100);

//       const bookingPayload = {
//         cart,
//         address,
//         phone: finalPhone,
//         email,
//         date: bookingDateTime,
//         status: "confirmed",
//         promoCode,
//         serviceType: cart[0]?.title || "General",
//       };

//       const options = {
//         key: orderData.key,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: "ZollowUp",
//         description: "Booking Payment",
//         order_id: orderData.orderId,
//         handler: async function (response) {
//           try {
//             const verifyRes = await verifyRazorpayPayment({
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//               amount: orderData.amount,
//               currency: orderData.currency,
//               userId,
//               bookingPayload,
//             });

//            if (verifyRes.verified) {
//   await axiosInstance.post(
//     "/orders",
//     {
//       serviceType: bookingPayload.serviceType,
//       items: cart.map((item) => ({
//         title: item.title,
//         image: item.image,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//       totalAmount: totalCost,
//       date: bookingDateTime,
//       phone: finalPhone,
//       email,
//       address,
//       promoCode,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`, // ✅ pass the token here
//       },
//       withCredentials: true,
//     }
//   );

//   clearCart();
//   navigate("/confirmation", {
//     state: {
//       cart,
//       bookingDateTime,
//       address,
//       phone: finalPhone,
//       email,
//       promoCode,
//       totalCost,
//     },
//   });
// }


//  else {
//               navigate("/payment-failed");
//             }
//           } catch {
//             navigate("/payment-failed");
//           }
//         },
//         prefill: {
//           name: "Customer",
//           contact: finalPhone,
//           email,
//         },
//         theme: {
//           color: "#10b981",
//         },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed. Please try again.");
//     }
//   };

//   return (
//     <div className="px-4 py-6 max-w-xl mx-auto">
//       <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
//         Confirm Your Booking
//       </h2>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="space-y-4 mb-6">
//             {cart.map((item) => {
//               const price = parseInt(item?.price?.replace(/[^\d]/g, "")) || 0;
//               return (
//                 <div
//                   key={item.id}
//                   className="flex gap-4 items-center bg-white p-4 rounded-lg shadow"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-16 h-16 object-cover rounded-md"
//                   />
//                   <div className="flex-1">
//                     <p className="font-semibold">{item.title}</p>
//                     <p className="text-sm font-medium text-blue-600">
//                       ₹{price * item.quantity}
//                     </p>
//                     <div className="flex items-center mt-2 space-x-2">
//                       <button
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         className="px-2 py-1 bg-gray-200 rounded-full text-sm font-bold"
//                       >
//                         –
//                       </button>
//                       <span className="font-medium">{item.quantity}</span>
//                       <button
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                         className="px-2 py-1 bg-gray-200 rounded-full text-sm font-bold"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <button
//                     className="text-xs text-red-500 underline"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="space-y-4">
//             <input
//               type="datetime-local"
//               value={bookingDateTime}
//               onChange={(e) => setBookingDateTime(e.target.value)}
//               className="w-full p-3 border rounded text-sm"
//               required
//             />

//             <input
//               type="text"
//               placeholder="Full Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="w-full p-3 border rounded text-sm"
//               required
//             />

//             <input
//               type="tel"
//               placeholder="Phone Number (e.g., +919876543210)"
//               value={phone}
//               onChange={handlePhoneChange}
//               className={`w-full p-3 border rounded text-sm ${
//                 phoneError ? "border-red-500" : "border-gray-300"
//               }`}
//               required
//             />
//             {phoneError && (
//               <p className="text-red-500 text-xs mt-1">{phoneError}</p>
//             )}

//             <input
//               type="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={handleEmailChange}
//               className={`w-full p-3 border rounded text-sm ${
//                 emailError ? "border-red-500" : "border-gray-300"
//               }`}
//               required
//             />
//             {emailError && (
//               <p className="text-red-500 text-xs mt-1">{emailError}</p>
//             )}

//             <input
//               type="text"
//               placeholder="Promo Code"
//               value={promoCode}
//               onChange={(e) => setPromoCode(e.target.value)}
//               className="w-full p-3 border rounded text-sm"
//             />

//             <div className="flex items-start gap-2">
//               <input
//                 type="checkbox"
//                 checked={agreeTerms}
//                 onChange={() => setAgreeTerms(!agreeTerms)}
//                 className="mt-1"
//               />
//               <span className="text-sm text-gray-700">
//                 I agree to the{" "}
//                 <a href="/terms-and-conditions" className="underline text-blue-600">
//                   Terms & Conditions
//                 </a>
//               </span>
//             </div>

//             <button
//               onClick={handleConfirmBooking}
//               disabled={phoneError || emailError}
//               className={`w-full mt-2 text-lg font-semibold py-3 rounded-lg transition ${
//                 phoneError || emailError
//                   ? "bg-gray-400 cursor-not-allowed text-white"
//                   : "bg-blue-600 hover:bg-blue-700 text-white"
//               }`}
//             >
//               Pay ₹{totalCost} & Book
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { useAuth } from "../components/AuthContext";
import { createRazorpayOrder, verifyRazorpayPayment } from "../api";
import axiosInstance from "../api/axiosInstance";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Trash2, Plus, Minus, Lock, Shield } from "lucide-react";

const CheckoutPage = () => {
  const { cart, removeFromCart, getTotal, clearCart, updateQuantity } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [bookingDateTime, setBookingDateTime] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(user?.email || "");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const totalCost = getTotal();
  const gst = Math.round(totalCost * 0.18);
  const finalTotal = totalCost + gst;

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\s+/g, "");
    if (/^[6-9]\d{9}$/.test(input)) {
      input = `+91${input}`;
    }
    setPhone(input);
    const phoneRegex = /^(\+91)[6-9]\d{9}$/;
    setPhoneError(phoneRegex.test(input) ? "" : "Enter a valid Indian number with +91.");
  };

  const handleEmailChange = (e) => {
    const input = e.target.value;
    setEmail(input);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(input) ? "" : "Enter a valid email address.");
  };

  const handleConfirmBooking = async () => {
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    if (!user || !user._id) {
      alert("User not logged in.");
      return;
    }

    if (phoneError || !phone) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (emailError || !email) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    const finalPhone = phone.startsWith("+91") ? phone.slice(3) : phone;
    const userId = user._id;

    try {
      const orderData = await createRazorpayOrder(finalTotal * 100);

      const bookingPayload = {
        cart,
        address,
        phone: finalPhone,
        email,
        date: bookingDateTime,
        status: "confirmed",
        promoCode,
        serviceType: cart[0]?.title || "General",
      };

      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "ZollowUp",
        description: "Booking Payment",
        order_id: orderData.orderId,
        handler: async function (response) {
          try {
            const verifyRes = await verifyRazorpayPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amount: orderData.amount,
              currency: orderData.currency,
              userId,
              bookingPayload,
            });

            if (verifyRes.verified) {
              await axiosInstance.post(
                "/orders",
                {
                  serviceType: bookingPayload.serviceType,
                  items: cart.map((item) => ({
                    title: item.title,
                    image: item.image,
                    quantity: item.quantity,
                    price: item.price,
                  })),
                  totalAmount: finalTotal,
                  date: bookingDateTime,
                  phone: finalPhone,
                  email,
                  address,
                  promoCode,
                },
                {
                  headers: {
                    Authorization: `Bearer ${user.token}`,
                  },
                  withCredentials: true,
                }
              );

              clearCart();
              navigate("/confirmation", {
                state: {
                  cart,
                  bookingDateTime,
                  address,
                  phone: finalPhone,
                  email,
                  promoCode,
                  totalCost: finalTotal,
                },
              });
            } else {
              setLoading(false);
              navigate("/payment-failed");
            }
          } catch (error) {
            setLoading(false);
            console.error("Payment verification error:", error);
            navigate("/payment-failed");
          }
        },
        prefill: {
          name: "Customer",
          contact: finalPhone,
          email,
        },
        theme: {
          color: "#059669",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-gray-50 py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary-600 font-semibold mb-8 hover:text-primary-700 transition"
        >
          <ArrowLeft size={20} />
          Back to Shopping
        </motion.button>

        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Confirm Your <span className="text-primary-600">Booking</span>
        </h1>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-12 text-center border border-gray-200 shadow-sm"
          >
            <p className="text-gray-600 text-lg mb-6">Your cart is empty.</p>
            <button
              onClick={() => navigate("/services")}
              className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
            >
              Browse Services
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Booking Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Cart Items */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Your <span className="text-primary-600">Services</span>
                </h2>

                <div className="space-y-4">
                  {cart.map((item) => {
                    const price = parseInt(item?.price?.replace(/[^\d]/g, "")) || 0;
                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex gap-4 items-center bg-gradient-to-br from-primary-50 to-gray-50 p-5 rounded-lg border border-primary-200"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg shadow-sm"
                        />
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 text-lg">
                            {item.title}
                          </p>
                          <p className="text-primary-600 font-semibold mt-1">
                            ₹{price * item.quantity}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                            className="p-1 hover:bg-gray-100 rounded transition"
                          >
                            <Minus size={18} className="text-gray-600" />
                          </button>
                          <span className="font-semibold text-gray-900 w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 hover:bg-gray-100 rounded transition"
                          >
                            <Plus size={18} className="text-gray-600" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                          onClick={() => removeFromCart(item.id)}
                          title="Remove from cart"
                        >
                          <Trash2 size={20} />
                        </button>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Booking Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Booking <span className="text-primary-600">Details</span>
                </h2>

                <div className="space-y-5">
                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Date & Time *
                    </label>
                    <input
                      type="datetime-local"
                      value={bookingDateTime}
                      onChange={(e) => setBookingDateTime(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Address *
                    </label>
                    <textarea
                      placeholder="Enter your complete address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+919876543210"
                      value={phone}
                      onChange={handlePhoneChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent ${
                        phoneError ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    {phoneError && (
                      <p className="text-red-500 text-xs mt-2">{phoneError}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={handleEmailChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent ${
                        emailError ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    {emailError && (
                      <p className="text-red-500 text-xs mt-2">{emailError}</p>
                    )}
                  </div>

                  {/* Promo Code */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Promo Code (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Terms & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-6">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                    className="mt-1 w-5 h-5 text-primary-600 rounded focus:ring-2 focus:ring-primary-600"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the{" "}
                    <a
                      href="/terms-and-conditions"
                      className="text-primary-600 font-semibold hover:underline"
                    >
                      Terms & Conditions
                    </a>
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleConfirmBooking}
                  disabled={loading || phoneError || emailError || !agreeTerms}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2 ${
                    loading || phoneError || emailError || !agreeTerms
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                      : "bg-primary-600 text-white hover:bg-primary-700 shadow-lg"
                  }`}
                >
                  <Lock size={20} />
                  {loading ? "Processing Payment..." : `Pay ₹${finalTotal} & Book`}
                </motion.button>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="text-green-600" size={18} />
                    <span>100% Secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="text-green-600" size={18} />
                    <span>Money-back Guarantee</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right - Order Summary */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-8 shadow-lg sticky top-8"
              >
                <h3 className="text-2xl font-bold mb-8">Order Summary</h3>

                {/* Items List */}
                <div className="space-y-3 mb-6 pb-6 border-b border-primary-500">
                  {cart.map((item) => {
                    const price = parseInt(item?.price?.replace(/[^\d]/g, "")) || 0;
                    return (
                      <div key={item.id} className="flex justify-between">
                        <span className="text-primary-100">
                          {item.title} x {item.quantity}
                        </span>
                        <span className="font-semibold">₹{price * item.quantity}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Pricing Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-primary-500">
                  <div className="flex justify-between">
                    <span className="text-primary-100">Subtotal:</span>
                    <span className="font-semibold">₹{totalCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-100">GST (18%):</span>
                    <span className="font-semibold">₹{gst}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-3xl font-bold">₹{finalTotal}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2 text-sm text-primary-100">
                  <div className="flex items-start gap-2">
                    <Check size={16} className="flex-shrink-0 mt-0.5" />
                    <span>Free cancellation up to 24 hours</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={16} className="flex-shrink-0 mt-0.5" />
                    <span>Verified & trained professionals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={16} className="flex-shrink-0 mt-0.5" />
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;