import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { useAuth } from "../components/AuthContext";
import { createRazorpayOrder, verifyRazorpayPayment } from "../api";

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

  const totalCost = getTotal();

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

    const finalPhone = phone.startsWith("+91") ? phone.slice(3) : phone;
    const userId = user._id;

    try {
      const orderData = await createRazorpayOrder(totalCost * 100);

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
              clearCart();
              navigate("/confirmation", {
                state: {
                  cart,
                  bookingDateTime,
                  address,
                  phone: finalPhone,
                  email,
                  promoCode,
                  totalCost,
                },
              });
            } else {
              navigate("/payment-failed");
            }
          } catch {
            navigate("/payment-failed");
          }
        },
        prefill: {
          name: "Customer",
          contact: finalPhone,
          email,
        },
        theme: {
          color: "#10b981",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="px-4 py-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
        Confirm Your Booking
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item) => {
              const price = parseInt(item?.price?.replace(/[^\d]/g, "")) || 0;
              return (
                <div
                  key={item.id}
                  className="flex gap-4 items-center bg-white p-4 rounded-lg shadow"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm font-medium text-blue-600">
                      ₹{price * item.quantity}
                    </p>
                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 bg-gray-200 rounded-full text-sm font-bold"
                      >
                        –
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-200 rounded-full text-sm font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="text-xs text-red-500 underline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>

          <div className="space-y-4">
            <input
              type="datetime-local"
              value={bookingDateTime}
              onChange={(e) => setBookingDateTime(e.target.value)}
              className="w-full p-3 border rounded text-sm"
              required
            />

            <input
              type="text"
              placeholder="Full Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border rounded text-sm"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number (e.g., +919876543210)"
              value={phone}
              onChange={handlePhoneChange}
              className={`w-full p-3 border rounded text-sm ${
                phoneError ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {phoneError && (
              <p className="text-red-500 text-xs mt-1">{phoneError}</p>
            )}

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              className={`w-full p-3 border rounded text-sm ${
                emailError ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {emailError && (
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
            )}

            <input
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full p-3 border rounded text-sm"
            />

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                className="mt-1"
              />
              <span className="text-sm text-gray-700">
                I agree to the{" "}
                <a href="/terms-and-conditions" className="underline text-blue-600">
                  Terms & Conditions
                </a>
              </span>
            </div>

            <button
              onClick={handleConfirmBooking}
              disabled={phoneError || emailError}
              className={`w-full mt-2 text-lg font-semibold py-3 rounded-lg transition ${
                phoneError || emailError
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Pay ₹{totalCost} & Book
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
