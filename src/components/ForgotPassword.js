// import { useState } from 'react';
// import axios from '../api/axiosInstance';
// import { useNavigate } from 'react-router-dom';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setError('');
//     setLoading(true);

//     try {
//       const res = await axios.post('/users/forgot-password', { email });
//       setMessage(res.data.msg || 'Reset link sent to your email.');
//     } catch (err) {
//       const msg = err?.response?.data?.msg || 'Failed to send reset link.';
//       setError(msg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-4">Forgot Password</h2>
//         <p className="text-sm text-gray-600 text-center mb-6">
//           Enter your email address and we’ll send you a password reset link.
//         </p>

//         {message && <p className="text-green-600 text-sm mb-4 text-center">{message}</p>}
//         {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full border p-2 rounded"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
//           >
//             {loading ? 'Sending...' : 'Send Reset Link'}
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <button
//             onClick={() => navigate('/')}
//             className="text-sm text-blue-600 hover:underline"
//           >
//             Back to Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import { useState } from 'react';
import axios from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('/users/forgot-password', { email });
      setMessage(res.data.msg || '✅ Reset link sent to your email! Check your inbox.');
      setEmail('');
      setTimeout(() => navigate('/'), 3000);
    } catch (err) {
      const msg = err?.response?.data?.msg || 'Failed to send reset link.';
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
            <Mail size={28} className="text-primary-600" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Forgot Password?
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your email address and we'll send you a password reset link.
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
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-primary-500 focus:bg-primary-50 transition placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
          >
            {loading ? 'Sending...' : (
              <>
                Send Reset Link
                <ArrowRight size={18} />
              </>
            )}
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
          🔒 For your security, reset links expire in 15 minutes
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;