"use client";

import Table from "./Table.tsx";

export default function ReportContent({ current }: { current: any }) {
  if (!current)
    return (
      <p className="text-gray-600 text-[15px]">
        Report content will be available soon.
      </p>
    );

  return (
    <div className="space-y-10 text-[15px]">
      {/* Executive Summary */}
      {current.executive_summary && (
        <section>
          <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
            Executive Summary
          </h2>
          {current.executive_summary.overview?.map((p: string, i: number) => (
            <p key={i} className="mt-2">
              {p}
            </p>
          ))}
          {current.executive_summary.bullets && (
            <ul className="list-disc ml-6 mt-3 space-y-1">
              {current.executive_summary.bullets.map((b: string, i: number) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Render other sections dynamically */}
      {[
        ["financial_highlights", "Financial Highlights (₹ in Lakhs)"],
        ["balance_sheet", "Balance Sheet Snapshot (₹ in Lakhs)"],
        ["operational_performance", "Operational Performance"],
        ["board_of_directors", "Board of Directors"],
        ["key_committees", "Key Committees"],
      ].map(([key, title]) =>
        current[key] ? (
          <section key={key}>
            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              {title}
            </h2>
            <Table
              headers={current[key].table?.headers || current[key].headers}
              rows={current[key].table?.rows || current[key].rows}
            />
          </section>
        ) : null,
      )}

      {/* List Sections */}
      {[
        ["industry_overview", "Industry Overview"],
        ["auditors", "Auditors & Governance"],
        ["policies", "Key Policies & Compliance"],
      ].map(([key, title]) =>
        current[key] ? (
          <section key={key}>
            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              {title}
            </h2>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              {current[key].map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null,
      )}
    </div>
  );
}
