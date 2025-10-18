import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SubscriptionPage() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Free Tier",
      price: "₹0",
      duration: "One-time signup",
      details: [
        "300 credits on signup (~30–60 minutes processing)",
        "No storage limits up to 5GB",
        "Perfect for new users to explore",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Basic Plan",
      price: "₹199",
      duration: "/month",
      details: [
        "Up to 60 minutes processing per month",
        "10GB secure storage",
        "Covers base cost +50% margin",
        "Ideal for small creators",
      ],
      color: "from-pink-500 to-indigo-500",
    },
    {
      name: "Standard Plan",
      price: "₹499",
      duration: "/month",
      details: [
        "Up to 300 minutes processing per month",
        "50GB storage capacity",
        "2× markup with 50% cost buffer",
        "Designed for content creators",
      ],
      highlight: true,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Premium Plan",
      price: "₹999",
      duration: "/month",
      details: [
        "Unlimited processing time",
        "200GB premium storage",
        "Priority video processing",
        "Extra features: custom shorts, insights",
      ],
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a15] via-[#0d1124] to-[#111936] text-gray-100 font-inter">
      {/* ===== Header ===== */}
      <header className="w-full bg-black/40 backdrop-blur-md border-b border-white/10 fixed top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1
            onClick={() => navigate("/")}
            className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            Bunchhh
          </h1>
          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-lg text-white font-semibold hover:scale-105 transition"
          >
            Login
          </button>
        </div>
      </header>

      {/* ===== Subscription Section ===== */}
      <section className="pt-32 pb-24 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Choose Your Perfect Plan
        </motion.h2>
        <p className="text-gray-400 text-lg mb-16">
          Scalable pricing for creators, teams, and businesses 🚀
        </p>

        {/* ===== Pricing Cards ===== */}
        <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`relative p-8 rounded-2xl border ${
                plan.highlight
                  ? "border-pink-500 shadow-[0_0_35px_-5px_rgba(236,72,153,0.4)]"
                  : "border-gray-700"
              } bg-[#14172b]/80 backdrop-blur-md transition duration-300`}
            >
              {/* Title */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

              {/* Price */}
              <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                {plan.price}
              </div>
              <p className="text-gray-400 mb-6">{plan.duration}</p>

              {/* Features */}
              <ul className="text-gray-300 text-sm space-y-2 mb-8">
                {plan.details.map((detail, j) => (
                  <li key={j}>• {detail}</li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={() => navigate("/signup")}
                className={`w-full py-3 rounded-lg font-semibold text-lg shadow-lg transition-all
                  ${
                    plan.highlight
                      ? "bg-gradient-to-r from-pink-500 to-indigo-500 text-white hover:opacity-90"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
                  }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-6 text-center text-gray-500 text-sm bg-black/40 border-t border-white/10">
        © {new Date().getFullYear()}{" "}
        <span className="text-purple-400 font-semibold">Bunchhh</span>. All
        rights reserved.
      </footer>
    </div>
  );
}
