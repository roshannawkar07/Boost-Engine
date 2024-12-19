import React from "react";
import NNav from "./NNav";

function NavBlog() {
  return (
    <>
      <section className="text-gray-600 body-font bg-black">
        <NNav />
        <button class="  border border-black flex mx-auto mt-16 text-slate-950  bg-white rounded-full py-2  px-8 focus:outline-none   text-lg">
          Our Blogs
        </button>

        <h1 class="sm:text-3xl text-2xl text-center mt-7 font-medium title-font mb-4 text-white">
          Our Latest insight & update
        </h1>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className=" text-justify -mt-20 md:-mt-48 mb-8 leading-relaxed md:ml-10 text-white md:text-2xl">
              The Story Of Boost Engine Is One Of The Innovation And
              Determination. Founded With The Vision To Empower Modern Business
              Through Technology, Boost Engine Has Been At The Forefront Of
              Providing Cutting Edge Solutions Since Its Inception, Established
              On 05 August 2023, Boost Engine Believes That True Success Is
              Driven By Impact Technology Can Have On Trasnforming Ideas Into
              Reality. With A Strong Commitment To Excellance, Boost Engine Has
              Become A Trusted Partner For Business Seeking To Leverage The
              Power Of Technology To Drive Growth And Innovation.
            </p>
            <div className="flex justify-center">
              <button className=" ml-10 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Learn More &#x2197;
              </button>
            </div>
          </div>
          <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mt-14">
            <img
              className=" mt-2 shadow-2xl shadow-black-500/50   object-cover object-center rounded md:-ml-8 "
              alt="hero"
              src="/assets/img2.jpg"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-40 md:-mb-10 -mt-4">
            {/* ======== */}
            <div className="p-4 md:w-1/3 ">
              <div className="rounded-lg h-80 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/assets/img7.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
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
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
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
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Top traids in digital markating in this year
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap sm:-m-4 -mx-4  md:mb-96 -mt-4">
            {/* ======== */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-80 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/assets/img7.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
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
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
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
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Top traids in digital markating in this year
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavBlog;
