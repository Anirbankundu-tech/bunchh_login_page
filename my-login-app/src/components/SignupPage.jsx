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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#120136] via-[#6b00b6] to-[#ff00ff] animate-gradient bg-[length:400%_400%]">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)] p-8 text-white transform transition duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
        <h2 className="text-4xl font-extrabold text-center mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-blue-400 animate-pulse">
          Join <span className="text-white">Bunchhh</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full bg-white/10 border border-white/30 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none placeholder-gray-300 transition-all duration-300"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder="Enter username"
              className="w-full bg-white/10 border border-white/30 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none placeholder-gray-300 transition-all duration-300"
            />
            <p className="text-xs text-gray-300 mt-1">
              Use only letters, numbers, and underscores.
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
              className="w-full bg-white/10 border border-white/30 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none placeholder-gray-300 transition-all duration-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
              className="w-full bg-white/10 border border-white/30 text-white rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none placeholder-gray-300 transition-all duration-300"
            />
            <p className="text-xs text-gray-300 mt-1">
              Must be at least 8 characters long and include a mix of letters,
              numbers, and symbols.
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
            className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 text-white py-2 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-300 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-300 hover:text-white underline transition-colors duration-200"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
