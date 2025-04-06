"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { text, translate } from "./anim";
import { Tinos } from "next/font/google";

const routes = {
  "/": "Home",
  "/about-us": "About",
  "/contact-us": "Contact",
  "/features": "Features",
  "/register": "Sign Up",
  "/login": "Login",
};

const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

const font = Tinos({
  subsets: ["latin"],
  variable: "--font-tinos",
  weight: ["400", "700"],
});

export default function Curve({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor: string;
}) {
  const router = useRouter();

  return (
    <div className="h-full" style={{ backgroundColor }}>
      <motion.p
        className={`absolute left-1/2 top-[40%] text-white text-5xl z-3 -translate-x-1/2 text-center ${font.className}`}
        {...anim(text)}
      >
        {routes[router.route as keyof typeof routes] || "Unknown"}
      </motion.p>
      <motion.div
        className="z-2 fixed top-0 left-0 h-screen w-full bg-gray-900"
        {...anim(translate)}
      ></motion.div>
      {children}
    </div>
  );
}
