import React from "react";

const Home = () => {
  return (
    <div className=" h-svh md:h-screen w-full bg-black flex flex-col lg:flex-row items-center justify-between px-8">
      <div className="   lg:mb-96 lg:my-60 lg:flex-grow md:w-1/2  md:pr-16 flex flex-col items-center text-center md:text-left">
        <h1 className=" mt-20 title-font sm:text-6xl text-4xl lg:text-6xl md:mb-4 font-medium text-white">
          Boost Engine
          <br className="hidden lg:inline-block" />
          Solution
        </h1>
        <p className="mb-4 lg:mr-9 leading-relaxed text-white">
          Navigating Success in the Digital Era: Your{" "}
          <br className="hidden lg:inline-block" />
          Partner for Growth and innovation
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className=" lg:mr-52 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Image with responsiveness */}
      <img
        alt="ecommerce"
        className=" lg:mb-28 mb-80 lg:mb-0 md:mb-14 mt-4 lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="/assets/update1.jpg"
      />
    </div>
  );
};

export default Home;
