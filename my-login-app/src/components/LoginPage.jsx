import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
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

  const navigate = useNavigate(); // ✅ Initialize navigate

  const isFormValid = email.trim() !== "" && password.trim() !== "" && agreed;

  // Email login/signup
  const handleContinue = async () => {
    if (!isFormValid) return;
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // ✅ Redirect after login
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/dashboard"); // ✅ Redirect after signup
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

  // Forgot password
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

  // Social logins
  const handleSocialLogin = async (provider) => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard"); // ✅ Redirect after social login
    } catch (err) {
      console.error(err);
      alert(`❌ ${err.message}`);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md p-8 bg-neutral-950 rounded-2xl shadow-2xl border border-gray-800 text-center"
      >
        <h1 className="text-5xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Bunchhh
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          Generate and edit talking videos with AI.
        </p>

        {/* Email input */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 rounded-xl bg-neutral-900 border border-gray-700 text-white text-sm mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />

        {/* Password input with show/hide toggle */}
        <div className="relative mb-3">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 rounded-xl bg-neutral-900 border border-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
          >
            {showPassword ? (
              // Eye open icon
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            ) : (
              // Eye closed icon
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.96 9.96 0 012.249-3.592M6.343 6.343A9.953 9.953 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.953 9.953 0 01-1.602 2.592M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M3 3l18 18" />
              </svg>
            )}
          </button>
        </div>

        {/* Forgot password link */}
        <p 
          onClick={handleForgotPassword}
          className="text-sm text-blue-400 mb-6 cursor-pointer hover:underline"
        >
          Forgot Password?
        </p>

        {/* Checkbox */}
        <label className="flex items-start gap-2 text-left text-xs text-gray-400 mb-6">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 accent-blue-500"
          />
          <span>
            I agree to the{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Terms of Service
            </a>{" "}
            and acknowledge Bunchhh'{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>
          </span>
        </label>

        {/* Continue button */}
        <motion.button
          whileHover={isFormValid ? { scale: 1.05 } : {}}
          whileTap={isFormValid ? { scale: 0.95 } : {}}
          disabled={!isFormValid || loading}
          onClick={handleContinue}
          className={`w-full p-3 rounded-xl font-semibold transition mb-8 ${
            isFormValid
              ? "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30"
              : "bg-neutral-800 text-gray-500 cursor-not-allowed"
          }`}
        >
          {loading ? "Processing..." : "Continue"}
        </motion.button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-800" />
          <span className="text-gray-500 text-xs">or</span>
          <div className="flex-1 h-px bg-gray-800" />
        </div>

        {/* Social login buttons */}
        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSocialLogin(googleProvider)}
            className="w-full flex items-center justify-center gap-3 p-3 rounded-xl bg-neutral-900 border border-gray-800 hover:bg-neutral-800 transition"
          >
            <img src="/icons/Google.svg" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-medium">Continue with Google</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSocialLogin(microsoftProvider)}
            className="w-full flex items-center justify-center gap-3 p-3 rounded-xl bg-neutral-900 border border-gray-800 hover:bg-neutral-800 transition"
          >
            <img src="/icons/Microsoft.svg" alt="Microsoft" className="w-5 h-5" />
            <span className="text-sm font-medium">Continue with Microsoft</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSocialLogin(appleProvider)}
            className="w-full flex items-center justify-center gap-3 p-3 rounded-xl bg-neutral-900 border border-gray-800 hover:bg-neutral-800 transition"
          >
            <img src="/icons/Apple.svg" alt="Apple" className="w-5 h-5" />
            <span className="text-sm font-medium">Continue with Apple</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
