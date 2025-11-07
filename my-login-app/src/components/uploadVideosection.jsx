import { motion } from "framer-motion";
import { Upload } from "lucide-react";

export default function UploadVideoSection() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Illustration */}
        <div className="relative flex justify-center">
          <img 
  src="/3d-female.png"
  alt="Girl Listening"
  className="w-[420px] md:w-[480px]"
/>


          {/* Floating Icons */}
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            className="w-16 absolute left-10 top-24"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            className="w-16 absolute right-10 top-32"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo_2023.svg"
            className="w-16 absolute right-20 top-0"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 3.2, repeat: Infinity }}
          />
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-yellow-600 font-medium mb-2">
            <Upload className="w-5 h-5" /> Upload Videos
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-5 leading-snug">
            Upload Any Kind of Video Here
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Support for YouTube videos, X (Twitter) clips, Instagram Reels,
            TikTok videos, LinkedIn, Snapchat, and more. Simply paste the link
            or upload directly from your device.
          </p>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md"
          >
            Start Uploading
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
