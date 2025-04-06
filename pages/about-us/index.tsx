import Curve from "@/components/Curve/Curve";
import React from "react";

const AboutUs = () => {
  return (
    <Curve backgroundColor="transparent">
      <div className="h-full flex flex-col items-center justify-center p-6 md:p-10 lg:p-16">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
            About Us
          </h2>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Our Story
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Our Mission
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Our Values
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="mb-2">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </li>
              <li className="mb-2">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Meet the Team
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum massa justo sit amet risus.
            </p>
            {/* You can add team member profiles here if needed */}
          </section>

          <p className="text-center text-gray-500 text-sm mt-6">
            Learn more about our journey and principles.
          </p>
        </div>
      </div>
    </Curve>
  );
};

export default AboutUs;
