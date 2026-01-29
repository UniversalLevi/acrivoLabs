import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/constants";
import Button from "../ui/Button";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms & Conditions" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-neon-cyan/20 bg-dark-950/50 backdrop-blur-sm">
      {/* Top glow effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
      
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
                <Image
                  src="/logo.png"
                  alt="Acrivo Labs"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan bg-clip-text text-transparent">
                Acrivo Labs
              </span>
            </Link>
            <p className="text-text-secondary text-sm mb-8 max-w-md leading-relaxed">
              We design and build modern digital experiences for growing
              businesses. Focused on clarity, results, and long-term
              partnerships.
            </p>
            
            {/* CTA Section */}
            <div className="mb-6">
              <Button href="/contact" variant="primary" className="mb-4">
                Book a Discovery Call
              </Button>
            </div>
            
            <div className="flex flex-col space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-text-secondary hover:text-neon-cyan transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text-secondary hover:text-neon-cyan transition-colors text-sm group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-primary font-semibold mb-6 text-neon-cyan/80">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-neon-cyan transition-colors text-sm inline-block hover:translate-x-1 transition-transform duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-text-primary font-semibold mb-6 text-neon-cyan/80">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-neon-cyan transition-colors text-sm inline-block hover:translate-x-1 transition-transform duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-dark-800">
              <p className="text-text-muted text-xs font-mono">
                © {new Date().getFullYear()} Acrivo Labs. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
