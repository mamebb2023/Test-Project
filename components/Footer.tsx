import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-4 opacity-50 text-sm">
      <Link href="#">Terms and Conditions</Link>
      <Link href="#">Privacy Policy</Link>
    </div>
  );
};

export default Footer;
