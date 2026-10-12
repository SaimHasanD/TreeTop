import Link from "next/link";
import { navLinks, siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#04100a] text-cream pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-flex flex-col mb-4">
              <span className="font-playfair text-2xl leading-none">TreeTop</span>
              <span className="font-inter text-[10px] tracking-widest text-amber mt-1">SYLHET</span>
            </Link>
            <p className="text-sage text-sm">{siteConfig.tagline}</p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-playfair text-lg mb-4 text-amber">Explore</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sage hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg mb-4 text-amber">Contact</h3>
            <ul className="space-y-2 text-sage text-sm">
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.email}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-playfair text-lg mb-4 text-amber">Follow us</h3>
            <ul className="space-y-2 text-sage text-sm">
              <li>
                <a href={siteConfig.social.facebook} className="hover:text-white transition-colors">Facebook</a>
              </li>
              <li>
                <a href={siteConfig.social.instagram} className="hover:text-white transition-colors">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-sage">
          <p>{siteConfig.copyright}</p>
          <p className="mt-2 md:mt-0">{siteConfig.address}</p>
        </div>
      </div>
    </footer>
  );
}
