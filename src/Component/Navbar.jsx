import { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Shop", href: "#" },
  { label: "Mobile", href: "#" },
  { label: "TV & AV", href: "#" },
  { label: "Appliances", href: "#" },
  { label: "Computing & Displays", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "SmartThings", href: "#" },
  { label: "AI", href: "#" }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="w-full mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo and Desktop Nav */}
        <div className="flex items-center gap-3 sm:gap-10">
          <span className="font-bold text-xl sm:text-2xl tracking-wider">SAMSUNG</span>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-base font-medium text-gray-700">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="hover:text-black">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        {/* Right: Search, icons, support, hamburger */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Desktop Support */}
          <div className="hidden md:flex items-center gap-2 text-gray-700 text-sm font-semibold">
            <span className="hover:text-black cursor-pointer">Support</span>
            <span className="hover:text-black cursor-pointer">
              For Business <span className="inline-block transform -rotate-45">&rarr;</span>
            </span>
          </div>
          {/* Search */}
          <div className="relative w-32 sm:w-36">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full pl-9 pr-4 py-2 bg-gray-100 text-gray-800 placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          {/* Icons */}
          <FiShoppingCart className="text-gray-700 hover:text-black cursor-pointer" size={22} />
          <FiUser className="text-gray-700 hover:text-black cursor-pointer" size={22} />
          {/* Hamburger only for md and below, placed after profile icon */}
          <button
            className="md:hidden ml-1 text-gray-700"
            onClick={() => setMobileOpen(open => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>
      {/* Mobile & Tablet Nav Dropdown */}
      {mobileOpen && (
        <div className="w-full px-4 pb-3 md:hidden bg-white border-b border-gray-100 z-50 animate-fadeIn">
          <nav className="flex flex-col gap-2 font-medium text-gray-700 pt-2">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="py-2 px-1 rounded hover:text-black hover:bg-gray-100 transition"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Support block for mobile */}
          <div className="mt-3 flex flex-row gap-4 items-center text-gray-700 text-sm font-semibold">
            <span className="hover:text-black cursor-pointer">Support</span>
            <span className="hover:text-black cursor-pointer">
              For Business <span className="inline-block transform -rotate-45">&rarr;</span>
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
