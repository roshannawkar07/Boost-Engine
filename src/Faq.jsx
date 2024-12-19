import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Faq() {
  return (
    <div>
      <h1 className=" -mt-36 text-xl md:text-3xl  text-center md:mt-7 font-medium title-font mb-4 text-black">
        Frequently Anked Questions
      </h1>

      <div className="   md:mt-12 md:mr-64 md:ml-96  text-base leading-relaxed text-black">
        <p className=" ml-16 mt-7 md:ml-28">
          What is The mession of boost Engine ?
          <KeyboardArrowDownIcon className=" ml-5 md:ml-52" />
        </p>
        <hr />
        <br />{" "}
        <p className=" ml-16  md:ml-28">
          {" "}
          What Service Do we Offer ?{" "}
          <KeyboardArrowDownIcon className=" ml-24 md:ml-72" />
        </p>
        <hr /> <br />
        <p className=" ml-16  md:ml-28">
          {" "}
          How can you collaborate with US ?{" "}
          <KeyboardArrowDownIcon className=" ml-12 md:ml-60" />
        </p>
        <hr />
        <br />
        <p className=" ml-14  md:ml-28">
          {" "}
          How Dowe ensure quality is ower service ?{" "}
          <KeyboardArrowDownIcon className=" ml-9md:ml-48" />
        </p>
        <hr />
      </div>
    </div>
  );
}

export default Faq;
