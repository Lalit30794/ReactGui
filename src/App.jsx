import React from "react";

import "./App.css";
import Navbar from "./componets/sections/navigatioin/Navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Home } from "./componets/pages/Home";
import { Tutorials } from "./componets/pages/Tutorials";
import { Contact } from "./componets/pages/Contact";
import { About } from "./componets/pages/About";
import { Jobs } from "./componets/pages/Jobs";
import { Projects } from "./componets/pages/Projects";
import { RootLayout } from "./componets/sections/Layouts/RootLayout";
import { Signup } from "./componets/pages/Signup";
import { ContactLayout } from "./componets/sections/Layouts/ContactLayout";
import { Contactfome } from "./componets/component/Contactfome";
import { Contactinfo } from "./componets/component/Contactinfo";
import { PageNotFound } from "./componets/pages/PageNotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="signup" element={<Signup />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<Contactinfo />} />
          <Route path="form" element={<Contactfome />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <main className="">
        {/* <Navbar /> */}
        <div className="container w-[100%] h-[80vh] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          {/* Normal Route examples */}

          {/* <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/projects" element={<Projects />} />
          </Routes> */}

          {/* Example of Router Dom 7 version  */}
        </div>
      </main>
    </>
  );
}

export default App;
