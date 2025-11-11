"use client";

import { useState } from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const sections = [
  { id: "press", title: "Press Releases" },
  { id: "interviews", title: "Interviews & Articles" },
  { id: "gallery", title: "Gallery" },
  { id: "notice", title: "Notices" },
];

const galleryImages = [
  "24.jpg",
  "8.jpg",
  "9.jpg",
  "a1.jpg",
  "a2.jpg",
  "a3.jpg",
  "a4.jpg",
  "a5.jpg",
  "a6.jpg",
  "a7.jpg",
  "a9.jpg",
  "a11.jpg",
  "a12.jpg",
  "a13.jpg",
  "a14.jpg",
  "a15.jpg",
  "a16.jpg",
  "certificate.jpg",
  "mpl5_runnerup.jpg",
  "mpl5_winner.jpg",
  "mpl 2023 winner.jpg",
  "mpl 2023 runner-up.jpg",
  "safety-day 2023.jpg",
  "women emp1.jpg",
  "women emp2.jpg",
];

export default function MediaPage() {
  const [active, setActive] = useState("press");

  return (
    <div className="flex min-h-screen bg-[#f9f9ff] text-gray-800">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r border-gray-200 p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-8 text-blue-700">Media</h2>
        <nav className="space-y-3 text-[15px]">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActive(sec.id)}
              className={`block w-full text-left transition-colors duration-150 ${
                active === sec.id
                  ? "text-blue-700 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {sec.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 leading-relaxed overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">
          {active === "press"
            ? "Press Releases"
            : active === "interviews"
              ? "Interviews & Articles"
              : active === "gallery"
                ? "Gallery"
                : "Notices"}
        </h1>

        {/* PRESS RELEASES */}
        {active === "press" && (
          <div className="space-y-10 text-[15px] font-sans">
            <div>
              <p className="text-gray-700 leading-relaxed">
                Stay informed with the latest updates and announcements from{" "}
                <b className="text-blue-700">
                  Adhunik Power & Natural Resources Ltd. (APNRL)
                </b>
                .
              </p>
            </div>

            {/* Example Press Articles */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Adhunik Power Expands Renewable Energy Capacity",
                  desc: "APNRL has commissioned a 50MW solar power plant to support India's clean energy mission.",
                  date: "Jan 2025",
                },
                {
                  title: "APNRL Launches CSR Initiative in Education",
                  desc: "A new community development project to enhance learning opportunities in rural Jharkhand.",
                  date: "Dec 2024",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-snug mb-3">{item.desc}</p>
                  <p className="text-xs text-gray-400">
                    Published: {item.date}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mt-10">
              <div className="flex-grow h-px bg-gray-200"></div>
              <span className="text-sm text-gray-400 uppercase tracking-wide">
                Gallery
              </span>
              <div className="flex-grow h-px bg-gray-200"></div>
            </div>

            {/* Mini Gallery Preview */}
            <PhotoProvider>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {galleryImages.slice(0, 9).map((img, index) => (
                  <PhotoView key={index} src={`/gallery/${img}`}>
                    <div className="relative group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition cursor-pointer aspect-[4/3]">
                      <Image
                        src={`/gallery/${img}`}
                        alt={img}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>
          </div>
        )}

        {/* INTERVIEWS */}
        {active === "interviews" && (
          <div className="space-y-6 text-[15px]">
            <p>
              Read the latest interviews and featured articles with our
              leadership team and industry experts.
            </p>
            <div className="space-y-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-blue-700">
                  Interview: The Future of Clean Energy in India
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  CEO of APNRL shares insights on sustainable power generation
                  and renewable integration.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Featured in: Energy Today, Feb 2025
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-blue-700">
                  Article: Driving Industrial Growth Responsibly
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  How APNRL balances industrial productivity with environmental
                  stewardship.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Published: Business Review, Nov 2024
                </p>
              </div>
            </div>
          </div>
        )}

        {/* GALLERY */}
        {active === "gallery" && (
          <div className="space-y-6 text-[15px]">
            <p>
              Explore moments from our events, plant operations, and CSR
              initiatives.
            </p>
            <PhotoProvider>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                {galleryImages.map((img, i) => (
                  <PhotoView key={i} src={`/gallery/${img}`}>
                    <div className="relative group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition cursor-pointer aspect-[4/3]">
                      <Image
                        src={`/gallery/${img}`}
                        alt={img}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>
          </div>
        )}

        {/* NOTICES */}
        {active === "notice" && (
          <div className="space-y-6 text-[15px]">
            <p>
              Find official company notices, updates, and circulars from{" "}
              <b>Adhunik Power & Natural Resources Ltd. (APNRL)</b>.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <b>Feb 2025:</b> Notice regarding Annual General Meeting.
              </li>
              <li>
                <b>Jan 2025:</b> Public announcement on environmental compliance
                audit results.
              </li>
              <li>
                <b>Dec 2024:</b> Notification of maintenance shutdown schedule.
              </li>
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
