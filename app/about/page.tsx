"use client";

import { ArrowRight } from "lucide-react";
import HistorySection from "../componets/HistorySection.tsx";
export default function About() {
  return (
    <main className="bg-white text-gray-900">
      {/* WHO WE ARE */}
      <section className="max-w mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-2">Who We Are</h2>
        <div className="w-16 h-1 bg-blue-500 mb-6"></div>

        <p className="text-lg text-gray-600 max-w mb-12">
          Adhunik Power And Natural Resources (APNRL) is an Independent Power
          Producer (IPP) owning and operating a 2x270 MW coal based thermal
          power plant in Padampur, Saraikela-Kharsawan, Jharkhand State. APNRL
          inaugurated its first unit of 2x270 MW coal fired thermal power plant
          on 16th October 2012. This power plant is operating for about 10
          years. The Project is 2x270 MW (Gross) coal fired power plant located
          in Padampur in Saralkela-Kharsawan district and is about 20 kms from
          Jamshedpur. The power from the project is being evacuated through CTU
          substation (PGCIL) located very near to the power plant site. APNRL
          signed Long Term Power Purchase Agreement (PPA) directly with
          Jharkhand State Electricity Board, WBSEDCL (PTC) and TANGEDCO.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: "/1.jpg",
              title: "Strategy & Purpose",
              desc: "Our strategy outlines where we’re headed and why we do it. We build a better, more sustainable world.",
              link: "See Our Priorities",
            },
            {
              img: "/2.jpg",
              title: "Officers",
              desc: "Our leadership team enables our position as an industry leader and drives long-term growth.",
              link: "About Our Leaders",
            },
            {
              img: "/3.jpg",
              title: "History",
              desc: "Explore our journey — from foundation to global milestones that shaped our legacy.",
              link: "Explore Our History",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            >
              <img src={item.img} className="w-full h-48 object-cover" />
              <div className="p-6 space-y-3">
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <button className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
                  {item.link} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUILDING BETTER */}
      <section className="max-w mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-2">Building Better</h2>
        <div className="w-16 h-1 bg-blue-500 mb-6"></div>

        <p className="text-lg text-gray-600 max-w mb-12">
          APNRL built this 2x270 MW power plant through BTG and multiple BOP
          contracts. Bharat Heavy Electrical Limited was the Engineer, Procure
          and Construct (EPC) Contractor responsible for Boiler Turbine
          Generator package and they provided complete BTG ; auxiliaries
          excluding civil works. All other balance of plant systems and civil
          works were executed through multiple BOP package contractors.Water
          requirement for the power plant is fulfilled from Subarnarekha River
          which about 10 km from the plant. Presently around 400 on roll
          employees are working in this plant. This plant is providing jobs to
          thousands of other employee through contracts directly or indirectly.
          The availability of Coal in abundance makes Jharkhand an ideal state
          for setting up Thermal Power Plants at the Coal Pits. The Present
          total installed power capacity of Jharkhand is 2590 MW. APNRL with a
          total of 540 MW comes to about 21% of the present installed capacity.
          The coal for APNRL plant comes from BCCL and CCL mines situated in the
          Jharkhand state.{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: "/4.jpg",
              title: "Sustainability",
              desc: "Our efforts aim to reduce emissions and support long-term climate goals.",
              link: "Explore Our Commitment",
            },
            {
              img: "/5.jpg",
              title: "Innovation",
              desc: "We evolve with the world — creating real solutions to real customer challenges.",
              link: "View Solutions",
            },
            {
              img: "/6.jpg",
              title: "Community Impact",
              desc: "We partner with people and organizations to create a better tomorrow.",
              link: "Explore Our Impact",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            >
              <img src={item.img} className="w-full h-48 object-cover" />
              <div className="p-6 space-y-3">
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <button className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
                  {item.link} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEET OUR OPEN GLOBE SECTION */}
      <section className="w-full bg-gray-50 py-28">
        <div className="max-w mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: VIDEO THUMB (HEIGHT FIXED) */}
          <div className="relative w-full h-80 md:h-[420px] rounded-xl overflow-hidden shadow-md group cursor-pointer">
            <img
              src="/open-globe.jpg"
              alt="Open Globe Video"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/50 transition"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 text-blue-700 flex items-center justify-center rounded-full shadow-lg group-hover:scale-110 transition">
                ▶
              </div>
            </div>

            <h2 className="absolute bottom-5 left-6 text-4xl font-bold text-white tracking-tight">
              140 Years
            </h2>
          </div>

          {/* RIGHT: TEXT */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-gray-900">
              Meet our Open Globe
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our story begins with a globe, a symbol reflecting our passion to
              build smart, healthy and sustainable tomorrows, powered by our
              worldwide presence and deep expertise.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our Open Globe is us. Get to know us better.
            </p>

            <button className="px-5 py-2.5 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition font-medium">
              View Full-Screen Video
            </button>
          </div>
        </div>
      </section>
      <HistorySection />
    </main>
  );
}
