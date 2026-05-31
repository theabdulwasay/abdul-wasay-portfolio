import React from 'react';
import { personal } from '../data/portfolio';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <p className="section-label">05 / Contact</p>
        <div className={styles.inner}>
          <h2 className={styles.heading}>
            Let's build something<br />
            <span className={styles.accent}>remarkable</span> together.
          </h2>
          <p className={styles.sub}>
            I'm open to data science roles, full-stack projects, and freelance collaborations.
            Drop me a message — I typically respond within 24 hours.
          </p>
          <div className={styles.actions}>
            <a href={`mailto:${personal.email}`} className={styles.btn}>
              Send Email ↗
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className={styles.btnOutline}>
              Connect on LinkedIn
            </a>
          </div>
          <div className={styles.details}>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Email</span>
              <a href={`mailto:${personal.email}`} className={styles.detailValue}>{personal.email}</a>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Phone</span>
              <span className={styles.detailValue}>{personal.phone}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Location</span>
              <span className={styles.detailValue}>{personal.location}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>GitHub</span>
              <a href={personal.github} target="_blank" rel="noreferrer" className={styles.detailValue}>
                github.com/theabdulwasay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
