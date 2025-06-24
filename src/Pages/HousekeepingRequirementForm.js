// src/pages/HousekeepingRequirementForm.js
import React, { useState } from "react";

const HousekeepingRequirementForm = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    service,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Submitted:", formData);
    alert("Booking submitted successfully!");
    onClose(); // close modal
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Full Name"
        className="w-full border px-4 py-2 rounded"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        className="w-full border px-4 py-2 rounded"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        name="date"
        type="date"
        className="w-full border px-4 py-2 rounded"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <textarea
        name="address"
        placeholder="Full Address"
        className="w-full border px-4 py-2 rounded"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Submit Booking
      </button>
    </form>
  );
};

export default HousekeepingRequirementForm;
