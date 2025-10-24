import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/signup", form);
      if (res.status === 200 || res.status === 201) {
        setMessage("✅ Account created successfully!");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        throw new Error("Unexpected server response");
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || err.message || "Signup failed!";
      setMessage("❌ " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans px-4">
      {/* ===== Signup Card ===== */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
        
        {/* ===== Header Branding ===== */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
              Bunchhh
            </span>
          </h1>
          <p className="text-gray-500 text-sm mt-2">Create your AI-powered account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder="Enter username"
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-200"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use only letters, numbers, and underscores.
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-200"
            />
            <p className="text-xs text-gray-500 mt-1">
              Must be at least 8 characters long and include letters, numbers & symbols.
            </p>
          </div>

          {/* Message */}
          {message && (
            <p
              className={`text-sm text-center mt-2 ${
                message.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          {/* ===== Glowing Sign Up Button ===== */}
          <div className="relative">
            <button
              type="submit"
              disabled={loading}
              className="w-full relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 
              shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <span className="relative z-10">
                {loading ? "Creating Account..." : "Sign Up"}
              </span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-40 blur-xl"></span>
            </button>
          </div>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:text-purple-600 underline transition-colors duration-200"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
