import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiAntdesign,
} from "react-icons/si";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";

function Projects() {
  const projectList = [
    {
      title: "Eyeframes.io",
      date: "Otober 2024",
      description:
        "EyeFrames.io is a platform for buying and selling gently used eyeframes, making eyewear more affordable and sustainable. Users can list frames, browse options, and connect with sellers directly. Future updates will include a feature to compare used prices with the original cost, helping users see their savings.",
      image: "eyeframes.png",
      tags: [
        { icon: <FaHtml5 size={24} />, name: "HTML5" },
        { icon: <FaCss3Alt size={24} />, name: "CSS3" },
        { icon: <FaJs size={24} />, name: "JavaScript" },
        { icon: <FaNodeJs size={24} />, name: "NodeJS" },
        { icon: <SiExpress size={24} />, name: "ExpressJS" },
        { icon: <SiMongodb size={24} />, name: "MongoDB" },
        { icon: <FaBootstrap size={24} />, name: "Bootstrap" },
      ],
      liveLink: "https://eyeframes-io.onrender.com/eyeframes",
      githubLink: "https://github.com/namanJain0304/eyeframes.io",
    },
    {
      title: "TrackMyFin",
      date: "September 2024",
      description:
        "TrackMyFin is a financial tracking app designed to help users manage their expenses and incomes effectively. It allows users to log transactions, view them in an editable table, and visualize financial trends through line and pie charts. TrackMyFin aims to foster better budgeting habits by providing a clear, organized view of one’s finances.",
      image: "trackmyfin.png",
      tags: [
        { icon: <FaHtml5 size={24} />, name: "HTML5" },
        { icon: <FaCss3Alt size={24} />, name: "CSS3" },
        { icon: <FaJs size={24} />, name: "JavaScript" },
        { icon: <FaReact size={24} />, name: "React" },
        { icon: <SiFirebase size={24} />, name: "Firebase" },
        { icon: <FaBootstrap size={24} />, name: "Bootstrap" },
        { icon: <SiAntdesign size={24} />, name: "Antdesign" },
      ],
      liveLink: "https://trackmyfin1.vercel.app/",
      githubLink: "https://github.com/namanJain0304/trackmyfin",
    },
    {
      title: "PetPlant",
      date: "June 2024",
      description:
        "The PetPlant website, created for the Terra Hacks hackathon, helps users monitor and adjust plant health with features like water level and soil pH adjusters, plus sunlight information. It’s fully responsive and designed by Prachi Thakkar, Mishwa Patel, Naman Jain, and Rohithraj Baskaran. Further details are available on Devpost and in the presentation slides.",
      image: "petplant.png", 
      tags: [
        { icon: <FaHtml5 size={24} />, name: "HTML5" },
        { icon: <FaCss3Alt size={24} />, name: "CSS3" },
        { icon: <FaJs size={24} />, name: "JavaScript" },
        { icon: <FaBootstrap size={24} />, name: "Bootstrap" },
      ],
      liveLink: "https://petplant.vercel.app/",
      githubLink: "https://github.com/namanJain0304/petplant",
    },
    {
      title: "Personal Portfolio Website",
      date: "November 2024",
      description:
        "A personal portfolio showcasing projects, skills, and achievements, with a clean and responsive design.",
      image: "portfoliowebsite.png",
      tags: [
        { icon: <FaHtml5 size={24} />, name: "HTML5" },
        { icon: <FaCss3Alt size={24} />, name: "CSS3" },
        { icon: <FaJs size={24} />, name: "JavaScript" },
        { icon: <FaReact size={24} />, name: "React" },
        { icon: <FaBootstrap size={24} />, name: "Bootstrap" },
      ],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Flight Reservation System",
      date: "January 2023",
      description:
        "The Flight Reservation System is a Python and MySQL-based project designed to automate flight booking processes. It allows users to manage passenger data, book seats, add luggage and food services, and calculate total costs. This system enhances user experience by providing a secure, streamlined platform for reservations. Future improvements include online accessibility and integration of advanced features for a more comprehensive booking solution.",
      image: "flight.png",
      tags: [
        { icon: <FaPython size={24} />, name: "Python" },
        { icon: <SiMysql size={24} />, name: "MySQL" },
      ],
      liveLink: "https://github.com/namanJain0304/flight-reservation-system",
      githubLink: "https://github.com/namanJain0304/flight-reservation-system",
    },
    {
      title: "Club Management System",
      date: "March 2024",
      description:"The Membership Club System is a Python and MySQL project designed for efficient management of club memberships. It enables administrators to register members, update profiles, track payment histories, and monitor membership statuses in one unified interface. The system simplifies administrative tasks, offering quick access to member data and status updates. It also includes features for organizing events, creating reminders, and generating reports on club activity and finances. Future enhancements may involve adding online member access, automated notifications, and an improved user dashboard to personalize the member experience.",
      image: "club.png",
      tags: [{ icon: <FaPython size={24} />, name: "Python" }],
      liveLink: "https://github.com/namanJain0304/membership-club",
      githubLink: "https://github.com/namanJain0304/membership-club",
    },
  ];

  return (
    <>
      <Navbar1 />
      <section className="projects-section bg-white text-dark py-5">
        <div className="container">
          <h2 className="text-center mb-5">Projects</h2>
          <div className="row">
            {projectList.map((project, index) => (
              <div className="col-lg-6 col-md-12 mb-4" key={index}>
                <div className="card project-card shadow-lg">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.date}</p>
                    <p className="card-text">{project.description}</p>
                    <div className="tags mb-3">
                      <div className="d-flex flex-wrap">
                        {project.tags.map((tag, idx) => (
                          <div
                            key={idx}
                            className="d-flex align-items-center m-2"
                          >
                            {tag.icon}
                            <span className="ms-2">{tag.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="btn btn-dark"
                      >
                        <FaExternalLinkAlt className="me-2" /> Visit Project
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="btn btn-outline-dark"
                      >
                        <FaGithub className="me-2" /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projects;
