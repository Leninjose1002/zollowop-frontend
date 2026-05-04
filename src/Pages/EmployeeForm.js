// import React, { useState } from "react";
// import { submitJobApplication } from "../api"; // Adjust path as needed


// const EmployeeForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     gender: "",
//     maritalStatus: "",
//     religion: "",
//     category: "",
//     experience: "",
//     age: "",
//     education: "",
//     city: "",
//     govtIdType: "",
//     extraInfo: "",
//   });

//   const [files, setFiles] = useState({
//     aadhar: null,
//     photo: null,
//     resume: null,
//     otherId: null,
//   });

//   const [loading, setLoading] = useState(false);
//   const [responseMsg, setResponseMsg] = useState("");

//   const handleInputChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files: selectedFiles } = e.target;
//     setFiles((prev) => ({
//       ...prev,
//       [name]: selectedFiles[0],
//     }));
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponseMsg("");

//     const submissionData = new FormData();

//     // Append text fields
//     Object.keys(formData).forEach((key) => {
//       submissionData.append(key, formData[key]);
//     });

//     // Append files
//     Object.keys(files).forEach((key) => {
//       if (files[key]) {
//         submissionData.append(key, files[key]);
//       }
//     });

//     try {
//       const res = await submitJobApplication(submissionData);
//       setResponseMsg(res?.message || "Application submitted successfully!");
//       setFormData({
//         name: "",
//         phone: "",
//         address: "",
//         gender: "",
//         maritalStatus: "",
//         religion: "",
//         category: "",
//         experience: "",
//         age: "",
//         education: "",
//         city: "",
//         govtIdType: "",
//         extraInfo: "",
//       });
//       setFiles({ aadhar: null, photo: null, resume: null, otherId: null });
//     } catch (error) {
//       setResponseMsg(error.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gray-100 py-8 px-4">
//       <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-lg">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-900">
//           नौकरी के लिए आवेदन करें / Apply for a Job
//         </h2>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
//           <input name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Name / पूरा नाम" className="form-input" required />
//           <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Phone Number / फ़ोन नंबर" className="form-input" required />
//           <input name="address" value={formData.address} onChange={handleInputChange} type="text" placeholder="Address / पता" className="form-input" required />

//           <select name="gender" value={formData.gender} onChange={handleInputChange} className="form-input" required>
//             <option value="">Gender / लिंग</option>
//             <option value="Male">Male / पुरुष</option>
//             <option value="Female">Female / महिला</option>
//             <option value="Other">Other / अन्य</option>
//           </select>

//           <select name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} className="form-input" required>
//             <option value="">Marital Status / वैवाहिक स्थिति</option>
//             <option value="Single">Single / अविवाहित</option>
//             <option value="Married">Married / विवाहित</option>
//             <option value="Widowed">Widowed / विधवा/विधुर</option>
//           </select>

//           <input name="religion" value={formData.religion} onChange={handleInputChange} type="text" placeholder="Religion / धर्म" className="form-input" required />

//          <select name="category" value={formData.category} onChange={handleInputChange} className="form-input" required>
//   <option value="">Category / कार्य श्रेणी</option>
//   <option value="Maid">Maid / नौकरानी</option>
//   <option value="Babysitter">Babysitter / शिशु देखभाल</option>
//   <option value="Driver">Driver / ड्राइवर</option>
//   <option value="Electrician">Electrician / इलेक्ट्रीशियन</option>
//   <option value="Cook">Cook / रसोइया</option>
//   <option value="Plumber">Plumber / प्लंबर</option>
//   <option value="Painter">Painter / पेंटर</option>
//   <option value="Carpenter">Carpenter / बढ़ई</option>
//   <option value="Gardener">Gardener / माली</option>
//   <option value="Security">Security Guard / सुरक्षा गार्ड</option>
//   <option value="Housekeeping">Housekeeping / सफाई कर्मचारी</option>
//   <option value="Chef">Chef / शेफ</option>
//   <option value="Beautician">Beautician / ब्यूटीशियन</option>
//   <option value="Nursing">Nursing / नर्सिंग</option>
//   <option value="Tailor">Tailor / दर्जी</option>
//   <option value="Laundry Worker">Laundry Worker / कपड़े धोने वाला</option>
//   <option value="Pressman">Pressman / प्रेसमैन</option>
//   <option value="Bar Attender">Bar Attender / बार अटेंडेंट</option>
//   <option value="Labour Worker">Labour Worker / मज़दूर</option>
//   <option value="Mechanic">Car Mechanic / कार मिस्त्री</option>
//   <option value="Welder">Welder / वेल्डर</option>
//   <option value="Sewage Cleaner">Sewage Cleaner / नाली सफाई कर्मचारी</option>
//   <option value="AC Service">AC Technician / एसी टेक्नीशियन</option>
// </select>


