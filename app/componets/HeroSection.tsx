"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [isFading, setIsFading] = useState(false);

  const nextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrent(next);
      setNext((next + 1) % images.length);
      setIsFading(false);
    }, 800);
  };

  const prevSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      const prevIndex = (current - 1 + images.length) % images.length;
      setCurrent(prevIndex);
      setNext(current);
      setIsFading(false);
    }, 800);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [current, next]);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Current slide */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-800"
        style={{
          backgroundImage: `url(${images[current]})`,
          opacity: isFading ? 0 : 1,
        }}
      />

      {/* Next slide (fades in smoothly) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-800"
        style={{
          backgroundImage: `url(${images[next]})`,
          opacity: isFading ? 1 : 0,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-xl">
          Adhunik Power & Natural <br /> Resources Limited
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md">
          Adhunik Power And Natural Resources (APNRL) is an Independent Power
          Producer (IPP) operating a 2x270 MW thermal power plant in Jharkhand,
          commissioned on 16th October 2012.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-7 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-medium transition shadow-lg hover:shadow-xl"
        >
          Learn More
        </button>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition shadow-lg"
      >
        <ChevronLeft size={22} className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition shadow-lg"
      >
        <ChevronRight size={22} className="text-white" />
      </button>
    </section>
  );
}
