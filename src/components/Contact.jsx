import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaTwitter,
  FaInstagram,
  // FaLinkedin,
} from "react-icons/fa";
import { useForm } from "react-hook-form";

function Contact({ darkMode }) {
  const contactInfoRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    gsap.set([contactInfoRef.current, contactFormRef.current], {
      opacity: 0,
    });

    const t1 = gsap.timeline({ defaults: { ease: "power3.out" } });

    t1.fromTo(
      contactInfoRef.current,
      { x: 200 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0"
    ).fromTo(
      contactFormRef.current,
      { x: -200 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0"
    );
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here (e.g., emailJS, API call)
  };

  return (
    <div
      className={`contact-container ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="contact-content">
        <h2
          className={`contact-heading ${darkMode ? "dark-mode" : "light-mode"}`}
        >
          Let's Connect
        </h2>

        <div className="contact-grid">
          <div className="contact-info" ref={contactInfoRef}>
            <h3
              className={`contact-subheading ${
                darkMode ? "dark-mode" : "light-mode"
              }`}
            >
              Get in Touch
            </h3>

            <div className="contact-method">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a
                  href="mailto:ak1818375@gmail.com"
                  className={`contact-link ${
                    darkMode ? "dark-mode" : "light-mode"
                  }`}
                >
                  ak1818375@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-method">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <a
                  href="tel:+923301375469"
                  className={`contact-link ${
                    darkMode ? "dark-mode" : "light-mode"
                  }`}
                >
                  +92 330 1375469
                </a>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Hannankhan203"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub
                  className={`social-icon ${
                    darkMode ? "dark-mode" : "light-mode"
                  }`}
                />
              </a>
              <a
                href="https://x.com/Hannankhan203"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter
                  className={`social-icon ${
                    darkMode ? "dark-mode" : "light-mode"
                  }`}
                />
              </a>
              <a
                href="https://www.instagram.com/hannannnkhann/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram
                  className={`social-icon ${
                    darkMode ? "dark-mode" : "light-mode"
                  }`}
                />
              </a>
              {/* Add your LinkedIn if available */}
              {/* <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a> */}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="contact-form" ref={contactFormRef}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className={errors.name ? "error" : ""}
              />
              {errors.name && (
                <span className="error-message">{errors.name.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className={errors.message ? "error" : ""}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              className={`submit-btn ${darkMode ? "dark-mode" : "light-mode"}`}
            >
              Send Message
            </button>
          </form>
        </div>

        <div className={`copyright ${darkMode ? "dark-mode" : "light-mode"}`}>
          &copy; {new Date().getFullYear()} Abdul Hannan Khan. All rights
          reserved.
        </div>
      </div>
    </div>
  );
}

export default Contact;
