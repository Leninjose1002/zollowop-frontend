// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/api"
      : "https://backend-new-ip8j.onrender.com/api", // ✅ Hardcoded temporarily for testing
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

console.log("🔍 Axios Base URL:", axiosInstance.defaults.baseURL);

export default axiosInstance;
