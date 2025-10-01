'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: "/cut1.png",
    alt: "Braided hairstyle with precision work",
    category: "styles"
  },
  {
    id: 2,
    src: "/cut2.png",
    alt: "Expert fade technique with perfect blend",
    category: "fades"
  },
  {
    id: 3,
    src: "/cut3.png",
    alt: "Classic short cut with clean lines",
    category: "cuts"
  },
  {
    id: 4,
    src: "/cut4.png",
    alt: "Professional taper cut styling",
    category: "fades"
  },
  {
    id: 5,
    src: "/cut5.png",
    alt: "Modern haircut with sharp details",
    category: "cuts"
  },
  {
    id: 6,
    src: "/cut6.png",
    alt: "Fresh cut with line work",
    category: "lineups"
  },
  {
    id: 7,
    src: "/cut7.png",
    alt: "Stylish haircut transformation",
    category: "styles"
  }
];

const categories = [
  { id: "all", name: "All Work" },
  { id: "fades", name: "Fades" },
  { id: "cuts", name: "Haircuts" },
  { id: "styles", name: "Styles" },
  { id: "lineups", name: "Line Ups" }
];

export default function CutsGallery() {
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
          Browse through our portfolio of fresh cuts, expert fades, and style transformations. Each cut showcases our attention to detail and commitment to quality.
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-800 aspect-square"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              
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

        {/* Stats */}
        <div className="text-center mt-12">
          <div className="bg-black border border-gray-800 rounded-lg p-6 max-w-lg mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready for Your Fresh Cut?</h3>
            <p className="text-gray-400 mb-6">
              Join our satisfied clients and experience expert barbering in Burlington. Book your appointment today!
            </p>
            <a 
              href="https://sattarcutzzz.setmore.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors inline-block"
            >
              Book Now
            </a>
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
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 z-10"
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="relative">
              <Image
                src={filteredImages[selectedImage]?.src}
                alt={filteredImages[selectedImage]?.alt}
                width={800}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {filteredImages[selectedImage]?.alt}
                </h3>
                <p className="text-gray-300 text-sm">
                  Professional barbering by SattarCutZZZ • Burlington, Ontario
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}