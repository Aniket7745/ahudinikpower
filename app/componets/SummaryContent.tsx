"use client";

import Table from "./Table";

export default function SummaryContent({ summaryData }: { summaryData: any }) {
  return (
    <div className="space-y-10 text-[15px]">
      {/* Executive Summary */}
      <section>
        <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
          Executive Summary
        </h2>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          {summaryData.executive_summary.map((p: string, i: number) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </section>

      {/* Financial Highlights */}
      <section>
        <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
          Financial Highlights (₹ in Lakhs)
        </h2>
        <Table
          headers={summaryData.financial_highlights.headers}
          rows={summaryData.financial_highlights.rows}
        />
      </section>

      {/* Operational Performance */}
      <section>
        <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
          Operational Performance
        </h2>
        <Table
          headers={summaryData.operational_performance.headers}
          rows={summaryData.operational_performance.rows}
        />
      </section>

      {/* Key Insights */}
      <section>
        <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
          Key Insights
        </h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          {summaryData.key_insights.map((a: string, i: number) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
