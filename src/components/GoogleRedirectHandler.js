import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance";
import { useAuth } from "../components/AuthContext";

const GoogleRedirectHandler = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const needsPassword = urlParams.get("needsPassword") === "true";

    if (token) {
      localStorage.setItem("token", token); // ✅ store the token
    }

    const fetchGoogleUser = async () => {
      try {
        const res = await axios.get("/users/me", { withCredentials: true });
        const user = res.data;
        setUser(user);

        // ✅ Force redirect to /set-password if flagged
        if (needsPassword || user.passwordNotSet) {
          navigate("/set-password");
        } else {
          navigate("/dashboard");
        }
      } catch (err) {
        console.error("❌ Google login failed:", err?.response?.data || err.message);
        navigate("/user-login");
      }
    };

    fetchGoogleUser();
  }, [navigate, setUser]);

  return <div className="text-center mt-10">🔁 Logging you in with Google...</div>;
};

export default GoogleRedirectHandler;
