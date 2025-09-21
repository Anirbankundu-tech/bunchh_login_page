import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ClipCard from "./ClipCard";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const sampleClips = Array.from({ length: 9 }).map((_, i) => ({
  id: `c${i}`,
  title: `Clip ${i + 1}`,
  date: "2 days ago",
  duration: `${12 + i}s`,
  thumbnail: `https://picsum.photos/seed/clip${i}/400/240`,
}));

export default function Dashboard() {
  const [clips, setClips] = useState(sampleClips);
  const [selectedClips, setSelectedClips] = useState(new Set());
  const [videoLink, setVideoLink] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [fileVideo, setFileVideo] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [numShorts, setNumShorts] = useState(5);

  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const toggleSelect = (id) => {
    setSelectedClips((s) => {
      const copy = new Set(s);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
  };

  const handleGenerateShorts = () => {
    if (videoLink) {
      alert(`Generating ${numShorts} shorts from link: ${videoLink}`);
    } else if (fileVideo) {
      alert(`Generating ${numShorts} shorts from uploaded file: ${fileVideo.name}`);
    } else {
      alert("Please paste a video link or upload a video to generate shorts.");
    }
  };

  const handleExport = (format) => {
    alert(`Exporting ${selectedClips.size} clips as ${format}`);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  // Detect YouTube thumbnail
  const handleLinkChange = (e) => {
    const link = e.target.value;
    setVideoLink(link);
    setFileVideo(null);
    setFilePreview(null);

    const youtubeRegex = /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = link.match(youtubeRegex);

    if (match) {
      const videoId = match[1];
      setThumbnail(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    } else {
      setThumbnail("");
    }
  };

  // Handle file upload with size restriction
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxSizeMB = 40; // set limit here
      const maxSizeBytes = maxSizeMB * 1024 * 1024;

      if (file.size > maxSizeBytes) {
        alert(`File too large! Please upload a video smaller than ${maxSizeMB} MB.`);
        e.target.value = "";
        return;
      }

      setFileVideo(file);
      setVideoLink("");
      setThumbnail("");
      setFilePreview(URL.createObjectURL(file));
    }
  };

  // Cancel uploaded file
  const cancelUpload = () => {
    setFileVideo(null);
    setFilePreview(null);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#07060b] via-[#0a0b14] to-[#020205] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(79,70,229,0.14)_0%,_transparent_25%),radial-gradient(ellipse_at_right,_rgba(14,165,233,0.07)_0%,_transparent_25%)] animate-fadein" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 backdrop-blur-sm bg-black/30 border-b border-gray-800 z-30">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-400 flex items-center justify-center shadow-[0_6px_24px_rgba(99,102,241,0.12)]">
              <span className="font-extrabold text-lg text-white">B</span>
            </div>
            <span className="font-semibold text-lg">Bunchhh</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-6">
          <input
            className="w-full rounded-full bg-neutral-900/60 border border-gray-800 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Search clips, uploads, projects..."
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="relative group p-2 rounded-full hover:bg-white/3">
            <img src="/icons/bell.svg" alt="Notifications" className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500" />
          </button>

          <div className="flex items-center gap-3">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="avatar" className="w-9 h-9 rounded-full" />
            ) : (
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex items-center justify-center text-black font-bold">
                {user?.email?.charAt(0).toUpperCase() || "U"}
              </div>
            )}
            <div className="text-sm text-gray-200">
              <div className="font-medium">{user?.displayName || (user?.email ?? "User")}</div>
            </div>
            <button
              onClick={handleLogout}
              className="ml-2 px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="pt-20 flex gap-6 px-6 pb-28">
        {/* Sidebar */}
        <aside className="w-56 sticky top-20 h-[calc(100vh-5rem)] self-start">
          <nav className="flex flex-col gap-2">
            {["Dashboard", "Generate Shorts", "Clip Library", "Exports"].map((label, idx) => (
              <button
                key={label}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-white/5 transition ${
                  idx === 0 ? "bg-gradient-to-r from-[#2ee6a4]/10 border-l-4 border-l-[#2ee6a4]" : ""
                }`}
              >
                <span className="w-6 text-center">{["🏠", "✂️", "🎞️", "⬇️"][idx]}</span>
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1">
          {/* Paste Link & Upload Input */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-neutral-920 border border-gray-800 p-6 mb-6"
          >
            <h2 className="text-2xl font-bold mb-2">Overview</h2>
            <p className="text-gray-400 mb-4">Paste a video link or upload a video to generate shorts instantly.</p>

            <div className="rounded-xl border-2 border-dashed border-gray-800 p-8 flex flex-col items-center justify-center gap-4">
              <div className="w-full flex gap-3">
                <input
                  type="url"
                  value={videoLink}
                  onChange={handleLinkChange}
                  placeholder="Paste a video link (YouTube, Vimeo...)"
                  className="flex-1 px-4 py-2 rounded-lg bg-neutral-900 border border-gray-700 focus:border-green-400 outline-none text-sm"
                  disabled={!!fileVideo}
                />

                <input type="file" accept="video/*" onChange={handleFileUpload} className="hidden" id="uploadVideo" />
                <label
                  htmlFor="uploadVideo"
                  className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-sm font-medium cursor-pointer"
                >
                  📂 Upload Video
                </label>

                <select
                  value={numShorts}
                  onChange={(e) => setNumShorts(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-neutral-900 border border-gray-700 focus:border-green-400 outline-none text-sm"
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} Clips
                    </option>
                  ))}
                </select>

                <button
                  onClick={handleGenerateShorts}
                  className="px-6 py-2 rounded-lg bg-green-500 text-black font-bold hover:bg-green-400 transition"
                >
                  Create Clip
                </button>
              </div>

              {/* Thumbnail or File Preview */}
              {thumbnail && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 w-full">
                  <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                    className="rounded-xl shadow-lg border border-gray-700 max-h-60 mx-auto"
                  />
                </motion.div>
              )}

              {filePreview && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 w-full text-center"
                >
                  <video
                    src={filePreview}
                    controls
                    className="rounded-xl shadow-lg border border-gray-700 max-h-60 mx-auto"
                  />
                  <p className="text-sm text-gray-400 mt-2">
                    {fileVideo?.name} · {(fileVideo?.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                  <button
                    onClick={cancelUpload}
                    className="mt-2 px-4 py-1 rounded-md bg-red-600 hover:bg-red-700 text-sm"
                  >
                    ❌ Cancel Upload
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Clip Library */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Clip Library</h3>
              <div className="text-sm text-gray-400">{clips.length} clips</div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {clips.map((c) => (
                <div key={c.id} onClick={() => toggleSelect(c.id)} className="relative">
                  <ClipCard clip={c} />
                  <input
                    type="checkbox"
                    checked={selectedClips.has(c.id)}
                    onChange={() => toggleSelect(c.id)}
                    className="absolute left-3 top-3 w-4 h-4 accent-green-400"
                  />
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Right Panel */}
        <aside className="w-96 sticky top-20 h-[calc(100vh-5rem)] overflow-auto">
          <div className="p-4 rounded-xl bg-neutral-920 border border-gray-800">
            <h4 className="font-semibold mb-2">Selected Clip Preview</h4>
            <div className="h-40 bg-black/60 rounded-lg flex items-center justify-center text-gray-500">
              Select a clip to preview
            </div>
          </div>
        </aside>
      </div>

      {/* Export Footer */}
      <motion.div
        initial={{ y: 120 }}
        animate={{ y: selectedClips.size ? 0 : 120 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="fixed left-0 right-0 bottom-0 px-6 py-3 bg-black/60 border-t border-gray-800 backdrop-blur-sm z-40"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-300">{selectedClips.size} selected</div>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.08, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleExport("mp4")}
                className="px-3 py-2 rounded bg-gradient-to-r from-purple-500 to-blue-400 
                           shadow-md hover:shadow-lg hover:from-purple-400 hover:to-blue-300 
                           transition duration-200"
              >
                Export MP4
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleExport("gif")}
                className="px-3 py-2 rounded bg-gradient-to-r from-green-400 to-emerald-400 
                           shadow-md hover:shadow-lg hover:from-green-300 hover:to-emerald-300 
                           transition duration-200"
              >
                Export GIF
              </motion.button>
            </div>
          </div>
          <div className="text-sm text-gray-400">Quick export options · Instant previews</div>
        </div>
      </motion.div>
    </div>
  );
}
