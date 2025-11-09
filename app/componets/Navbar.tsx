"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/csr", label: "CSR" },
  { href: "/policies", label: "Policies" },
  {
    label: "Media",
    items: [
      { href: "/media/photos", label: "Photo Gallery" },
      { href: "/media/videos", label: "Video Gallery" },
      { href: "/media/press", label: "Press Releases" },
    ],
  },
  { href: "/investors", label: "Investors" },
  {
    label: "Tenders",
    items: [
      { href: "/tenders/open", label: "Open Tenders" },
      { href: "/tenders/closed", label: "Closed Tenders" },
    ],
  },
  {
    label: "Corporate Information",
    items: [
      { href: "/corporate/board", label: "Board of Directors" },
      { href: "/corporate/governance", label: "Corporate Governance" },
    ],
  },
  { href: "/environment", label: "Environment" },
  {
    label: "Contact Us",
    items: [
      { href: "/contact/locations", label: "Locations" },
      { href: "/contact/support", label: "Support" },
    ],
  },
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
            {LINKS.map((link) =>
              link.items ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="hover:text-blue-600">
                      {link.label} ▾
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {link.items.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href} className="hover:text-blue-600">
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
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
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Button for Desktop */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact
            </Button>
          </Link>
        </div>

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
          {LINKS.map((link) =>
            link.items ? (
              <div key={link.label}>
                <div className="font-medium">{link.label}</div>
                <div className="ml-4 space-y-1">
                  {link.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
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
            ),
          )}
          <Link href="/contact/support">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
              Contact Us
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
