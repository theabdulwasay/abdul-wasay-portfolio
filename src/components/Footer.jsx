import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} Abdul Wasay · Built with React + Vite · Deployed on Vercel
        </span>
        <div className={styles.links}>
          <a href="https://github.com/theabdulwasay" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/abdul-wasay" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:abdulwasaymalik757@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
