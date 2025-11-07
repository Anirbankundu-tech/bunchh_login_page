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
        "300 credits on signup (~30–60 min processing)",
        "Up to 5GB cloud storage",
        "Perfect for testing features",
      ],
    },
    {
      name: "Basic Plan",
      price: "₹199",
      duration: "/month",
      details: [
        "✓ 60 minutes processing / month",
        "✓ 10GB secure storage",
        "Great for casual creators",
      ],
    },
    {
      name: "Standard Plan",
      price: "₹499",
      duration: "/month",
      highlight: true,
      details: [
        "✓ 300 minutes processing / month",
        "✓ 50GB cloud storage",
        "Best for regular content creators",
      ],
    },
    {
      name: "Premium Plan",
      price: "₹999",
      duration: "/month",
      details: [
        "Unlimited processing time",
        "200GB premium storage",
        "Priority processing + Pro tools",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">

      {/* Header */}
      <header className="w-full fixed top-0 z-40 bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1
            onClick={() => navigate("/")}
            className="cursor-pointer text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Bunchhh
          </h1>

          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-full border border-gray-400 hover:bg-gray-100 transition font-medium"
          >
            Login
          </button>
        </div>
      </header>

      {/* Subscription Section */}
      <section className="pt-32 pb-24 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Choose Your Perfect Plan
        </motion.h2>

        <p className="text-gray-600 text-lg mb-14">
          Simple and transparent pricing — no hidden fees 🚀
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`rounded-2xl p-8 border shadow-lg transition-all bg-white/80 backdrop-blur-lg ${
                plan.highlight
                  ? "border-purple-500 shadow-purple-300/50"
                  : "border-gray-200"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>

              <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                {plan.price}
              </div>

              <p className="text-gray-500 mb-6">{plan.duration}</p>

              <ul className="text-gray-700 text-sm space-y-2 mb-8">
                {plan.details.map((detail, j) => (
                  <li key={j}>• {detail}</li>
                ))}
              </ul>

              <button
                onClick={() => navigate("/signup")}
                className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow hover:opacity-90 transition"
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-200">
        © {new Date().getFullYear()} <span className="font-semibold">Bunchhh</span>. All rights reserved.
      </footer>
    </div>
  );
}
