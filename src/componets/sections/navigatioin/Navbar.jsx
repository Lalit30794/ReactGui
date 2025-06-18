import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../../src/assets/react.svg";
const Navbar = () => {
  const navigetTo = useNavigate();
  return (
    <>
      <div className="navbar-container">
        <h6 className="text-xl font-bold">
          ReactGu<span className="text-2xl font-bold">i</span>
        </h6>
        <ul className="nav-links">
          <NavLink to="">
            <li>Home</li>
          </NavLink>

          <NavLink to="about">
            <li>About</li>
          </NavLink>
          <NavLink to="contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to="tutorials">
            <li>Tutorials</li>
          </NavLink>
          <NavLink to="projects">
            <li>Projects</li>
          </NavLink>
          <NavLink to="jobs">
            <li>Jobs</li>
          </NavLink>
        </ul>

        <button
          onClick={() => {
            navigetTo("/signup");
          }}
          className="get-start-btn"
        >
          Get Start
        </button>
      </div>
    </>
  );
};

export default Navbar;
