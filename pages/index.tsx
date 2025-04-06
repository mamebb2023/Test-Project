import React from "react";
import Link from "next/link";
import Curve from "@/components/Curve/Curve";

const HomePage = () => {
  return (
    <Curve backgroundColor="transparent">
      <div className="flex-center h-full">
        <div className="py-8 px-14 rounded-full flex flex-col items-center justify-center text-white text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome To Your{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
              Virtual office
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-80">
            Experience seamless collaboration and productivity.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Instant Demo
            </Link>
            <Link
              href="/setup-your-office"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Setup Your Company
            </Link>
          </div>
        </div>
      </div>
    </Curve>
  );
};

export default HomePage;
