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

  // Pre-fill nurseType if card selected
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
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosInstance.post("/api/bookings/nurse", {
        ...form,
      });

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

      <h2 className="text-2xl font-bold mb-4 text-center">Request a Nurse</h2>

      {successMsg && (
        <div className="mb-4 text-green-700 bg-green-100 border border-green-300 rounded px-4 py-2 text-sm">
          {successMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm font-medium">Type of Nurse</label>
        <select name="nurseType" value={form.nurseType} onChange={handleChange} required className="w-full border p-2 rounded">
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

        <label className="block text-sm font-medium">Preferred Shift</label>
        <select name="shift" value={form.shift} onChange={handleChange} required className="w-full border p-2 rounded">
          <option value="">-- Select --</option>
          <option value="Day">Day</option>
          <option value="Night">Night</option>
          <option value="Live-in">Live-in</option>
        </select>

        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input type="text" name="street" placeholder="Street Address" value={form.street} onChange={handleChange} required className="w-full border p-2 rounded" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input type="text" name="zip" placeholder="Pincode" value={form.zip} onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        <input type="datetime-local" name="date" value={form.date} onChange={handleChange} required className="w-full border p-2 rounded" />

        <textarea name="notes" placeholder="Any specific health concerns, preferences, etc." value={form.notes} onChange={handleChange} className="w-full border p-2 rounded h-24" />

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
};

export default NurseRequirementForm;
