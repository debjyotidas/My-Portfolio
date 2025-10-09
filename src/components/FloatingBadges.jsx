import { motion } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaClock, FaTrophy } from 'react-icons/fa';
import './FloatingBadges.css';

const FloatingBadges = () => {
  const badges = [
    {
      icon: <FaCheckCircle />,
      text: '50+ Tests',
      color: '#10b981',
      delay: 0
    },
    {
      icon: <FaTrophy />,
      text: '95% Coverage',
      color: '#f59e0b',
      delay: 0.2
    },
    {
      icon: <FaRocket />,
      text: '100+ APIs',
      color: '#3b82f6',
      delay: 0.4
    },
    {
      icon: <FaClock />,
      text: '70% Time Saved',
      color: '#8b5cf6',
      delay: 0.6
    }
  ];

  return (
    <div className="floating-badges-container">
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          className="floating-badge"
          style={{
            backgroundColor: badge.color,
            boxShadow: `0 8px 24px ${badge.color}40`
          }}
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: badge.delay,
            duration: 0.5,
            type: 'spring',
            stiffness: 200
          }}
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            className="badge-icon"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              delay: badge.delay + 1,
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            {badge.icon}
          </motion.div>
          <span className="badge-text">{badge.text}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBadges;
