import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  auth,
  googleProvider,
  microsoftProvider,
  appleProvider,
} from "./firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const isFormValid = email.trim() !== "" && password.trim() !== "" && agreed;

  const handleContinue = async () => {
    if (!isFormValid) return;
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/dashboard");
      } else if (err.code === "auth/invalid-email") {
        alert("❌ Invalid email format!");
      } else if (err.code === "auth/wrong-password") {
        alert("❌ Wrong password!");
      } else {
        console.error(err);
        alert(`❌ ${err.message}`);
      }
    }
    setLoading(false);
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("⚠️ Please enter your email to reset password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("📩 Password reset email sent! Check your inbox.");
    } catch (err) {
      console.error(err);
      alert(`❌ ${err.message}`);
    }
  };

  const handleSocialLogin = async (provider) => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(`❌ ${err.message}`);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#120136] via-[#6b00b6] to-[#ff00ff] animate-gradient bg-[length:400%_400%] text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)] border border-white/20 text-center transform transition duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
      >
        <h1 className="text-5xl font-extrabold mb-3 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-blue-400 animate-pulse">
          Bunchhh
        </h1>
        <p className="text-gray-200 text-sm mb-8">
          Log in to create, edit, and explore stunning AI-powered talking videos.
        </p>

        {/* Email Input */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 rounded-md bg-white/10 border border-white/30 text-white text-sm mb-5 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 placeholder-gray-300 outline-none transition-all duration-300"
        />

        {/* Password Input */}
        <div className="relative mb-3">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 rounded-md bg-white/10 border border-white/30 text-white text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 placeholder-gray-300 outline-none transition-all duration-300 pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-300 hover:text-white"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.96 9.96 0 012.249-3.592M6.343 6.343A9.953 9.953 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.953 9.953 0 01-1.602 2.592M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3l18 18"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Forgot Password */}
        <p
          onClick={handleForgotPassword}
          className="text-sm text-pink-300 mb-6 cursor-pointer hover:underline"
        >
          Forgot Password?
        </p>

        {/* Terms Agreement */}
        <label className="flex items-start gap-2 text-left text-xs text-gray-300 mb-6">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 accent-pink-500"
          />
          <span>
            I agree to the{" "}
            <a href="#" className="text-pink-400 hover:underline">
              Terms of Service
            </a>{" "}
            and acknowledge{" "}
            <a href="#" className="text-pink-400 hover:underline">
              Privacy Policy
            </a>
          </span>
        </label>

        {/* Continue Button */}
        <motion.button
          whileHover={isFormValid ? { scale: 1.05 } : {}}
          whileTap={isFormValid ? { scale: 0.95 } : {}}
          disabled={!isFormValid || loading}
          onClick={handleContinue}
          className={`w-full py-3 rounded-md font-semibold transition mb-8 ${
            isFormValid
              ? "bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              : "bg-white/10 text-gray-400 cursor-not-allowed"
          }`}
        >
          {loading ? "Processing..." : "Continue"}
        </motion.button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-gray-300 text-xs">or</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSocialLogin(googleProvider)}
            className="w-full flex items-center justify-center gap-3 p-3 rounded-md bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            <img src="/icons/Google.svg" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-medium">Continue with Google</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSocialLogin(microsoftProvider)}
            className="w-full flex items-center justify-center gap-3 p-3 rounded-md bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            <img src="/icons/Microsoft.svg" alt="Microsoft" className="w-5 h-5" />
            <span className="text-sm font-medium">Continue with Microsoft</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSocialLogin(appleProvider)}
            className="w-full flex items-center justify-center gap-3 p-3 rounded-md bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            <img src="/icons/Apple.svg" alt="Apple" className="w-5 h-5" />
            <span className="text-sm font-medium">Continue with Apple</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
