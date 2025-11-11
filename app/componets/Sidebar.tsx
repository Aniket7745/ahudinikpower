"use client";

interface SidebarProps {
  reports: string[];
  active: string;
  setActive: (val: string) => void;
}

export default function Sidebar({ reports, active, setActive }: SidebarProps) {
  return (
    <aside className="w-1/4 bg-white border-r border-gray-200 p-8">
      <h2 className="text-2xl font-bold mb-8 text-blue-700">Annual Reports</h2>
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
  );
}
