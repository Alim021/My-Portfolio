import React, { useState } from "react";
import { FaPhone, FaWhatsapp, FaTimes, FaCommentDots } from "react-icons/fa";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-contact">
      {isOpen ? (
        <div className="contact-options">
          <a
            href="tel:9309599402"
            className="icon phone"
            aria-label="Call Now"
          >
            <FaPhone />
          </a>
          <a
            href="https://wa.me/919309599402"
            target="_blank"
            rel="noopener noreferrer"
            className="icon whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <button
            className="icon close"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
      ) : (
        <button
          className="icon main"
          onClick={() => setIsOpen(true)}
          aria-label="Open Contact Options"
        >
          <FaCommentDots />
        </button>
      )}

      {/* Inline CSS */}
      <style>{`
        .floating-contact {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
        }

        .contact-options {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .icon {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .icon:hover {
          transform: scale(1.1);
          opacity: 0.9;
        }

        .main {
          background-color: #ff5b5b;
        }

        .phone {
          background-color: #28a745;
        }

        .whatsapp {
          background-color: #25D366;
        }

        .close {
          background-color: #ff5b5b;
        }

        @media (max-width: 480px) {
          .icon {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}
