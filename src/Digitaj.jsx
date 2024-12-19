import React from "react";

function Digitaj() {
  return (
    <div className="h-auto mb-48 md:mb-16 bg-black mx-4 md:mx-8 rounded-lg flex flex-col sm:flex-row items-center justify-center py-12 sm:py-16">
      <div className="flex flex-col items-start justify-center sm:w-1/2 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl ml-4 sm:ml-16 mt-10 mb-5 font-medium title-font text-white">
          "Empower Your Digital Journey"
        </h1>

        <p className="text-slate-100 font-inter text-xl sm:text-2xl mb-8 mx-4 sm:mx-12 ml-4 sm:ml-20 mr-4 sm:mr-20 -tracking-tight">
          Discover how Boost Engine helps you thrive in today's <br />{" "}
          competitive digital landscape. Start your transformation.
        </p>

        {/* Input and Subscribe button */}
        <div className="flex items-center space-x-4 mb-8">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="ml-5 md:ml-20 w-full sm:w-80 p-3 rounded-lg border-2 border-gray-300 text-black"
          />
          {/* Subscribe Button */}
          <button className="border border-black bg-blue-600 text-slate-950 py-3 px-6 rounded-lg text-lg">
            Subscribe
          </button>
        </div>
      </div>

      {/* Right side image */}
      <div className="flex justify-center sm:w-1/2 mt-8 sm:mt-0">
        <img
          className="w-full sm:w-96 h-72 rounded-lg object-cover"
          src="/assets/earth.jpg"
          alt="Earth"
        />
      </div>
    </div>
  );
}

export default Digitaj;
