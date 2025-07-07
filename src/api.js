import axiosInstance from "./api/axiosInstance";

const USER_API_URL = `/users`;
const EMPLOYEE_API_URL = `/employees`;

// ✅ Register User
export const registerUser = async (userData) => {
  try {
    const res = await axiosInstance.post(`${USER_API_URL}/register`, userData);
    return res.data;
  } catch (error) {
    console.error("🛑 Register API Error:", error.response?.data || error.message);
    const msg = error.response?.data?.msg || "Signup failed";
    const customError = new Error(msg);
    customError.response = error.response;
    throw customError;
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

// ✅ Fetch All Users
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

// ✅ Employee Register
export const registerEmployee = async (employeeData) => {
  try {
    const res = await axiosInstance.post(`${EMPLOYEE_API_URL}/register`, employeeData);
    return res.data;
  } catch (error) {
    console.error("🛑 Employee Register API Error:", error.response?.data || error.message);
    throw error.response?.data?.msg || "Employee signup failed";
  }
};

// ✅ Verify Email Token
export const verifyEmailToken = async (token) => {
  try {
    const res = await axiosInstance.get(`${USER_API_URL}/verify-email/${token}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    const message = error?.response?.data?.msg || "Verification failed";
    console.error("🛑 Email Verification API Error:", message);
    throw new Error(message); // ✅ Wrap in Error object
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

// ✅ Contact Form
export const submitContactForm = async (formData) => {
  try {
    const res = await axiosInstance.post(`/contact`, formData);
    return res.data;
  } catch (error) {
    console.error("🛑 Contact Form API Error:", error.response?.data || error.message);
    throw error.response?.data?.message || "Failed to submit contact form";
  }
};

// ✅ Razorpay Order Creation
export const createRazorpayOrder = async (amount) => {
  try {
    const res = await axiosInstance.post(`/payment/create-order`, { amount });
    return res.data;
  } catch (error) {
    console.error("🛑 Razorpay Create Order Error:", error.response?.data || error.message);
    throw error.response?.data?.message || "Failed to create Razorpay order";
  }
};

// ✅ Razorpay Payment Verification
export const verifyRazorpayPayment = async (paymentData) => {
  try {
    const res = await axiosInstance.post(`/payment/verify-payment`, paymentData, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("🛑 Razorpay Payment Verification Error:", error.response?.data || error.message);
    throw error.response?.data?.message || "Payment verification failed";
  }
};

// ✅ Fetch Maids
export const fetchMaids = async (selectedHours) => {
  try {
    const res = await axiosInstance.get(`/maids?selectedHours=${selectedHours}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching maids:", error.response?.data || error.message);
    throw error;
  }
};


// ✅ Job Application Form Submission
export const submitJobApplication = async (formData) => {
  try {
    const res = await axiosInstance.post(`/job-application`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    console.error("🛑 Job Application API Error:", error.response?.data || error.message);
    throw error.response?.data?.message || "Failed to submit job application";
  }
};
