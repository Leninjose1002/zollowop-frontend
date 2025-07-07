import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance"; // adjust path if needed

const ChefRequirementForm = ({ closeModal }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    category: "",
    occasion: "",
    cuisine: "",
    utensils: false,
    serviceType: "",
    notes: ""
  });

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "phone") {
      let input = value.replace(/\s+/g, "");
      if (/^[6-9]\d{9}$/.test(input)) {
        input = `+91${input}`;
      }

      setFormData((prev) => ({ ...prev, phone: input }));

      const phoneRegex = /^(\+91)[6-9]\d{9}$/;
      setPhoneError(phoneRegex.test(input) ? "" : "Enter a valid Indian phone number with +91.");
      return;
    }

    if (name === "email") {
      const isValid = /\S+@\S+\.\S+/.test(value);
      setFormData((prev) => ({ ...prev, email: value }));
      setEmailError(isValid ? "" : "Enter a valid email address.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneError || !formData.phone) {
      alert("❌ Invalid phone number.");
      return;
    }

    if (emailError || !formData.email) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    const [street = "", city = "", state = "", zip = ""] = formData.address
      .split(",")
      .map((s) => s.trim());

    const finalPhone = formData.phone.startsWith("+91")
      ? formData.phone.slice(3)
      : formData.phone;

    const dataToSend = {
      serviceType: "chef",
      name: formData.name,
      phone: finalPhone,
      email: formData.email,
      street,
      city,
      state,
      zip,
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      category: formData.category,
      occasion: formData.occasion,
      cuisine: formData.cuisine,
      utensils: formData.utensils,
      serviceType: formData.serviceType,
      notes: formData.notes,
    };

    try {
      const res = await axiosInstance.post("/bookings/chef", dataToSend);
      const result = res.data;

      if (result.success) {
        closeModal();
        navigate("/confirmation", {
          state: {
            service: {
              type: "chef",
              ...formData,
            },
          },
        });
      } else {
        alert(result.message || "❌ Booking failed. Please try again.");
      }
    } catch (err) {
      console.error("❌ Booking error:", err);
      alert("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Chef Requirement Form</h2>

      <input
        name="name"
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      />

      <input
        name="address"
        type="text"
        placeholder="Address (Street, City, State, ZIP)"
        value={formData.address}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone Number (e.g. +919876543210)"
        value={formData.phone}
        onChange={handleChange}
        className={`w-full border p-3 rounded ${
          phoneError ? "border-red-500" : ""
        }`}
        required
      />
      {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className={`w-full border p-3 rounded ${
          emailError ? "border-red-500" : ""
        }`}
        required
      />
      {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

      <div className="flex gap-4">
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <input
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
      </div>

      <input
        name="guests"
        type="number"
        placeholder="No. of Guests"
        value={formData.guests}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      />

      <div>
        <label className="block mb-2 font-medium">Food Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        >
          <option value="">Select</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Veg/Non-Veg">Veg & Non-Veg</option>
        </select>
      </div>

      <input
        name="occasion"
        type="text"
        placeholder="Occasion (e.g., Birthday)"
        value={formData.occasion}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        name="cuisine"
        type="text"
        placeholder="Preferred Cuisine (e.g., North Indian)"
        value={formData.cuisine}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="utensils"
          checked={formData.utensils}
          onChange={handleChange}
        />
        <label>Need chef to bring utensils?</label>
      </div>

      <div>
        <label className="block mb-2 font-medium">Service Type</label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="">Select</option>
          <option value="Cooking Only">Cooking Only</option>
          <option value="Full Service">
            Full Service (Cook + Serve + Clean)
          </option>
        </select>
      </div>

      <textarea
        name="notes"
        placeholder="Additional Notes"
        value={formData.notes}
        onChange={handleChange}
        className="w-full border p-3 rounded h-24"
      />

      <button
        type="submit"
        disabled={!!phoneError || !!emailError}
        className={`w-full py-3 rounded font-semibold transition ${
          phoneError || emailError
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700 text-white"
        }`}
      >
        Submit Requirement
      </button>
    </form>
  );
};

export default ChefRequirementForm;
