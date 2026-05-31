import React from 'react';
import { personal, certifications, education } from '../data/portfolio';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <p className="section-label">01 / About</p>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className="section-title">
              Turning data into<br />
              <span className={styles.accent}>decisions.</span>
            </h2>
            <p className={styles.bio}>{personal.summary}</p>
            <div className={styles.links}>
              <a href={personal.github} target="_blank" rel="noreferrer" className={styles.link}>
                GitHub ↗
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className={styles.link}>
                LinkedIn ↗
              </a>
              <a href={`mailto:${personal.email}`} className={styles.link}>
                Email ↗
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Education</h3>
              <div className={styles.eduList}>
                {education.map((e, i) => (
                  <div key={i} className={styles.eduItem}>
                    <span className={styles.eduDegree}>{e.degree}</span>
                    {e.specialization && (
                      <span className={styles.eduSub}>{e.specialization}</span>
                    )}
                    <span className={styles.eduInst}>{e.institution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Certifications</h3>
              <div className={styles.certList}>
                {certifications.map((c, i) => (
                  <div key={i} className={styles.certItem}>
                    <span className={styles.certMark}>✦</span>
                    <div>
                      <div className={styles.certName}>{c.name}</div>
                      <div className={styles.certIssuer}>{c.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
