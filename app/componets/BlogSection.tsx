"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "APNRL Wins 'Best Water Efficient Unit' National Award",
    date: "Jan 15, 2025",
    category: "Awards",
    summary:
      "Recognized nationally for adopting advanced water management systems and sustainable operations.",
  },
  {
    title: "Community Blood Donation Drive Led by APNRL Team",
    date: "Dec 27, 2024",
    category: "CSR",
    summary:
      "Over 300 units of blood collected during APNRL-led donation camp in Saraikela to support local hospitals.",
  },
  {
    title: "Optimizing Thermal Power for State Grid Demand",
    date: "Nov 16, 2024",
    category: "Operations",
    summary:
      "Advanced boiler systems and real-time grid monitoring have helped APNRL achieve record power efficiency.",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400 tracking-tight">
          Latest News & Updates
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gray-800 rounded-xl shadow-lg border-l-4 border-blue-600 hover:scale-[1.02] transition-transform duration-300"
            >
              <div
                className="h-44"
                style={{
                  backgroundImage: `url('/blog.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className="p-5 flex flex-col gap-2">
                <span className="text-xs tracking-wider uppercase font-semibold text-blue-400">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold mt-1 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400">{post.date}</p>
                <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                  {post.summary}
                </p>
                <Link
                  href="#"
                  className="flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300 transition"
                >
                  Read Details <ArrowRight size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/blog">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-medium shadow-lg transition">
              View All Articles
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
