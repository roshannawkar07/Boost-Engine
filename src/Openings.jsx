import React from "react";

const Openings = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-24">
        <h1 className="font-bold text-center text-2xl text-black">
          Current Openings
        </h1>
        <br />
        <br />
        <br />
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center border border-gray-200 shadow-lg w-3/4">
          <div className="lg:flex-grow md:w-1/2  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-3xl mb-4 font-bold text-gray-900">
              Project Manager
            </h1>
            <p className="mb-8 leading-relaxed">
              <span className="font-bold"> Department:</span> Management
              <br />
              <span className="font-bold">Location:</span> Jodhpur
              <br />
              <span className="font-bold"> Job Type:</span> Part-time
              <br />
              <span className="font-bold">Role:</span> Lead and manage projects
              from planning to completion, ensuring they meet company objectives
              and are delivered on time and within budget. Responsibilities:
              Develop project plans, manage teams, coordinate with clients,
              resolve issues, and ensure quality. Qualifications: Bachelor's in
              Project Management or related field, 1+ years of experience,
              strong leadership and communication skills, proficiency in project
              management tools
            </p>
            {/* Center button horizontally */}
            <div className="w-full flex justify-center">
              <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center border border-gray-200 shadow-lg w-3/4">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-3xl mb-4 font-bold text-gray-900">
              Graphic Designer
            </h1>
            <p className="mb-8 leading-relaxed">
              <span className="font-bold"> Department:</span> Design
              <br />
              <span className="font-bold">Location:</span> Jodhpur
              <br />
              <span className="font-bold"> Job Type:</span> Part-time
              <br />
              <span className="font-bold">Role:</span> Design digital and print
              materials that align with our brand. Responsibilities: Create
              logos, banners, and social media graphics; collaborate with the
              marketing team; ensure high-quality designs. Qualifications:
              Bachelor's in Graphic Design or related field, 1+ years of
              experience, proficient in Adobe Creative Suite, strong portfolio.
            </p>
            {/* Center button horizontally */}
            <div className="w-full flex justify-center">
              <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center border border-gray-200 shadow-lg w-3/4">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-3xl mb-4 font-bold text-gray-900">
              Content Creator
            </h1>
            <p className="mb-8 leading-relaxed">
              <span className="font-bold"> Department:</span> Marketing <br />
              <span className="font-bold">Location:</span> Jodhpur
              <br />
              <span className="font-bold"> Job Type:</span> Part-time
              <br />
              <span className="font-bold">Role:</span> Develop engaging content
              for websites, blogs, and social media to drive brand awareness.
              Responsibilities: Create and edit content, collaborate with teams,
              monitor content performance, stay updated with trends.
              Qualifications: Bachelor's in Marketing, Communications, or
              related field, proven experience, excellent writing skills,
              proficiency in CMS and social media.
            </p>
            {/* Center button horizontally */}
            <div className="w-full flex justify-center">
              <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center border border-gray-200 shadow-lg w-3/4">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-3xl mb-4 font-bold text-gray-900">
              Digital Marketing
            </h1>
            <p className="mb-8 leading-relaxed">
              <span className="font-bold"> Department:</span> Marketing
              <br />
              <span className="font-bold">Location:</span> Jodhpur
              <br />
              <span className="font-bold"> Job Type:</span> Part-time
              <br />
              <span className="font-bold">Role:</span> Plan and execute digital
              marketing campaigns to promote our brand. Responsibilities: Manage
              SEO, SEM, email, and social media campaigns; analyze performance;
              optimize digital content. Qualifications: Bachelor's in Marketing
              or related field, 2+ years of experience, proficiency in digital
              marketing tools, strong analytical skills.
            </p>
            {/* Center button horizontally */}
            <div className="w-full flex justify-center">
              <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Openings;
