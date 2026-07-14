import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import styles from './Skills.module.css';

const categoryColors = {
  'Languages & Frameworks': 'var(--accent)',
  'Data & Analytics': 'var(--accent2)',
  'Cybersecurity': '#f87171',
  'AI / ML': '#a78bfa',
  'Tools & Platforms': '#f472b6',
  'Core Strengths': '#fbbf24',
};

export default function Skills() {
  // Mouse hover coordinate tracker (zero latency)
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  // Stagger animation variables
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const pillVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <motion.p 
          className="section-label"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          04 / Skills
        </motion.p>
        
        <motion.h2 
          className="section-title" 
          style={{ marginBottom: 48 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technology Stack
        </motion.h2>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div 
              key={category} 
              className={`glow-card ${styles.card}`}
              onMouseMove={handleMouseMove}
              variants={cardVariants}
            >
              <div className="glow-card-content">
                <div
                  className={styles.categoryDot}
                  style={{ background: categoryColors[category] || 'var(--accent)' }}
                />
                <h3 className={styles.category}>{category}</h3>
                
                <motion.div 
                  className={styles.pills}
                  variants={containerVariants}
                >
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      className={styles.pill}
                      variants={pillVariants}
                      style={{ '--pill-color': categoryColors[category] || 'var(--accent)' }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
