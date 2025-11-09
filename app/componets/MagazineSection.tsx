"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const magazines = [
  {
    month: "November 2024",
    summary:
      "APNRL illuminates Jharkhand and provides medical aid as part of their ongoing CSR initiatives.",
    image: "/nov24.jpg",
    pdfLink: "/magazines/november-2024.pdf",
  },
  {
    month: "December 2024",
    summary:
      "A voter awareness campaign was held to promote active participation in the democratic process.",
    image: "/dec24.jpg",
    pdfLink: "/magazines/december-2024.pdf",
  },
  {
    month: "January 2025",
    summary:
      "The management thanks everyone for their dedication and achievements throughout 2024.",
    image: "/jan25.jpg",
    pdfLink: "/magazines/january-2025.pdf",
  },
];

export default function MagazineSection() {
  return (
    <section id="magazines" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-700 tracking-tight">
          Our Monthly Magazines
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {magazines.map((item, index) => (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              {/* Magazine Cover */}
              <div
                className="h-72 rounded-t-xl bg-gray-200 transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-xl"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Overlay Button */}
              <Link
                href={item.pdfLink}
                target="_blank"
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 bg-blue-600 text-white p-2 rounded-full shadow-lg transition-all duration-300"
              >
                <ExternalLink size={20} />
              </Link>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.month}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.summary}
                </p>

                <Link href={item.pdfLink} target="_blank">
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md transition">
                    Read Magazine
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
