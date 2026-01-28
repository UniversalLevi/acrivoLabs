import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.jpeg"
                alt="Acrivo Labs"
                fill
                className="object-contain group-hover:opacity-80 transition-opacity"
                priority
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-blue to-primary-blue-light bg-clip-text text-transparent">
              Acrivo Labs
            </span>
          </Link>

          {/* Navigation */}
          <Navigation />

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button href="/contact" variant="primary">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
