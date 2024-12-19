import React from "react";

const Footer = () => {
  return (
    <footer className="mt-11 md:mt-36 bg-black md:h-full text-black-1000 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0  md:mx-0 mx-auto text-center md:text-left">
          <div className="">
            <span className="mb-40 font-bold text-white  text-3xl mx-8">
              Boost Ingine
            </span>
          </div>
          <p className=" text-left mt-2 text-sm text-white ml-8">
            The Story Of Boost Engine is<br></br> One Of The Innovention And
            <br></br> Determination.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                  Home
                </h2>
              </li>
            </ul>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white">Home</a>
              </li>
              <li>
                <a className="text-white">About us</a>
              </li>
              <li>
                <a className="text-white ">What we do</a>
              </li>
              <li>
                <a className="text-white ">Contact</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <ul style={{ listStyleType: "disc" }}>
              {" "}
              <li>
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                  More
                </h2>
              </li>
            </ul>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white">Project</a>
              </li>
              <li>
                <a className="text-white ">Event</a>
              </li>
              <li>
                <a className="text-white">Pricing</a>
              </li>
              <li>
                <a className="text-white">Blog</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <ul style={{ listStyleType: "disc" }}>
              {" "}
              <li>
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                  Connect
                </h2>
              </li>
            </ul>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white">FaceBook</a>
              </li>
              <li>
                <a className="text-white ">Instagram</a>
              </li>
              <li>
                <a className="text-white ">Twitter</a>
              </li>
              <li>
                <a className="text-white ">Linkedin</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
