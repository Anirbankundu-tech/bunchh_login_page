import React from "react";
import { motion } from "framer-motion";
import { auth } from "../components/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to logout: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-lg p-8 bg-neutral-950 rounded-2xl shadow-2xl border border-gray-800 text-center"
      >
        <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Welcome to Your Dashboard 🎉
        </h1>

        {user ? (
          <>
            <p className="text-gray-400 mb-6">
              Logged in as <span className="font-semibold">{user.email}</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="w-full p-3 rounded-xl font-semibold bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-red-500/30 transition"
            >
              Logout
            </motion.button>
          </>
        ) : (
          <p className="text-gray-400">No user information available.</p>
        )}
      </motion.div>
    </div>
  );
}
