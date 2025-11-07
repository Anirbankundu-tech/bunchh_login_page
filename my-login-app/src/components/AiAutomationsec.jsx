import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function AIAutomationSection() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border border-green-400 rounded-2xl p-6 bg-gray-100 shadow-lg relative"
        >
          <div className="w-full h-[330px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-lg font-medium">
            Automation Flow
          </div>

          {/* Replace this image when ready */}
          <img 
            src="/YourImage.png" 
            alt="Automation Flow"
            className="absolute inset-0 opacity-0"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-green-600 font-semibold mb-2">
            <Zap className="w-5 h-5" /> Automation
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug mb-5">
            Boost Productivity with AI​ Automation
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Let AI handle clip detection, subtitle trimming, and caption generation — 
            so you focus only on creativity. Automate your entire workflow in minutes.
          </p>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md"
          >
            Automate Workflow
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
