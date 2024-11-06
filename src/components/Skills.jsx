import React from "react";
import {
  FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaJava, FaNodeJs, FaGit, FaGithub, FaLinux,
  FaUsers, FaLightbulb, FaHandsHelping, FaCogs, FaChalkboardTeacher, FaBusinessTime, FaBolt, FaBrain
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiC, SiVisualstudio, SiPowerbi, SiFirebase, SiMicrosoftword, SiGnuemacs,
} from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";

function Skills() {
  return (
    <>
      <Navbar1 />
      <section className="skills-section bg-white text-dark py-5">
        <div className="container">
          <h2 className="text-center mb-5">Technical Skills</h2>
          <div className="row text-center">

            {/* Technical Skills */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaPython className="me-2 text-primary" /> Python</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><PiFileSqlBold className="me-2 text-info" /> SQL</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaHtml5 className="me-2 text-danger" /> HTML</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaCss3Alt className="me-2 text-primary" /> CSS</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaBootstrap className="me-2 text-purple" /> Bootstrap</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaJs className="me-2 text-warning" /> JavaScript</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaReact className="me-2 text-info" /> React</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaJava className="me-2 text-warning" /> Java</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><SiMongodb className="me-2 text-success" /> MongoDB</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaNodeJs className="me-2 text-success" /> Node.js</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><SiExpress className="me-2 text-dark" /> Express.js</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><SiC className="me-2 text-secondary" /> C</h5>
            </div>
          </div>

          {/* Technology Tools Section */}
          <h3 className="text-center mt-5">Technology Tools</h3>
          <div className="row text-center mt-4">
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><SiVisualstudio className="me-2 text-primary" /> Visual Studio</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaGit className="me-2 text-warning" /> Git</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaGithub className="me-2 text-dark" /> GitHub</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><SiPowerbi className="me-2 text-info" /> Power BI</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><SiGnuemacs className="me-2 text-secondary" /> Emacs</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaLinux className="me-2 text-dark" /> Linux</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><SiMicrosoftword className="me-2 text-primary" /> MS Office</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><SiFirebase className="me-2 text-warning" /> Firebase</h5>
            </div>
          </div>

          {/* Transferrable Skills Section */}
          <h3 className="text-center mt-5">Transferrable Skills</h3>
          <div className="row text-center mt-4">
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaUsers className="me-2 text-success" /> Teamwork</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaLightbulb className="me-2 text-warning" /> Problem-Solving</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaHandsHelping className="me-2 text-primary" /> Communication</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaCogs className="me-2 text-secondary" /> Critical Thinking</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaChalkboardTeacher className="me-2 text-dark" /> Leadership</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaBusinessTime className="me-2 text-info" /> Time Management</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaBolt className="me-2 text-warning" /> Adaptability</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <h5><FaBrain className="me-2 text-success" /> Quick Learner</h5>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Skills;
