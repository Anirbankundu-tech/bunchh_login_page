import React from "react";
import { motion } from "framer-motion";

export default function LandingDashboardPreview() {
  return (
    <div className="w-full flex justify-center items-center py-20 bg-white relative overflow-hidden">

      {/* Light particles background like hero */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.10] bg-[url('/bg-dots.png')] bg-cover" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-[90%] max-w-6xl rounded-3xl p-4 md:p-6 bg-white/60 backdrop-blur-xl border border-gray-200 shadow-[0_8px_50px_rgba(0,0,0,0.05)]"
      >
        {/* Dashboard Image */}
        <img 
          src="/assets/dashboard-preview.png" 
          alt="Dashboard preview"
          className="w-full rounded-2xl"
        />
      </motion.div>
    </div>
  );
}
