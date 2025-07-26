import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const services = [
  "Driver","Tutor", "Gardener", "Maison", "Carpenter", "Painter","Laundry Worker", "Pressman", "Tailor", "Beautician", "Bar Attenders", "Labour Worker",
  "Security", "Car Mechanic", "Welder", "Sewage Cleaner", "Other service"
];

const GenericServiceForm = ({ closeModal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serviceType: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    time: "",
    notes: ""
  });

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      let phone = value.replace(/\s+/g, "");
      if (/^[6-9]\d{9}$/.test(phone)) {
        phone = `+91${phone}`;
      }
      setFormData((prev) => ({ ...prev, phone }));

      const valid = /^(\+91)[6-9]\d{9}$/.test(phone);
      setPhoneError(valid ? "" : "Enter a valid Indian phone number.");
      return;
    }

    if (name === "email") {
      const valid = /\S+@\S+\.\S+/.test(value);
      setFormData((prev) => ({ ...prev, email: value }));
      setEmailError(valid ? "" : "Invalid email address.");
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.serviceType) {
      alert("Please select a service type.");
      return;
    }

    if (phoneError || emailError) {
      alert("Fix validation errors.");
      return;
    }

    try {
      const res = await axiosInstance.post(`/bookings/${formData.serviceType.toLowerCase()}`, formData);
      if (res.data.success) {
        closeModal();
        navigate("/confirmation", {
          state: { service: formData }
        });
      } else {
        alert("❌ Booking failed.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      alert("❌ Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Service Booking Form</h2>

      <select
        name="serviceType"
        value={formData.serviceType}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      >
        <option value="">Select a Service</option>
        {services.map((service) => (
          <option key={service} value={service.toLowerCase()}>
            {service}
          </option>
        ))}
      </select>

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
        name="phone"
        type="tel"
        placeholder="Phone (+91xxxxxxxxxx)"
        value={formData.phone}
        onChange={handleChange}
        className={`w-full border p-3 rounded ${phoneError ? "border-red-500" : ""}`}
        required
      />
      {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className={`w-full border p-3 rounded ${emailError ? "border-red-500" : ""}`}
        required
      />
      {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

      <input
        name="address"
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      />

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
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
      >
        Submit Booking
      </button>
    </form>
  );
};

export default GenericServiceForm;
