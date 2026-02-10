import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact noise2">
      <div className="contact-header">
        <span className="cursive">Get in Touch</span>
        <h1>Contact Us</h1>
        <p>
          Have questions or want to place an order? Fill out the form below and we will get back to you!
        </p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="Subject" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your Message"></textarea>
        </div>

        <button type="submit" className="cta">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
