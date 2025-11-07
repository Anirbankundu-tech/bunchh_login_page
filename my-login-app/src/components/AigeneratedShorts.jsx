import { motion } from "framer-motion";
import { Sparkles, Play } from "lucide-react";

const clips = [
  { tag: "Tutorial", username: "@oscars", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80" },
  { tag: "News", username: "@wallstreetonline", img: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=800&q=80" },
  { tag: "Coach", username: "@neurospicyastrology", img: "https://images.unsplash.com/photo-1532619675605-1ede6f9a4664?auto=format&fit=crop&w=800&q=80" },
  { tag: "Podcast", username: "@sometherapist", img: "https://images.unsplash.com/photo-1600195077075-e49377336f64?auto=format&fit=crop&w=800&q=80" },
  
  // NEW CLIPS
  { tag: "Cooking", username: "@chefmode", img: "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=800&q=80" },
  { tag: "Fitness", username: "@fitgirl", img: "https://images.unsplash.com/photo-1599058918213-b4ae9f61b266?auto=format&fit=crop&w=800&q=80" },
  { tag: "Travel", username: "@wanderworld", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
  { tag: "Music", username: "@beatsdaily", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80" },
];

// duplicate for seamless infinite scroll
const sliderClips = [...clips, ...clips];

export default function AIGeneratedShots() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2"
        >
          <Sparkles className="text-blue-600 w-7 h-7" />
          AI-Generated Shots Ready to Download
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Our advanced AI automatically detects the best moments and generates short clips
          optimized for each platform. Review and download in seconds.
        </p>

        {/* Auto sliding Row */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {sliderClips.map((clip, i) => (
            <div
              key={i}
              className="relative min-w-[260px] h-[360px] group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={clip.img}
                alt={clip.tag}
                className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute top-3 left-3 bg-black/70 text-white text-sm font-semibold px-3 py-1 rounded-xl">
                {clip.tag}
              </div>

              <div className="absolute top-3 right-3 bg-white text-pink-500 p-1 rounded-full shadow">
                <Sparkles className="w-4 h-4" />
              </div>

              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                <div className="bg-white/90 p-3 rounded-full shadow-xl">
                  <Play className="text-black w-7 h-7" />
                </div>
              </div>

              <div className="absolute bottom-3 text-white text-sm font-medium left-3">
                {clip.username}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
