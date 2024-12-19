import React from "react";

function Gallery() {
  return (
    <section className=" mb-20 text-gray-600 body-font">
      {/* Updated button element with className instead of class */}
      <button className=" -mt-7 border mt border-black flex mx-auto  text-slate-950 py-2 px-8 focus:outline-none rounded-full text-lg">
        Gallery
      </button>

      <div className=" container px-5 py-24 mx-auto">
        <div className=" ml-6 flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {/* First Image */}
          <div className="  p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-80 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/img5.jpg"
              />
            </div>
          </div>

          {/* Second Image with Learn More Button */}
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-80 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/img6.jpg"
              />
            </div>
          </div>

          {/* Third Image */}
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-80 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/img2.jpg"
              />
            </div>
          </div>
          {/* ================================ */}

          {/* ========================================== */}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
