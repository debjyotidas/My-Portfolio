import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AnimatedStats.css';

const AnimatedStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const stats = [
    { value: 50, suffix: '+', label: 'Tests Automated', duration: 2 },
    { value: 95, suffix: '%', label: 'Test Coverage', duration: 2 },
    { value: 100, suffix: '+', label: 'API Endpoints Tested', duration: 2.5 },
    { value: 70, suffix: '%', label: 'Time Saved', duration: 2 }
  ];

  return (
    <div ref={ref} className="animated-stats">
      <motion.h3
        className="stats-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Impact & Achievements
      </motion.h3>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="stat-value">
              {inView && <CountUp end={stat.value} duration={stat.duration} suffix={stat.suffix} />}
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CountUp = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = (timestamp - startTimeRef.current) / (duration * 1000);

      if (progress < 1) {
        countRef.current = Math.floor(end * progress);
        setCount(countRef.current);
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default AnimatedStats;
