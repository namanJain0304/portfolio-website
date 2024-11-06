import React from "react";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";

function AboutMe() {
  return (
    <>
      <Navbar1 />
      <section className="about-section bg-white text-dark py-5">
        <div className="container">
          <h2 className="text-center mb-4">Introduction</h2>
          <div className="row d-flex align-items-center">
            {/* Left: About Me Description */}
            <div className="col-md-6">
              <p>
                I am currently a <strong>Computer Science</strong> student at <strong>Toronto Metropolitan University</strong> in Canada and I'm extremely passionate about my major. I strive to do my best in order to reach excellence. Ever since I was in elementary school, I have been fascinated by the world of computer programming and its endless possibilities. I like to challenge myself and make the most of the knowledge I gain. I'm well-versed in <strong>Python</strong> and <strong>Java</strong> coding, handling <strong>MySQL</strong> database operations, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>NodeJs</strong>, and <strong>MongoDB</strong>. My learning abilities are advanced, and I can comprehend concepts easily. Additionally, I am friendly and engaging, which makes it easy to build relationships with people. Working on complex technical tasks and finding the best solution to each of them is something I greatly enjoy. Making sure every job I do is done to perfection brings me immense satisfaction.
              </p>
            </div>
            {/* Right: Image */}
            <div className="col-md-6">
              <img
                src="tmu.jpg"
                className="img-fluid rounded-circle"
                alt="Naman"
              />
            </div>
          </div>

          {/* Hobbies Section */}
          <h3 className="text-center mt-5">Hobbies</h3>
          <div className="row justify-content-center mt-4">
            {/* Hobby 1 */}
            <div className="col-md-3">
              <div className="card bg-white text-dark mb-4 custom-card">
                <img src="travel.jpg" className="card-img-top" alt="Travel" />
                <div className="card-body">
                  <h5 className="card-title">Traveling</h5>
                  <p>I love to travel and explore new places.</p>
                </div>
              </div>
            </div>
            {/* Hobby 2 */}
            <div className="col-md-3">
              <div className="card bg-white text-dark mb-4 custom-card">
                <img
                  src="videogame.jpeg"
                  className="card-img-top"
                  alt="Video Games"
                />
                <div className="card-body">
                  <h5 className="card-title">Video Games</h5>
                  <p>I enjoy playing video games and watching movies.</p>
                </div>
              </div>
            </div>
            {/* Hobby 3 */}
            <div className="col-md-3">
              <div className="card bg-white text-dark mb-4 custom-card">
                <img src="cricket.jpg" className="card-img-top" alt="Cricket" />
                <div className="card-body">
                  <h5 className="card-title">Cricket</h5>
                  <p>I'm a big fan of cricket.</p>
                </div>
              </div>
            </div>
            {/* Hobby 4 */}
            <div className="col-md-3">
              <div className="card bg-white text-dark mb-4 custom-card">
                <img src="music.jpeg" className="card-img-top" alt="Music" />
                <div className="card-body">
                  <h5 className="card-title">Music</h5>
                  <p>I love listening to different types of music.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <h3 className="text-center mt-5">Achievements</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-white text-dark trophy">
              🏆 Made the Dean's List for the academic year 2023-24, consistently
              securing a 4.0+ GPA in every semester.
            </li>
            <li className="list-group-item bg-white text-dark trophy">
              🏆 Cleared the IIT-JEE exam, ranked as the second hardest exam in
              the world, securing a rank of 40,000 out of 1 million students.
            </li>
            <li className="list-group-item bg-white text-dark trophy">
              🏆 Earned multiple medals in athletics, including Gold in 100m,
              200m, Long Jump, and 4x100m relay events, as well as Silver in
              relay races, showcasing consistent top performances from 2016 to
              2018.
            </li>
          </ul>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default AboutMe;
