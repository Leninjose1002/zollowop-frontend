import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createRazorpayOrder, verifyRazorpayPayment } from "../api";

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [bookingDateTime, setBookingDateTime] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const selectedService = state?.selectedService;

  useEffect(() => {
    if (!selectedService) {
      navigate("/");
    }
  }, [selectedService, navigate]);

  if (!selectedService) return null;

  const hourlyRate = selectedService.rate || 100;
  const duration = selectedService.hours || 1;
  const totalCost = hourlyRate * duration;

  const handleConfirmBooking = async () => {
  if (!agreeTerms) {
    alert("Please agree to the terms and conditions.");
    return;
  }

  try {
    // ✅ Create Razorpay order using API module
const orderData = await createRazorpayOrder(totalCost * 100); // ✅ convert to paise
    console.log("✅ Order Created:", orderData);


   const userId = localStorage.getItem("userId");
console.log("🧑 User ID from localStorage:", userId);

if (!userId) {
  alert("User not logged in. Please log in before booking.");
  return;
}


    const bookingPayload = {
      serviceType: selectedService.type || "maid",
      name: selectedService.name,
      address,
      phone,
      date: bookingDateTime,
      status: "confirmed",
    };

    const options = {
      key: orderData.key, // ✅ Use dynamic key from backend
      amount: orderData.amount,
      currency: orderData.currency,
      name: "ZollowUp",
      description: "Booking Payment",
      order_id: orderData.orderId,
      handler: async function (response) {
          console.log("🔁 Razorpay Response:", response);

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
            navigate("/confirmation", {
              state: {
                service: selectedService,
                bookingDateTime,
                address,
                phone,
                totalCost,
              },
            });
          } else {
            navigate("/payment-failed");
          }
        } catch (err) {
          console.error("Payment verification error:", err);
          navigate("/payment-failed");
        }
      },
      method: {
        upi: true, // ✅ Enables UPI
        card: true,
        netbanking: true,
        wallet: true,
        paylater: true,
      },
      prefill: {
        name: selectedService.name || "Customer",
        email: "test@example.com",
        contact: phone,
      },
      theme: {
        color: "#3399cc",
      },
    };

    console.log("Razorpay options:", options); 

    // ✅ Ensure Razorpay script is loaded
    if (typeof window.Razorpay !== "function") {
      alert("Razorpay SDK not loaded. Please try again later.");
      return;
    }

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  } catch (err) {
    console.error("❌ Payment or Booking failed:", err);
    alert("❌ Could not complete payment. Try again.");
  }
};


  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Confirm Your Booking
        </h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {selectedService?.image && (
            <img
              src={selectedService.image}
              alt={selectedService.name || selectedService.title}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
            />
          )}

          <div className="text-gray-700 w-full">
            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Name</p>
              <p className="text-lg font-semibold">
                {selectedService.name || selectedService.title}
              </p>
            </div>

            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Service Type</p>
              <p>{selectedService.type || "maid"}</p>
            </div>

            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Booking Duration</p>
              <p>{duration} hours</p>
            </div>

            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Rate</p>
              <p>₹{hourlyRate}/hour</p>
            </div>

            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Estimated Cost</p>
              <p className="text-lg font-bold text-green-600">₹{totalCost}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600">Booking Date & Time</label>
            <input
              type="datetime-local"
              className="w-full mt-1 p-2 border rounded"
              value={bookingDateTime}
              onChange={(e) => setBookingDateTime(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Address</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded"
              placeholder="Your full address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Phone Number</label>
            <input
              type="tel"
              className="w-full mt-1 p-2 border rounded"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Promo Code</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
          </div>

          <div className="flex items-start space-x-2 mt-2">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              className="mt-1"
            />
            <span className="text-sm text-gray-700 font-sans">
              I agree to the{" "}
              <a
                href="/terms-and-conditions"
                className="underline text-blue-700 hover:text-blue-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
              ,{" "}
              <a
                href="/privacy-policy"
                className="underline text-blue-700 hover:text-blue-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              , and{" "}
              <a
                href="/refund-policy"
                className="underline text-blue-700 hover:text-blue-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Refund & Cancellation Policy
              </a>
            </span>
          </div>

          <button
            onClick={handleConfirmBooking}
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white text-lg font-medium py-3 rounded-xl transition duration-300"
          >
            Pay ₹{totalCost} & Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
