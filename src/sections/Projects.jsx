import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles, Cpu, Layers, CheckCircle } from 'lucide-react';
import { projects } from '../data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const displayRest = showAll ? rest : rest.slice(0, 3);

  // Mouse-tracking glow coordinates handler (zero lag)
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <motion.p 
          className="section-label"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          03 / Projects
        </motion.p>
        
        <motion.h2 
          className="section-title" 
          style={{ marginBottom: 16 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Things I've Built
        </motion.h2>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A selection of production systems, AI applications, and data engineering projects. Click on any project to view details.
        </motion.p>

        {/* Featured Projects Grid */}
        <div className={styles.featuredGrid}>
          {featured.map((p, i) => (
            <motion.div 
              key={i} 
              className={`glow-card ${styles.featuredCard}`}
              onMouseMove={handleMouseMove}
              onClick={() => setSelectedProject(p)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div className="glow-card-content">
                <div className={styles.cardTop}>
                  <span className={styles.featuredLabel}>Featured System</span>
                  <div className={styles.cardTags}>
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
                
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>
                
                <ul className={styles.highlights}>
                  {p.highlights.map((h, j) => (
                    <li key={j}>
                      <span className={styles.bulletSymbol}>→</span> {h}
                    </li>
                  ))}
                </ul>

                <div className={styles.cardAction}>
                  <span>Explore Architecture</span>
                  <ArrowRight size={14} className={styles.actionIcon} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Section */}
        <motion.h3 
          className={styles.otherTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Other Specialized Projects
        </motion.h3>
        
        <div className={styles.otherGrid}>
          {displayRest.map((p, i) => (
            <motion.div 
              key={i} 
              className={`glow-card ${styles.otherCard}`}
              onMouseMove={handleMouseMove}
              onClick={() => setSelectedProject(p)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="glow-card-content">
                <div className={styles.otherTop}>
                  <span className={styles.folder}>📁</span>
                  <div className={styles.cardTags}>
                    {p.tags.slice(0, 2).map((t) => (
                      <span key={t} className={styles.tagSmall}>{t}</span>
                    ))}
                  </div>
                </div>
                
                <h4 className={styles.otherCardTitle}>{p.title}</h4>
                <p className={styles.otherCardDesc}>{p.description}</p>
                
                <div className={styles.otherCardAction}>
                  <span>View Technical Details</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Actions */}
        {!showAll && rest.length > 3 && (
          <motion.div 
            className={styles.showMoreWrap}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button className={styles.showMore} onClick={() => setShowAll(true)}>
              Show all {rest.length} projects
            </button>
          </motion.div>
        )}

        {/* Glassmorphic Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className={styles.modalContent}
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  className={styles.closeBtn} 
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close details"
                >
                  <X size={18} />
                </button>

                {/* Modal Header */}
                <div className={styles.modalHeader}>
                  <span className={styles.modalCategory}>
                    <Sparkles size={12} className={styles.modalCategoryIcon} />
                    Project Case Study
                  </span>
                  <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                  
                  <div className={styles.modalTags}>
                    {selectedProject.tags.map((t) => (
                      <span key={t} className={styles.modalTag}>{t}</span>
                    ))}
                  </div>
                </div>

                <hr className={styles.divider} />

                {/* Modal Layout */}
                <div className={styles.modalGrid}>
                  <div className={styles.modalLeft}>
                    <h4 className={styles.subHeading}>
                      <Layers size={14} /> Overview & Purpose
                    </h4>
                    <p className={styles.modalDesc}>{selectedProject.description}</p>

                    <h4 className={styles.subHeading}>
                      <CheckCircle size={14} /> Core Highlights & Specs
                    </h4>
                    <ul className={styles.modalHighlights}>
                      {(selectedProject.highlights || ['Production-ready container deployment', 'Full integration testing verified']).map((h, index) => (
                        <li key={index}>
                          <span className={styles.modalBullet}>✔</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.modalRight}>
                    <div className={styles.metaBox}>
                      <h4 className={styles.subHeading}>
                        <Cpu size={14} /> System Architecture
                      </h4>
                      <div className={styles.architectureStack}>
                        <div className={styles.archLayer}>
                          <span className={styles.archLayerName}>Frontend:</span>
                          <span className={styles.archLayerTech}>
                            {selectedProject.tags.includes('React') ? 'React / Vite' : selectedProject.tags.includes('Streamlit') ? 'Streamlit App' : 'HTML5 / CSS3 / Vanilla JS'}
                          </span>
                        </div>
                        <div className={styles.archLayer}>
                          <span className={styles.archLayerName}>APIs & Core:</span>
                          <span className={styles.archLayerTech}>
                            {selectedProject.tags.includes('FastAPI') ? 'FastAPI Backend' : selectedProject.tags.includes('Flask') ? 'Flask Server' : selectedProject.tags.includes('Django') ? 'Django Framework' : 'n8n Automation Engine'}
                          </span>
                        </div>
                        <div className={styles.archLayer}>
                          <span className={styles.archLayerName}>Storage:</span>
                          <span className={styles.archLayerTech}>
                            {selectedProject.tags.includes('MongoDB') ? 'MongoDB Atlas' : selectedProject.tags.includes('PostgreSQL') ? 'PostgreSQL' : selectedProject.tags.includes('Firebase') ? 'Firebase Firestore' : 'SQLite DB'}
                          </span>
                        </div>
                        <div className={styles.archLayer}>
                          <span className={styles.archLayerName}>Infrastructure:</span>
                          <span className={styles.archLayerTech}>
                            {selectedProject.tags.includes('Docker') ? 'Docker Containerized' : 'Serverless Cloud (Vercel/Render)'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.metaActions}>
                      <a 
                        href={`mailto:abdulwasaymalik757@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(selectedProject.title)}`}
                        className={styles.modalBtn}
                      >
                        Inquire about this tech
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
