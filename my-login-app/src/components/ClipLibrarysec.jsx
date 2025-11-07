import { motion } from "framer-motion";
import { Library } from "lucide-react";

export default function ClipLibrarySection() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4 text-blue-600 font-semibold">
            <Library className="w-5 h-5" />
            Clip Library
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Organize All Your Clips in One <br /> Smart Library
          </h2>

          <p className="text-gray-600 text-lg mb-10 max-w-lg">
            Access all your generated clips instantly. Browse, search, and manage your entire
            collection with powerful filtering and tagging options.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition">
            Explore Library
          </button>
        </motion.div>

        {/* IMAGE / DASHBOARD MOCK */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full h-[320px] rounded-2xl bg-[#f4f4f4] border border-blue-300 border-r-4 border-b-4 shadow-[0_0_30px_rgba(0,115,255,0.2)] flex items-center justify-center text-gray-500 text-lg font-medium">
            Clip Library Dashboard
          </div>
        </motion.div>

      </div>
    </section>
  );
}
