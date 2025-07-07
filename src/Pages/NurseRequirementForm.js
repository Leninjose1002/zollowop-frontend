import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import axiosInstance from "../api/axiosInstance";

const NurseRequirementForm = ({ onClose, selectedService }) => {
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nurseType: "",
    shift: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    date: "",
    notes: "",
  });

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (selectedService?.title) {
      setForm((prev) => ({
        ...prev,
        nurseType: selectedService.title,
      }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone validation
    if (name === "phone") {
      let input = value.replace(/\s+/g, "");
      if (/^[6-9]\d{9}$/.test(input)) {
        input = `+91${input}`;
      }
      setForm({ ...form, phone: input });

      const phoneRegex = /^(\+91)[6-9]\d{9}$/;
      setPhoneError(phoneRegex.test(input) ? "" : "Enter a valid 10-digit Indian number with +91.");
      return;
    }

    // Email validation
    if (name === "email") {
      setForm({ ...form, email: value });
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? "" : "Enter a valid email address.");
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneError || emailError || !form.phone || !form.email) {
      alert("Please enter valid phone and email before submitting.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        ...form,
        phone: form.phone.startsWith("+91") ? form.phone.slice(3) : form.phone,
      };

      const res = await axiosInstance.post("/bookings/nurse", payload);

      if (res?.data?.success) {
        setSuccessMsg("✅ Nurse booking submitted successfully!");
        setTimeout(() => {
          setLoading(false);
          navigate("/confirmation", {
            state: {
              service: {
                type: "nurse",
                ...form,
              },
            },
          });
        }, 2000);
      } else {
        throw new Error(res.data?.message || "Unknown error");
      }
    } catch (err) {
      console.error("❌ Submission error:", err);
      alert("❌ Booking failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl max-h-[90vh] overflow-y-auto relative mx-auto p-6 bg-white shadow-lg rounded-lg">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          <X />
        </button>
      )}


      {successMsg && (
        <div className="mb-4 text-green-700 bg-green-100 border border-green-300 rounded px-4 py-2 text-sm">
          {successMsg}
        </div>
      )}

     <form
  onSubmit={handleSubmit}
  className="space-y-5 bg-white px-6 py-8 rounded-2xl shadow-lg max-w-xl mx-auto"
>
  <div className="text-center mb-4">
    <div className="text-4xl mb-2">🩺</div>
    <h2 className="text-2xl font-bold text-blue-700">Request a Nurse</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-semibold mb-1">Type of Nurse</label>
      <select
        name="nurseType"
        value={form.nurseType}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">-- Select --</option>
        <option value="Elderly Care">Elderly Care</option>
        <option value="ICU Care at Home">ICU Care at Home</option>
        <option value="Post-Surgical Care">Post-Surgical Care</option>
        <option value="Baby & Mother Care">Baby & Mother Care</option>
        <option value="Injections & IV Drips">Injections & IV Drips</option>
        <option value="Palliative Care">Palliative Care</option>
        <option value="Bedridden Care">Bedridden Care</option>
        <option value="Night Nursing">Night Nursing</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-semibold mb-1">Preferred Shift</label>
      <select
        name="shift"
        value={form.shift}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">-- Select --</option>
        <option value="Day">Day</option>
        <option value="Night">Night</option>
        <option value="Live-in">Live-in</option>
      </select>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-semibold mb-1">Email</label>
      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label className="block text-sm font-semibold mb-1">Phone</label>
      <input
        type="tel"
        name="phone"
        placeholder="+91XXXXXXXXXX"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-semibold mb-1">Street Address</label>
    <input
      type="text"
      name="street"
      placeholder="123 Main St"
      value={form.street}
      onChange={handleChange}
      required
      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <input
      type="text"
      name="city"
      placeholder="City"
      value={form.city}
      onChange={handleChange}
      required
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
      type="text"
      name="state"
      placeholder="State"
      value={form.state}
      onChange={handleChange}
      required
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
      type="text"
      name="zip"
      placeholder="Pincode"
      value={form.zip}
      onChange={handleChange}
      required
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-semibold mb-1">Preferred Date & Time</label>
      <input
        type="datetime-local"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label className="block text-sm font-semibold mb-1">Additional Notes</label>
      <textarea
        name="notes"
        value={form.notes}
        onChange={handleChange}
        placeholder="Any concerns or preferences?"
        className="w-full border border-gray-300 rounded-lg p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </div>

  <button
    type="submit"
    disabled={loading}
    className="w-full py-3 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
  >
    {loading ? "Submitting..." : "Submit Request"}
  </button>
</form>


    </div>
  );
};

export default NurseRequirementForm;
