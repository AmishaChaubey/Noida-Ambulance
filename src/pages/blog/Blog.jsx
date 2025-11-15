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
<div className="relative overflow-hidden text-white mt-15 h-96 md:h-[500px]">
  {/* Background Image with Parallax Effect */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{ backgroundImage: "url(/banner6.png)" }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent"></div>
  </div>

  <div
    className={`relative max-w-7xl mx-auto px-6 h-full flex items-center transform transition-all duration-1000 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
  >
    <div className="w-full text-center">


      <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif leading-tight drop-shadow-lg">
        Our Blog
      </h1>
      <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 drop-shadow">
        Explore medical stories, health tips, and ambulance service updates.
      </p>
      
    
    </div>
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
                  className="text-gray-800 font-semibold hover:text-gray-600 transition"
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
