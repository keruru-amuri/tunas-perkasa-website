'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tunas Perkasa</h3>
            <p className="mb-2">Empowering students to achieve academic excellence through personalized tutoring.</p>
            <p className="text-sm">© {new Date().getFullYear()} Tunas Perkasa. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-300 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/tutors" className="hover:text-blue-300 transition">
                  Our Tutors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">
                <span className="font-medium">Address:</span><br />
                123 Education Street,<br />
                Kuala Lumpur, Malaysia
              </p>
              <p className="mb-2">
                <span className="font-medium">Phone:</span><br />
                +60 12-345-6789
              </p>
              <p className="mb-2">
                <span className="font-medium">Email:</span><br />
                info@tunasperkasa.com
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
