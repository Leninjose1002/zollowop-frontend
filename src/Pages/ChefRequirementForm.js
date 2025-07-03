import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance"; // ✅ adjust the path if needed

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [street = "", city = "", state = "", zip = ""] = formData.address.split(",").map(s => s.trim());

    const dataToSend = {
      serviceType: "chef",
      name: formData.name,
      phone: formData.phone,
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
      const res = await axiosInstance.post("/bookings/chef", dataToSend); // ✅ axiosInstance handles baseURL
      const result = res.data;

      if (result.success) {
        closeModal();            // ✅ Close modal if needed
navigate("/confirmation", {
  state: {
    service: {
      type: "chef",
      ...formData, // this includes name, address, date, etc.
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
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      <h2 className="text-2xl font-bold mb-4">Chef Requirement Form</h2>

      <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" required />
      <input name="address" type="text" placeholder="Address (Street, City, State, ZIP)" value={formData.address} onChange={handleChange} className="w-full border p-2 rounded" required />
      <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded" required />
      <input name="email" type="email" placeholder="Email (optional)" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" />

      <div className="flex gap-4">
        <input name="date" type="date" value={formData.date} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input name="time" type="time" value={formData.time} onChange={handleChange} className="w-full border p-2 rounded" required />
      </div>

      <input name="guests" type="number" placeholder="No. of Guests" value={formData.guests} onChange={handleChange} className="w-full border p-2 rounded" required />

      <div>
        <label className="block mb-2 font-medium">Food Category</label>
        <select name="category" value={formData.category} onChange={handleChange} className="w-full border p-2 rounded" required>
          <option value="">Select</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Veg/Non-Veg">Veg & Non-Veg</option>
        </select>
      </div>

      <input name="occasion" type="text" placeholder="Occasion (e.g., Birthday, Puja)" value={formData.occasion} onChange={handleChange} className="w-full border p-2 rounded" />
      <input name="cuisine" type="text" placeholder="Preferred Cuisine (e.g., North Indian)" value={formData.cuisine} onChange={handleChange} className="w-full border p-2 rounded" />

      <div className="flex items-center gap-2">
        <input type="checkbox" name="utensils" checked={formData.utensils} onChange={handleChange} />
        <label>Need chef to bring utensils?</label>
      </div>

      <div>
        <label className="block mb-2 font-medium">Service Type</label>
        <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="">Select</option>
          <option value="Cooking Only">Cooking Only</option>
          <option value="Full Service">Full Service (Cook + Serve + Clean)</option>
        </select>
      </div>

      <textarea name="notes" placeholder="Additional Notes" value={formData.notes} onChange={handleChange} className="w-full border p-2 rounded h-24" />

      <button type="submit" className="bg-yellow-400 px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition">
        Submit Requirement
      </button>
    </form>
  );
};

export default ChefRequirementForm;
