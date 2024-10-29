"use client";

import Link from "next/link";
import {
  IconMailUp,
  IconPhone,
  IconMapPin,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconArrowUp,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <IconMailUp className="mr-2 h-5 w-5" />
                <a
                  href="mailto:info@example.com"
                  className="hover:text-white transition-colors"
                >
                  info@example.com
                </a>
              </li>
              <li className="flex items-center">
                <IconPhone className="mr-2 h-5 w-5" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <IconMapPin className="mr-2 h-5 w-5" />
                <span>123 Main St, City, Country</span>
              </li>
            </ul>
          </div>

          {/* Social Media and Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-white transition-colors">
                <IconBrandFacebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <IconBrandTwitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <IconBrandInstagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>

          {/* Legal Links and Copyright */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
            <p className="text-sm">
              &copy; 2023 Your Company. All rights reserved.
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="mt-8 text-center">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <IconArrowUp className="h-4 w-4" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
