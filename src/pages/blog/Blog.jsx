import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ambulance } from "lucide-react";
import { blogData } from "./data";
import { IoBookOutline } from "react-icons/io5";


export default function BlogList() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#96080B] to-[#C8252C] text-white mt-25">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div
          className={`relative max-w-7xl mx-auto px-6 py-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-blink">
              <IoBookOutline className="w-10 h-10" />
            </div>

            <style jsx>{`
              @keyframes blink {
                0%, 50%, 100% {
                  opacity: 1;
                }
                25%, 75% {
                  opacity: 0.5;
                }
              }
              .animate-blink {
                animation: blink 5s infinite;
              }
            `}</style>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
              Our Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Explore medical stories, health tips, and ambulance service updates.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 26.7C840 33.3 960 46.7 1080 50C1200 53.3 1320 46.7 1380 43.3L1440 40V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </div>

      {/* 📰 Blog Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-200"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-58 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <button
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  className="text-red-600 font-semibold hover:text-red-700 transition"
                >
                  Learn More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
