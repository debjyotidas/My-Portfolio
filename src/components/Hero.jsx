import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hi, I'm
          </motion.p>

          <motion.h1 className="hero-name" variants={itemVariants}>
            {personalInfo.name}
          </motion.h1>

          <motion.h2 className="hero-title" variants={itemVariants}>
            {personalInfo.title}
          </motion.h2>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            {personalInfo.subtitle}
          </motion.p>

          <motion.p className="hero-bio" variants={itemVariants}>
            {personalInfo.bio}
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="/Debjyoti_Das_Automation_Tester_CV.pdf" download className="btn btn-secondary">
              <FaDownload /> Download CV
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" variants={itemVariants}>
          <div className="code-window">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-content">
              <pre>
{`const developer = {
  name: "${personalInfo.name}",
  role: "QA & Automation",
  skills: [
    "Playwright",
    "Cypress",
    "React",
    "JavaScript"
  ],
  passion: "Quality Code ✨",
  testing: () => {
    return "100% Coverage";
  }
};`}
              </pre>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="hero-scroll">
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() => {
            const skillsSection = document.querySelector('#skills');
            if (skillsSection) {
              skillsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          role="button"
          aria-label="Scroll to skills section"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
