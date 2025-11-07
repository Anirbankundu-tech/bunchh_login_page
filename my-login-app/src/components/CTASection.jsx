import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#2D8CEB] py-24 text-center rounded-3xl my-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-5xl font-bold leading-tight"
        >
          Ready to Build Your <br /> Next Viral Short?
        </motion.h2>

        {/* Subtitle */}
        <p className="text-white/90 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
          Join thousands of creators already using Bunchhh to turn long videos into short magic.
          Unleash your creativity and engage your audience with Bunchhh.
        </p>

        {/* CTA Button */}
        <motion.button
          onClick={() => navigate("/signup")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-white text-[#2D8CEB] px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto transition"
        >
          Get Started Free →
        </motion.button>

      </div>
    </section>
  );
}
