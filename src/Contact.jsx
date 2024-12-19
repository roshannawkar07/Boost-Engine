import React, { useRef, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  const formRef = useRef();

  // State to manage success message
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzu9BUyRTu121dVaWeuRnh8sCt9Ig2PbRyddLPOIFkahBgGhBN6u2vbkeevrTmFKYgP/exec";

    const form = formRef.current;

    // Use fetch to submit form data to Google Sheets
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);

        // Show success message
        setIsSubmitted(true);

        // Clear form after submission
        form.reset();

        // Hide success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error!", error.message);
        // Optionally, show an error message to the user
      });
  };

  return (
    <div className="bg-black pb-28 mb-40 md:mb-28">
      <div className="flex flex-col-reverse">
        <button className="flex mx-auto mt-20 text-slate-950 bg-white py-2 px-8 focus:outline-none rounded-full text-lg">
          Career
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <p className="text-white text-sm md:text-2xl -mt-10 ml-16 leading-relaxed mb-8">
        Whether you have a project in mind, need technical support, or just want
        to learn more about our services, we'd <br /> love to hear from you.
        Reach out to us using the contact form below or through our contact
        details. We're <br /> "The Power of At How Artificialmptly and look
        forward to collaborating with you.
      </p>

      <h1 className="ml-16 font-bold text-lg text-white">
        "The Power of At How Artificial <br /> Intelligence Can Boost Your
        Business"
      </h1>
      <br />
      <br />
      <section className="text-black body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center bg-indigo-200 rounded-2xl h-full w-full md:w-11/12">
          {/* Text Section */}
          <div className="lg:w-3/5 md:w-full md:pr-16 lg:pr-0 pr-0 ml-5 md:ml-14">
            <h1 className="title-font font-medium text-3xl  md:text-4xl text-gray-900">
              CONNECT WITH US
            </h1>
            <br />
            <h2 className="font-bold text-xl">Head Office</h2>
            <p className="leading-relaxed mt-4 md:text-xl">
              01, Street No. B, Bhanu Nagar, New <br />
              Nagore Road, Jodhpur, Rajasthan
            </p>
            <br />
            <h2 className="font-bold md:text-xl">Phone</h2>
            <p className="text-xl">+91-7300054285</p>
            <br />
            <h2 className="font-bold text-xl">Email</h2>
            <p className="text-xl">boostengine001@gmail.com</p>
            <div className="mt-5 space-x-4">
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-3/6 mb-14 md:-mt-96 md:w-full rounded-lg p-8 flex flex-col md:ml-auto w-full">
            {/* Display success message after submission */}
            {isSubmitted && (
              <div className="bg-green-500 text-white text-center py-2 rounded mb-4">
                Submitted!
              </div>
            )}
            <form
              ref={formRef}
              name="submit-to-google-sheet"
              onSubmit={handleSubmit}
            >
              <div className="relative mb-4">
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  aria-label="Full Name"
                  placeholder="First Name"
                  className="w-full bg-white rounded border focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Email Address"
                  placeholder="Email address"
                  className="w-full bg-white rounded border focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="w-full bg-white rounded border border-gray-300 focus:ring-2 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>

              <button className="text-white bg-indigo-500 border-0 w-full h-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
