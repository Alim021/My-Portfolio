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

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add your form submission logic here (e.g., API call)

    // Show success message
    setSuccessMessage("Sent Message Successfully");

    // Clear form fields
    setFormData({ name: "", email: "", message: "" });

    // Hide message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h1>Contact Me</h1>
        <p className="contact-description">
          "Feel free to reach out to me for any questions, project
          collaborations, or career opportunities. I’m here to help and
          connect!"
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
