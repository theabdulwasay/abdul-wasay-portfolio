import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    const dotPos = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      setIsHidden(false);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeaveWindow = () => setIsHidden(true);
    const onMouseEnterWindow = () => setIsHidden(false);

    // Dynamic hover states using event delegation (highly efficient)
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.glow-card') ||
        target.closest('[role="button"]') ||
        target.classList.contains('interactive') ||
        target.style.cursor === 'pointer';

      if (isInteractive) {
        setIsHovered(true);
      }
    };

    const onMouseOut = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.glow-card') ||
        target.closest('[role="button"]') ||
        target.classList.contains('interactive') ||
        target.style.cursor === 'pointer';

      if (isInteractive) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeaveWindow);
    document.addEventListener('mouseenter', onMouseEnterWindow);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    // Smooth animation using lerping (Linear Interpolation)
    let animFrameId;
    const render = () => {
      // Lerp custom cursor coordinates for delay effect
      const lerpFactor = 0.15;
      cursorPos.x += (mousePos.x - cursorPos.x) * lerpFactor;
      cursorPos.y += (mousePos.y - cursorPos.y) * lerpFactor;

      // Inner dot tracks exactly or almost exactly
      dotPos.x += (mousePos.x - dotPos.x) * 0.4;
      dotPos.y += (mousePos.y - dotPos.y) * 0.4;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.x}px`;
        cursorRef.current.style.top = `${cursorPos.y}px`;
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${dotPos.x}px`;
        dotRef.current.style.top = `${dotPos.y}px`;
      }

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
      document.removeEventListener('mouseenter', onMouseEnterWindow);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  if (window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        style={{ opacity: isHidden ? 0 : 1 }}
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{ opacity: isHidden ? 0 : 1 }}
      />
    </>
  );
}
