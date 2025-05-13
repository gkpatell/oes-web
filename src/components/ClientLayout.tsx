"use client";

import { Header } from "@/components/Header";
import { Provider } from "jotai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-stone border-t border-border/10">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="nav-link">About O'Connor</Link></li>
              <li><Link href="/directory" className="nav-link">Directory</Link></li>
              <li>
                <Link
                  href="https://news.rice.edu"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Research</h3>
            <ul className="space-y-2">
              <li><Link href="/research-portal" className="nav-link">Research Portal</Link></li>
              <li>
                <Link
                  href="https://magazine.rice.edu"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rice Magazine
                </Link>
              </li>
              <li><Link href="/spaces-and-facilities" className="nav-link">Facilities</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Visit</h3>
            <ul className="space-y-2">
              <li><Link href="/maps-and-directions" className="nav-link">Maps & Directions</Link></li>
              <li><Link href="/cafe" className="nav-link">Café</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Emergency</h3>
            <ul className="space-y-2">
              <li><Link href="/emergency-info" className="nav-link">Emergency Information</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/10 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Rice University. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
              <Link href="/accessibility" className="hover:text-foreground">Accessibility</Link>
              <Link href="/terms" className="hover:text-foreground">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </Provider>
  );
} 