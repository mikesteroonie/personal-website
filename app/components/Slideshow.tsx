"use client";

import React from "react";
import Image from "next/image";

export function Slideshow({
  images,
  captions = [],
  height = 500,
}: {
  images: string[];
  captions?: string[];
  height?: number;
}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Show first image only during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="my-8">
        <div
          className="relative bg-neutral-900 rounded-xl overflow-hidden shadow-lg"
          style={{ height: `${height}px` }}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[0]}
              alt={captions[0] || "Slide 1"}
              fill
              unoptimized
              className="object-contain"
            />
          </div>
          {captions[0] && (
            <div className="absolute bottom-16 left-0 right-0 text-center z-20">
              <span className="bg-black/60 text-white text-sm px-4 py-2 rounded-full">
                {captions[0]}
              </span>
            </div>
          )}
        </div>
        <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-2">
          1 / {images.length}
        </p>
      </div>
    );
  }

  return (
    <div className="my-8">
      <div
        className="relative bg-neutral-900 rounded-xl overflow-hidden shadow-lg group"
        style={{ height: `${height}px` }}
      >
        {/* Images */}
        <div className="relative w-full h-full">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={captions[index] || `Slide ${index + 1}`}
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Caption */}
        {captions[currentIndex] && (
          <div className="absolute bottom-16 left-0 right-0 text-center z-20">
            <span className="bg-black/60 text-white text-sm px-4 py-2 rounded-full">
              {captions[currentIndex]}
            </span>
          </div>
        )}

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Counter */}
      <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-2">
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
}
