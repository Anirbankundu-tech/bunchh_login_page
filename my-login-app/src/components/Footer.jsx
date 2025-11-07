import { Youtube, Twitter, Linkedin, Instagram, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + Description */}
        <div>
          <div
            className="cursor-pointer flex items-center gap-2 mb-4"
            onClick={() => navigate("/")}
          >
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
                Bunchhh
              </span>
            </h1>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            AI-powered YouTube shorts generator for creators.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li className="hover:text-gray-900 cursor-pointer" onClick={() => navigate("/features")}>Features</li>
            <li className="hover:text-gray-900 cursor-pointer" onClick={() => navigate("/pricing")}>Pricing</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li className="hover:text-gray-900 cursor-pointer" onClick={() => navigate("/docs")}>Docs</li>
            <li className="hover:text-gray-900 cursor-pointer" onClick={() => navigate("/contact")}>Contact</li>
            <li className="hover:text-gray-900 cursor-pointer" onClick={() => navigate("/privacy")}>Privacy</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Follow</h3>
          <div className="flex items-center gap-4 text-gray-500">
            <Youtube className="h-5 w-5 hover:text-gray-900 cursor-pointer" />
            <Twitter className="h-5 w-5 hover:text-gray-900 cursor-pointer" />
            <Linkedin className="h-5 w-5 hover:text-gray-900 cursor-pointer" />
            <Instagram className="h-5 w-5 hover:text-gray-900 cursor-pointer" />
            <Share2 className="h-5 w-5 hover:text-gray-900 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t pt-6">
        © {new Date().getFullYear()} Bunchhh. All rights reserved.
      </div>
    </footer>
  );
}
