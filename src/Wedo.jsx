import React from "react";

function Wedo() {
  return (
    <div className=" lg:mb-20 mb-5 md:-mb-5 h-screen w-full bg-black flex flex-col items-center justify-center">
      {/* Button at the top center */}
      <button className="border border-white bg-white text-slate-950 py-1 px-10 rounded-full text-lg mb-8">
        What We Do
      </button>

      {/* Increased font size for the heading and centered */}
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-center text-white">
        The Journey of Boost Engine
      </h1>

      <p className=" mt-4 ml-4 mr-5 text-justify text-slate-300 font-inter text-xl md:text-2xl mb-16 md:mb-10 md:m-12 md:ml-20 md:mr-20 -tracking-tight md:justify-center">
        Boost Engine Is Founded with A Clear Vision Of Driving A Business
        success Cuting-Edge Technology And Inovative Solution Ishtablish With A
        Team Of A Passionate Developer And EnterPreneurs, Boost Enngine Was
        Created To Empower Business In The digital Age. Providing Them With The
        Tool Expertise Needed To Thrive In A Compatative Landscope. Since its
        Inception Boost Engine Is Dedicated To Driving High Quality Software
        Solution That Not Only Meet But Exceed client Expectation.
      </p>
    </div>
  );
}

export default Wedo;
