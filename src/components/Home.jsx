import React from 'react';
import './Home.css';
import profileImage from '../assets/IMG1.jpg';
 // Replace with your actual image path

export default function Home() {
  return (
    <section className="home-section">

    

      <div className="home-content">
        <div className="home-text">
          <h1><span className="blue">Web Developer</span></h1>
          <p>
            Hi, I'm <span className="name">Alim Sayyad</span>, a passionate Full-Stack Developer with a strong interest in Front-End and Back-End Development. I completed my Bachelor's degree in Computer Science (BCS) from Abeda Inamdar Senior College, Pune, and I am currently pursuing a Master’s degree in Computer Science (MCS) from the same college.
          </p>
          <p>
            I enjoy solving real-world problems through code and continuously learning new technologies to stay ahead in web development. I am open to freelance projects, internships and collaborations.
          </p>
          <p>
           Coding is not just work for me — it’s an art where I leave my signature on every project.
          </p>
        </div>
        <div className="home-image">
          <img src={profileImage} alt="Alim Sayyad" />
        </div>
      </div>
    </section>
  );
}
