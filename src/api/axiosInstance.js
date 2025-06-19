// src/api/axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

console.log("🔍 Axios Base URL:", instance.defaults.baseURL);

export default instance;
