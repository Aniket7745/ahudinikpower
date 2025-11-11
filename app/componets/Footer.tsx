"use client";

import {
  Mail,
  Phone,
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1C] text-gray-400 border-t border-gray-800">
      {/* === Top Section === */}
      <div className="max-w-[1600px] mx-auto px-10 xl:px-24 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* === Logo + Tagline === */}
        <div>
          <img
            src="/adhuniklogo.png"
            alt="Adhunik Power Logo"
            className="w-32 mb-3 opacity-90 hover:opacity-100 transition"
          />
          <p className="text-xs leading-relaxed text-gray-400 mb-3">
            Powering progress with reliable and sustainable energy.
          </p>
          <a
            href="#"
            className="inline-block text-blue-400 hover:text-white text-xs font-medium"
          >
            Read More &raquo;
          </a>
        </div>

        {/* === Contact Info === */}
        <div className="leading-relaxed">
          <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">
            Get in Touch
          </h3>
          <div className="space-y-3 text-xs">
            <div>
              <p className="font-semibold text-gray-200">Plant:</p>
              <p>
                Adhunik Power & Natural Resources Ltd <br />
                Village: Padampur <br />
                Behind: P.G.C.I.L. Substation <br />
                Jharkhand - 832402
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Phone size={12} /> 0657-6628439
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-200">
                Regd. & Corp. Office:
              </p>
              <p>
                Lansdowne Towers, 5th Floor, 2/1A, Sarat Bose Road, Kolkata –
                700020
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Phone size={12} /> 033-66384700
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-200">Gurgaon Office:</p>
              <p>468 Udyog Vihar, 1st Floor, Phase 3, Gurgaon – 122016</p>
              <p className="flex items-center gap-2 mt-1">
                <Phone size={12} /> 012-46054500
              </p>
            </div>

            <p className="flex items-center gap-2 mt-1">
              <Mail size={12} /> info@adhunikpower.co.in
            </p>
          </div>
        </div>

        {/* === Map Section === */}
        <div>
          <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">
            Locate Us
          </h3>
          <div className="rounded-md overflow-hidden shadow-md border border-gray-700">
            <iframe
              className="w-full h-36 grayscale hover:grayscale-0 transition"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18..."
            ></iframe>
          </div>
        </div>

        {/* === Social Links === */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">
            Follow Us
          </h3>
          <div className="flex items-center gap-5 text-gray-400">
            <a href="#" className="hover:text-blue-400 transition">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Linkedin size={16} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="max-w-[1600px] mx-auto border-t border-gray-800 px-10 xl:px-24 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <div className="flex flex-wrap gap-4 mb-2 md:mb-0 justify-center md:justify-start">
          <a href="#" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            About Us
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Investors
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Media
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>
        <p className="text-center md:text-right">
          © {new Date().getFullYear()} Adhunik Power. All rights reserved.
        </p>
      </div>

      {/* === Back to Top Button === */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full shadow-md transition transform hover:-translate-y-1"
      >
        <ArrowUp size={18} />
      </a>
    </footer>
  );
}
