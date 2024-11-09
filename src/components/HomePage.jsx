import React from "react";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaInstagram, FaFacebook, FaDiscord, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";

function HomePage() {
  const handleDownloadResume = () => {
    window.open("resume.pdf", "_blank");
  };

  return (
    <>
      <Navbar1/>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center mt-5">
          <div className="col-md-7">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="text-dark">
                    <ReactTyped
                      strings={[
                        "HI! I'm Naman Jain",
                        "HI! I'm a Full Stack Developer",
                        "HI! I'm a Team Player",
                      ]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                    />
                  </h1>
                </div>
              </div>

              <div className="row  mt-1">
                <div className="col-md-12">
                  <p className="mt-2">
                    I'm a passionate full-stack developer with expertise in both
                    frontend and backend technologies. I enjoy building dynamic
                    and responsive web applications, focusing on delivering
                    high-quality user experiences. With a strong understanding
                    of modern frameworks and tools, I thrive in collaborative
                    environments, working with teams to bring innovative ideas
                    to life. My goal is to continually learn and implement
                    cutting-edge technologies to create impactful digital
                    solutions that solve real-world problems.
                  </p>
                </div>
              </div>

              <div className="row mt-4">
                <div className="row ">
                  <div className="col-auto m-2">
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={handleDownloadResume}
                    >
                      Download Resume
                    </button>
                  </div>
                  <div className="col-auto m-2">
                    <a
                      href="https://github.com/namanJain0304"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button type="button" className="btn btn-outline-dark">
                        Visit Github <FaGithub size={20} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <img
              src="image.jpg"
              className="img-thumbnail img-fluid rounded-circle"
              alt="..."
            />
          </div>
        </div>

        <div className="row socials mt-5 justify-content-around">
          <div className="col-auto">
            <a href="https://www.linkedin.com/in/namanjain0304/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="social-icon text-dark me-3" />
            </a>
          </div>
          <div className="col-auto">
            <a href="https://www.instagram.com/namanjain03_" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="social-icon text-dark me-3" />
            </a>
          </div>
          <div className="col-auto">
            <a href="https://www.facebook.com/profile.php?id=61552163049896&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} className="social-icon text-dark me-3" />
            </a>
          </div>
          <div className="col-auto">
            <a href="mailto:namanjain030401@gmail.com">
              <MdEmail size={30} className="social-icon text-dark me-3" />
            </a>
          </div>
          <div className="col-auto">
            <a href="https://discord.com/users/715789580015501332" target="_blank" rel="noopener noreferrer">
              <FaDiscord size={30} className="social-icon text-dark" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
