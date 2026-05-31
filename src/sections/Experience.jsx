import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data/portfolio';
import styles from './Experience.module.css';

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className={`section ${styles.exp}`}>
      <div className="container">
        <motion.p 
          className="section-label"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          02 / Experience
        </motion.p>
        
        <motion.h2 
          className="section-title" 
          style={{ marginBottom: 48 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Where I've Worked
        </motion.h2>

        <motion.div 
          className={styles.layout}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.tabs}>
            {experience.map((e, i) => (
              <button
                key={i}
                className={`${styles.tab} ${active === i ? styles.activeTab : ''}`}
                onClick={() => setActive(i)}
              >
                {active === i && (
                  <motion.div
                    className={styles.tabActiveBg}
                    layoutId="activeTabBg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={styles.tabContent}>
                  <span className={styles.tabCompany}>{e.company.split(' ').slice(0, 3).join(' ')}</span>
                  <span className={styles.tabType}>{e.type}</span>
                </span>
              </button>
            ))}
          </div>

          <div className={styles.panel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <div className={styles.panelHeader}>
                  <div>
                    <h3 className={styles.role}>{experience[active].role}</h3>
                    <p className={styles.company}>
                      <span className={styles.at}>@</span>
                      {experience[active].company}
                    </p>
                    <p className={styles.location}>{experience[active].location}</p>
                  </div>
                  <span className={styles.typeBadge}>{experience[active].type}</span>
                </div>
                
                <ul className={styles.bullets}>
                  {experience[active].bullets.map((b, i) => (
                    <motion.li 
                      key={i} 
                      className={styles.bullet}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <span className={styles.bulletArrow}>▶</span>
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
