import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Close the mobile menu whenever the route changes
    setIsMobileMenuOpen(false);
  }, [router.pathname]);

  return (
    <header className="relative">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={50}
            className="h-6 w-auto"
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-orange-600 hover:text-orange-800 focus:outline-none transition cursor-pointer"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <i className="bx bx-x"></i>
            ) : (
              <i className="bx bx-menu"></i>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            className="link text-gray-700 hover:text-blue-500"
            href="/features"
          >
            Features
          </Link>
          <Link
            className="link text-gray-700 hover:text-blue-500"
            href="/about-us"
          >
            About us
          </Link>
          <Link
            className="link text-gray-700 hover:text-blue-500"
            href="/contact-us"
          >
            Contact us
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="btn btn-secondary bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div
        className={`absolute top-full left-0 w-full bg-white/60 backdrop-blur-sm shadow-md z-10 lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/features"
            className="block bg-gray-100 text-gray-900 hover:bg-gray-200 py-2 px-3 rounded-md text-base font-medium"
          >
            Features
          </Link>
          <Link
            href="/about-us"
            className="block text-gray-700 hover:bg-gray-100 py-2 px-3 rounded-md text-base font-medium"
          >
            About us
          </Link>
          <Link
            href="/contact-us"
            className="block text-gray-700 hover:bg-gray-100 py-2 px-3 rounded-md text-base font-medium"
          >
            Contact us
          </Link>
        </div>
        <div className="px-4 py-3 space-y-2 border-t border-gray-200">
          <Link
            href="/login"
            className="block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-md focus:outline-none focus:shadow-outline"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="block w-full text-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-md focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
