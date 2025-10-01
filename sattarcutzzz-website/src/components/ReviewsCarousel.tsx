'use client';

import { useState, useEffect } from 'react';

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
    text: "An amazing connection made with this barber where i know he'll commit his time and effort into each minute of the cut. You can see his passion throughout the whole cut and that's enough for me to come again."
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

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const visibleReviews = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      visibleReviews.push(reviews[index]);
    }
    return visibleReviews;
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative">
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

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          <div className="grid md:grid-cols-3 gap-8 w-full flex-shrink-0">
            {getVisibleReviews().map((review, index) => (
              <div
                key={`${review.id}-${currentIndex}-${index}`}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 transform transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <div key={i} className="text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 min-h-[80px]">
                  &quot;{review.text}&quot;
                </p>
                <div className="font-semibold">- {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors shadow-lg"
        aria-label="Previous reviews"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors shadow-lg"
        aria-label="Next reviews"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}