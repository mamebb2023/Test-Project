import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Funnel_Display } from "next/font/google";

import "@/styles/globals.css";
import "@/styles/styles.css";

const font = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-tinos",
  weight: ["400", "700"],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div
      className={`${font.className} flex flex-col h-screen text-white overflow-hidden`}
      style={{ background: "url('/bg.png') no-repeat center center/cover" }}
    >
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header />
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </div>
  );
}
