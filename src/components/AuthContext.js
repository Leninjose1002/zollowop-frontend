import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance"; // includes withCredentials: true

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Logout function
  const logout = useCallback(async () => {
  try {
    await axios.post("/users/logout");
  } catch (err) {
    console.error("Logout error:", err);
  }

  localStorage.removeItem("user");
  const isAdmin = user?.isAdmin;

  setUser(null);
  setIsAuthenticated(false);

  // 👇 Redirect based on role
  if (isAdmin) {
    navigate("/admin-login");
  } else {
    navigate("/user-login");
  }
}, [navigate, user]);


  // ✅ Fetch current user on initial load
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/users/me");
        setUser(res.data); // Ensure isAdmin is present in res.data
        setIsAuthenticated(true);
      } catch (err) {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // ✅ Login function with correct user return
  const login = async (email, password) => {
    try {
      await axios.post("/users/login", { email, password });
      const res = await axios.get("/users/me"); // Get full user details
      setUser(res.data);
      setIsAuthenticated(true);
      return res.data; // ✅ FIXED: return the actual user object (not Axios response)
    } catch (err) {
      throw err;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, loading, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
