import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaTwitter,
  FaInstagram,
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
  const copyrightRef = useRef(null);

  // Helper functions to safely assign refs in array refs
  const setSocialIconRef = (index) => (el) => {
    socialIconsRef.current[index] = el;
  };

  const setContactItemRef = (index) => (el) => {
    contactItemsRef.current[index] = el;
  };

  const setFormInputRef = (index) => (el) => {
    formInputsRef.current[index] = el;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const socialIconsNodes = socialIconsRef.current.filter(Boolean);
    const formInputsNodes = formInputsRef.current.filter(Boolean);

    // Initial states
    gsap.set([contactInfoRef.current, contactFormRef.current], {
      opacity: 0,
      y: 100,
    });

    gsap.set(headingRef.current, {
      opacity: 0,
      y: 50,
    });

    gsap.set(socialIconsNodes, {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
    });

    gsap.set(contactItemsRef.current.filter(Boolean), {
      opacity: 0,
      x: -50,
    });

    gsap.set(formInputsNodes, {
      opacity: 0,
      y: 30,
    });

    gsap.set(copyrightRef.current, {
      opacity: 0,
      y: 30,
    })

    // Main timeline
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    mainTl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });

    mainTl.to(
      contactInfoRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

    mainTl.to(
      contactItemsRef.current.filter(Boolean),
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    mainTl.to(
      socialIconsNodes,
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );

    mainTl.to(
      contactFormRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8"
    );

    mainTl.to(
      formInputsNodes,
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.5"
    );

    mainTl.to(copyrightRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.3"
  )

    ScrollTrigger.refresh();

    // Hover animations for social icons
    socialIconsNodes.forEach((icon) => {
      if (!icon) return;

      const hoverTl = gsap.timeline({ paused: true });

      hoverTl.to(icon, {
        scale: 1.2,
        rotate: 360,
        duration: 0.4,
        ease: "power2.out",
      });

      const onMouseEnter = () => hoverTl.play();
      const onMouseLeave = () => hoverTl.reverse();

      icon.addEventListener("mouseenter", onMouseEnter);
      icon.addEventListener("mouseleave", onMouseLeave);

      icon._hoverHandlers = { onMouseEnter, onMouseLeave };
    });

    // Form input focus animations
    formInputsNodes.forEach((input) => {
      if (!input) return;

      const focusTl = gsap.timeline({ paused: true });

      focusTl
        .to(input, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          input.parentElement.querySelector("label"),
          {
            y: -3,
            color: darkMode ? "#64ffda" : "#007bff",
            duration: 0.3,
            ease: "power2.out",
          },
          0
        );

      const onFocus = () => focusTl.play();
      const onBlur = () => focusTl.reverse();

      input.addEventListener("focus", onFocus);
      input.addEventListener("blur", onBlur);

      input._focusHandlers = { onFocus, onBlur };
    });

    // Handle browser back/forward cache and refresh ScrollTrigger & reset styles
    const onPageShow = (event) => {
      if (event.persisted) {
        ScrollTrigger.refresh(true);

        // Reset all elements to visible/normal positions
        gsap.set([contactInfoRef.current, contactFormRef.current], {
          opacity: 1,
          y: 0,
        });
        gsap.set(headingRef.current, { opacity: 1, y: 0 });
        gsap.set(socialIconsRef.current.filter(Boolean), {
          opacity: 1,
          scale: 1,
          rotate: 0,
        });
        gsap.set(contactItemsRef.current.filter(Boolean), {
          opacity: 1,
          x: 0,
        });
        gsap.set(formInputsRef.current.filter(Boolean), { opacity: 1, y: 0 });
        gsap.set(copyrightRef.current, { opacity: 1, y: 0, });
      }
    };

    window.addEventListener("pageshow", onPageShow);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearScrollMemory();

      socialIconsNodes.forEach((icon) => {
        if (icon && icon._hoverHandlers) {
          icon.removeEventListener(
            "mouseenter",
            icon._hoverHandlers.onMouseEnter
          );
          icon.removeEventListener(
            "mouseleave",
            icon._hoverHandlers.onMouseLeave
          );
          delete icon._hoverHandlers;
        }
      });

      formInputsNodes.forEach((input) => {
        if (input && input._focusHandlers) {
          input.removeEventListener("focus", input._focusHandlers.onFocus);
          input.removeEventListener("blur", input._focusHandlers.onBlur);
          delete input._focusHandlers;
        }
      });

      window.removeEventListener("pageshow", onPageShow);

      socialIconsRef.current = [];
      contactItemsRef.current = [];
      formInputsRef.current = [];
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
              ref={setContactItemRef(0)}
              className={`contact-subheading ${
                darkMode ? "dark-mode" : "light-mode"
              }`}
            >
              Get in Touch
            </h3>

            <div className="contact-details">
              <div className="contact-item" ref={setContactItemRef(1)}>
                <FaEnvelope
                  ref={setSocialIconRef(0)}
                  className={`contact-icon ${
                    darkMode ? "dark-mode" : "light-mode"
                  }`}
                />
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

              <div className="contact-item" ref={setContactItemRef(2)}>
                <FaPhone
                  ref={setSocialIconRef(1)}
                  className={`contact-icon ${
                    darkMode ? "dark-mode" : "light-mode"
                  }`}
                />
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

              <div className="social-links" ref={setContactItemRef(3)}>
                <a
                  href="https://github.com/Hannankhan203"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub
                    ref={setSocialIconRef(2)}
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
                    ref={setSocialIconRef(3)}
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
                    ref={setSocialIconRef(4)}
                    className={`social-icon ${
                      darkMode ? "dark-mode" : "light-mode"
                    }`}
                  />
                </a>
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
                ref={setFormInputRef(0)}
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
                ref={setFormInputRef(1)}
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
                ref={setFormInputRef(2)}
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
      </div>
      <div rel={copyrightRef} className={`copyright ${darkMode ? "dark-mode" : "light-mode"}`}>
          &copy; {new Date().getFullYear()} Abdul Hannan Khan. All rights
          reserved.
        </div>
    </div>
  );
}

export default Contact;
