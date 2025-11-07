import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function FeedbackModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl shadow-xl p-6 w-[420px]"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Submit Feedback</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X size={20} />
          </button>
        </div>

        <p className="text-sm text-gray-600 mt-2">
          We'd love to hear your thoughts on how we can improve.
        </p>

        {/* Rating Stars */}
        <div className="flex justify-center gap-2 my-4">
          {stars.map((star) => (
            <button
              key={star}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
            >
              <span
                className={`text-3xl ${
                  star <= (hoverRating || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            </button>
          ))}
        </div>

        {/* Textarea */}
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Tell us what you think..."
          className="
            w-full border border-gray-300 rounded-lg 
            p-3 h-28 text-gray-800 text-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-400
            placeholder-gray-500
          "
        ></textarea>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              alert(`Rating: ${rating}\nFeedback: ${feedback}`);
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </div>
      </motion.div>
    </div>
  );
}
