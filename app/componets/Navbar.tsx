"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/csr", label: "CSR" },
  { href: "/policies", label: "Policies" },
  { href: "/media", label: "Media" },
  { href: "/investors", label: "Investors" },
  { href: "/tenders", label: "Tenders" },
  { href: "/corporate", label: "Corporate Information" },
  { href: "/environment", label: "Environment" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md shadow-sm transition-all duration-200">
      <nav className="flex items-center justify-between px-6 lg:px-10 py-3">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/adhuniklogo.png"
            alt="Adhunik Power Logo"
            width={45}
            height={45}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Center: Navigation Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-blue-700 font-semibold border-b-2 border-blue-700"
                        : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Contact Us Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm px-5">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden text-gray-700 hover:text-blue-700 transition"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {isMobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </nav>

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur-sm px-5 py-4 space-y-2 shadow-sm">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm transition-colors duration-150 ${
                isActive(link.href)
                  ? "text-blue-700 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Contact Button */}
          <Link href="/contact">
            <Button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium">
              Contact Us
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
