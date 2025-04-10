import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About OES</h3>
            <p className="text-gray-600">
              The Ralph S. O&apos;Connor Building for Engineering and Science is a
              state-of-the-art facility at Rice University, fostering innovation
              and collaboration in engineering and science.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/spaces-and-facilities"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Spaces & Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/research-portal"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Research Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>6100 Main Street</li>
              <li>Houston, TX 77005</li>
              <li>Phone: (713) 348-0000</li>
              <li>Email: info@rice.edu</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/riceuniversity"
                className="text-gray-600 hover:text-gray-900"
              >
                Twitter
              </Link>
              <Link
                href="https://www.linkedin.com/school/rice-university/"
                className="text-gray-600 hover:text-gray-900"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/riceuniversity/"
                className="text-gray-600 hover:text-gray-900"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Rice University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
