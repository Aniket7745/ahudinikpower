"use client";

import { useState } from "react";

const sections = [
  { id: "press", title: "Press Releases" },
  { id: "interviews", title: "Interviews & Articles" },
  { id: "gallery", title: "Gallery" },
  { id: "notice", title: "Notices" },
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
          <div className="space-y-6 text-[15px]">
            <p>
              Stay informed with the latest news and announcements from{" "}
              <b>Adhunik Power & Natural Resources Ltd. (APNRL)</b>.
            </p>

            <div className="space-y-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-blue-700">
                  Adhunik Power Expands Renewable Energy Capacity
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  APNRL has commissioned a 50MW solar power plant to support
                  India's clean energy mission.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Published: Jan 2025
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-blue-700">
                  APNRL Launches CSR Initiative in Education
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  A new community development project to enhance learning
                  opportunities in rural Jharkhand.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Published: Dec 2024
                </p>
              </div>
            </div>
          </div>
        )}

        {/* INTERVIEWS & ARTICLES */}
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

            <div className="grid grid-cols-3 gap-4 mt-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-300 transition"
                >
                  Image {i}
                </div>
              ))}
            </div>
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
