import axios from "axios";

console.log("🔍 DEBUG - REACT_APP_API_BASE_URL:", process.env.REACT_APP_API_BASE_URL);

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL || "http://localhost:5000"}/api`,
  withCredentials: true,
});

console.log("🔍 DEBUG - Full baseURL:", axiosInstance.defaults.baseURL);

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;