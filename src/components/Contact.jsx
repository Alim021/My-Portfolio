import React, { useState } from "react";
import "./Contact.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const WEBHOOK_URL = "https://discord.com/api/webhooks/1384949557770846278/d7l5rjDY8LkKZckM2uE9yf23vhVft6tU5MbfEGIHi6GiUAwnEVKF8mNsqf2gGENZEzFf"; // replace with your actual webhook

const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email, message } = formData;

  // Format message
  const content = `📩 **New Contact Form Submission**\n\n👤 **Name**: ${name}\n📧 **Email**: ${email}\n📝 **Message**: ${message}`;

  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    // Success message
    setSuccessMessage("Sent Message Successfully");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSuccessMessage(""), 3000);
  } catch (error) {
    console.error("Webhook Error:", error);
    setSuccessMessage("❌ Failed to send message. Try again.");
    setTimeout(() => setSuccessMessage(""), 3000);
  }
};


  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h1>Contact Me</h1>
        <p className="contact-description">
          "Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        </p>

        
        <div className="contact-info">
          <div className="info-box">
            <MdEmail className="icon" />
            <div>
              <h3>Email</h3>
              <p>sayyad0022@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaLinkedin className="icon" />
            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/alim-sayyad"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/alim-sayyad
              </a>
            </div>
          </div>

          <div className="info-box">
            <FaGithub className="icon" />
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/Alim021"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Alim021
              </a>
            </div>
          </div>

          <div className="info-box">
            <MdPhone className="icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9309599402</p>
            </div>
          </div>

          <div className="info-box">
            <MdLocationOn className="icon" />
            <div>
              <h3>Location</h3>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Message</h2>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <textarea
              name="message"
              placeholder="Type your Message..."
              // rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send</button>

          {/* Success Message */}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
