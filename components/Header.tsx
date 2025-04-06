import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={50}
          className="h-6 w-auto"
        />
      </Link>

      <div className="flex items-center gap-3">
        <Link className="link" href="/features">
          Features
        </Link>
        <Link className="link" href="/about-us">
          About us
        </Link>
        <Link className="link" href="/contact-us">
          Contact us
        </Link>
      </div>

      <div className="flex-center gap-2">
        <Link href="/login" className="btn btn-primary">
          Log In
        </Link>
        <Link href="/register" className="btn btn-secondary">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
