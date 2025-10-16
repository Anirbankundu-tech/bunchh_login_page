import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen text-gray-100 bg-gradient-to-br from-[#0a0a15] via-[#0d1124] to-[#111936] font-inter">
      {/* ===== Navigation Bar ===== */}
      <header className="fixed w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.h1
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Bunchhh
          </motion.h1>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
            <a href="#home" className="hover:text-indigo-400 transition">Home</a>
            <a href="#features" className="hover:text-indigo-400 transition">Features</a>
            <a href="#tutorial" className="hover:text-indigo-400 transition">Tutorial</a>
            <a href="#dashboard" className="hover:text-indigo-400 transition">Dashboard</a>
            <a href="#subscribe" className="hover:text-indigo-400 transition">Subscribe</a>
          </nav>

          {/* Auth Buttons */}
          <div className="space-x-4">
            <Link
              to="/login"
              className="text-indigo-400 font-semibold hover:underline"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section
        id="home"
        className="pt-32 pb-24 text-center"
      >
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome to Bunchhh
        </motion.h1>
        <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
          Generate and edit talking videos with AI. <br />
          Bunchhh transforms your long-form videos into engaging short clips—automatically.
        </p>
        <div className="space-x-4">
          <Link
            to="/signup"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="border border-indigo-400 text-indigo-300 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-400/10 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section id="features" className="py-20 px-8 md:px-20 text-center bg-[#0e1324]/60 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8 text-indigo-400">
          What Makes Bunchhh Powerful
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-[#151a30] rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2 text-indigo-300">🎬 Upload or Import Videos</h3>
            <p className="text-gray-400">
              Upload from your device or import from YouTube to create AI-powered clips effortlessly.
            </p>
          </div>
          <div className="p-6 bg-[#151a30] rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2 text-indigo-300">⚙️ Smart AI Clipping</h3>
            <p className="text-gray-400">
              Our intelligent engine detects highlights, key emotions, and moments to auto-generate short clips.
            </p>
          </div>
          <div className="p-6 bg-[#151a30] rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2 text-indigo-300">📊 Manage on Dashboard</h3>
            <p className="text-gray-400">
              Edit, preview, and export all your clips from an intuitive and modern Bunchhh dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Tutorial Section ===== */}
      <section id="tutorial" className="py-16 text-center">
        <h2 className="text-3xl font-bold text-indigo-400 mb-6">
          Watch How It Works
        </h2>
        <div className="flex justify-center">
          <iframe
            width="700"
            height="400"
            className="rounded-xl shadow-xl border border-indigo-800"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Bunchhh Tutorial Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* ===== Dashboard Preview Section ===== */}
      <section id="dashboard" className="py-20 text-center bg-[#0e1324]/60 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-indigo-400 mb-8">
          Explore the Bunchhh Dashboard
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <img
            src="/assets/dashboard1.png"
            alt="Dashboard Screenshot 1"
            className="w-80 rounded-xl shadow-lg border border-indigo-900 hover:scale-105 transition"
          />
          <img
            src="/assets/dashboard2.png"
            alt="Dashboard Screenshot 2"
            className="w-80 rounded-xl shadow-lg border border-indigo-900 hover:scale-105 transition"
          />
        </div>
      </section>

      {/* ===== Subscription Section ===== */}
      <section id="subscribe" className="py-20 text-center bg-gradient-to-r from-indigo-700 to-purple-700">
        <h2 className="text-4xl font-bold mb-4 text-white">Upgrade to Bunchhh Premium</h2>
        <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
          Unlock advanced AI tools, unlimited exports, and premium templates for creators and agencies.
        </p>
        <Link
          to="/subscription"
          className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Subscribe Now
        </Link>
      </section>

      {/* ===== Footer ===== */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-black/40 border-t border-white/10">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-indigo-400">Bunchhh</span>. All rights reserved.
      </footer>
    </div>
  );
}
