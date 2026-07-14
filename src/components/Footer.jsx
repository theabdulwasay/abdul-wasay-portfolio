import React from 'react';
import styles from './Footer.module.css';
import { personal } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} Abdul Wasay · Built with React + Vite · Deployed on Vercel
        </span>
        <div className={styles.links}>
          <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