//           <input name="experience" value={formData.experience} onChange={handleInputChange} type="text" placeholder="Experience / अनुभव" className="form-input" required />
//           <input name="age" value={formData.age} onChange={handleInputChange} type="text" placeholder="Age / उम्र" className="form-input" required />
//           <input name="education" value={formData.education} onChange={handleInputChange} type="text" placeholder="Education / शिक्षा" className="form-input" />
//           <input name="city" value={formData.city} onChange={handleInputChange} type="text" placeholder="Nearby City / नजदीकी शहर" className="form-input" />

//           <div className="md:col-span-2">
//             <label className="text-sm">Upload Aadhar Card *</label>
//             <input name="aadhar" type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} className="form-input w-full" required />
//           </div>

//           <div className="md:col-span-2">
//             <label className="text-sm">Upload Photo *</label>
//             <input name="photo" type="file" accept="image/*" onChange={handleFileChange} className="form-input w-full" required />
//           </div>

//           <div className="md:col-span-2">
//             <label className="text-sm">Upload Resume (if any)</label>
//             <input name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="form-input w-full" />
//           </div>

//           <div>
//             <label className="text-sm">Other Govt ID Type</label>
//             <select name="govtIdType" value={formData.govtIdType} onChange={handleInputChange} className="form-input">
//               <option value="">Select</option>
//               <option value="PAN">PAN Card</option>
//               <option value="Driving License">Driving License</option>
//               <option value="Voter ID">Voter ID</option>
//               <option value="Passport">Passport</option>
//             </select>
//           </div>

//           <div>
//             <label className="text-sm">Upload Other ID Proof</label>
//             <input name="otherId" type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} className="form-input w-full" />
//           </div>

//           <textarea
//             name="extraInfo"
//             value={formData.extraInfo}
//             onChange={handleInputChange}
//             placeholder="Additional Information / कोई विशेष जानकारी"
//             className="form-input md:col-span-2"
//             rows="3"
//           ></textarea>

//           <button type="submit" disabled={loading} className="md:col-span-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-md transition">
//             {loading ? "Submitting..." : "आवेदन सबमिट करें / Submit Application"}
//           </button>

