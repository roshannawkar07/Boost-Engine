import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import More from "./More";
import Services from "./Services";
import Plans from "./Plans";
import Blogs from "./Blogs";
import Gallary from "./Gallary";
import Footer from "./Footer";
import Faq from "./Faq";
import Suscribe from "./Suscribe";
import Vission from "./vission";
import Wedo from "./Wedo";
import Digitaj from "./Digitaj";
import Pricing from "./Pricing";
import NNav from "./NNav";
import Work from "./Work";
import NavBlog from "./NavBlog";
import NGallery from "./NGallery";
import Career from "./Career";
import Piccards from "./PicCards";
import Contact from "./contact";
import Openings from "./Openings";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <More />
          <Services title="Our Services" />
          <Plans />
          <Blogs />
          <Gallary />
          <Faq />
          <Suscribe />
          <Footer />
        </>
      ),
    },
    {
      path: "/more",
      element: (
        <>
          <Navbar />
          <More />
          <Vission />
          <Piccards />
          <Faq />
          <Suscribe />
          <Footer />
        </>
      ),
    },

    {
      path: "/wedo",
      element: (
        <>
          <Navbar />
          <Wedo />
          <Services title="What We offer" />
          <Digitaj />
          <Faq />
          <Suscribe />
          <Footer />
        </>
      ),
    },

    {
      path: "/pricing",
      element: (
        <>
          <NNav />
          <Pricing />
          <Digitaj />
          <Faq />
          <Suscribe />
          <Footer />
        </>
      ),
    },

    {
      path: "/work",
      element: (
        <>
          <NNav />
          <Work />
          <Faq />
          <Suscribe />
          <Footer />
        </>
      ),
    },

    {
      path: "/navblog",
      element: (
        <>
          <NavBlog />
          <Digitaj />
          <Faq />
          <Suscribe />
          <Footer />
        </>
      ),
    },
    {
      path: "/gallary",
      element: (
        <>
          <NNav />
          <NGallery />
          <Faq />
          <Suscribe />
          <Footer />
        </>
      ),
    },

    {
      path: "/career",
      element: (
        <>
          <NNav />
          <Career />
          <Openings />
          <Faq />
          <Suscribe />
          <Footer />
        </>
      ),
    },

    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Faq />
          <Suscribe />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
