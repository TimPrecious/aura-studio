"use client"; // needed because this component reacts to clicks

import { useState } from "react";

// The links in the menu
const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  // isOpen remembers if the phone menu is open (true) or closed (false)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-accent/15">
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a href="#home" className="text-xl font-bold tracking-tight">
          Aura<span className="text-accentdark"> Studio</span>
        </a>

        {/* Links for bigger screens */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-accentdark transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button (only shows on phones) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Phone menu: only shows when isOpen is true */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-100 bg-white">
          <ul className="px-6 py-4 space-y-4 text-base font-medium text-gray-700">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)} // close the menu after a click
                  className="block hover:text-accentdark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}