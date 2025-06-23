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
import { Jobs, Jobsloader } from "./componets/pages/Jobs";
import { projectLoader, Projects } from "./componets/pages/Projects";
import { RootLayout } from "./componets/sections/Layouts/RootLayout";
import { Signup } from "./componets/pages/Signup";
import { ContactLayout } from "./componets/sections/Layouts/ContactLayout";
import { Contactfome } from "./componets/component/Contactfome";
import { Contactinfo } from "./componets/component/Contactinfo";
import { PageNotFound } from "./componets/pages/PageNotFound";
import { JobsLayout } from "./componets/sections/Layouts/JobsLayout";
import { JaobsDetails, JobsDetaisloader } from "./componets/pages/JaobsDetails";
import { ProjectsLayout } from "./componets/sections/Layouts/ProjectsLayout";
import { Reduxtodo } from "./componets/projects/ReduxToolKitApps/Reduxtodo";
import { Todo } from "./componets/projects/Todo";
import { Hooks } from "./componets/topics/hookes/Hooks";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="signup" element={<Signup />} />

        {/* Example of Router Dom 7 version for nested routes Projects */}
        <Route path="projects" element={<ProjectsLayout />}>
          <Route index element={<Projects />} loader={projectLoader} />
          <Route path=":id" element={<Projects />} />
          <Route path="todos" element={<Todo />} />
          <Route path="redux-todos" element={<Reduxtodo />} />
        </Route>
        {/* Example of Router Dom 7 version for nested routes Contact */}
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<Contactinfo />} />
          <Route path="form" element={<Contactfome />} />
        </Route>
        {/* Example of Router Dom 7 version for nested routes Hooks List tutorials */}
        <Route path="hooks" element={<Hooks />}>
          <Route path="info" element={<Contactinfo />} />
        </Route>

        {/* Example of Router Dom 7 version for nested routes Jobs */}
        <Route path="Jobs" element={<JobsLayout />}>
          <Route index element={<Jobs />} loader={Jobsloader} />
          <Route
            path=":id"
            element={<JaobsDetails />}
            loader={JobsDetaisloader}
          />
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
        <div className="container w-[100%]  mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
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
