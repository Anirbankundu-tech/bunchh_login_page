import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#0c0c24] text-white font-sans">
      {/* ===== Navbar ===== */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Bunchhh<span className="text-gray-400">.</span>
          </h1>

          <div className="space-x-8 hidden md:flex">
            <button onClick={() => navigate("/")} className="hover:text-purple-400 transition">Home</button>
            <button onClick={() => navigate("/login")} className="hover:text-purple-400 transition">Login</button>
            <button onClick={() => navigate("/signup")} className="hover:text-purple-400 transition">Sign Up</button>
            <button
              onClick={() => navigate("/subscription")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 rounded-full shadow-lg hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-8 pt-32">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
        >
          Create. Clip. Inspire.
        </motion.h1>

        <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl">
          Transform your long-form content into <span className="text-purple-400 font-semibold">AI-powered short videos</span>.
          <br /> Create stunning reels, clips, and highlights in just a few clicks.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate("/signup")}
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/subscription")}
            className="border border-purple-500 text-purple-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600/10 transition"
          >
            Subscribe
          </button>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="py-20 px-8 bg-[#0d0d20]/80 backdrop-blur-lg text-center">
        <h2 className="text-4xl font-bold mb-12 text-purple-400">
          Why You’ll Love Bunchhh 💜
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "⚡ Smart AI Editing",
              desc: "Our AI detects highlights and emotions to generate high-performing clips automatically.",
            },
            {
              title: "🎚️ Full Creative Control",
              desc: "Adjust clip length, pacing, and focus points to match your unique storytelling style.",
            },
            {
              title: "📈 Dashboard Insights",
              desc: "Analyze performance metrics and manage your content seamlessly with real-time analytics.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-white/10 rounded-2xl border border-gray-700 shadow-xl hover:shadow-purple-700/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-3 text-purple-400">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Tutorial Section ===== */}
      <section className="py-24 text-center bg-[#101024]/70 backdrop-blur-md">
        <h2 className="text-4xl font-bold mb-8 text-pink-400">
          Watch Bunchhh in Action 🎬
        </h2>
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden border border-purple-600 shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] w-[90%] md:w-[70%]">
            <iframe
              className="w-full h-[400px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Bunchhh Tutorial"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===== Dashboard Preview Section ===== */}
      <section className="py-24 text-center bg-gradient-to-t from-black via-[#0a0a1a] to-[#0c0c24]">
        <h2 className="text-4xl font-bold text-purple-400 mb-10">Dashboard Preview</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {[1, 2, 3].map((num) => (
            <motion.img
              key={num}
              src={`/assets/dashboard${num}.png`}
              alt={`Dashboard ${num}`}
              className="w-80 h-52 object-cover rounded-xl border border-gray-700 shadow-lg hover:scale-105 transition"
              whileHover={{ scale: 1.08 }}
            />
          ))}
        </div>
      </section>

      {/* ===== Subscription CTA Section ===== */}
      <section className="py-24 text-center bg-gradient-to-r from-purple-700 via-pink-600 to-red-600">
        <h2 className="text-5xl font-extrabold mb-6 text-white">Upgrade to Bunchhh Premium 💎</h2>
        <p className="text-lg text-gray-100 mb-10 max-w-2xl mx-auto">
          Unlock advanced AI tools, faster exports, and exclusive templates to supercharge your content creation.
        </p>
        <button
          onClick={() => navigate("/subscription")}
          className="bg-white text-purple-700 px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-200 transition transform hover:scale-105"
        >
          Subscribe Now
        </button>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800 bg-black/40">
        © {new Date().getFullYear()}{" "}
        <span className="text-purple-400 font-semibold">Bunchhh</span> — All Rights Reserved.
      </footer>
    </div>
  );
}
