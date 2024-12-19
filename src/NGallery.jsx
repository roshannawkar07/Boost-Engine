import React from "react";

function NGallery() {
  return (
    <>
      <div className=" mb-52 md:mb-1  bg-gradient-to-b from-blue-950 to-black">
        <div className="mb-1">
          <button className="border  bg-white border-black flex mx-auto -mb-1  text-slate-950 py-2 px-8 focus:outline-none rounded-full text-lg">
            Gallery
          </button>
        </div>
        <div className=" mt-16 flex flex-wrap space-x-2 ">
          <div className="p-4 md:w-60 ml-6 sm:mb-0  ">
            <div className="rounded-lg h-40 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/img6.jpg"
              />
            </div>
          </div>

          <div className="p-4 md:w-60 sm:mb-0 mb-6">
            <div className="rounded-lg h-40 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/img2.jpg"
              />
            </div>
          </div>

          <div className="p-4 md:w-60 sm:mb-0 mb-6">
            <div className="rounded-lg h-40 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/img3.jpg"
              />
            </div>
          </div>

          <div className="p-4 md:w-60 sm:mb-0 mb-6">
            <div className="rounded-lg h-40 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/img4.jpg"
              />
            </div>
          </div>

          <div className="p-4 md:w-60 sm:mb-0 mb-6">
            <div className="rounded-lg h-40 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/img5.jpg"
              />
            </div>
          </div>

          <div className="p-4 md:w-60 sm:mb-0 mb-6">
            <div className="rounded-lg h-40 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assets/img6.jpg"
              />
            </div>
          </div>
        </div>
        <section className=" -mt-20 text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap sm:-m-4 md:-mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-80 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/assets/img5.jpg"
                  />
                </div>
              </div>

              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-80 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/assets/img4.jpg"
                  />
                </div>
              </div>

              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-80 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/assets/img3.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================================ */}

      {/* ========================================== */}
    </>
  );
}

export default NGallery;
