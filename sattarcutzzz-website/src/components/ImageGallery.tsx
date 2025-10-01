'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: "/api/placeholder/400/400",
    alt: "Fresh fade cut - Before and after",
    category: "fades"
  },
  {
    id: 2,
    src: "/api/placeholder/400/500",
    alt: "Beard trim and line up",
    category: "beard"
  },
  {
    id: 3,
    src: "/api/placeholder/500/400",
    alt: "Classic haircut transformation",
    category: "cuts"
  },
  {
    id: 4,
    src: "/api/placeholder/400/600",
    alt: "Taper fade specialist work",
    category: "fades"
  },
  {
    id: 5,
    src: "/api/placeholder/600/400",
    alt: "Line up precision work",
    category: "lineups"
  },
  {
    id: 6,
    src: "/api/placeholder/400/400",
    alt: "Full service haircut and beard",
    category: "full"
  }
];

const categories = [
  { id: "all", name: "All Work" },
  { id: "fades", name: "Fades" },
  { id: "cuts", name: "Haircuts" },
  { id: "beard", name: "Beard Work" },
  { id: "lineups", name: "Line Ups" },
  { id: "full", name: "Full Service" }
];

export default function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Work</h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Check out some of our latest cuts and transformations. Each client gets personalized attention and expert craftsmanship.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-800"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square relative">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  {/* Placeholder for actual images */}
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-2">✂️</div>
                    <div className="text-sm font-medium">{image.alt}</div>
                    <div className="text-xs mt-1 text-gray-500">Click to add your photo</div>
                  </div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <div className="text-2xl mb-2">🔍</div>
                  <div className="text-sm font-medium">View Details</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Photos CTA */}
        <div className="text-center mt-12">
          <div className="bg-black border border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Add Your Photos?</h3>
            <p className="text-gray-400 mb-6">
              Replace these placeholders with your best work from Instagram or take new photos to showcase your skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.instagram.com/sattarcutzzz" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                Check Instagram for Photos
              </a>
              <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-md hover:border-gray-500 hover:text-white transition-colors">
                Upload New Photos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Selected Image */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">{filteredImages[selectedImage]?.alt}</h3>
              <p className="text-gray-400 mb-4">This is a placeholder for your actual work photo.</p>
              <div className="text-6xl mb-4">✂️</div>
              <p className="text-sm text-gray-500">
                Add your real before/after photos here to showcase your barbering skills!
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}