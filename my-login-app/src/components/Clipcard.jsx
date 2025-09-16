// src/components/ClipCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ClipCard({ clip }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(100, 255, 150, 0.08)" }}
      className="bg-neutral-900 border border-gray-800 rounded-xl overflow-hidden relative"
    >
      <div className="relative">
        <img
          src={clip.thumbnail}
          alt={clip.title}
          className="w-full h-32 object-cover"
        />
        <button
          className="absolute left-2 top-2 bg-black/60 backdrop-blur-sm p-1 rounded-full"
          aria-label="Play"
        >
          ▶
        </button>
        <div className="absolute right-2 top-2 text-xs px-2 py-0.5 bg-black/50 rounded text-gray-200">
          {clip.duration}
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold">{clip.title}</h4>
            <p className="text-xs text-gray-400">{clip.date}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-xs px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700">Edit</button>
            <button className="text-xs px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700">Share</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
