import React from "react";

const Suscribe = () => {
  return (
    <div className=" mt-9 w-11/12 ml-2 md:ml-16 rounded-3xl h-52 md:h-96 md:mt-36 bg-indigo-700 flex flex-col justify-center items-center p-6">
      <p className="text-white text-right md:text-3xl mb-4">
        Subscribe to our newsletter for new product <br />
        release, critical updates, and special offers !
      </p>
      <br />
      <div className="flex items-center space-x-4 mb-8">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="ml-5 md:ml-20 w-full sm:w-80 p-1 md:p-3 rounded-lg border-2 border-gray-300 text-black"
        />
        {/* Subscribe Button */}
        <button className="border border-black bg-black text-white py-2 md:py-3 px-3 md:px-6 rounded-lg text-base md:text-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Suscribe;
