import React from "react";
import { GiHumanTarget } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

function Navbar1() {
  return (
    <>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand me-5" href="#">
            <GiHumanTarget className="navbar-icon me-2" />
            <span className="navbar-name">Naman Jain</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            s
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/aboutme">
                  About Me
                </Link>
              </li>
              <li class="nav-item ">
                <Link className="nav-link" to="/skills">
                  Skills
                </Link>
              </li>
              <l class="nav-item">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </l>
              <li class="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
