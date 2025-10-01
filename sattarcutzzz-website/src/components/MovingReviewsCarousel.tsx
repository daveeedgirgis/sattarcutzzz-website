'use client';

import { useEffect, useRef } from 'react';

const reviews = [
  {
    id: 1,
    name: "Rayan",
    rating: 5,
    text: "I got a great haircut from Sattar. Best customer service I've ever had. He really helped me figure out how I want to cut my hair, and explained everything really well. Highly recommend."
  },
  {
    id: 2,
    name: "Shaheer Chaudhry",
    rating: 5,
    text: "An amazing connection made with this barber where i know he'll commit his time and effort into each minute of the cut. You can see his passion throughout the whole cut."
  },
  {
    id: 3,
    name: "Amro Torda",
    rating: 5,
    text: "Chill vibes and smooth service — clean, fresh cut, quick and easy, wrapped up right on time."
  },
  {
    id: 4,
    name: "Scott",
    rating: 5,
    text: "Great experience! Friendly and professional"
  },
  {
    id: 5,
    name: "Khalil",
    rating: 5,
    text: "Abdul is a great barber"
  },
  {
    id: 6,
    name: "Nahil Sohail",
    rating: 5,
    text: "Goated cut. Day one customer and keeps me coming back!"
  },
  {
    id: 7,
    name: "Mahrez & Vito",
    rating: 5,
    text: "Never been this fresh before"
  },
  {
    id: 8,
    name: "Jashan K",
    rating: 5,
    text: "Perfect haircut!"
  }
];

// Duplicate reviews for seamless infinite scroll
const duplicatedReviews = [...reviews, ...reviews];

export default function MovingReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Pixels per frame

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

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Rating Summary */}
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="text-yellow-400 text-2xl">★</div>
          ))}
          <span className="text-xl font-semibold ml-2">5.0/5</span>
        </div>
        <p className="text-gray-400">Based on 25+ reviews</p>
      </div>

      {/* Moving Carousel */}
      <div className="relative overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex-shrink-0 w-80 hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <div key={i} className="text-yellow-400">★</div>
                ))}
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed min-h-[80px]">
                &quot;{review.text}&quot;
              </p>
              <div className="font-semibold text-white">- {review.name}</div>
            </div>
          ))}
        </div>
        
        {/* Fade edges */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">Hover to pause • Continuous scroll</p>
      </div>
    </div>
  );
}