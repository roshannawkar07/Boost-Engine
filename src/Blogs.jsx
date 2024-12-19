import React from "react";

function Blogs() {
  return (
    <section className="text-gray-600 body-font">
      <button class=" border border-black flex mx-auto -mt-10 mb:mt-1 text-slate-950   py-2  px-8 focus:outline-none  rounded-full text-lg">
        Our blogs
      </button>
      <h1 class=" -mb-20 text-lg md:text-xl sm:text-3xl  text-center mt-7 font-medium title-font md:-mb-12 text-black">
        Out latest insight & update
      </h1>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {/* ======== */}
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-80 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/img7.jpg"
              />
            </div>
            <h2 className="text-lg md:text-xl font-medium title-font text-gray-900 mt-5">
              How to Drive Business Growth In Digital Era
            </h2>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-80 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/img8.jpg"
              />
            </div>
            <h2 className="text-lg md:text-xl font-medium title-font text-gray-900 mt-5">
              The Ultimate Guide to Data-Driven Markating
            </h2>
          </div>

          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-80 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/img9.jpg"
              />
            </div>

            <h2 className="text-lg md:text-xl font-medium title-font text-gray-900 mt-5">
              Top traids in digital markating in this year
            </h2>
          </div>
          <button className="  ml-32  md:my-12 md:ml-36 inline-flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Learn More &#x2197;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
