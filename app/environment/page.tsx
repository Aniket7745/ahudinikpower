"use client";

import { useState } from "react";

const sections = [
  { id: "yearly", title: "Environment Yearly Files" },
  { id: "summary", title: "Environmental Summary Reports" },
  { id: "compliance", title: "Compliance Certificates" },
];

const yearlyData = {
  "2014-2015": [
    "APRIL-SEP 2014 (UNIT - I)",
    "APRIL-SEP 2014 (UNIT - II)",
    "Environment Statement (2014-15) - Unit I",
    "Environment Statement (2014-15) - Unit II",
    "HY_EC - Unit I (Oct 14 - March 2015)",
    "HY_EC - Unit II (Oct 14 - March 2015)",
  ],
  "2015-2016": [
    "Environment Statement (2015-16) - Unit I",
    "Environment Statement (2015-16) - Unit II",
    "HY_EC - Unit I (Apr - Sep 2015)",
    "HY_EC - Unit II (Apr - Sep 2015)",
  ],
  "2016-2017": [
    "Environment Statement (2016-17) - Unit I",
    "Environment Statement (2016-17) - Unit II",
  ],
  "2017-2018": [
    "Environment Statement (2017-18) - Unit I",
    "Environment Statement (2017-18) - Unit II",
  ],
  "2018-2019": [
    "Environment Statement (2018-19) - Unit I",
    "Environment Statement (2018-19) - Unit II",
  ],
  "2019-2020": [
    "Environment Statement (2019-20) - Unit I",
    "Environment Statement (2019-20) - Unit II",
  ],
  "2020-2021": [
    "Environment Statement (2020-21) - Unit I",
    "Environment Statement (2020-21) - Unit II",
  ],
  "2021-2022": [
    "Environment Statement (2021-22) - Unit I",
    "Environment Statement (2021-22) - Unit II",
  ],
  "2022-2023": [
    "Environment Statement (2022-23) - Unit I",
    "Environment Statement (2022-23) - Unit II",
  ],
  "2023-2024": [
    "Environment Statement (2023-24) - Unit I",
    "Environment Statement (2023-24) - Unit II",
  ],
  "2024-2025": ["EC - APNRL UNIT I", "EC - APNRL UNIT II"],
};

export default function EnvironmentPage() {
  const [active, setActive] = useState("yearly");

  return (
    <div className="flex min-h-screen bg-[#f9f9ff] text-gray-800">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r border-gray-200 p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-8 text-blue-700">
          Environment Reports
        </h2>
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
      <main className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">
          {active === "yearly"
            ? "Environment Yearly Files"
            : active === "summary"
              ? "Environmental Summary Reports"
              : "Compliance Certificates"}
        </h1>

        {/* YEARLY FILES */}
        {active === "yearly" && (
          <div className="space-y-10">
            {Object.entries(yearlyData)
              .reverse() // newest years first
              .map(([year, reports]) => (
                <div key={year}>
                  <h2 className="text-xl font-semibold text-blue-700 mb-4">
                    {year}
                  </h2>
                  <div className="space-y-3">
                    {reports.map((report, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
                      >
                        <p className="text-sm text-gray-700">{report}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* SUMMARY REPORTS */}
        {active === "summary" && (
          <div className="space-y-4">
            {[
              "Annual Environmental Performance Report 2024-25",
              "Sustainability and Energy Efficiency Summary 2024",
              "Emission Control System Performance 2023-24",
            ].map((report, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <p className="text-sm text-gray-700">{report}</p>
              </div>
            ))}
          </div>
        )}

        {/* COMPLIANCE CERTIFICATES */}
        {active === "compliance" && (
          <div className="space-y-4">
            {[
              "CPCB & JSPCB Compliance Certificate FY 2024-25",
              "Water Consumption & Waste Management Audit 2024",
              "APNRL Environmental Clearance Renewal 2023-24",
            ].map((cert, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <p className="text-sm text-gray-700">{cert}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
