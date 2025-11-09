"use client";

import {
  Facebook,
  Linkedin,
  Mail,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function About() {
  const media = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? media.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === media.length - 1 ? 0 : i + 1));

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT: TEXT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl text-black font-bold tracking-tight">
            About APNRL
          </h2>
          <div className="w-16 h-1 bg-blue-500"></div>

          <p className="text-gray-700 leading-relaxed text-lg">
            With 2×270 MW of installed thermal capacity,{" "}
            <strong>Adhunik Power And Natural Resources Ltd. (APNRL)</strong>{" "}
            stands as a trusted Independent Power Producer in Jharkhand,
            operating successfully for more than <strong>10 years</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Our state-of-the-art coal-based power plant ensures reliable power
            supply backed by long-term PPAs with government and industrial
            bodies.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            We are committed to operational excellence, sustainability, and
            providing value through clean, stable, and efficient power
            generation.
          </p>

          {/* SHARE SECTION */}
          <div className="pt-4">
            <p className="text-sm font-semibold text-blue-700 mb-2">
              Share This
            </p>
            <div className="flex gap-3">
              {[Share2, Facebook, Linkedin, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 border rounded hover:bg-blue-100 transition"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: SLIDER SECTION */}
        <div className="relative w-full h-[350px] lg:h-[420px] bg-black rounded-lg overflow-hidden shadow-xl">
          <img
            src={media[index]}
            className="w-full h-full object-cover"
            alt="Media Slide"
          />

          {/* Prev/Next Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronRight />
          </button>

          {/* Thumbnail list */}
          <div className="absolute right-0 top-0 h-full w-24 overflow-y-auto bg-white/80 backdrop-blur-sm p-2 space-y-3">
            {media.map((m, idx) => (
              <img
                key={idx}
                src={m}
                onClick={() => setIndex(idx)}
                className={`w-full h-20 object-cover rounded cursor-pointer border ${
                  idx === index ? "border-blue-500" : "border-transparent"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="absolute bottom-3 left-4 text-white text-sm bg-black/50 px-3 py-1 rounded">
            {index + 1} of {media.length}
          </p>
        </div>
      </div>
    </section>
  );
}
