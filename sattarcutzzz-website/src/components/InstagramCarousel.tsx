'use client';

import { useState, useEffect } from 'react';

// Real Instagram posts with actual video URLs
const instagramPosts = [
  {
    id: 1,
    type: 'video',
    thumbnail: '/cut1.png',
    caption: 'Fresh braided style transformation 🔥 Precision work and clean finish',
    likes: 47,
    comments: 8,
    videoUrl: 'https://www.instagram.com/p/DMJCi9CRrwJ/',
    isVideo: true
  },
  {
    id: 2,
    type: 'video', 
    thumbnail: '/cut2.png',
    caption: 'Expert fade technique ✂️ Perfect blend and sharp lines',
    likes: 35,
    comments: 5,
    videoUrl: 'https://www.instagram.com/p/DOZKSIKiZrJ/',
    isVideo: true
  },
  {
    id: 3,
    type: 'video',
    thumbnail: '/cut3.png', 
    caption: 'Classic taper cut with modern twist 💯 Always delivering quality',
    likes: 62,
    comments: 12,
    videoUrl: 'https://www.instagram.com/p/DHLRkTfRXhf/',
    isVideo: true
  }
];

export default function InstagramCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % instagramPosts.length);
      }
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % instagramPosts.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + instagramPosts.length) % instagramPosts.length);
  };

  const currentPost = instagramPosts[currentIndex];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Work</h2>
          <p className="text-xl text-gray-300 mb-6">
            Check out our pinned videos showcasing the freshest cuts and transformations
          </p>
          <a 
            href="https://www.instagram.com/sattarcutzzz" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <div className="text-xl">📱</div>
            <span>Follow @sattarcutzzz for more</span>
          </a>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Post Content */}
            <div className="aspect-square relative">
              {/* Actual Cut Image */}
              <img 
                src={currentPost.thumbnail}
                alt={currentPost.caption}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.style.setProperty('display', 'flex');
                }}
              />
              
              {/* Fallback placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex-col items-center justify-center text-white hidden">
                <div className="text-center">
                  <div className="text-6xl mb-4">✂️</div>
                  <h3 className="text-xl font-semibold mb-2">Cut #{currentIndex + 1}</h3>
                  <p className="text-gray-400 text-sm mb-6 max-w-sm px-4">
                    {currentPost.caption}
                  </p>
                </div>
              </div>

              {/* Instagram-style overlay */}
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-lg px-2 py-1">
                <div className="text-white text-sm">🎥</div>
              </div>
              
              {/* Click to view on Instagram */}
              <a 
                href={currentPost.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 group"
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 rounded-full p-4">
                  <div className="text-white text-2xl">▶️</div>
                </div>
              </a>
              
              {/* Instagram-style gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent h-24 pointer-events-none"></div>
            </div>

            {/* Post Info */}
            <div className="p-6 bg-black">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                    <span className="text-xl">❤️</span>
                    <span className="text-sm">{currentPost.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors">
                    <span className="text-xl">💬</span>
                    <span className="text-sm">{currentPost.comments}</span>
                  </button>
                </div>
                <a 
                  href={currentPost.videoUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Watch on Instagram →
                </a>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {currentPost.caption}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300"
            aria-label="Previous post"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300"
            aria-label="Next post"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {instagramPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to post ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-black border border-gray-800 rounded-lg p-6 max-w-lg mx-auto">
            <h3 className="text-xl font-semibold mb-3">Ready to Add Your Videos?</h3>
            <p className="text-gray-400 text-sm mb-4">
              Replace these placeholders with your actual pinned Instagram videos to showcase your best work automatically.
            </p>
            <a 
              href="https://www.instagram.com/sattarcutzzz" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-md font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors text-sm"
            >
              Get Video URLs from Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}