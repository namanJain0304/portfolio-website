import React, { useRef } from "react";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import {
  FaLinkedin, FaInstagram, FaFacebook, FaDiscord, FaGithub,
} from "react-icons/fa";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE,
        import.meta.env.VITE_REACT_APP_TEMPLATE,
        form.current,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('EMAIL SENT!');
          e.target.reset(); // Reset the form here
        },
        (error) => {
          toast.error(`FAILED: ${error.message}`);
        }
      );
  };

  return (
    <>
      <Navbar1 />
      <section className="contact-section bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center mb-2 text-white">Contact Me</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="from_name" className="form-label text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control bg-secondary text-white"
                    id="from_name"
                    name="from_name"
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="from_email" className="form-label text-white">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control bg-secondary text-white"
                    id="from_email"
                    name="from_email"
                    required
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control bg-secondary text-white"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-white">
                    Message
                  </label>
                  <textarea
                    className="form-control bg-secondary text-white"
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-outline-light">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Socials</h2>
          <div className="row socials mt-2 mb-5 d-flex justify-content-center">
            {[{
              href: "https://www.linkedin.com/in/namanjain0304/",
              icon: <FaLinkedin size={30} className="text-white" />
            }, {
              href: "https://www.instagram.com/namanjain03_",
              icon: <FaInstagram size={30} className="text-white" />
            }, {
              href: "https://www.facebook.com/profile.php?id=61552163049896&mibextid=ZbWKwL",
              icon: <FaFacebook size={30} className="text-white" />
            }, {
              href: "https://discord.com/users/715789580015501332",
              icon: <FaDiscord size={30} className="text-white" />
            }, {
              href: "https://github.com/namanJain0304",
              icon: <FaGithub size={30} className="text-white" />
            }].map(({ href, icon }, idx) => (
              <div className="col-auto" key={idx}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ cursor: 'pointer' }}
                >
                  {icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactMe;
