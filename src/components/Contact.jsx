import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss how I can contribute to your team
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="contact-content"
        >
          <ContactForm />

          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              I'm currently seeking opportunities as a QA Analyst or Automation Engineer.
              Feel free to reach out for collaborations or just a friendly chat about testing and development.
            </p>

            <div className="contact-details">
              <a href={`mailto:${personalInfo.email}`} className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>{personalInfo.email}</p>
                </div>
              </a>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>{personalInfo.location}</p>
                </div>
              </div>

              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-item">
                <FaGithub className="contact-icon" />
                <div>
                  <h4>GitHub</h4>
                  <p>@debjyotidas</p>
                </div>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                <FaLinkedin className="contact-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <p>Connect with me</p>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-card">
              <h3>Download My CV</h3>
              <p>Get a detailed overview of my skills, experience, and achievements</p>
              <a href="/Debjyoti_Das_Automation_Tester_CV.pdf" download className="btn btn-primary">
                Download CV
              </a>
            </div>

            <div className="cta-card">
              <h3>View My Work</h3>
              <p>Check out my GitHub repositories for test automation and development projects</p>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub Profile
              </a>
            </div>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="footer"
        >
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Built with React & Vite</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
