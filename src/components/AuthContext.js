import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Login
  const login = async (email, password) => {
    try {
      await axios.post(
        "/api/users/login",
        { email, password },
        { withCredentials: true } // 🔥 send cookies
      );

      const res = await axios.get("/api/users/me", {
        withCredentials: true, // 🔥 get user via cookie
      });

      setUser(res.data);
      setIsAuthenticated(true);

      // ✅ Save userId in localStorage
      localStorage.setItem("userId", res.data._id);

      return res.data;
    } catch (err) {
      throw err;
    }
  };

  // ✅ Logout
  const logout = useCallback(async () => {
    try {
      await axios.post("/api/users/logout", {}, { withCredentials: true });
    } catch (err) {
      console.error("Logout error:", err);
    }

    setUser(null);
    setIsAuthenticated(false);

    // ✅ Remove userId from localStorage
    localStorage.removeItem("userId");

    navigate(user?.isAdmin ? "/admin-login" : "/user-login");
  }, [navigate, user]);

  // ✅ Auto-fetch user from cookie
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/users/me", {
          withCredentials: true,
        });

        setUser(res.data);
        setIsAuthenticated(true);

        // ✅ Store userId if login was via cookie
        localStorage.setItem("userId", res.data._id);
      } catch (err) {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("userId"); // remove stale ID
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, loading, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
