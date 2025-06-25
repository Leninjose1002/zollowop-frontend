import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { useAuth } from "../components/AuthContext";
import { createRazorpayOrder, verifyRazorpayPayment } from "../api";

const CheckoutPage = () => {
  const { cart, removeFromCart, getTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [bookingDateTime, setBookingDateTime] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const totalCost = getTotal();

  const handleConfirmBooking = async () => {
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    if (!user || !user._id) {
      alert("User not logged in.");
      return;
    }

    const userId = user._id;

    try {
      const orderData = await createRazorpayOrder(totalCost * 100);

      const bookingPayload = {
        cart,
        address,
        phone,
        date: bookingDateTime,
        status: "confirmed",
        promoCode,
          serviceType: cart[0]?.title || "General", // ✅ ADDED this line

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
                state: { cart, bookingDateTime, address, phone, promoCode, totalCost },
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
          contact: phone,
          email: user?.email || "test@example.com",
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
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-center bg-white p-4 rounded-lg shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm font-medium text-green-600">
                    ₹
                    {(() => {
                      const price = parseInt(item?.price?.replace(/[^\d]/g, "")) || 0;
                      const qty = item?.quantity || 1;
                      return price * qty;
                    })()}
                  </p>
                </div>
                <button
                  className="text-xs text-red-500 underline"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <input
              type="datetime-local"
              value={bookingDateTime}
              onChange={(e) => setBookingDateTime(e.target.value)}
              className="w-full p-3 border rounded text-sm"
              placeholder="Booking Date & Time"
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
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border rounded text-sm"
              required
            />

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
              className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 rounded-lg transition"
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
