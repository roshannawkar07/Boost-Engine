import React from "react";

const More = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <button class=" border border-black flex mx-auto mt-16 text-slate-950   py-2  px-8 focus:outline-none  rounded-full text-sm md:text-lg">
        Know more about us
      </button>

      {/* <h1 class="sm:text-3xl xl:bg-red-500 text-2xl text-center mt-7 font-medium title-font mb-4 text-black">
        The Jurney of Boost Engine
      </h1> */}

      <h1 class=" flex justify-center text-2xl mt-4 font-medium title-font text-black md:text-3xl ">
        The Jurney of Boost Engine
      </h1>

      <div className="  mt-32  container mx-auto flex  py-20 md:flex-row flex-col items-center">
        <div className="  lg:flex-grow md:w-1/2 lg:pr-24 md:pr-14 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className=" md:-mt-72 md:ml-11 text-justify mr-12 -mt-48 mb-8 leading-relaxed ml-10 text-black text-sm md:text-2xl">
            The Story Of Boost Engine Is One Of The Innovation And
            Determination. Founded With The Vision To Empower Modern Business
            Through Technology, Boost Engine Has Been At The Forefront Of
            Providing Cutting Edge Solutions Since Its Inception, Established On
            05 August 2023, Boost Engine Believes That True Success Is Driven By
            Impact Technology Can Have On Trasnforming Ideas Into Reality. With
            A Strong Commitment To Excellance, Boost Engine Has Become A Trusted
            Partner For Business Seeking To Leverage The Power Of Technology To
            Drive Growth And Innovation.
          </p>
          <div className="flex justify-center">
            <button className=" mb-3 md:ml-10 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Learn More &#x2197;
            </button>
          </div>
        </div>
        <div className=" flex flex-col md:-mt-36 ml-16 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mt-14">
          <img
            className=" md:mr-20 mb-10 shadow-2xl shadow-black-500/50   object-cover object-center rounded -ml-8 "
            alt="hero"
            src="/assets/img2.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default More;
