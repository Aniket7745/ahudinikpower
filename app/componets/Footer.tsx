import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B2239] text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* ==== Logo + Tagline ==== */}
        <div>
          <img
            src="/adhunik-logo.png"
            alt="Adhunik Power Logo"
            className="w-36 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Powering progress with reliable and sustainable energy.
          </p>

          <a
            href="#"
            className="inline-block mt-4 text-blue-300 hover:text-white font-medium"
          >
            Read More &raquo;
          </a>

          <div className="flex gap-4 mt-6 text-xl">
            <a href="#" className="hover:text-white">
              T
            </a>
            <a href="#" className="hover:text-white">
              in
            </a>
            <a href="#" className="hover:text-white">
              F
            </a>
            <a href="#" className="hover:text-white">
              S
            </a>
            <a href="#" className="hover:text-white">
              P
            </a>
          </div>
        </div>

        {/* ==== Quick Links ==== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "About Us",
              "CSR",
              "Policies",
              "Media",
              "Investors",
              "Tenders",
              "Environment",
            ].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                - {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ==== Contact Info ==== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>

          <div className="space-y-4 text-sm leading-relaxed">
            <div>
              <p className="font-semibold text-white">Plant:</p>
              <p>
                Adhunik Power & Natural Resources Ltd
                <br />
                Village: Padampur
                <br />
                Behind: P.G.C.I.L. Substation
                <br />
                Jharkhand - 832402
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Phone size={16} /> 0657-6628439
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">Regd. & Corp. Office:</p>
              <p>
                Lansdowne Towers, 5th Floor, 2/1A, Sarat Bose Road, Kolkata –
                700020
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Phone size={16} /> 033-66384700
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">Gurgaon Office:</p>
              <p>468 Udyog Vihar, 1st Floor, Phase 3, Gurgaon – 122016</p>
              <p className="flex items-center gap-2 mt-1">
                <Phone size={16} /> 012-46054500
              </p>
            </div>

            <p className="flex items-center gap-2 mt-1">
              <Mail size={16} /> info@adhunikpower.co.in
            </p>
          </div>
        </div>

        {/* ==== Map ==== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Locate Us</h3>
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <iframe
              className="w-full h-56"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18..."
            ></iframe>
          </div>
        </div>
      </div>

      {/* ==== Bottom Bar ==== */}
      <div className="mt-14 pt-4 border-t border-gray-700 text-center text-sm">
        <p>Copyright © Adhunik Power. All rights reserved.</p>
        <p className="mt-1">
          Designed By:{" "}
          <span className="text-blue-300 font-semibold">
            Neha Srivastava (Information Technology)
          </span>
        </p>
      </div>

      {/* ==== Back to top button ==== */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-xl transition"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}
