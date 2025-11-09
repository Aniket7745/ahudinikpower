"use client";

export default function HistorySection() {
  const timeline = [
    { year: "2010", title: "Company Founded" },
    { year: "2012", title: "First Power Unit Launched" },
    { year: "2015", title: "Reached 500+ Employees" },
    { year: "2018", title: "Expanded Operations Nationwide" },
    { year: "2023", title: "10+ Years of Excellence" },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900">History</h2>
        <p className="text-sm text-gray-500 mt-1 tracking-wide">
          Here's Our Story
        </p>
        <div className="w-10 h-[2px] bg-blue-600 mx-auto mt-3 mb-14" />

        {/* Timeline */}
        <div className="relative flex items-center justify-between w-full border-t-2 border-blue-200 pt-10">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-1/5"
            >
              {/* Dot */}
              <div
                className="
                w-7 h-7 rounded-full border-2 border-blue-400
                bg-white flex items-center justify-center
                text-xs font-semibold
                text-blue-600
              "
              >
                {index + 1}
              </div>

              {/* Year */}
              <p className="mt-3 text-xs text-gray-500 tracking-wider">
                {item.year}
              </p>
            </div>
          ))}
        </div>

        {/* Event Details - Centered to match screenshot */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800">
            Company Founded
          </h3>
          <div className="w-8 h-[2px] bg-blue-500 mx-auto my-3" />
          <p className="max-w-2xl mx-auto text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            commodo, velit eget ullamcorper venenatis, quam justo gravida
            libero, sit amet varius risus lorem nec arcu.
          </p>
        </div>
      </div>
    </section>
  );
}
