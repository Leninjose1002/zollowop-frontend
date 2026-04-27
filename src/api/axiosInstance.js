// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:`${process.env.REACT_APP_API_BASE_URL || "http://localhost:5000"}/api`, // 🌐 Production (Render)
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// triggering redeplo

console.log("🔍 Axios Base URL:", axiosInstance.defaults.baseURL);

export default axiosInstance;
