"use client";

import { useState, useEffect } from "react";
import reportData from "../../data/report.json";
import summaryData from "../../data/8yrsummery.json";
import Sidebar from "../componets/Sidebar.tsx";
import ReportContent from "../componets/ReportContent.tsx";
import SummaryContent from "../componets/SummaryContent.tsx";

export default function InvestorsPage() {
  const [active, setActive] = useState<string>(""); // start empty
  const [reports, setReports] = useState<string[]>([]);

  useEffect(() => {
    if (reportData?.reports) {
      const years = reportData.reports.map((r: any) => r.year).reverse();
      setReports(years);

      // ✅ Automatically set the latest report as default (first after reverse)
      if (years.length > 0) {
        setActive(years[0]);
      }
    }
  }, []);

  const current =
    active === "full-summary"
      ? null
      : reportData.reports.find((r: any) => r.year === active);

  return (
    <div className="flex min-h-screen bg-[#f9f9ff] text-gray-800">
      <Sidebar reports={reports} active={active} setActive={setActive} />

      <main className="flex-1 p-10 leading-relaxed overflow-y-auto">
        {active && (
          <>
            <h1 className="text-3xl font-bold mb-6 text-blue-800">
              {active === "full-summary"
                ? summaryData.summary.title
                : `Annual Report ${active.replace("-", " - ")}`}
            </h1>

            {active === "full-summary" ? (
              <SummaryContent summaryData={summaryData.summary} />
            ) : (
              <ReportContent current={current} />
            )}
          </>
        )}
      </main>
    </div>
  );
}
