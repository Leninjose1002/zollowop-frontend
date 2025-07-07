import React, { useState } from "react";
import { submitJobApplication } from "../api"; // Adjust path as needed

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    gender: "",
    maritalStatus: "",
    religion: "",
    category: "",
    experience: "",
    age: "",
    education: "",
    city: "",
    govtIdType: "",
    extraInfo: "",
  });

  const [files, setFiles] = useState({
    aadhar: null,
    photo: null,
    resume: null,
    otherId: null,
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles((prev) => ({
      ...prev,
      [name]: selectedFiles[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    const submissionData = new FormData();

    // Append text fields
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });

    // Append files
    Object.keys(files).forEach((key) => {
      if (files[key]) {
        submissionData.append(key, files[key]);
      }
    });

    try {
      const res = await submitJobApplication(submissionData);
      setResponseMsg(res?.message || "Application submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        address: "",
        gender: "",
        maritalStatus: "",
        religion: "",
        category: "",
        experience: "",
        age: "",
        education: "",
        city: "",
        govtIdType: "",
        extraInfo: "",
      });
      setFiles({ aadhar: null, photo: null, resume: null, otherId: null });
    } catch (error) {
      setResponseMsg(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-900">
          नौकरी के लिए आवेदन करें / Apply for a Job
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          <input name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Name / पूरा नाम" className="form-input" required />
          <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Phone Number / फ़ोन नंबर" className="form-input" required />
          <input name="address" value={formData.address} onChange={handleInputChange} type="text" placeholder="Address / पता" className="form-input" required />

          <select name="gender" value={formData.gender} onChange={handleInputChange} className="form-input" required>
            <option value="">Gender / लिंग</option>
            <option value="Male">Male / पुरुष</option>
            <option value="Female">Female / महिला</option>
            <option value="Other">Other / अन्य</option>
          </select>

          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} className="form-input" required>
            <option value="">Marital Status / वैवाहिक स्थिति</option>
            <option value="Single">Single / अविवाहित</option>
            <option value="Married">Married / विवाहित</option>
            <option value="Widowed">Widowed / विधवा/विधुर</option>
          </select>

          <input name="religion" value={formData.religion} onChange={handleInputChange} type="text" placeholder="Religion / धर्म" className="form-input" required />

          <select name="category" value={formData.category} onChange={handleInputChange} className="form-input" required>
            <option value="">Category / कार्य श्रेणी</option>
            <option value="Maid">Maid / नौकरानी</option>
            <option value="Babysitter">Babysitter / शिशु देखभाल</option>
            <option value="Driver">Driver / ड्राइवर</option>
            <option value="Electrician">Electrician / इलेक्ट्रीशियन</option>
            <option value="Cook">Cook / रसोइया</option>
          </select>

          <input name="experience" value={formData.experience} onChange={handleInputChange} type="text" placeholder="Experience / अनुभव" className="form-input" required />
          <input name="age" value={formData.age} onChange={handleInputChange} type="text" placeholder="Age / उम्र" className="form-input" required />
          <input name="education" value={formData.education} onChange={handleInputChange} type="text" placeholder="Education / शिक्षा" className="form-input" />
          <input name="city" value={formData.city} onChange={handleInputChange} type="text" placeholder="Nearby City / नजदीकी शहर" className="form-input" />

          <div className="md:col-span-2">
            <label className="text-sm">Upload Aadhar Card *</label>
            <input name="aadhar" type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} className="form-input w-full" required />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm">Upload Photo *</label>
            <input name="photo" type="file" accept="image/*" onChange={handleFileChange} className="form-input w-full" required />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm">Upload Resume (if any)</label>
            <input name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="form-input w-full" />
          </div>

          <div>
            <label className="text-sm">Other Govt ID Type</label>
            <select name="govtIdType" value={formData.govtIdType} onChange={handleInputChange} className="form-input">
              <option value="">Select</option>
              <option value="PAN">PAN Card</option>
              <option value="Driving License">Driving License</option>
              <option value="Voter ID">Voter ID</option>
              <option value="Passport">Passport</option>
            </select>
          </div>

          <div>
            <label className="text-sm">Upload Other ID Proof</label>
            <input name="otherId" type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} className="form-input w-full" />
          </div>

          <textarea
            name="extraInfo"
            value={formData.extraInfo}
            onChange={handleInputChange}
            placeholder="Additional Information / कोई विशेष जानकारी"
            className="form-input md:col-span-2"
            rows="3"
          ></textarea>

          <button type="submit" disabled={loading} className="md:col-span-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-md transition">
            {loading ? "Submitting..." : "आवेदन सबमिट करें / Submit Application"}
          </button>

          {responseMsg && (
            <p className="text-center md:col-span-2 mt-4 text-green-700 font-medium">{responseMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
