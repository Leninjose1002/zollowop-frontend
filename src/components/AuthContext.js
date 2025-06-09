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

  // ✅ Logout
  const logout = useCallback(async () => {
    try {
      await axios.post("/users/logout");
    } catch (err) {
      console.error("Logout error:", err);
    }

    localStorage.removeItem("token"); // ✅ remove token
    setUser(null);
    setIsAuthenticated(false);

    navigate(user?.isAdmin ? "/admin-login" : "/user-login");
  }, [navigate, user]);

  // ✅ Login
  const login = async (email, password) => {
    try {
      const res = await axios.post("/users/login", { email, password });

      // ✅ Save token to localStorage
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      // ✅ Then fetch user details
      const profile = await axios.get("/users/me", {
        headers: {
          Authorization: `Bearer ${res.data.token}`,
        },
      });

      setUser(profile.data);
      setIsAuthenticated(true);
      return profile.data;
    } catch (err) {
      throw err;
    }
  };

  // ✅ Auto fetch user if token exists
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
        setIsAuthenticated(true);
      } catch (err) {
        console.error("Auto login failed:", err.response?.data || err.message);
        localStorage.removeItem("token");
        setUser(null);
        setIsAuthenticated(false);
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
