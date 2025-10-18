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
  const [exportedClips, setExportedClips] = useState([]); // ✅ Added
  const [videoLink, setVideoLink] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [fileVideo, setFileVideo] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [numShorts, setNumShorts] = useState(5);
  const [activeSection, setActiveSection] = useState("Dashboard");

  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) navigate("/", { replace: true });
  }, [user, navigate]);

  const toggleSelect = (id) => {
    setSelectedClips((s) => {
      const copy = new Set(s);
      copy.has(id) ? copy.delete(id) : copy.add(id);
      return copy;
    });
  };

  const handleGenerateShorts = () => {
    if (videoLink)
      alert(`Generating ${numShorts} shorts from link: ${videoLink}`);
    else if (fileVideo)
      alert(`Generating ${numShorts} shorts from uploaded file: ${fileVideo.name}`);
    else alert("Please paste a video link or upload a video first.");
  };

  const handleExport = (format) => {
    const selected = clips.filter((c) => selectedClips.has(c.id));
    if (selected.length === 0) {
      alert("No clips selected to export!");
      return;
    }
    const exportData = selected.map((c) => ({
      ...c,
      format,
      exportDate: new Date().toLocaleString(),
    }));
    setExportedClips((prev) => [...prev, ...exportData]);
    alert(`Exported ${selected.length} clips as ${format}`);
    setSelectedClips(new Set());
    setActiveSection("Exports"); // ✅ Auto redirect to Exports tab
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

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

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxSizeBytes = 40 * 1024 * 1024;
      if (file.size > maxSizeBytes) {
        alert("File too large! Must be under 40 MB.");
        e.target.value = "";
        return;
      }
      setFileVideo(file);
      setVideoLink("");
      setThumbnail("");
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const cancelUpload = () => {
    setFileVideo(null);
    setFilePreview(null);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 mb-6"
          >
            <h2 className="text-3xl font-bold mb-2 text-white">Overview</h2>
            <p className="text-gray-300 mb-4">
              Paste a video link or upload a video to generate shorts instantly.
            </p>

            <div className="rounded-xl border-2 border-dashed border-white/20 p-8 flex flex-col items-center justify-center gap-4">
              <div className="w-full flex gap-3">
                <input
                  type="url"
                  value={videoLink}
                  onChange={handleLinkChange}
                  placeholder="Paste a video link (YouTube, Vimeo...)"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
                  disabled={!!fileVideo}
                />

                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="uploadVideo"
                />
                <label
                  htmlFor="uploadVideo"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-sm font-medium cursor-pointer shadow-md transition-all"
                >
                  📂 Upload Video
                </label>

                <select
                  value={numShorts}
                  onChange={(e) => setNumShorts(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-700 border border-purple-400/40 text-white font-medium hover:from-purple-700 hover:to-indigo-800 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-transparent outline-none text-sm transition-all duration-300 shadow-lg"
                >
                  {[...Array(18)].map((_, i) => (
                    <option
                      key={i + 3}
                      value={i + 3}
                      className="bg-[#1b1b2f] text-white"
                    >
                      {i + 3} Clips
                    </option>
                  ))}
                </select>

                <button
                  onClick={handleGenerateShorts}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 font-bold shadow-md transition"
                >
                  Create Clip
                </button>
              </div>

              {thumbnail && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 w-full"
                >
                  <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                    className="rounded-xl shadow-lg border border-white/10 max-h-60 mx-auto"
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
                    className="rounded-xl shadow-lg border border-white/10 max-h-60 mx-auto"
                  />
                  <p className="text-sm text-gray-300 mt-2">
                    {fileVideo?.name} ·{" "}
                    {(fileVideo?.size / (1024 * 1024)).toFixed(2)} MB
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
        );

      case "Clip Library":
        return (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">Clip Library</h3>
              <div className="text-sm text-gray-300">{clips.length} clips</div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {clips.map((c) => (
                <div key={c.id} onClick={() => toggleSelect(c.id)} className="relative">
                  <ClipCard clip={c} />
                  <input
                    type="checkbox"
                    checked={selectedClips.has(c.id)}
                    onChange={() => toggleSelect(c.id)}
                    className="absolute left-3 top-3 w-4 h-4 accent-purple-400"
                  />
                </div>
              ))}
            </div>
          </section>
        );

      case "Exports":
        return (
          <div className="text-gray-300">
            <h2 className="text-2xl font-bold mb-4 text-white">Exports</h2>
            {exportedClips.length === 0 ? (
              <p>No exported clips yet. Select clips in the library and export them.</p>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {exportedClips.map((clip, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 border border-white/20 rounded-xl p-3 shadow-lg"
                  >
                    <img
                      src={clip.thumbnail}
                      alt={clip.title}
                      className="rounded-lg mb-2 w-full h-32 object-cover"
                    />
                    <h4 className="font-semibold">{clip.title}</h4>
                    <p className="text-xs text-gray-400">{clip.exportDate}</p>
                    <p className="text-xs text-gray-400 mb-2">{clip.format.toUpperCase()}</p>
                    <button
                      onClick={() => alert(`Downloading ${clip.title}`)}
                      className="w-full py-1.5 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-sm font-medium mt-1"
                    >
                      ⬇ Download
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 backdrop-blur-lg bg-black/30 border-b border-white/10 z-30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
            B
          </div>
          <span className="font-semibold text-lg tracking-wide">Bunchhh</span>
        </div>

        <input
          className="flex-1 max-w-lg mx-6 rounded-full bg-white/10 border border-white/20 px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-sm text-white placeholder-gray-300"
          placeholder="Search clips, uploads, projects..."
        />

        <button
          onClick={handleLogout}
          className="px-4 py-1.5 rounded-md bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-sm font-medium transition"
        >
          Logout
        </button>
      </header>

      {/* Layout */}
      <div className="pt-20 flex gap-6 px-6 pb-28">
        {/* Sidebar */}
        <aside className="w-56 sticky top-20 h-[calc(100vh-5rem)] self-start">
          <nav className="flex flex-col gap-3">
            {["Dashboard", "Clip Library", "Exports"].map((label, idx) => (
              <button
                key={label}
                onClick={() => setActiveSection(label)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-all ${
                  activeSection === label
                    ? "bg-gradient-to-r from-purple-600/30 to-indigo-500/20 border-l-4 border-purple-400"
                    : "hover:bg-white/5"
                }`}
              >
                <span className="w-6 text-center">
                  {["🏠", "🎞️", "📦"][idx]}
                </span>
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Section */}
        <main className="flex-1">{renderSection()}</main>
      </div>

      {/* Export Footer */}
      <motion.div
        initial={{ y: 120 }}
        animate={{ y: selectedClips.size ? 0 : 120 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="fixed left-0 right-0 bottom-0 px-6 py-3 bg-gradient-to-r from-indigo-800/80 to-purple-800/80 border-t border-white/10 backdrop-blur-sm z-40"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="text-sm text-gray-300">{selectedClips.size} selected</div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleExport("mp4")}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 font-medium shadow-md"
            >
              Export MP4
            </button>
            <button
              onClick={() => handleExport("gif")}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-400 hover:to-red-400 font-medium shadow-md"
            >
              Export GIF
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
