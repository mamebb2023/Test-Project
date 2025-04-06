import Curve from "@/components/Curve/Curve";
import React from "react";

const Features = () => {
  return (
    <Curve backgroundColor="transparent">
      <div className="h-full flex flex-col items-center justify-start p-6 md:p-10 lg:p-16">
        <div className="bg-white/65 backdrop-blur-sm p-8 rounded shadow-md w-full max-w-5xl">
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
              Flexible Pricing Plans
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Choose a plan that works best for you & your team
            </p>
            <div className="flex justify-center mb-6">
              <button className="bg-yellow-400 text-white font-semibold py-2 px-6 rounded-l-full focus:outline-none">
                Monthly
              </button>
              <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-r-full focus:outline-none">
                Yearly (Save 60%)
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 rounded-md shadow-md p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                    Standard
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-gray-900">
                      $99
                    </span>
                    <span className="text-gray-700"> / Per Month</span>
                  </div>
                  <ul className="list-disc pl-6 text-gray-600 mb-6">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 rounded-md focus:outline-none">
                  Choose Plan
                </button>
              </div>

              <div className="bg-gray-200 rounded-md shadow-lg p-6 flex flex-col justify-between">
                <div>
                  <div className="text-center mb-2">
                    <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                    Premium
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-indigo-900">
                      $299
                    </span>
                    <span className="text-gray-700"> / Per Month</span>
                  </div>
                  <ul className="list-disc pl-6 text-gray-600 mb-6">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-3 rounded-md focus:outline-none">
                  Choose Plan
                </button>
              </div>

              <div className="bg-gray-100 rounded-md shadow-md p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                    Enterprise
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit.
                  </p>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-gray-900">
                      Custom
                    </span>
                    <span className="text-gray-700"> Plan</span>
                  </div>
                  <ul className="list-disc pl-6 text-gray-600 mb-6">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul>
                </div>
                <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-3 rounded-md focus:outline-none">
                  Contact Us
                </button>
              </div>
            </div>
          </section>

          <p className="text-center text-gray-500 text-sm mt-8">
            Explore all the ways our platform can empower your team.
          </p>
        </div>
      </div>
    </Curve>
  );
};

export default Features;
