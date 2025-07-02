// @ts-nocheck
import React, { useState } from 'react';
import './Projects.css';

// Naukri Project Images
import naukri1 from '../assets/naukri1.png';
import naukri2 from '../assets/naukri2.png';
import naukri3 from '../assets/naukri3.png';
import naukri4 from '../assets/naukri4.png';

import M1 from '../assets/M1.jpg';
import M2 from '../assets/M2.jpg';
import M3 from '../assets/M3.jpg';
import M4 from '../assets/M4.jpg';
import M5 from '../assets/M5.jpg';
import M6 from '../assets/M6.jpg';
import M7 from '../assets/M7.jpg';
import M8 from '../assets/M8.jpg';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [zoomedImg, setZoomedImg] = useState(null);

  const toggleProject = (projectName) => {
    setExpandedProject(prev => (prev === projectName ? null : projectName));
  };

  const openZoom = (imgSrc) => {
    setZoomedImg(imgSrc);
  };

  const closeZoom = () => {
    setZoomedImg(null);
  };

  return (
    <div className="projects-section">
      <h1>My Projects</h1>

      {/* Naukri.com Clone */}
      <div className="project-card">
        <h2>Naukri.Com Clone</h2>
        <p><strong className="tools-title">Tools & Technologies :</strong> HTML5, CSS, ES5, NoSQL Workbench</p>
        <p>A job portal with features like Naukri.com to help users find and apply for jobs online easily.</p>

        <div className="button-row">
          <button onClick={() => toggleProject('naukri')}>
            {expandedProject === 'naukri' ? 'Hide Details' : 'View More Details'}
          </button>
          <a href="https://online-job-service.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className="view-online">Live Demo</button>
          </a>
        </div>

        {expandedProject === 'naukri' && (
          <div className="project-detail">
            <h3>Project Overview:</h3>
            <p>
              Developed as a final year project, this job portal clone helps job seekers and employers connect.
              Built with HTML5, CSS, and ES5 for frontend and NoSQL Workbench for backend, the platform allows
              users to create profiles, search jobs, and manage applications.
            </p>

            <h3>Key Features:</h3>
            <ul>
              <li>Secure login/registration</li>
              <li>Job listing page with search filters</li>
              <li>User profile creation and management</li>
              <li>Job application submission system</li>
              <li>Admin panel for job listing management</li>
            </ul>

            <div className="project-images">
              {[naukri1, naukri2, naukri3, naukri4].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Naukri Screenshot ${i + 1}`}
                  onClick={() => openZoom(img)}
                  className="zoomable-image"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Meeting App */}
      <div className="project-card">
        <h2>Meeting App With Transcription</h2>
        <p><strong className="tools-title">Tools & Technologies :</strong> Jitsi Meet, VOSK Server, Nginx, Prosody, Jicofo, Jigasi, Jibri, JavaScript, REST APIs</p>
        <p>Conduct secure meetings with real-time transcription and summarization.</p>

        <div className="button-row">
          <button onClick={() => toggleProject('meeting')}>
            {expandedProject === 'meeting' ? 'Hide Details' : 'View More Details'}
          </button>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button className="view-online">Live Demo</button>
          </a>
        </div>

        {expandedProject === 'meeting' && (
          <div className="project-detail">
            <h3>Project Overview:</h3>
            <p>
              Developed a video conferencing app using Jitsi and VOSK for real-time transcription.
              Configured all core components (Jitsi Meet, Videobridge, Jicofo, Jigasi, Jibri) on Ubuntu server with Nginx.
              Integrated REST APIs for auto-summarization and deployed a secure, functional meeting platform.
            </p>

            <h3>Key Features:</h3>
            <ul>
              <li>Live transcription using VOSK</li>
              <li>Meeting summary generation</li>
              <li>Secure login system</li>
              <li>Jitsi integration with custom UI</li>
              <li>Live subtitles during video meetings using real-time speech-to-text</li>
            </ul>

            <div className="project-images">
              {[M1, M2, M3, M4, M5, M6, M7, M8].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Meeting App Screenshot ${i + 1}`}
                  onClick={() => openZoom(img)}
                  className="zoomable-image"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Zoom Overlay */}
      {zoomedImg && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <img src={zoomedImg} alt="Zoomed" className="zoomed-image" />
          <button className="close-btn" onClick={closeZoom}>×</button>
        </div>
      )}
    </div>
  );
}
