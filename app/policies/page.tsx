"use client";

import { useState } from "react";

const sections = [
  { id: "hr", title: "HR Policy" },
  { id: "environment", title: "Environment Policy" },
  { id: "safety", title: "Safety Policy" },
];

export default function PoliciesPage() {
  const [active, setActive] = useState("hr");

  return (
    <div className="flex min-h-screen bg-[#f9f9ff] text-gray-800">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r border-gray-200 p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-8 text-blue-700">Policies</h2>
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
          {active === "hr"
            ? "Human Resource Policy"
            : active === "environment"
              ? "Environment Policy"
              : "Safety Policy"}
        </h1>

        {/* HR POLICY */}
        {active === "hr" && (
          <div className="space-y-6 text-[15px]">
            <p>
              At <b>Adhunik Power & Natural Resources Ltd. (APNRL)</b>, we are
              committed to building a safe, inclusive, and growth-oriented
              environment for our employees, contractors, and associates.
            </p>

            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              Employee Growth & Development
            </h2>
            <p>
              We encourage continuous learning and skill development through
              training programs, proactive communication, and consultation.
            </p>

            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              Health & Safety
            </h2>
            <p>
              The organization identifies hazards, assesses risks, and ensures
              the protection of all workers from injury, ill-health, and unsafe
              working conditions.
            </p>

            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              Equal Opportunity
            </h2>
            <p>
              We provide a non-discriminatory, fair, and respectful workplace
              for all employees and contractors, regardless of gender, caste, or
              background.
            </p>

            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              Participation
            </h2>
            <p>
              Employees and representatives actively participate in reviewing
              and improving HR and safety policies to maintain relevance and
              compliance.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              <b>Last Updated:</b> 06.06.2024 <br />
              <b>Authorized By:</b> Nirmal Kumar Agarwal (Occupier)
            </p>
          </div>
        )}

        {/* ENVIRONMENT POLICY */}
        {active === "environment" && (
          <div className="space-y-6 text-[15px]">
            <p>
              <b>Adhunik Power & Natural Resources Ltd. (APNRL)</b> is committed
              to environmental protection and sustainable development through
              responsible energy generation and resource management.
            </p>

            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              Resource Optimization
            </h2>
            <p>
              We aim to optimize the utilization of natural resources such as
              water, oil, and electricity, and improve waste management to
              minimize pollution.
            </p>

            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              Pollution Prevention
            </h2>
            <p>
              Preventive measures are taken to minimize environmental impact,
              ensuring all activities comply with local and national
              regulations.
            </p>

            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              Energy Efficiency & Innovation
            </h2>
            <p>
              We support the use of energy-efficient products, sustainable
              technology, and design for continuous improvement in performance.
            </p>

            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              Continuous Review
            </h2>
            <p>
              Environmental policies are reviewed periodically to ensure they
              remain relevant, effective, and aligned with company goals.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              <b>Last Updated:</b> 06.06.2024 <br />
              <b>Authorized By:</b> Nirmal Kumar Agarwal (Occupier)
            </p>
          </div>
        )}

        {/* SAFETY POLICY */}
        {active === "safety" && (
          <div className="space-y-6 text-[15px]">
            <p>
              <b>Adhunik Power & Natural Resources Ltd. (APNRL)</b> ensures that
              all operations and activities are performed with the highest
              regard for employee health and safety.
            </p>

            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              Hazard Identification & Risk Assessment
            </h2>
            <p>
              Hazards are regularly identified and assessed for their risks and
              impacts. Proper control measures are implemented for mitigation.
            </p>

            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              Legal Compliance
            </h2>
            <p>
              The company complies with all applicable legal and other
              requirements related to occupational health and safety management.
            </p>

            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              Awareness & Training
            </h2>
            <p>
              Continuous safety training and communication programs are provided
              to all employees and contractors.
            </p>

            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              Review & Continuous Improvement
            </h2>
            <p>
              The safety management system is periodically reviewed to ensure
              its effectiveness and relevance.
            </p>

            <h2 className="text-xl text-blue-700 font-semibold border-b border-blue-100 pb-1">
              Consultation & Participation
            </h2>
            <p>
              Workers and their representatives are encouraged to participate in
              safety reviews and improvement initiatives.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              <b>Last Updated:</b> 06.06.2024 <br />
              <b>Authorized By:</b> Nirmal Kumar Agarwal (Occupier)
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
