import axiosInstance from "./api/axiosInstance";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const USER_API_URL = `/users`;
const EMPLOYEE_API_URL = `/employees`;

// ✅ Register User
export const registerUser = async (userData) => {
  try {
    const res = await axiosInstance.post(`${USER_API_URL}/register`, userData);
    return res.data;
  } catch (error) {
    console.error("🛑 Register API Error:", error.response?.data || error.message);
    throw error.response?.data?.msg || "Signup failed";
  }
};

// ✅ Login User
export const loginUser = async (credentials) => {
  try {
    const res = await axiosInstance.post(`${USER_API_URL}/login`, credentials);
    return res.data;
  } catch (error) {
    console.error("🛑 Login API Error:", error.response?.data || error.message);
    throw error.response?.data?.message || "Login failed";
  }
};

// ✅ Fetch All Users (Admin)
export const fetchUsers = async (token) => {
  try {
    const response = await axiosInstance.get(USER_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error.response?.data?.message || "Failed to fetch users";
  }
};

// ✅ Fetch User by ID
export const fetchUserById = async (userId, token) => {
  try {
    const response = await axiosInstance.get(`${USER_API_URL}/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error.response?.data?.message || "Failed to fetch user";
  }
};

// ✅ Contact Form (uses fetch, not axios)
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL.replace('/api', '')}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

// ✅ Employee Login
export const loginEmployee = async ({ email, password }) => {
  try {
    const res = await axiosInstance.post(`${EMPLOYEE_API_URL}/login`, { email, password });
    return res.data;
  } catch (error) {
    console.error("🛑 Employee Login API Error:", error.response?.data || error.message);
    throw error.response?.data?.msg || "Employee login failed";
  }
};

// ✅ Employee Register (optional)
export const registerEmployee = async (employeeData) => {
  try {
    const res = await axiosInstance.post(`${EMPLOYEE_API_URL}/register`, employeeData);
    return res.data;
  } catch (error) {
    console.error("🛑 Employee Register API Error:", error.response?.data || error.message);
    throw error.response?.data?.msg || "Employee signup failed";
  }
};
// ✅ Resend Verification Email
export const resendVerificationEmail = async (email) => {
  try {
    const res = await axiosInstance.post(`${USER_API_URL}/resend-verification`, { email });
    return res.data;
  } catch (error) {
    console.error("🛑 Resend Verification Error:", error.response?.data || error.message);
    throw error.response?.data?.msg || "Failed to resend verification email";
  }
};
