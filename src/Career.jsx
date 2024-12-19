import React from "react";
import Mission from "./Mission";

function Career() {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-blue-950 to-black -mt-10">
      {/* Career Button */}

      <div className=" flex flex-col-reverse mt-10 ">
        <button className="flex mx-auto mt-7 md:mt-14 text-slate-950 bg-white py-2 px-8 focus:outline-none rounded-full text-lg">
          Career
        </button>
      </div>

      {/* Header Section */}
      <h1 className="text-lg md:-mr-24 md:text-5xl text-center mt-16 flex flex-col font-medium title-font text-white">
        Join Our Team: Innovate, Grow, Succeed
      </h1>

      {/* Main Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row px-5 py-24 items-center">
        {/* Flex Container for Image and Text */}
        <div className="flex flex-col md:flex-row items-center w-full space-x-8">
          {/* Image Section */}

          <div className="w-72 md:w-96 md:ml-16 -mt-40 mb-8 md:mb-0 animate__animated animate__fadeInLeft">
            <img
              className="shadow-2xl shadow-black-500/50 object-cover object-center rounded-lg"
              alt="hero"
              src="/assets/img2.jpg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-2/3 md:-mt-40 w-full text-center md:text-left">
            <p className="text-white mr-3 text-sm md:text-2xl leading-relaxed mb-8 px-4 md:px-0">
              At Boost Engine, we are not just building technology — we're
              shaping the future. <br /> Join a team of passionate innovators
              and problem-solvers committed to driving business success through
              cutting-edge solutions.
            </p>

            {/* Learn More Button */}
            <div className="flex justify-center md:justify-start">
              <button className="ml-10 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-all duration-300">
                Learn More &#x2197;
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="sm:text-3xl text-2xl text-center mt-7 mb-20 font-medium title-font text-white">
        The Journey of Boost Engine
      </h1>

      <Mission />
    </section>
  );
}

export default Career;
