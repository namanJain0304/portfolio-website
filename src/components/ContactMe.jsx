import React, { useRef, useState } from "react";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';


import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactMe() {
    const form = useRef();
    const nameElement=useRef();
    const emailElement=useRef();
    const messageElement=useRef();
    const subjectElement=useRef();

    const sendEmail = (e) => {
      e.preventDefault();

  
      emailjs
        .sendForm(process.env.SERVICE, process.env.TEMPLATE, form.current, {
          publicKey: process.env.PUBLIC_KEY,
        })
        .then(
          () => {
            toast.success('EMAIL SENT!');
          },
          (error) => {
            toast.error('FAILED...', error.text);
          },
        );
        nameElement.current.value="";
        emailElement.current.value="";
        messageElement.current.value="";
        subjectElement.current.value="";

    };

  

  return (
    <>
      <Navbar1 />
      {/* Dark background for the contact form */}
      <section className="contact-section bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center mb-2 text-white">Contact Me</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form ref={form} onSubmit={sendEmail}>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="from_name" className="form-label text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control bg-secondary text-white"
                    id="from_name"
                    name="from_name"
                    ref={nameElement}
                    required
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="from_email" className="form-label text-white">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control bg-secondary text-white"
                    id="from_email"
                    name="from_email"
                    ref={emailElement}
                    required
                    placeholder="Your Email"
                  />
                </div>

                {/* Subject */}
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control bg-secondary text-white "
                    id="subject"
                    name="subject"
                    ref={subjectElement}
                    required
                    placeholder="Subject"
                  />
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-white">
                    Message
                  </label>
                  <textarea
                    className="form-control bg-secondary text-white"
                    id="message"
                    name="message"
                    ref={messageElement}
                    rows="5"
                    required
                    placeholder="Your Message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn btn-outline-light" value="send">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section className="contact-section bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Socials</h2>
          <div className="row socials mt-2 mb-5 justify-content-around">
            <div className="col-auto">
              <a
                href="https://www.linkedin.com/in/namanjain0304/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} className="social-icon text-white me-3" />
              </a>
            </div>
            <div className="col-auto">
              <a
                href="https://www.instagram.com/namanjain03_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} className="social-icon text-white me-3" />
              </a>
            </div>
            <div className="col-auto">
              <a
                href="https://www.facebook.com/profile.php?id=61552163049896&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} className="social-icon text-white me-3" />
              </a>
            </div>
            <div className="col-auto">
              <a
                href="https://discord.com/users/715789580015501332"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord size={30} className="social-icon text-white" />
              </a>
            </div>
            <div className="col-auto">
              <a
                href="https://github.com/namanJain0304"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} className="social-icon text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactMe;
