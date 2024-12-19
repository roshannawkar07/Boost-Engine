import React from "react";

const Vission = () => {
  return (
    <div>
      <button className="border border-black flex mx-auto mt-10 mb-10 text-slate-950 py-2 px-8 focus:outline-none rounded-full text-lg">
        Our Vision
      </button>

      <h1 class="sm:text-3xl text-2xl text-center mt-7 font-medium title-font mb-4 text-black">
        Innovating Solutions, Driving Success.
      </h1>

      <div className="relative h-screen bg-gray-100 flex items-center justify-center ">
        {/* Text Box */}
        <div className="bg-white p-8 -ml-96 rounded-lg shadow-lg relative z-10 ">
          <p className="text-black mt-2">
            At Boost Engine, Our Mission Is To Harness<br></br> The Power Of
            Technology To Create<br></br> Innovative Solutions That Drive
            Business <br></br>Success. We Are Committed To Delivering <br></br>
            Excellence In Every Project, Ensuring That<br></br> Our Clients Have
            The Tools And Support <br></br>They Need To Thrive In A Rapidly
            Changing<br></br> Digital World.
          </p>
        </div>

        {/* Image */}
        <img
          src="/assets/vision.jpg"
          alt="Overlay"
          className="absolute   object-cover opacity-70"
        />
      </div>

      <button className="border border-black flex mx-auto mt-10 mb-10 text-slate-950 py-2 px-8 focus:outline-none rounded-full text-lg">
        Our Mission
      </button>
      <div className="flex flex-wrap ">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60  shadow-2xl shadow-black-500/50 ">
          <h2 className="text-lg sm:text-xl text-blue-500 font-medium title-font mb-2">
            Catalyst for Digital <br></br>Transformation
          </h2>{" "}
          &nbsp; &nbsp;
          <p className="leading-relaxed text-base mb-4">
            Empowering businesses to<br></br> achieve new milestone<br></br>{" "}
            through customized <br></br>technology solutions
          </p>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 shadow-2xl shadow-black-500/50">
          <h2 className="text-lg sm:text-xl text-blue-500 font-medium title-font mb-2">
            Access for All
          </h2>{" "}
          &nbsp; &nbsp;
          <p className="leading-relaxed text-base mb-4">
            Making digital tools and <br></br>expertise accesible to <br></br>
            businesses of all sizes for<br></br> global success.
          </p>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 shadow-2xl shadow-black-500/50">
          <h2 className="text-lg sm:text-xl text-blue-500 font-medium title-font mb-2">
            Innovation-Driven <br></br>Progress
          </h2>{" "}
          &nbsp; &nbsp;
          <p className="leading-relaxed text-base mb-4">
            Fostering cutting-edge <br></br>solutions to help clients stay
            <br></br> ahead in a competive digital<br></br> era.
          </p>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 shadow-2xl shadow-black-500/50">
          <h2 className="text-lg sm:text-xl text-blue-500 font-medium title-font mb-2">
            Navigating the Digital <br></br>Future
          </h2>{" "}
          &nbsp; &nbsp;
          <p className="leading-relaxed text-base mb-4">
            Equipping businesses with the <br></br> confidence and agility to
            thrive <br></br>in a rapidly evolving market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vission;
