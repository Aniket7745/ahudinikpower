"use client";

import { useState, useEffect } from "react";
import reportData from "./report.json";
import summaryData from "./8yrsummery.json"; // ✅ NEW IMPORT

export default function InvestorsPage() {
  const [active, setActive] = useState("2019-2020");
  const [reports, setReports] = useState<string[]>([]);

  useEffect(() => {
    if (reportData && reportData.reports) {
      const years = reportData.reports.map((r: any) => r.year).reverse();
      setReports(years);
    }
  }, []);

  const current =
    active === "full-summary"
      ? null
      : reportData.reports.find((r: any) => r.year === active);

  return (
    <div className="flex min-h-screen bg-[#f9f9ff] text-gray-800">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r border-gray-200 p-8">
        <h2 className="text-2xl font-bold mb-8 text-blue-700">
          Annual Reports
        </h2>
        <nav className="space-y-3 text-[15px]">
          {reports.map((report, index) => (
            <button
              key={report}
              onClick={() => setActive(report)}
              className={`block w-full text-left transition-colors duration-150 ${
                active === report
                  ? "text-blue-700 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {index + 1}. Annual Report {report.replace("-", " - ")}
            </button>
          ))}

          {/* ✅ NEW BUTTON FOR SUMMARY */}
          <button
            onClick={() => setActive("full-summary")}
            className={`block w-full text-left mt-6 border-t border-gray-200 pt-4 transition-colors duration-150 ${
              active === "full-summary"
                ? "text-blue-700 font-semibold"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Full Summary Report
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 leading-relaxed overflow-y-auto">
        {/* ✅ Conditional Title */}
        <h1 className="text-3xl font-bold mb-6 text-blue-800">
          {active === "full-summary"
            ? summaryData.summary.title
            : `Annual Report ${active.replace("-", " - ")}`}
        </h1>

        {/* ✅ If "Full Summary" is active */}
        {active === "full-summary" ? (
          <div className="space-y-10 text-[15px]">
            {/* Executive Summary */}
            <section>
              <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
                Executive Summary
              </h2>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                {summaryData.summary.executive_summary.map(
                  (p: string, i: number) => (
                    <li key={i}>{p}</li>
                  ),
                )}
              </ul>
            </section>

            {/* Financial Highlights */}
            <section>
              <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
                Financial Highlights (₹ in Lakhs)
              </h2>
              <Table
                headers={summaryData.summary.financial_highlights.headers}
                rows={summaryData.summary.financial_highlights.rows}
              />
            </section>

            {/* Operational Performance */}
            <section>
              <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
                Operational Performance
              </h2>
              <Table
                headers={summaryData.summary.operational_performance.headers}
                rows={summaryData.summary.operational_performance.rows}
              />
            </section>

            {/* Key Insights */}
            <section>
              <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
                Key Insights
              </h2>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                {summaryData.summary.key_insights.map(
                  (a: string, i: number) => (
                    <li key={i}>{a}</li>
                  ),
                )}
              </ul>
            </section>
          </div>
        ) : (
          <>
            {!current && (
              <p className="text-gray-600 text-[15px]">
                Report content will be available soon.
              </p>
            )}

            {current && (
              <div className="space-y-10 text-[15px]">
                {/* Executive Summary */}
                <section>
                  <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
                    Executive Summary
                  </h2>
                  {current.executive_summary?.overview?.map(
                    (p: string, i: number) => (
                      <p key={i} className="mt-2">
                        {p}
                      </p>
                    ),
                  )}
                  {current.executive_summary?.bullets && (
                    <ul className="list-disc ml-6 mt-3 space-y-1">
                      {current.executive_summary.bullets.map(
                        (b: string, i: number) => (
                          <li key={i}>{b}</li>
                        ),
                      )}
                    </ul>
                  )}
                </section>

                {/* Financial Highlights */}
                {current.financial_highlights && (
                  <section>
                    <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
                      Financial Highlights (₹ in Lakhs)
                    </h2>
                    <Table
                      headers={current.financial_highlights.table.headers}
                      rows={current.financial_highlights.table.rows}
                    />
                  </section>
                )}

                {/* Balance Sheet */}
                {current.balance_sheet && (
                  <section>
                    <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
                      Balance Sheet Snapshot (₹ in Lakhs)
                    </h2>
                    <Table
                      headers={current.balance_sheet.table.headers}
                      rows={current.balance_sheet.table.rows}
                    />
                  </section>
                )}

                {/* Operational Performance */}
                {current.operational_performance && (
                  <section>
                    <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
                      Operational Performance
                    </h2>
                    <Table
                      headers={current.operational_performance.headers}
                      rows={current.operational_performance.rows}
                    />
                  </section>
                )}

                {/* Industry Overview */}
                {current.industry_overview && (
                  <section>
                    <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
                      Industry Overview
                    </h2>
                    <ul className="list-disc ml-6 mt-3 space-y-1">
                      {current.industry_overview.map(
                        (point: string, i: number) => (
                          <li key={i}>{point}</li>
                        ),
                      )}
                    </ul>
                  </section>
                )}

                {/* Board of Directors */}
                {current.board_of_directors && (
                  <section>
                    <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
                      Board of Directors
                    </h2>
                    <Table
                      headers={current.board_of_directors.headers}
                      rows={current.board_of_directors.rows}
                    />
                  </section>
                )}

                {/* Key Committees */}
                {current.key_committees && (
                  <section>
                    <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
                      Key Committees
                    </h2>
                    <Table
                      headers={current.key_committees.headers}
                      rows={current.key_committees.rows}
                    />
                  </section>
                )}

                {/* Auditors & Governance */}
                {current.auditors && (
                  <section>
                    <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
                      Auditors & Governance
                    </h2>
                    <ul className="list-disc ml-6 mt-3 space-y-1">
                      {current.auditors.map((a: string, i: number) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Policies */}
                {current.policies && (
                  <section>
                    <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
                      Key Policies & Compliance
                    </h2>
                    <ul className="list-disc ml-6 mt-3 space-y-1">
                      {current.policies.map((a: string, i: number) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

/* ---------------- Table ---------------- */
function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  if (!headers || !rows) return null;

  return (
    <div className="overflow-x-auto mt-3 border border-gray-200 bg-white">
      <table className="w-full border-collapse text-[14px]">
        <thead className="bg-blue-50 text-blue-700 border-b border-gray-200">
          <tr>
            {headers.map((head, i) => (
              <th
                key={i}
                className={`p-3 ${
                  i === 0 ? "text-left" : "text-right"
                } font-semibold`}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-t border-gray-200 ${
                i % 2 === 0 ? "bg-white" : "bg-[#fdfdff]"
              }`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`p-3 ${
                    j === 0 ? "text-left" : "text-right"
                  } text-gray-800`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
