"use client";

import { useState } from "react";
import auctionData from "./auction.json"; // 👈 Import JSON

const sections = [
  {
    id: "tenders",
    title: "Tenders",
    children: [
      { id: "flyash", title: "Fly Ash Tenders" },
      { id: "biomass", title: "Biomass Pellet Tenders" },
      { id: "fgd", title: "Tenders for FGD" },
    ],
  },
  {
    id: "auction",
    title: "Auction",
    children: [{ id: "auction-materials", title: "Auction Materials" }],
  },
];

export default function TendersPage() {
  const [active, setActive] = useState("flyash");

  // Pagination + search state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  // --- FILTERING LOGIC ---
  const filteredData = auctionData.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.material?.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query)
    );
  });

  // --- PAGINATION LOGIC ---
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows =
    rowsPerPage === "all"
      ? filteredData
      : filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages =
    rowsPerPage === "all" ? 1 : Math.ceil(filteredData.length / rowsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleRowsChange = (e) => {
    const value = e.target.value === "all" ? "all" : Number(e.target.value);
    setRowsPerPage(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="flex min-h-screen bg-[#f9f9ff] text-gray-800">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r border-gray-200 p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-8 text-blue-700">Tenders</h2>

        <nav className="space-y-5 text-[15px]">
          {sections.map((sec) => (
            <div key={sec.id}>
              <div className="text-blue-800 font-semibold mb-2">
                {sec.title}
              </div>
              {sec.children && (
                <div className="ml-4 space-y-2">
                  {sec.children.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => {
                        setActive(sub.id);
                        setCurrentPage(1);
                        setSearchQuery("");
                      }}
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
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 leading-relaxed overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">
          {active === "flyash"
            ? "Fly Ash Tenders"
            : active === "biomass"
              ? "Biomass Pellet Tenders"
              : active === "fgd"
                ? "Tenders for FGD"
                : "Auction Materials"}
        </h1>

        {/* AUCTION MATERIALS */}
        {active === "auction-materials" ? (
          <div>
            <h2 className="text-xl font-bold text-blue-700 mb-4">
              List of Obsolete / Auction Materials
            </h2>

            {/* 🔍 Search and Controls */}
            <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by code or name..."
                className="w-full sm:w-1/3 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Rows per page:</span>
                <select
                  value={rowsPerPage}
                  onChange={handleRowsChange}
                  className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value="all">All</option>
                </select>
              </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm bg-white rounded-lg border border-gray-200 shadow-sm">
                <thead className="bg-blue-50 text-blue-700">
                  <tr>
                    <th className="px-4 py-3 border-b text-left font-semibold">
                      Sr. No
                    </th>
                    <th className="px-4 py-3 border-b text-left font-semibold">
                      Material Code
                    </th>
                    <th className="px-4 py-3 border-b text-left font-semibold">
                      Description
                    </th>
                    <th className="px-4 py-3 border-b text-left font-semibold">
                      BUn
                    </th>
                    <th className="px-4 py-3 border-b text-left font-semibold">
                      Stock
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.length > 0 ? (
                    currentRows.map((item, idx) => (
                      <tr
                        key={item.sr_no}
                        className={`${
                          idx % 2 === 0 ? "bg-white" : "bg-blue-50/30"
                        } hover:bg-blue-50 transition`}
                      >
                        <td className="px-4 py-2 border-b text-gray-700">
                          {item.sr_no}
                        </td>
                        <td className="px-4 py-2 border-b text-gray-700">
                          {item.material}
                        </td>
                        <td className="px-4 py-2 border-b text-gray-700">
                          {item.description}
                        </td>
                        <td className="px-4 py-2 border-b text-gray-700">
                          {item.bun}
                        </td>
                        <td className="px-4 py-2 border-b text-gray-700 text-right">
                          {item.stock}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={5}
                        className="text-center py-6 text-gray-500 italic"
                      >
                        No results found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination controls */}
            {rowsPerPage !== "all" && (
              <div className="flex flex-wrap justify-between items-center mt-4 gap-2">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md border text-sm ${
                    currentPage === 1
                      ? "text-gray-400 border-gray-200"
                      : "text-blue-700 border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  Previous
                </button>

                <span className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md border text-sm ${
                    currentPage === totalPages
                      ? "text-gray-400 border-gray-200"
                      : "text-blue-700 border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        ) : (
          // Keep your other tender sections unchanged
          <div className="space-y-3 text-[15px]">
            {active === "flyash" &&
              [
                "APNRL Tender Doc For Sale Of Fly Ash AM 12.05.2023",
                "APNRL Tender Doc For Sale Of Fly Ash AM 18.10.2023",
                "APNRL Tender Doc For Sale Of Fly Ash AM 28.03.2024",
                "APNRL Tender Doc For Sale Of Fly Ash AM 28.12.2024",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
                >
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}

            {active === "biomass" &&
              [
                "APNRL - Biomass Pellet Tender as on 01-06-23 (003)",
                "APNRL - Biomass Pellet Tender 2025",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
                >
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}

            {active === "fgd" &&
              [
                "NOTICE – Withdrawal Of Fgd Tender Process",
                "APNRL FGD notice inviting tender 07.09.2022",
                "APNRL FGD instructions to bidders 07.09.2022",
                "Corrigendum No. 1 - Dated 15.09.2022 to APNRL FGD Bidding Document",
                "Corrigendum No. 2 - Dated 19.09.2022 to APNRL FGD Bidding Document",
                "Corrigendum No. 3 - Dated 27.09.2022 to APNRL FGD Bidding Document",
              ].map((item, idx) => (
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
