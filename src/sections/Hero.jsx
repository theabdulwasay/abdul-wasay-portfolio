import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    
    // Resolve dynamic accent color based on active CSS variables
    const getAccentColor = () => {
      const style = getComputedStyle(document.documentElement);
      const accent = style.getPropertyValue('--accent').trim();
      return accent || '#00ffa3';
    };

    let accentColor = getAccentColor();

    // Listen to theme changes to dynamically sync particle canvas color
    const handleThemeChange = () => {
      accentColor = getAccentColor();
    };
    window.addEventListener('themechange', handleThemeChange);

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const density = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.8 + 0.5,
          baseDx: (Math.random() - 0.5) * 0.4,
          baseDy: (Math.random() - 0.5) * 0.4,
          dx: 0,
          dy: 0,
          o: Math.random() * 0.55 + 0.15,
        });
      }
      // Initialize dx/dy to baseline velocities
      particles.forEach(p => {
        p.dx = p.baseDx;
        p.dy = p.baseDy;
      });
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw particle constellation mesh lines
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i];

        // Particle physics calculation (movement & boundary collision)
        pi.x += pi.dx;
        pi.y += pi.dy;

        if (pi.x < 0 || pi.x > canvas.width) pi.baseDx *= -1;
        if (pi.y < 0 || pi.y > canvas.height) pi.baseDy *= -1;

        // Apply mouse physics (repel when mouse is near)
        if (mx !== null && my !== null) {
          const dx = pi.x - mx;
          const dy = pi.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 130;

          if (dist < repelRadius) {
            const force = (repelRadius - dist) / repelRadius;
            const forceX = (dx / dist) * force * 1.5;
            const forceY = (dy / dist) * force * 1.5;
            
            // Interpolate toward repelled velocity
            pi.dx += (pi.baseDx + forceX - pi.dx) * 0.1;
            pi.dy += (pi.baseDy + forceY - pi.dy) * 0.1;
          } else {
            // Restore base velocity
            pi.dx += (pi.baseDx - pi.dx) * 0.05;
            pi.dy += (pi.baseDy - pi.dy) * 0.05;
          }
        } else {
          // Restore base velocity
          pi.dx += (pi.baseDx - pi.dx) * 0.05;
          pi.dy += (pi.baseDy - pi.dy) * 0.05;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(pi.x, pi.y, pi.r, 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.globalAlpha = pi.o;
        ctx.fill();

        // Connect nodes to neighboring nodes
        for (let j = i + 1; j < particles.length; j++) {
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxLinkDist = 110;

          if (dist < maxLinkDist) {
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.strokeStyle = accentColor;
            // Line opacity scales inverse to distance
            ctx.globalAlpha = (1 - dist / maxLinkDist) * 0.08 * (pi.o + pj.o);
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0; // reset transparency
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('themechange', handleThemeChange);
      if (canvas) {
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, []);

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.glow} />
      
      <motion.div 
        className={`container ${styles.content}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className={styles.greeting} variants={itemVariants}>
          <span className={styles.greetingLine} />
          Hello, I'm
        </motion.p>
        
        <motion.h1 className={styles.name} variants={itemVariants}>
          {personal.name}
        </motion.h1>
        
        <motion.h2 className={styles.title} variants={itemVariants}>
          {personal.title}
        </motion.h2>
        
        <motion.p className={styles.tagline} variants={itemVariants}>
          {personal.tagline}
        </motion.p>
        
        <motion.div className={styles.actions} variants={itemVariants}>
          <a href="#projects" className={styles.btnPrimary}>View My Work</a>
          <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
        </motion.div>
        
        <motion.div className={styles.badges} variants={itemVariants}>
          {['Python', 'Machine Learning', 'React', 'Django', 'CEH', 'Power BI', 'Agentic AI', 'FastAPI'].map((b) => (
            <span key={b} className={styles.badge}>{b}</span>
          ))}
        </motion.div>
      </motion.div>

      <div className={styles.scroll}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
