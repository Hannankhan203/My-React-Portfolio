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
          <i className="fas fa-envelope"></i> Email: ak1818375@gmail.com
        </p>
        <p className="phone">
          <i className="fas fa-phone"></i> Phone: +92 330 1375469
        </p>
        <div className="socials">
          <i className="fab fa-github"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Abdul Hannan Khan. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Contact;
