import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock } from 'lucide-react';
import axios from '../api/axiosInstance';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      await axios.post(`/users/reset-password/${token}`, { password });
      setMessage('✅ Password reset successfully! Redirecting to home...');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      const msg = err?.response?.data?.msg || 'Failed to reset password';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-primary-500">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-primary-100 p-3 rounded-full">
            <Lock size={28} className="text-primary-600" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Reset Your Password
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your new password below. Make it strong and secure.
        </p>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        {/* Success Message */}
        {message && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4 text-sm">
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* New Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder="Enter your new password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-primary-500 focus:bg-primary-50 transition pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">At least 6 characters</p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-primary-500 focus:bg-primary-50 transition pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {loading ? 'Resetting Password...' : 'Reset Password'}
          </button>
        </form>

        {/* Back Link */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium transition"
          >
            ← Back to Home
          </button>
        </div>

        {/* Security Note */}
        <p className="text-xs text-gray-500 text-center mt-6 border-t pt-4">
          🔒 This link expires in 15 minutes for security
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;