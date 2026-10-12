"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, getWhatsAppLink } from "@/data/content";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <nav
          className={`transition-colors duration-300 ${
            scrolled || isOpen ? "bg-forest-dark shadow-md" : "bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex flex-col items-center">
                <span className="font-playfair text-2xl text-cream leading-none">TreeTop</span>
                <span className="font-inter text-[10px] tracking-widest text-amber mt-1">SYLHET</span>
              </Link>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-cream/90 hover:text-amber transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href={getWhatsAppLink("Hi TreeTop! I have an inquiry about visiting.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp py-2 px-6 text-sm"
                >
                  Book on WhatsApp
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-cream p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Demo Banner */}
        <div className="w-full bg-amber text-charcoal text-center text-[12px] sm:text-[13px] py-[6px] px-4 font-medium leading-normal shadow-sm">
          This is a demo website built for presentation purposes only. Not the official TreeTop Sylhet website.
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-forest-deep flex flex-col items-center justify-center space-y-8 pt-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-cream text-2xl font-playfair hover:text-amber"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={getWhatsAppLink("Hi TreeTop! I have an inquiry about visiting.")}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp text-lg mt-8"
          >
            Book on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
