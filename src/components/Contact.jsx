import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaTwitter,
  FaInstagram,
  // FaLinkedin,
} from "react-icons/fa";
import { useForm } from "react-hook-form";

gsap.registerPlugin(ScrollTrigger);

function Contact({ darkMode }) {
  const contactInfoRef = useRef(null);
  const contactFormRef = useRef(null);
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const socialIconsRef = useRef([]);
  const contactItemsRef = useRef([]);
  const formInputsRef = useRef([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Initial states
    gsap.set([contactInfoRef.current, contactFormRef.current], {
      opacity: 0,
      y: 100
    });

    gsap.set(headingRef.current, {
      opacity: 0,
      y: 50
    });

    gsap.set(socialIconsRef.current, {
      opacity: 0,
      scale: 0.5,
      rotate: -180
    });

    gsap.set(contactItemsRef.current, {
      opacity: 0,
      x: -50
    });

    gsap.set(formInputsRef.current, {
      opacity: 0,
      y: 30
    });

    // Main timeline
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Heading animation with text reveal effect
    mainTl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Contact info section animation
    mainTl.to(contactInfoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");

    // Contact items staggered animation
    mainTl.to(contactItemsRef.current, {
      opacity: 1,
      x: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5");

    // Social icons animation with rotation
    mainTl.to(socialIconsRef.current, {
      opacity: 1,
      scale: 1,
      rotate: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.3");

    // Form animation
    mainTl.to(contactFormRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8");

    // Form inputs staggered animation
    mainTl.to(formInputsRef.current, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.5");

    // Hover animations for social icons
    socialIconsRef.current.forEach((icon) => {
      const hoverTl = gsap.timeline({ paused: true });
      
      hoverTl.to(icon, {
        scale: 1.2,
        rotate: 360,
        duration: 0.4,
        ease: "power2.out"
      });

      icon.addEventListener("mouseenter", () => hoverTl.play());
      icon.addEventListener("mouseleave", () => hoverTl.reverse());
    });

    // Form input focus animations
    formInputsRef.current.forEach((input) => {
      const focusTl = gsap.timeline({ paused: true });
      
      focusTl
        .to(input, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        })
        .to(input.parentElement.querySelector('label'), {
          y: -3,
          color: darkMode ? "#64ffda" : "#007bff",
          duration: 0.3,
          ease: "power2.out"
        }, 0);

      input.addEventListener("focus", () => focusTl.play());
      input.addEventListener("blur", () => focusTl.reverse());
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      socialIconsRef.current.forEach(icon => {
        icon?.removeEventListener("mouseenter", () => {});
        icon?.removeEventListener("mouseleave", () => {});
      });
      formInputsRef.current.forEach(input => {
        input?.removeEventListener("focus", () => {});
        input?.removeEventListener("blur", () => {});
      });
    };
  }, [darkMode]);

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <div
      ref={containerRef}
      className={`contact-container ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="contact-content">
        <h2
          ref={headingRef}
          className={`contact-heading ${darkMode ? "dark-mode" : "light-mode"}`}
        >
          Let's Connect
        </h2>

        <div className="contact-grid">
          <div className="contact-info" ref={contactInfoRef}>
            <h3
              ref={el => contactItemsRef.current[0] = el}
              className={`contact-subheading ${
                darkMode ? "dark-mode" : "light-mode"
              }`}
            >
              Get in Touch
            </h3>

            <div className="contact-details">
              <div 
                className="contact-item"
                ref={el => contactItemsRef.current[1] = el}
              >
                <FaEnvelope ref={el => socialIconsRef.current[0] = el} className={`contact-icon ${darkMode ? "dark-mode" : "light-mode"}`} />
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

              <div 
                className="contact-item"
                ref={el => contactItemsRef.current[2] = el}
              >
                <FaPhone ref={el => socialIconsRef.current[1] = el} className={`contact-icon ${darkMode ? "dark-mode" : "light-mode"}`} />
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

              <div 
                className="social-links"
                ref={el => contactItemsRef.current[3] = el}
              >
                <a
                  href="https://github.com/Hannankhan203"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub ref={el => socialIconsRef.current[2] = el} className={`social-icon ${darkMode ? "dark-mode" : "light-mode"}`} />
                </a>
                <a
                  href="https://x.com/Hannankhan203"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter ref={el => socialIconsRef.current[3] = el} className={`social-icon ${darkMode ? "dark-mode" : "light-mode"}`} />
                </a>
                <a
                  href="https://www.instagram.com/hannannnkhann/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram ref={el => socialIconsRef.current[4] = el} className={`social-icon ${darkMode ? "dark-mode" : "light-mode"}`} />
                </a>
                {/* Add your LinkedIn if available */}
                {/* <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon" />
                </a> */}
              </div>
            </div>
          </div>

          <form 
            ref={contactFormRef}
            onSubmit={handleSubmit(onSubmit)} 
            className={`contact-form ${darkMode ? "dark-mode" : "light-mode"}`}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                ref={el => formInputsRef.current[0] = el}
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
                ref={el => formInputsRef.current[1] = el}
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
                ref={el => formInputsRef.current[2] = el}
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
