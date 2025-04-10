"use client";

import Link from "next/link";
import { Search, Menu, X, Home, Building2, Coffee, TestTube, Info, CalendarRange, Microscope } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAtom } from "jotai";
import { isMenuOpenAtom } from "@/store";
import { BookingModal } from "./BookingModal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="z-50 bg-background">
      {/* Main Header */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-4 hover-lift">
              <Image
                src="/oc-logo.png"
                alt="O'Connor Building Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
                unoptimized={true}
              />
              <span className="text-xl font-medium hidden md:inline tracking-tight">
                O&apos;Connor Building for Engineering & Sciences
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a 
                href="https://www.rice.edu/academics" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link"
              >
                Academics
              </a>
              <a 
                href="https://profiles.rice.edu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link"
              >
                Faculty & Staff
              </a>
              <a 
                href="https://research.rice.edu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link"
              >
                Research
              </a>
              <a 
                href="https://www.rice.edu/visit-rice" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link"
              >
                Visit Rice
              </a>
            </nav>

            <div className="flex items-center gap-4 md:hidden">
              <button 
                className="p-2 hover:bg-stone rounded-none transition-colors"
                onClick={toggleSearch}
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5" />
              </button>
              <button 
                className="p-2 hover:bg-stone rounded-none transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-[#4A4A4A] border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-between h-12">
            <nav className="flex items-center">
              <Link 
                href="/" 
                className="nav-link px-4 h-full flex items-center gap-2 text-white/90 hover:text-white"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link 
                href="/spaces-and-facilities" 
                className="nav-link px-4 h-full flex items-center gap-2 text-white/90 hover:text-white"
              >
                <Building2 className="h-4 w-4" />
                Spaces & Facilities
              </Link>
              <Link 
                href="/cafe" 
                className="nav-link px-4 h-full flex items-center gap-2 text-white/90 hover:text-white"
              >
                <Coffee className="h-4 w-4" />
                Cafe
              </Link>
              <Link 
                href="/research-portal" 
                className="nav-link px-4 h-full flex items-center gap-2 text-white/90 hover:text-white"
              >
                <Microscope className="h-4 w-4" />
                Research
              </Link>
              <Link 
                href="/about" 
                className="nav-link px-4 h-full flex items-center gap-2 text-white/90 hover:text-white"
              >
                <Info className="h-4 w-4" />
                About
              </Link>
            </nav>
            <Button
              variant="outline"
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-transparent border-white/20 text-white transition-colors duration-200 hover:bg-white/10 hover:border-white/30 flex items-center gap-2"
            >
              <CalendarRange className="h-4 w-4" />
              Book a Space
            </Button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-b border-border/50 bg-background">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 bg-stone border-none rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button 
                variant="outline"
                onClick={toggleSearch}
                className="rounded-none hover-lift"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col gap-6">
              <a 
                href="https://www.rice.edu/academics"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-lg"
                onClick={toggleMenu}
              >
                Academics
              </a>
              <a 
                href="https://profiles.rice.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-lg"
                onClick={toggleMenu}
              >
                Faculty & Staff
              </a>
              <a 
                href="https://research.rice.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-lg"
                onClick={toggleMenu}
              >
                Research
              </a>
              <a 
                href="https://www.rice.edu/visit-rice"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-lg"
                onClick={toggleMenu}
              >
                Visit Rice
              </a>
              <div className="border-t border-border/50 pt-6 mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="/"
                    className="nav-link flex items-center gap-2"
                    onClick={toggleMenu}
                  >
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                  <Link
                    href="/spaces-and-facilities"
                    className="nav-link flex items-center gap-2"
                    onClick={toggleMenu}
                  >
                    <Building2 className="h-4 w-4" />
                    Spaces & Facilities
                  </Link>
                  <Link
                    href="/cafe"
                    className="nav-link flex items-center gap-2"
                    onClick={toggleMenu}
                  >
                    <Coffee className="h-4 w-4" />
                    Cafe
                  </Link>
                  <Link
                    href="/research"
                    className="nav-link flex items-center gap-2"
                    onClick={toggleMenu}
                  >
                    <Microscope className="h-4 w-4" />
                    Research
                  </Link>
                  <Link
                    href="/about"
                    className="nav-link flex items-center gap-2"
                    onClick={toggleMenu}
                  >
                    <Info className="h-4 w-4" />
                    About
                  </Link>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsBookingModalOpen(true);
                    toggleMenu();
                  }}
                  className="w-full mt-6 transition-colors duration-200 flex items-center gap-2 justify-center"
                >
                  <CalendarRange className="h-4 w-4" />
                  Book a Space
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </header>
  );
}
