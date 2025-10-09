import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaCheckCircle, FaChartLine, FaRobot } from 'react-icons/fa';
import { SiCypress } from 'react-icons/si';
import { testingAchievements } from '../data/portfolioData';
import './TestingAchievements.css';

const TestingAchievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const getTechIcon = (tech) => {
    const iconMap = {
      'Playwright': <FaRobot />,
      'Cypress': <SiCypress />
    };
    return iconMap[tech] || null;
  };

  return (
    <section id="testing" className="testing-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            <FaRobot className="title-icon" />
            Testing & QA Achievements
          </h2>
          <p className="section-subtitle">
            Comprehensive test automation solutions with Playwright & Cypress
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="achievements-grid"
        >
          {testingAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="achievement-card"
            >
              <div className="achievement-header">
                <h3 className="achievement-title">{achievement.title}</h3>
                {achievement.github && (
                  <a
                    href={achievement.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    aria-label="View on GitHub"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>

              <p className="achievement-description">{achievement.description}</p>

              <div className="achievement-technologies">
                {achievement.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>

              <div className="achievement-highlights">
                <h4 className="highlights-title">
                  <FaCheckCircle /> Key Highlights
                </h4>
                <ul className="highlights-list">
                  {achievement.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {achievement.metrics && (
                <div className="achievement-metrics">
                  <h4 className="metrics-title">
                    <FaChartLine /> Metrics
                  </h4>
                  <div className="metrics-grid">
                    {Object.entries(achievement.metrics).map(([key, value], i) => (
                      <div key={i} className="metric-item">
                        <span className="metric-value">{value}</span>
                        <span className="metric-label">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="testing-cta"
        >
          <h3>Interested in my test automation work?</h3>
          <p>Check out my repositories on GitHub to see detailed test frameworks and implementations</p>
          <a
            href="https://github.com/debjyotidas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaGithub /> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestingAchievements;
