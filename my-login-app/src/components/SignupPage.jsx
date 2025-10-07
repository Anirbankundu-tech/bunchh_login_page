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
      // ✅ Backend API call
      const res = await axios.post("http://localhost:5000/api/signup", form);

      if (res.status === 200 || res.status === 201) {
        setMessage("✅ Account created successfully!");
        console.log("Server response:", res.data);
        setTimeout(() => navigate("/login"), 1500);
      } else {
        throw new Error("Unexpected server response");
      }
    } catch (err) {
      console.error("Signup error:", err);
      const errorMsg =
        err.response?.data?.message || err.message || "Signup failed!";
      setMessage("❌ " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700">
      <div className="w-full max-w-md backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full bg-white/20 border border-white/30 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none placeholder-gray-300"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder="Enter username"
              className="w-full bg-white/20 border border-white/30 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none placeholder-gray-300"
            />
            <p className="text-xs text-gray-300 mt-1">
              Use only letters, numbers, and underscores.
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
              className="w-full bg-white/20 border border-white/30 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none placeholder-gray-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
              className="w-full bg-white/20 border border-white/30 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none placeholder-gray-300"
            />
            <p className="text-xs text-gray-300 mt-1">
              Must be at least 8 characters long and include a mix of letters, numbers, and symbols.
            </p>
          </div>

          {/* Message */}
          {message && (
            <p
              className={`text-sm text-center mt-2 ${
                message.startsWith("✅") ? "text-green-300" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-300 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-300 hover:text-white underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
