'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const cutsImages = [
  {
    id: 1,
    src: "/cut1.png",
    alt: "Braided hairstyle with precision work",
    description: "Professional braiding technique with clean edges"
  },
  {
    id: 2,
    src: "/cut2.png",
    alt: "Expert fade technique with perfect blend",
    description: "Seamless fade transition with sharp details"
  },
  {
    id: 3,
    src: "/cut3.png",
    alt: "Classic short cut with clean lines",
    description: "Timeless style with modern precision"
  },
  {
    id: 4,
    src: "/cut4.png",
    alt: "Professional taper cut styling",
    description: "Expert taper work with smooth gradients"
  },
  {
    id: 5,
    src: "/cut5.png",
    alt: "Modern haircut with sharp details",
    description: "Contemporary style with clean finish"
  },
  {
    id: 6,
    src: "/cut6.png",
    alt: "Fresh cut with line work",
    description: "Precision line up with perfect edges"
  },
  {
    id: 7,
    src: "/cut7.png",
    alt: "Stylish haircut transformation",
    description: "Complete transformation with expert technique"
  }
];

// Duplicate images for seamless infinite scroll
const duplicatedCuts = [...cutsImages, ...cutsImages];

export default function MovingCutsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1; // Pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through the original set
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover (desktop) and touch (mobile)
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    const handleTouchStart = () => {
      cancelAnimationFrame(animationId);
    };

    const handleTouchEnd = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchend', handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Fresh Cuts Portfolio</h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          See our latest work in action. Each cut showcases precision, style, and attention to detail.
        </p>

        {/* Moving Carousel */}
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedCuts.map((cut, index) => (
              <div
                key={`${cut.id}-${index}`}
                className="flex-shrink-0 w-80 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={cut.src}
                    alt={cut.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="320px"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{cut.alt}</h3>
                    <p className="text-gray-300 text-sm">{cut.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Fade edges */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/sattarcutzzz" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-xl">📸</span>
            <span>Check us out on Instagram @sattarcutzzz</span>
          </a>
        </div>
      </div>
    </section>
  );
}