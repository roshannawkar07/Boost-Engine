import React from "react";

const Piccards = () => {
  return (
    <div>
      <section className=" text-black body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              Meet Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
              Dedicated team members drive our mission, fostering impactful
              change together.
            </p>
          </div>

          {/* First Row: Three Cards */}
          <div className="flex flex-wrap justify-center bg-black ">
            <div className="w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-60 w-full rounded object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h2 className=" text-gray-900 text-xl font-medium title-font mb-4 text-center">
                  Bhagirath Sigh Gehlot
                </h2>
                <h3 className="tracking-widest text-black  font-small text-sm title-font text-center">
                  Chief Executive Officer
                </h3>
              </div>
            </div>

            <div className="w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-60 w-full rounded object-cover object-center mb-6"
                  src="https://dummyimage.com/721x401"
                  alt="content"
                />
                <h2 className=" text-gray-900 text-xl font-medium title-font mb-4 text-center">
                  Manju Gehlot
                </h2>
                <h3 className="tracking-widest text-black  font-small text-sm title-font text-center">
                  Managing Director
                </h3>
              </div>
            </div>

            <div className="w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-60 w-full rounded object-cover object-center mb-6"
                  src="https://dummyimage.com/722x402"
                  alt="content"
                />
                <h2 className=" text-gray-900 text-xl font-medium title-font mb-4 text-center">
                  Divyansh Gehlot
                </h2>
                <h3 className="tracking-widest text-black  font-small text-sm title-font text-center">
                  Chief Technology Officer
                </h3>
              </div>
            </div>
          </div>

          {/* Second Row: Two Cards */}
          <div className="flex flex-wrap justify-center bg-black w-full">
            <div className="w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-60 w-full rounded object-cover object-center mb-6"
                  src="https://dummyimage.com/723x403"
                  alt="content"
                />
                <h2 className=" text-gray-900 text-xl font-medium title-font mb-4 text-center">
                  Esha Dhoot
                </h2>
                <h3 className="tracking-widest text-black  font-small text-sm title-font text-center">
                  Full Stack Developer
                </h3>
              </div>
            </div>

            <div className="w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-60 w-full rounded object-cover object-center mb-6"
                  src="https://dummyimage.com/724x404"
                  alt="content"
                />
                <h2 className=" text-gray-900 text-xl font-medium title-font mb-4 text-center">
                  Yash Dave
                </h2>
                <h3 className="tracking-widest text-black  font-small text-sm title-font text-center">
                  Social Media Manager
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Piccards;