//           {responseMsg && (
//             <p className="text-center md:col-span-2 mt-4 text-green-700 font-medium">{responseMsg}</p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EmployeeForm;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Check, AlertCircle, ArrowRight, Briefcase } from "lucide-react";
import axiosInstance from "../api/axiosInstance";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    gender: "",
    maritalStatus: "",
    religion: "",
    category: "",
    age: "",
    nearbyCity: "",
    experience: "",
    education: "",
    aadharFile: null,
    photoFile: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files[0]) {
      setFormData({ ...formData, [name]: files[0] });
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ""))) newErrors.phone = "Valid phone required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.age || formData.age < 18) newErrors.age = "Must be 18+";
    if (!formData.aadharFile) newErrors.aadharFile = "Aadhar card required";
    if (!formData.photoFile) newErrors.photoFile = "Photo required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    const form = new FormData();
    
    Object.keys(formData).forEach((key) => {
      if (formData[key]) form.append(key, formData[key]);
    });

    try {
      await axiosInstance.post("/employees/register", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        address: "",
        gender: "",
        maritalStatus: "",
        religion: "",
        category: "",
        age: "",
        nearbyCity: "",
        experience: "",
        education: "",
        aadharFile: null,
        photoFile: null,
      });
      
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      setErrors({ submit: "Submission failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-gray-50 py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-primary-600 p-4 rounded-full">
              <Briefcase size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            नौकरी के लिए आवेदन करें
          </h1>
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            Apply for a Job
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join ZollowUp as a verified professional. Fill in your details and get started on your journey.
          </p>
        </motion.div>

        {/* Success Message */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-green-50 border-2 border-green-200 rounded-xl p-6 flex items-center gap-4"
          >
            <Check className="text-green-600 flex-shrink-0" size={32} />
            <div>
              <p className="font-bold text-green-900">Application Submitted!</p>
              <p className="text-green-700 text-sm">We'll review your application and contact you soon.</p>
            </div>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        >
          <div className="p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Name / पूरा नाम *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-primary-600 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <div className="flex items-center gap-1 text-red-600 text-xs mt-2">
                    <AlertCircle size={16} /> {errors.name}
                  </div>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number / फोन नंबर *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit number"
                  className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-primary-600 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <div className="flex items-center gap-1 text-red-600 text-xs mt-2">
                    <AlertCircle size={16} /> {errors.phone}
                  </div>
                )}
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Address / पता *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Full address"
                  rows="3"
                  className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.address && (
                  <div className="flex items-center gap-1 text-red-600 text-xs mt-2">
                    <AlertCircle size={16} /> {errors.address}
                  </div>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Gender / लिंग *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-primary-600 ${
                    errors.gender ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male / पुरुष</option>
                  <option value="female">Female / महिला</option>
                  <option value="other">Other / अन्य</option>
                </select>
                {errors.gender && (
                  <div className="flex items-center gap-1 text-red-600 text-xs mt-2">
                    <AlertCircle size={16} /> {errors.gender}
                  </div>
                )}
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Age / उम्र *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="18 or above"
                  min="18"
                  className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-primary-600 ${
                    errors.age ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.age && (
                  <div className="flex items-center gap-1 text-red-600 text-xs mt-2">
                    <AlertCircle size={16} /> {errors.age}
                  </div>
                )}
              </div>

              {/* Marital Status */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Marital Status / वैवाहिक स्थिति
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 transition focus:outline-none focus:ring-2 focus:ring-primary-600"
                >
                  <option value="">Select status</option>
                  <option value="single">Single / अविवाहित</option>
                  <option value="married">Married / विवाहित</option>
                  <option value="divorced">Divorced / तलाकशुदा</option>
                </select>
              </div>

              {/* Religion */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Religion / धर्म
                </label>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  placeholder="Your religion"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 transition focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Category / कार्य श्रेणी *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-primary-600 ${
                    errors.category ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select category</option>
                  <option value="maid">Maid / मेड</option>
                  <option value="nursing">Nursing / नर्सिंग</option>
                  <option value="driver">Driver / ड्राइवर</option>
                  <option value="cook">Cook / रसोइया</option>
                  <option value="electrician">Electrician / विद्युत मिस्त्री</option>
                  <option value="plumber">Plumber / प्लंबर</option>
                  <option value="carpenter">Carpenter / बढ़ई</option>
                  <option value="other">Other / अन्य</option>
                </select>
                {errors.category && (
                  <div className="flex items-center gap-1 text-red-600 text-xs mt-2">
                    <AlertCircle size={16} /> {errors.category}
                  </div>
                )}
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Experience / अनुभव
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="e.g., 5 years"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 transition focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>

              {/* Education */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Education / शिक्षा
                </label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  placeholder="e.g., 12th Pass"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 transition focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>

              {/* Nearby City */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nearby City / नजदीकी शहर
                </label>
                <input
                  type="text"
                  name="nearbyCity"
                  value={formData.nearbyCity}
                  onChange={handleInputChange}
                  placeholder="City name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 transition focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>
            </div>

            {/* File Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pt-8 border-t border-gray-200">
              {/* Aadhar Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Upload Aadhar Card / आधार कार्ड अपलोड करें *
                </label>
                <div className={`border-2 border-dashed rounded-lg p-6 text-center transition ${
                  errors.aadharFile ? "border-red-500 bg-red-50" : "border-primary-300 bg-primary-50"
                }`}>
                  <Upload className="mx-auto mb-2 text-primary-600" size={32} />
                  <input
                    type="file"
                    name="aadharFile"
                    onChange={handleFileChange}
                    accept="image/*,.pdf"
                    className="hidden"
                    id="aadhar-input"
                  />
                  <label htmlFor="aadhar-input" className="cursor-pointer">
                    <p className="text-sm font-semibold text-gray-900">
                      {formData.aadharFile ? formData.aadharFile.name : "Click to upload"}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">PDF, JPG, PNG</p>
                  </label>
                </div>
                {errors.aadharFile && (
                  <div className="flex items-center gap-1 text-red-600 text-xs mt-2">
                    <AlertCircle size={16} /> {errors.aadharFile}
                  </div>
                )}
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Upload Photo / फोटो अपलोड करें *
                </label>
                <div className={`border-2 border-dashed rounded-lg p-6 text-center transition ${
                  errors.photoFile ? "border-red-500 bg-red-50" : "border-primary-300 bg-primary-50"
                }`}>
                  <Upload className="mx-auto mb-2 text-primary-600" size={32} />
                  <input
                    type="file"
                    name="photoFile"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                    id="photo-input"
                  />
                  <label htmlFor="photo-input" className="cursor-pointer">
                    <p className="text-sm font-semibold text-gray-900">
                      {formData.photoFile ? formData.photoFile.name : "Click to upload"}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">JPG, PNG</p>
                  </label>
                </div>
                {errors.photoFile && (
                  <div className="flex items-center gap-1 text-red-600 text-xs mt-2">
                    <AlertCircle size={16} /> {errors.photoFile}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition ${
                loading
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "bg-primary-600 text-white hover:bg-primary-700 shadow-lg"
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
              {!loading && <ArrowRight size={24} />}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default EmployeeForm;
