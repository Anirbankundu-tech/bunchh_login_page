import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const isFormValid = email.trim() !== "" && agreed;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md p-8 bg-neutral-950 rounded-2xl shadow-2xl border border-gray-800 text-center"
      >
        {/* Logo / Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Bunchhh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 text-sm mb-8"
        >
          Generate and edit talking videos with AI.
        </motion.p>

        {/* Email input */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 rounded-xl bg-neutral-900 border border-gray-700 text-white text-sm mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />

        {/* Checkbox */}
        <motion.label
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-start gap-2 text-left text-xs text-gray-400 mb-6"
        >
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
        </motion.label>

        {/* Continue button */}
        <motion.button
          whileHover={isFormValid ? { scale: 1.05 } : {}}
          whileTap={isFormValid ? { scale: 0.95 } : {}}
          transition={{ type: "spring", stiffness: 300 }}
          disabled={!isFormValid}
          className={`w-full p-3 rounded-xl font-semibold transition mb-8
            ${
              isFormValid
                ? "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30"
                : "bg-neutral-800 text-gray-500 cursor-not-allowed"
            }`}
        >
          Continue
        </motion.button>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="flex-1 h-px bg-gray-800" />
          <span className="text-gray-500 text-xs">or</span>
          <div className="flex-1 h-px bg-gray-800" />
        </motion.div>

        {/* Social login buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="space-y-3"
        >
          {/* Google */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="w-full flex items-center justify-center gap-3 p-3 rounded-xl bg-neutral-900 border border-gray-800 hover:bg-neutral-800 transition"
          >
            <img src="/icons/Google.svg" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-medium">Continue with Google</span>
          </motion.button>

          {/* Microsoft */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="w-full flex items-center justify-center gap-3 p-3 rounded-xl bg-neutral-900 border border-gray-800 hover:bg-neutral-800 transition"
          >
            <img src="/icons/Microsoft.svg" alt="Microsoft" className="w-5 h-5" />
            <span className="text-sm font-medium">Continue with Microsoft</span>
          </motion.button>

          {/* Apple */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="w-full flex items-center justify-center gap-3 p-3 rounded-xl bg-neutral-900 border border-gray-800 hover:bg-neutral-800 transition"
          >
            <img src="/icons/Apple.svg" alt="Apple" className="w-5 h-5" />
            <span className="text-sm font-medium">Continue with Apple</span>
          </motion.button>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-sm text-gray-500 mt-8"
        >
          Continue another way
        </motion.p>
      </motion.div>
    </div>
  );
}
