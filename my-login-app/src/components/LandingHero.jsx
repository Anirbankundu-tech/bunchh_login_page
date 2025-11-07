import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingHero() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between py-6 px-6 lg:px-20">
        
        {/* Logo */}
        <div
          className="cursor-pointer flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
              Bunchhh
            </span>
          </h1>
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex items-center space-x-8 bg-[#0c132b] text-white py-3 px-6 rounded-full shadow-lg ml-8">
          <button onClick={() => navigate("/demo")} className="hover:opacity-80">
            Demo
          </button>

          {/* ✅ Pricing now redirects to Subscription page */}
          <button onClick={() => navigate("/subscription")} className="hover:opacity-80">
            Pricing
          </button>

          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:opacity-80">
              Resources <ChevronDown size={18} />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:flex flex-col bg-[#1e253d] text-white w-48 mt-3 rounded-lg shadow-lg p-4 space-y-2 z-50">
              <button onClick={() => navigate("/docs")} className="hover:opacity-80 text-left">Documentation</button>
              <button onClick={() => navigate("/blog")} className="hover:opacity-80 text-left">Blog</button>
              <button onClick={() => navigate("/tutorials")} className="hover:opacity-80 text-left">Tutorials</button>
              <button onClick={() => navigate("/faq")} className="hover:opacity-80 text-left">FAQ</button>
              <button onClick={() => navigate("/screenshots")} className="hover:opacity-80 text-left">Screenshots</button>
            </div>
          </div>

          <button onClick={() => navigate("/contact")} className="hover:opacity-80">
            Contact Us
          </button>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-full border border-gray-400 hover:bg-gray-100 transition text-gray-700 font-medium"
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-semibold shadow"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto px-6 pt-10 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
        >
          ⚡ AI-Powered Clip Generation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Turn Long YouTube Videos
          <br /> into Viral Shorts in Seconds
        </motion.h1>

        <p className="text-gray-600 mt-5 text-lg">
          Bunchhh helps creators instantly generate short, high-quality clips from any YouTube video using AI — ready to share, download, or remix.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-3 text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition font-semibold shadow-lg"
          >
            Try Bunchhh Free
          </button>

          <button
            onClick={() => navigate("/demo")}
            className="px-6 py-3 border rounded-full text-gray-800 hover:bg-gray-100 transition font-medium flex items-center gap-2"
          >
            ▶ View Demo
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          ✨ Trusted by 2K+ creators and developers globally
        </p>
      </div>

    </div>
  );
}
