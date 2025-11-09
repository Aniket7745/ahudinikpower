"use client";

import { Mail, Phone, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Talk to our team
        </h1>
        <p className="mt-3 text-gray-600">
          Reach out to us for any business, CSR, investor, or media related
          queries.
        </p>
      </section>

      {/* Card */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* LEFT: FORM */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-blue-600">*</span>
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <div className="mt-1 flex gap-2">
                  <select className="w-28 rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>IN +91</option>
                    <option>US +1</option>
                    <option>UK +44</option>
                  </select>
                  <input
                    className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message <span className="text-blue-600">*</span>
                </label>
                <textarea
                  rows={4}
                  className="mt-1 w-full resize-y rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Leave us a message..."
                  required
                />
              </div>

              {/* Services */}
              <div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send message
                </button>
              </div>
            </form>

            {/* RIGHT: CONTACT INFO (UPDATED) */}
            <aside className="space-y-10">
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Get in touch
                </h3>
                <p className="mt-1 text-sm font-medium text-gray-700">
                  Adhunik Power & Natural Resources Limited
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <MapPin size={16} className="text-blue-600" /> Location
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Adhunik Power & Natural Resources Ltd
                  <br />
                  Village: Padampur | Behind: P.G.C.I.L. Substation
                  <br />
                  Saraikela – Kharswan | Jharkhand – 832402
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Mail size={16} className="text-blue-600" /> Email
                </h4>
                <p className="text-blue-700 font-medium hover:underline cursor-pointer">
                  info@adhunikpower.co.in
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Phone size={16} className="text-blue-600" /> Call
                </h4>
                <ul className="space-y-1 text-gray-700">
                  <li>Jamshedpur Plant – 0657-6628439</li>
                  <li>Kolkata Office – 033-66384700</li>
                  <li>Delhi Office – 011-30764500</li>
                </ul>
              </div>

              <div className="pt-6"></div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
