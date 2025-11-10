"use client";

import { useState } from "react";

const sections = [
  {
    id: "tariff",
    title: "Tariff",
    children: [
      {
        id: "trueup",
        title: "Hon'ble JSERC True Up Petition FY 2023-24 & APR FY 2024-25",
      },
      {
        id: "gist-myt",
        title:
          "Gist publication of Hon'ble WBERC's MYT Tariff Order of APNRL for the year 2023-24, 2024-25 and 2025-26",
      },
      {
        id: "myt-order",
        title:
          "Hon'ble WBERC's MYT Tariff Order of APNRL for the Year 2023-24, 2024-25 and 2025-26",
      },
      {
        id: "gist-apr",
        title: "Gist of APR and FPPCA Application for 2023-24",
      },
      {
        id: "fppca",
        title: "APNRL FPPCA Application petition For 2023-24",
      },
      {
        id: "apr",
        title: "APNRL APR Application petition For 2023-24",
      },
    ],
  },
  {
    id: "mfca",
    title: "MFCA",
    children: [
      { id: "mfca-2024", title: "MFCA for FY 2024-25" },
      { id: "mfca-2025", title: "MFCA for FY 2025-26" },
    ],
  },
];

export default function CorporatePage() {
  const [active, setActive] = useState("trueup");

  // Dummy Tariff Items
  const tariffDummy = [
    "Tariff Notification FY 2023-24",
    "Provisional Tariff Order FY 2024-25",
    "Revised Energy Charges Circular FY 2024-25",
    "Average Power Purchase Cost Review FY 2023-24",
    "Tariff Implementation Procedure FY 2024-25",
  ];

  // MFCA FY 2024–25 Items
  const mfca2024Data = [
    "MFCA Notification",
    "WBSEDCL MFCA worksheet Jun'24_APNRL",
    "Corrigendum In WBSEDCL MFCA Work sheet Jun'24",
    "Corrigendum To Notice Published Regarding MFCA For The Month Of June'24",
    "WBSEDCL MFCA worksheet July'24",
    "MFCA Notification July'24",
    "Corrigendum To Notice Published Regarding MFCA For The Month Of July'24",
    "MFCA Notification August 24",
    "WBSEDCL MFCA Worksheet Aug 24",
    "MFCA Notification September 24",
    "WBSEDCL MFCA Worksheet September 24",
    "MFCA Notification October 24",
    "WBSEDCL MFCA Worksheet October 24",
    "MFCA Notification November 24",
    "WBSEDCL MFCA Worksheet November 24",
    "MFCA Notification December 24",
    "WBSEDCL MFCA Worksheet December 24",
    "MFCA Notification January 25",
    "WBSEDCL MFCA Worksheet Jan'25",
    "MFCA Notification February 25",
    "WBSEDCL MFCA Worksheet Feb'25",
    "MFCA Notification Dated 01/04/2025",
    "WBSEDCL MFCA Worksheet Dated 01/04/2025",
    "MFCA Notification Dated 01/05/2025",
    "WBSEDCL MFCA Worksheet Dated 01/05/2025",
    "Published MFCA for FY 2024-25",
  ];

  // MFCA FY 2025–26 Items
  const mfca2025Data = [
    "MFCA Notification Dated 05/06/2025",
    "WBSEDCL MFCA Worksheet Dated 05/06/2025",
    "MFCA Notification Dated 01/07/2025",
    "WBSEDCL MFCA Worksheet Dated 01/07/2025",
    "MFCA Notification Dated 01/08/2025",
    "WBSEDCL MFCA Worksheet Dated 01/08/2025",
    "MFCA Notification Dated 01/09/2025",
    "WBSEDCL MFCA Worksheet Dated 01/09/2025",
    "MFCA Notification Dated 04/10/2025",
    "WBSEDCL MFCA Worksheet Dated 04/10/2025",
    "MFCA Notification Dated 01/11/2025",
    "WBSEDCL MFCA Worksheet Dated 01/11/2025",
  ];

  return (
    <div className="flex min-h-screen bg-[#f9f9ff] text-gray-800">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r border-gray-200 p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-8 text-blue-700">
          Corporate Information
        </h2>

        <nav className="space-y-5 text-[15px]">
          {sections.map((sec) => (
            <div key={sec.id}>
              <div className="text-blue-800 font-semibold mb-2">
                {sec.title}
              </div>
              <div className="ml-4 space-y-2">
                {sec.children.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setActive(sub.id)}
                    className={`block w-full text-left transition-colors duration-150 ${
                      active === sub.id
                        ? "text-blue-700 font-semibold"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 leading-relaxed overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">
          {sections.flatMap((s) => s.children).find((c) => c.id === active)
            ?.title || "Corporate Information"}
        </h1>

        {/* TARIFF SECTION */}
        {[
          "trueup",
          "gist-myt",
          "myt-order",
          "gist-apr",
          "fppca",
          "apr",
        ].includes(active) && (
          <div className="space-y-4">
            {tariffDummy.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        )}

        {/* MFCA FY 2024–25 */}
        {active === "mfca-2024" && (
          <div className="space-y-4">
            {mfca2024Data.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        )}

        {/* MFCA FY 2025–26 */}
        {active === "mfca-2025" && (
          <div className="space-y-4">
            {mfca2025Data.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
