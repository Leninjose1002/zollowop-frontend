import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import {
  FaBox,
  FaPhone,
  FaSignOutAlt,
  FaUser,
  FaStar,
} from 'react-icons/fa';
import DashboardReferralSection from '../components/DashboardReferralSection';

const DashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
  };

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-xl font-medium transition-all duration-200 
     ${isActive ? 'bg-white text-blue-600 shadow-md' : 'text-white hover:bg-white/20 hover:text-yellow-300'}`;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-blue-700 to-blue-500 text-white shadow-2xl flex flex-col justify-between rounded-r-3xl">
        <div>
          <div className="p-6 border-b border-white/20 flex items-center gap-3 bg-blue-800 rounded-tr-3xl">
            <img
              src="https://ui-avatars.com/api/?name=Pragati&background=ffffff&color=1d4ed8"
              alt="User Avatar"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <h2 className="text-xl font-bold">Hi, Pragati</h2>
          </div>

          <nav className="p-5 space-y-3 text-base">
            <NavLink to="/dashboard" className={navLinkClass}>
              <span className="bg-yellow-400 p-2 rounded-full text-blue-800"><FaUser /></span>
              Profile
            </NavLink>
            <NavLink to="/dashboard/orders" className={navLinkClass}>
              <span className="bg-green-300 p-2 rounded-full text-green-800"><FaBox /></span>
              Order History
            </NavLink>
            <NavLink to="/dashboard/my-reviews" className={navLinkClass}>
              <span className="bg-blue-300 p-2 rounded-full text-blue-800"><FaStar /></span>
              My Reviews
            </NavLink>
            <NavLink to="/dashboard/contact" className={navLinkClass}>
              <span className="bg-yellow-300 p-2 rounded-full text-yellow-800"><FaPhone /></span>
              Contact Us
            </NavLink>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 text-red-200 hover:text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
            >
              <span className="bg-red-300 p-2 rounded-full text-red-800"><FaSignOutAlt /></span>
              Logout
            </button>
          </nav>
        </div>

        {/* Bottom referral section */}
        <div className="bg-white/10 p-4">
          <DashboardReferralSection />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gradient-to-br from-white via-yellow-50 to-green-50">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="mb-6 border-b pb-4">
            <h1 className="text-3xl font-bold text-blue-700">Your Profile</h1>
            <p className="text-sm text-gray-500 mt-1">Manage everything in one place.</p>
          </div>

          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
