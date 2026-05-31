import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';
import styles from './ThemeCustomizer.module.css';

const themes = [
  { id: 'emerald', label: 'Emerald Matrix', color: '#00ffa3' },
  { id: 'cyan', label: 'Cyber Cyan', color: '#00c8ff' },
  { id: 'amethyst', label: 'Neon Amethyst', color: '#d946ef' },
];

export default function ThemeCustomizer() {
  const [activeTheme, setActiveTheme] = useState('emerald');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('abdul-wasay-theme') || 'emerald';
    setActiveTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const changeTheme = (themeId) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('abdul-wasay-theme', themeId);
    // Dispatch a custom event so other components (like canvas particles) can adapt instantly
    window.dispatchEvent(new CustomEvent('themechange', { detail: themeId }));
  };

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ''}`}>
      <button 
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Customize Theme"
        onMouseEnter={() => setIsOpen(true)}
      >
        <Palette size={20} className={styles.icon} />
      </button>

      <div 
        className={styles.dock}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={styles.dockHeader}>
          <span>Select Vibe</span>
        </div>
        <div className={styles.themeList}>
          {themes.map((t) => (
            <button
              key={t.id}
              className={`${styles.themeOption} ${activeTheme === t.id ? styles.active : ''}`}
              onClick={() => changeTheme(t.id)}
            >
              <span 
                className={styles.colorDot} 
                style={{ background: t.color, boxShadow: `0 0 10px ${t.color}40` }} 
              />
              <span className={styles.themeLabel}>{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
