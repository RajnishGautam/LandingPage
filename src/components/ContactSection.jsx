import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import "./Contactsection.css";

const ContactWithVideo = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const phone = formData.get("phone").trim().replace(/\s+/g, "");
    const message = formData.get("message").trim();

    // Basic validation
    if (!name || !email || !phone) {
      alert("Please fill all required fields: Name, Email, and Phone Number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number with optional country code.");
      return;
    }

    // Show success message immediately
    setShowSuccess(true);
    e.target.reset();
    setTimeout(() => setShowSuccess(false), 3000);

    // Send data to Google Apps Script (no-cors)
    fetch(
      "https://script.google.com/macros/s/AKfycbwezz2G5k5MBpxWd_w69VO1W2kJmTbPPk0QMucE2nO4ZIfc4bzTcOcVMXshGwDp0sd9/exec",
      {
        method: "POST",
        mode: "no-cors", // avoids CORS error
        body: JSON.stringify({ name, email, phone, message }),
        headers: { "Content-Type": "application/json" },
      }
    ).catch((err) => console.error("Error sending form data:", err));
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Social Icons */}
        <div className="contact-socials">
          <a
            href="https://www.facebook.com/share/1CRjRz1M3j/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/punto7x_in?igsh=eWhyYTZ2bHdjYXFx"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/526634149718"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/company/7dot-it-soln/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Text Content */}
        <div className="contact-middle">
          <h2 className="discount-heading">
            Develop your dreams digitally starting at{" "}
            <span className="original-price">$799</span>
            <span className="discounted-price"> $499</span>
          </h2>
          {/* Image below the text */}
          <img src="/webdev.gif" alt="Decorative" className="discount-image" />
        </div>

        {/* Contact Form */}
        <div className="contact-right">
          <div className="tagline">
            <div className="tagline-line"></div>
            <div className="tagline-dot"></div>
            <div className="tagline-text">Get In Touch</div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="+52 9876543210"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              rows="5"
            ></textarea>
            <button type="submit" className="submitform-button">
              Get A Call
            </button>
          </form>

          {showSuccess && (
            <div className="popup-message">
              Thank you! We have received your message.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactWithVideo;
