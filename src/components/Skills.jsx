import React from 'react';
import './Skills.css';
import {
  FaLaptopCode,
  FaTools,
  FaDatabase,
  FaCogs,
  FaUsers,
  FaToolbox,
  FaGlobe,
  FaLightbulb,
  FaLaptop,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaJsSquare,
} from 'react-icons/fa';
import { SiMongodb, SiJavascript } from 'react-icons/si';

const skills = [
  { name: 'HTML', percent: 92 },
  { name: 'CSS', percent: 85 },
  { name: 'MySQL', percent: 95 },
  { name: 'MongoDB', percent: 80 },
  { name: 'React', percent: 80 },
  { name: 'Python', percent: 70 },
  { name: 'JavaScript', percent: 76 },
];

const categories = {
  Frontend: ['HTML5', 'CSS', 'JavaScript', 'React.js'],
  Backend: ['Node.js', 'JAVA', 'Python3'],
  Databases: ['MySQL', 'MongoDB'],
  Tools: ['Linux', 'V S Code', 'Eclips', 'Git', 'GitHub', 'Vercel', 'Netlify'],
  Other: ['REST APIs', 'Responsive Design', 'Basic SEO Optimisation', 'Deployment'],
  'Soft Skills': ['Problem-solving', 'Team Collaboration', 'Fast Learner', 'Time Management'],
};

// Category icons
// Category icons with colors
const categoryIcons = {
  Frontend: <FaLaptop style={{ marginRight: '8px', color: 'White' }} />,       // Orange
  Backend: <FaToolbox style={{ marginRight: '8px', color: '#E34F26' }} />,       // Dark Red
  Databases: <FaDatabase style={{ marginRight: '8px', color: '#00d4ff' }} />,    // Maroon
  Tools: <FaTools style={{ marginRight: '8px', color: 'White' }} />,           // Blue
  Other: <FaGlobe style={{ marginRight: '8px', color: 'Blue' }} />,           // Green
  'Soft Skills': <FaLightbulb style={{ marginRight: '8px', color: '#F1C40F' }} /> // Yellow
};


// Skill icons
const skillIcons = {
  HTML: <FaHtml5 style={{ marginRight: '8px', color: '#E34F26' }} />,
  CSS: <FaCss3Alt style={{ marginRight: '8px', color: '#1572B6' }} />,
  MySQL: <FaDatabase style={{ marginRight: '8px', color: '#00d4ff' }} />,
  MongoDB: <FaDatabase style={{ marginRight: '8px', color: '#47A248' }} />,
  React: <FaReact style={{ marginRight: '8px', color: '#61DAFB' }} />,
  Python: <FaPython style={{ marginRight: '8px', color: '#F7DF1E' }} />,
  JavaScript: <SiJavascript style={{ marginRight: '8px', color: '#F7DF1E' }} />,
};

export default function Skills() {
  return (
    <div className="skills-section">
      <h2 className="skills-heading">
        My Skills
      </h2>

      <div className="bars">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-bar">
            <span className="skill-name">
              {skillIcons[skill.name] || null}
              {skill.name}
            </span>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: `${skill.percent}%` }}></div>
              <span className="bar-percent">{skill.percent}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="categories">
        {Object.entries(categories).map(([title, items]) => (
          <div className="category" key={title}>
            <h3 className="category-heading">
              {categoryIcons[title] || null}
              {title}
            </h3>
            <p>{items.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
