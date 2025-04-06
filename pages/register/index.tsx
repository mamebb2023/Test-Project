import Curve from "@/components/Curve/Curve";
import React from "react";

const Index = () => {
  return (
    <Curve backgroundColor="transparent">
      <div className="flex flex-col items-center p-5 bg-white/65 backdrop-blur-sm rounded-md max-w-md mx-auto shadow-md lg:max-w-2xl lg:p-10">
        <h2 className="text-2xl font-semibold mb-5 text-gray-800 lg:text-3xl lg:mb-8">
          Set Up Your Office
        </h2>
        <div className="flex flex-col items-center mb-5 lg:flex-row lg:space-x-4 lg:mb-8">
          <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center mb-1 lg:mb-0">
            <p className="text-white font-bold">Logo here</p>
          </div>
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
        </div>

        <div className="flex flex-col w-full space-y-3 lg:space-y-0 lg:flex-row lg:space-x-4">
          <div className="mb-3 w-full lg:mb-0">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Enter Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="First & Last Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-3 w-full lg:mb-0">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Enter Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Here"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="mb-3 w-full">
          <label
            htmlFor="companyName"
            className="block text-gray-700 text-sm font-bold mb-2 mt-4 lg:mt-6"
          >
            Your Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            placeholder="Name Here"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-3 w-full">
          <label
            htmlFor="website"
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
          >
            Your Company Website <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            id="website"
            placeholder="Website Here"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-3 w-full">
          <label
            htmlFor="companySize"
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
          >
            Company Size <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <ul>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">
                  <input
                    type="radio"
                    id="size-0-15"
                    name="companySize"
                    value="0-15"
                    className="mr-2"
                  />
                  <label htmlFor="size-0-15">0-15 Employees</label>
                </li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">
                  <input
                    type="radio"
                    id="size-16-50"
                    name="companySize"
                    value="16-50"
                    className="mr-2"
                  />
                  <label htmlFor="size-16-50">16-50 Employees</label>
                </li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">
                  <input
                    type="radio"
                    id="size-50-plus"
                    name="companySize"
                    value="50+"
                    className="mr-2"
                  />
                  <label htmlFor="size-50-plus">Than 50 Employees</label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full space-y-3 lg:space-y-0 lg:flex-row lg:space-x-4">
          <div className="mb-3 w-full lg:mb-0">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            >
              Create Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Type Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-5 w-full lg:mb-0">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-6"
          type="button"
        >
          Continue
        </button>
      </div>
    </Curve>
  );
};

export default Index;
