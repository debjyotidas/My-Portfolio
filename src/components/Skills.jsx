import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNpm, FaNetworkWired, FaCloud, FaRobot, FaVial, FaCheckCircle, FaCode
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiCypress,
  SiJest
} from 'react-icons/si';
import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const iconMap = {
    FaReact, SiJavascript, FaHtml5, FaCss3Alt, SiTailwindcss, FaGitAlt,
    SiCypress, SiJest, FaNetworkWired, FaRobot, FaVial, FaCheckCircle,
    FaCloud, FaCode, FaGithub, FaNpm
  };

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="skills-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning test automation and frontend development
          </p>
        </motion.div>

        <div ref={ref}>
          {/* Testing Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="skills-category"
          >
            <h3 className="category-title">
              <FaRobot /> Test Automation & QA
            </h3>
            <div className="skills-grid">
              {skills.testing.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="skill-card"
                >
                  <div className="skill-icon">
                    {getIcon(skill.icon)}
                  </div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-level-container">
                      <div
                        className="skill-level-bar"
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="skill-level-text">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frontend Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="skills-category"
          >
            <h3 className="category-title">
              <FaReact /> Frontend Development
            </h3>
            <div className="skills-grid">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="skill-card"
                >
                  <div className="skill-icon">
                    {getIcon(skill.icon)}
                  </div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-level-container">
                      <div
                        className="skill-level-bar"
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="skill-level-text">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="skills-category"
          >
            <h3 className="category-title">
              <FaCode /> Tools & Technologies
            </h3>
            <div className="skills-grid">
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="skill-card"
                >
                  <div className="skill-icon">
                    {getIcon(skill.icon)}
                  </div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-level-container">
                      <div
                        className="skill-level-bar"
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="skill-level-text">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
