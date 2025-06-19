import React, { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import { QRCodeCanvas } from "qrcode.react";

const DashboardReferralSection = () => {
  const [user, setUser] = useState(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("api/users/me");
        console.log("👤 Referral User:", res.data);
        setUser(res.data);
      } catch (err) {
        console.error("❌ Failed to load user data:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleCopy = () => {
    if (user?.referralCode) {
      navigator.clipboard.writeText(user.referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const referralLink = `https://yourwebsite.com/register?ref=${user?.referralCode}`;

  if (loading) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-md mx-auto">
        <p className="text-gray-500">Loading referral info...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-md mx-auto">
        <p className="text-red-500">Failed to load user info.</p>
      </div>
    );
  }

  const hasReferral = user?.referralCode && user.referralCode.trim() !== "";

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-md mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Refer & Earn</h2>

      <p className="text-gray-600 mb-3">
        Share your referral code and earn rewards when friends join!
      </p>

      <div className="bg-gray-100 border rounded-md p-2 flex items-center justify-between mb-3">
        <span className="font-mono text-sm text-gray-800">
          {hasReferral ? user.referralCode : "Not Available"}
        </span>
        <button
          onClick={handleCopy}
          className="text-sm text-blue-600 hover:underline"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {hasReferral && (
        <>
          <a
            href={`https://wa.me/?text=Join me on ZollowUp and get great services! Use my referral code ${user.referralCode} 👉 ${referralLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            📤 Share via WhatsApp
          </a>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Or scan this QR code:</h3>
            <QRCodeCanvas value={referralLink} size={128} />
          </div>
        </>
      )}

      <p className="mt-4 text-sm text-gray-700">
        🏆 Total Referrals:{" "}
        <span className="font-semibold">{user.referralCount ?? 0}</span>
      </p>
    </div>
  );
};

export default DashboardReferralSection;
