import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">My Experience</h1>

      <div className="experience-wrapper">
        <div className="experience-card">
          <h2 className="experience-role">Intern – Web Developer</h2>
          <p className="experience-company">CLIFTON CORPORATION – Jan 2025 – Apr 2025</p>
          <ul className="experience-list">
            <li>Worked on REST API summarization and created a functional REST server using Node.js.</li>
            <li>Integrated speech-to-text transcription using Jitsi and Vosk server for meeting applications.</li>
            <li>Explored and implemented basic Neural Network concepts for data processing.</li>
            <li>Configured and managed open-source tools like Jitsi Meet, Jibri, and Jigasi for real-time video conferencing.</li>
            <li>Deployed components on Ubuntu using command-line and Docker techniques.</li>
          </ul>
        </div>

        <div className="experience-card">
          <h2 className="experience-role">Intern – Web Uploading</h2>
          <p className="experience-company">Goa Group – Apr 2025 – Aug 2025</p>
          <ul className="experience-list">
            <li>Learned to deploy websites using FTP, cPanel, Netlify, and GitHub Pages.</li>
            <li>Gained hands-on experience in domain linking and managing both static and dynamic sites.</li>
            <li>Troubleshot common website upload errors and deployment issues.</li>
            <li>Improved teamwork and communication skills while handling real-time tasks.</li>
            <li>Grew technical knowledge and practical web deployment skills.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
