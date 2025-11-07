import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useState } from "react";
import FeedbackModal from "./Feedback"; 

const testimonials = [
  {
    name: "Ananya Gupta",
    location: "India",
    role: "Educator",
    image: "/users/ananya.png",
    review:
      "Creating educational shorts for social media is now effortless. This tool handles everything perfectly.",
    rating: 5,
  },
  {
    name: "Kabir Khan",
    location: "India",
    role: "Content Creator",
    image: "/users/kabir.png",
    review:
      "The multi-platform support is fantastic. I can upload to YouTube, Instagram & TikTok — all in one place!",
    rating: 5,
  },
  {
    name: "Riya Sharma",
    location: "India",
    role: "Creator",
    image: "/users/riya.png",
    review:
      "A complete game-changer for video creators. Saved me hours every week since I started using it!",
    rating: 4,
  },
  {
    name: "Arjun Mehta",
    location: "India",
    role: "YouTuber",
    image: "/users/arjun.png",
    review:
      "Editing clips and publishing them across platforms used to take forever. Now it’s 10x faster!",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    location: "India",
    role: "Online Coach",
    image: "/users/meera.png",
    review:
      "The automation features are incredible. I finally have time to focus on content instead of managing workflows.",
    rating: 5,
  },
  {
    name: "Sahil Kapoor",
    location: "India",
    role: "Digital Marketer",
    image: "/users/sahil.png",
    review:
      "Helps me repurpose my webinar clips into short-form content effortlessly. A must-have for marketers!",
    rating: 4,
  },
  {
    name: "Priya Desai",
    location: "India",
    role: "Influencer",
    image: "/users/priya.png",
    review:
      "I love how easy it is to generate trending clips. Growing my audience has never been this easy.",
    rating: 5,
  },
  {
    name: "Vikram Joshi",
    location: "India",
    role: "Teacher",
    image: "/users/vikram.png",
    review:
      "I use this tool to create educational explainers. My students find lessons more engaging now!",
    rating: 5,
  },
  {
    name: "Nisha Paul",
    location: "India",
    role: "Entrepreneur",
    image: "/users/nisha.png",
    review:
      "I never enjoyed editing. This tool changed that completely — super intuitive and powerful!",
    rating: 4,
  },
];


export default function TestimonialsSection() {
  const [openFeedback, setOpenFeedback] = useState(false);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-purple-600 font-medium">
            <Users className="w-5 h-5" /> Loved by Content Creators & Educators
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-2">
            Loved by Content Creators & Educators
          </h2>
          <p className="text-gray-500 mt-2">
            See what users are saying about how this tool transformed their workflow.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={index}
                className="min-w-[350px] md:min-w-[420px] bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>

                <p className="text-gray-600 italic mb-6">"{t.review}"</p>

                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-blue-500 text-lg">★</span>
                  ))}
                </div>

                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full self-start">
                  {t.role}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Feedback Button */}
        <div className="mt-10 flex justify-end">
          <button
            onClick={() => setOpenFeedback(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-lg shadow"
          >
            Feedback
          </button>
        </div>

        {/* Feedback Modal */}
        <FeedbackModal
          isOpen={openFeedback}
          onClose={() => setOpenFeedback(false)}
        />
      </div>
    </section>
  );
}
