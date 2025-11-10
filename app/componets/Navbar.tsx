"use client";

import Link from "next/link";
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
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <nav className="flex items-center justify-between px-6 lg:px-8 py-4">
        {/* Branding */}
        <Link href="/" className="text-2xl font-extrabold text-blue-700">
          AdhunikPower
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex mx-auto">
          <NavigationMenuList className="flex gap-6">
            {LINKS.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 text-sm ${
                    isActive(link.href)
                      ? "text-blue-700 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Removed Contact Button */}
        <div className="hidden md:block"></div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-2">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 text-sm ${
                isActive(link.href)
                  ? "text-blue-700 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
