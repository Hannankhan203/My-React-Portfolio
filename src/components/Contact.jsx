import React from "react";
import "../Font Awesome/css/all.css";

function Contact() {
  return (
    <footer id="Contact">
      <div className="contact-section">
        <div className="upper-section">
          <h2 className="contact-heading">Contact Me</h2>
          <p className="contact-p">
            Got a project idea or just want to chat? Drop me a message!
          </p>
          <p className="mail">
            <i className="fas fa-envelope"></i> Email:{" "}
            <a href="mailto:ak1818375@gmail.com">ak1818375@gmail.com</a>
          </p>
          <p className="phone">
            <i className="fas fa-phone"></i> Phone:{" "}
            <a href="tel:+923301375469">+92 330 1375469</a>
          </p>
          <div className="socials">
            <a href="https://github.com/Hannankhan203" target='_blank'>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://x.com/Hannankhan203" target='_blank'>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/hannannnkhann/" target='_blank'>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Abdul Hannan Khan. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Contact;
