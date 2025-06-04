import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext"; // Make sure path is correct

const AdminSidebar = () => {
  const { logout } = useAuth(); // assumes you have a logout method in AuthContext
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clear token and user
    navigate("/admin-login"); // redirect to login
  };

  return (
    <div className="w-64 bg-gray-900 text-white p-6 min-h-screen flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            📊 Dashboard
          </NavLink>
          <NavLink
            to="/admin/chat"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            💬 Chat Panel
          </NavLink>
          <NavLink
            to="/admin/bookings"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            📋 Bookings
          </NavLink>
          <NavLink
            to="/admin/add-maids"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            🧹 Add-Maids
          </NavLink>
          <NavLink
            to="/admin/maids-data"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            🧹 Maids-data
          </NavLink>
          <NavLink
            to="/admin/nurse-bookings"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            🧑 Nurses-booking data 
          </NavLink>
          <NavLink
            to="/admin/services"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            🛠 Services
          </NavLink>
        </nav>
      </div>

      {/* 🔒 Logout Button */}
     <button
  onClick={handleLogout}
  className="mt-10 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-sm"
>
  🚪 Logout
</button>
    </div>
  );
};

export default AdminSidebar;
