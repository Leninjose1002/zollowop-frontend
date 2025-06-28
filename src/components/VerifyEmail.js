import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { verifyEmailToken } from "../api";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let verifiedOnce = false;

    const verify = async () => {
      if (!token) {
        setStatus("error");
        setTimeout(() => navigate("/user-login?verified=error"), 2000);
        return;
      }

      try {
        await verifyEmailToken(token);

        if (!verifiedOnce) {
          verifiedOnce = true;
          setStatus("success");
          setTimeout(() => navigate("/user-login?verified=true"), 2000);
        }
      } catch (err) {
        const message = err?.message?.toLowerCase();

        if (message?.includes("already verified")) {
          setStatus("already");
          setTimeout(() => navigate("/user-login?verified=already"), 2000);
        } else if (message?.includes("expired") || message?.includes("invalid")) {
          setStatus("expired");
          setTimeout(() => navigate("/user-login?verified=expired"), 2000);
        } else {
          setStatus("error");
          setTimeout(() => navigate("/user-login?verified=error"), 2000);
        }
      }
    };

    verify();
  }, [token, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow text-center max-w-md w-full">
        {status === "loading" && (
          <>
            <h2 className="text-xl font-semibold mb-2">Verifying Email...</h2>
            <div className="animate-spin h-6 w-6 border-4 border-blue-400 border-t-transparent rounded-full mx-auto" />
          </>
        )}
        {status === "success" && (
          <h2 className="text-green-600 text-xl font-semibold">✅ Email Verified!</h2>
        )}
        {status === "already" && (
          <h2 className="text-yellow-600 text-xl font-semibold">ℹ️ Email already verified.</h2>
        )}
        {status === "expired" && (
          <h2 className="text-red-600 text-xl font-semibold">❌ Expired or Invalid Link.</h2>
        )}
        {status === "error" && (
          <h2 className="text-red-600 text-xl font-semibold">⚠️ Something went wrong.</h2>
        )}
        <p className="text-gray-600 mt-2">Redirecting to login...</p>
      </div>
    </div>
  );
};

export default VerifyEmail;
