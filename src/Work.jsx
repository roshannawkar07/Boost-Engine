import React from "react";
import Digitaj from "./Digitaj";

const Work = () => {
  return (
    <div className="mb-20 bg-black">
      <div className="-mb-11  md:ml- flex  md:ml-52 justify-center  md:-mt-96 md:mb-4  ">
        <button className=" mt-16 text-slate-950 bg-white py-2 px-14  focus:outline-none rounded-full text-lg">
          Work
        </button>
      </div>
      <section className="text-gray-600 body-font bg-black">
        {/* First Section */}
        <div className="container mx-auto px-5 py-28 md:py-36 md:-mb-80 md:flex md:items-center flex-col-reverse md:flex-row">
          {/* Work Button - Centered at top */}

          {/* Image Section */}
          <div className="  lg:max-w-lg mt- md:ml-36 md:mt-60  lg:w-full w-full mb-10 md:mb-0 md:order-1">
            <img
              className="object-cover object-center rounded w-full"
              alt="hero"
              src="/assets/img10.jpg"
            />
          </div>

          {/* Text Section */}
          <div className=" md:mt-48 md:ml-28 lg:flex-grow md:w-1/2 text-center md:text-left md:order-2">
            <button className="inline-flex px-24 md:px-36 md:text-3xl text-white border-2 text-center focus:outline-none rounded-full mb-4 py-1">
              Clothing website
            </button>
            <br />
            <button className="inline-flex whitespace-nowrap md:-ml-7 text-white border-2 text-center py-1 md:text-3xl rounded-full px-20 mb-4">
              Website design / development
            </button>
            <br />
            <div className="flex justify-center">
              <button className=" md:-ml-64 mt-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  rounded text-lg md:-mr shadow-lg">
                View project
              </button>
            </div>
          </div>
        </div>

        {/* First Section */}
        <div className="  md:-mb-80 container mx-auto px-5 py-28 md:py-36 md:flex md:items-center flex-col-reverse md:flex-row">
          {/* Work Button - Centered at top */}

          {/* Image Section */}
          <div className="  lg:max-w-lg mt- md:ml-36 md:mt-60  lg:w-full w-full mb-10 md:mb-0 md:order-1">
            <img
              className="object-cover object-center rounded w-full"
              alt="hero"
              src="/assets/img10.jpg"
            />
          </div>

          {/* Text Section */}
          <div className=" md:mt-48 md:ml-28 lg:flex-grow md:w-1/2 text-center md:text-left md:order-2">
            <button className="inline-flex px-24 md:px-36 md:text-3xl text-white border-2 text-center focus:outline-none rounded-full mb-4 py-1">
              Clothing website
            </button>
            <br />
            <button className="inline-flex whitespace-nowrap md:-ml-7 text-white border-2 text-center py-1 md:text-3xl rounded-full px-20 mb-4">
              Website design / development
            </button>
            <br />
            <div className="flex justify-center">
              <button className=" md:-ml-64 mt-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  rounded text-lg md:-mr shadow-lg">
                View project
              </button>
            </div>
          </div>
        </div>

        {/* First Section */}
        <div className="container mx-auto px-5 py-28 md:py-36 md:flex md:items-center flex-col-reverse md:flex-row">
          {/* Work Button - Centered at top */}

          {/* Image Section */}
          <div className="  lg:max-w-lg mt- md:ml-36 md:mt-60  lg:w-full w-full mb-10 md:mb-0 md:order-1">
            <img
              className="object-cover object-center rounded w-full"
              alt="hero"
              src="/assets/img10.jpg"
            />
          </div>

          {/* Text Section */}
          <div className=" md:mt-48 md:ml-28 lg:flex-grow md:w-1/2 text-center md:text-left md:order-2">
            <button className="inline-flex px-24 md:px-36 md:text-3xl text-white border-2 text-center focus:outline-none rounded-full mb-4 py-1">
              Clothing website
            </button>
            <br />
            <button className="inline-flex whitespace-nowrap md:-ml-7 text-white border-2 text-center py-1 md:text-3xl rounded-full px-20 mb-4">
              Website design / development
            </button>
            <br />
            <div className="flex justify-center">
              <button className=" md:-ml-64 mt-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  rounded text-lg md:-mr shadow-lg">
                View project
              </button>
            </div>
          </div>
        </div>

        <Digitaj />
      </section>
    </div>
  );
};

export default Work;
